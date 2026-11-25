import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { drizzle } from "drizzle-orm/node-sqlite";
import { envServer } from "./env-server";

mkdirSync(dirname(envServer.DB_FILE_NAME), { recursive: true });

export const db = drizzle(envServer.DB_FILE_NAME);
