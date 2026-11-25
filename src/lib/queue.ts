import { and, eq, lte, sql } from "drizzle-orm";
import { db } from "./db";
import { sendEmail, type TEmail } from "./mailer";
import { jobs } from "@/schemas";

type TJobs = {
    email: TEmail;
};

const handlers: { [K in keyof TJobs]: (payload: TJobs[K]) => Promise<void> } = {
    email: sendEmail,
};

const maxAttempts = 5;
const pollIntervalMs = 2000;
const stuckAfterMs = 5 * 60 * 1000;

const retryDelayMs = (attempts: number) => 30_000 * 4 ** (attempts - 1);

export const enqueue = async <K extends keyof TJobs>(type: K, payload: TJobs[K]) => {
    await db.insert(jobs).values({ type, payload });
};

const claimNext = async () => {
    const [job] = await db
        .update(jobs)
        .set({ status: "running", attempts: sql`${jobs.attempts} + 1` })
        .where(
            eq(
                jobs.id,
                sql`(select ${jobs.id} from ${jobs} where ${jobs.status} = 'pending' and ${jobs.run_at} <= ${Date.now()} order by ${jobs.run_at} limit 1)`,
            ),
        )
        .returning();
    return job;
};

const runNext = async () => {
    const job = await claimNext();
    if (!job) return false;

    try {
        const handler = handlers[job.type as keyof TJobs];
        if (!handler) throw new Error(`No handler for job type "${job.type}"`);
        await handler(job.payload as TJobs[keyof TJobs]);
        await db.update(jobs).set({ status: "done", last_error: null }).where(eq(jobs.id, job.id));
    } catch (error) {
        const failed = job.attempts >= maxAttempts;
        await db
            .update(jobs)
            .set({
                status: failed ? "failed" : "pending",
                run_at: new Date(Date.now() + retryDelayMs(job.attempts)),
                last_error: error instanceof Error ? error.message : String(error),
            })
            .where(eq(jobs.id, job.id));
        console.error(`[queue] job ${job.id} (${job.type}) attempt ${job.attempts} failed`, error);
    }

    return true;
};

const recoverStuck = async () => {
    await db
        .update(jobs)
        .set({ status: "pending" })
        .where(
            and(
                eq(jobs.status, "running"),
                lte(jobs.updated_at, new Date(Date.now() - stuckAfterMs)),
            ),
        );
};

const globalWorker = globalThis as typeof globalThis & { __queueWorker?: boolean };

export const startWorker = () => {
    if (globalWorker.__queueWorker) return;
    globalWorker.__queueWorker = true;

    let busy = false;
    const tick = async () => {
        if (busy) return;
        busy = true;
        try {
            while (await runNext()) {}
        } catch (error) {
            console.error("[queue] worker error", error);
        } finally {
            busy = false;
        }
    };

    void recoverStuck().then(tick);
    setInterval(() => void tick(), pollIntervalMs).unref();
};
