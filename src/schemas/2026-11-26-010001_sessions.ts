import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { currentTimestampMs } from "@/lib/utils";
import { users } from "./2026-11-26-010000_users";

export const sessions = sqliteTable(
    "sessions",
    {
        id: text().primaryKey(),
        expires_at: integer({ mode: "timestamp_ms" }).notNull(),
        token: text().notNull().unique(),
        created_at: integer({ mode: "timestamp_ms" }).default(currentTimestampMs).notNull(),
        updated_at: integer({ mode: "timestamp_ms" })
            .$onUpdate(() => new Date())
            .notNull(),
        ip_address: text(),
        user_agent: text(),
        user_id: text()
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
    },
    (table) => [index("sessions_user_id_idx").on(table.user_id)],
);
