import { $ } from "bun";

const installDependencies = async () => {
    console.log("Installing dependencies...");
    await $`bun install`;
    console.log("Dependencies installed.");
};

await installDependencies();

console.log("\nSetup complete. Run `bun run dev` to start the app.");
