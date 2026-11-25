import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { currentTimestampMs } from "@/lib/utils";

export const users = sqliteTable("users", {
    id: text().primaryKey(),
    name: text().notNull(),
    email: text().notNull().unique(),
    email_verified: integer({ mode: "boolean" }).default(false).notNull(),
    image: text(),
    show_on_leaderboard: integer({ mode: "boolean" }).default(true).notNull(),
    created_at: integer({ mode: "timestamp_ms" }).default(currentTimestampMs).notNull(),
    updated_at: integer({ mode: "timestamp_ms" })
        .default(currentTimestampMs)
        .$onUpdate(() => new Date())
        .notNull(),
});
