import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { defineConfig } from "drizzle-kit";
import { envServer } from "./src/lib/env-server";

mkdirSync(dirname(envServer.DB_FILE_NAME), { recursive: true });

export default defineConfig({
    dialect: "sqlite",
    schema: "./src/schemas/index.ts",
    out: "./drizzle",
    dbCredentials: {
        url: envServer.DB_FILE_NAME,
    },
});
