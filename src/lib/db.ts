import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { drizzle } from "drizzle-orm/node-sqlite";
import { env } from "./env";

mkdirSync(dirname(env.DB_FILE_NAME), { recursive: true });

export const db = drizzle(env.DB_FILE_NAME);
