import { $ } from "bun";

const ENV_FILE = ".env";
const ENV_EXAMPLE_FILE = ".env.example";

const installDependencies = async () => {
    console.log("Installing dependencies...");
    await $`bun install`;
    console.log("Dependencies installed.");
};

const createEnvFile = async () => {
    const env = Bun.file(ENV_FILE);

    if (await env.exists()) {
        console.log(`${ENV_FILE} already exists, skipping.`);
        return;
    }

    const example = Bun.file(ENV_EXAMPLE_FILE);

    if (!(await example.exists())) {
        throw new Error(`${ENV_EXAMPLE_FILE} not found.`);
    }

    await Bun.write(ENV_FILE, await example.text());
    console.log(`Created ${ENV_FILE} from ${ENV_EXAMPLE_FILE}.`);
};

const generateAuthSecret = async () => {
    const env = Bun.file(ENV_FILE);
    const content = await env.text();
    const line = /^BETTER_AUTH_SECRET=(.*)$/m;
    const match = content.match(line);
    const value = match?.[1]?.replace(/#.*$/, "").trim();

    if (match && value) {
        console.log("BETTER_AUTH_SECRET already set, skipping.");
        return;
    }

    const secret = Buffer.from(crypto.getRandomValues(new Uint8Array(32))).toString("hex");
    const entry = `BETTER_AUTH_SECRET=${secret}`;
    const updated = match ? content.replace(line, entry) : `${content.trimEnd()}\n${entry}\n`;

    await Bun.write(env, updated);
    console.log("Generated BETTER_AUTH_SECRET.");
};

await installDependencies();
await createEnvFile();
await generateAuthSecret();

console.log("\nSetup complete. Run `bun run dev` to start the app.");
