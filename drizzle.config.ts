import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { defineConfig } from "drizzle-kit";
import { env } from "./src/lib/env";

mkdirSync(dirname(env.DB_FILE_NAME), { recursive: true });

export default defineConfig({
    dialect: "sqlite",
    schema: "./src/db/schema.ts",
    out: "./drizzle",
    dbCredentials: {
        url: env.DB_FILE_NAME,
    },
});
