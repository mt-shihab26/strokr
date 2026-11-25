import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { currentTimestampMs } from "@/lib/utils";

export const jobs = sqliteTable(
    "jobs",
    {
        id: integer().primaryKey({ autoIncrement: true }),
        type: text().notNull(),
        payload: text({ mode: "json" }).notNull(),
        status: text({ enum: ["pending", "running", "done", "failed"] })
            .default("pending")
            .notNull(),
        attempts: integer().default(0).notNull(),
        run_at: integer({ mode: "timestamp_ms" }).default(currentTimestampMs).notNull(),
        last_error: text(),
        created_at: integer({ mode: "timestamp_ms" }).default(currentTimestampMs).notNull(),
        updated_at: integer({ mode: "timestamp_ms" })
            .default(currentTimestampMs)
            .$onUpdate(() => new Date())
            .notNull(),
    },
    (table) => [index("jobs_status_run_at_idx").on(table.status, table.run_at)],
);
