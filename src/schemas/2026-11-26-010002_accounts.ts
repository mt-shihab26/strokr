import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { currentTimestampMs } from "@/lib/utils";
import { users } from "./2026-11-26-010000_users";

export const accounts = sqliteTable(
    "accounts",
    {
        id: text().primaryKey(),
        account_id: text().notNull(),
        provider_id: text().notNull(),
        user_id: text()
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
        access_token: text(),
        refresh_token: text(),
        id_token: text(),
        access_token_expires_at: integer({ mode: "timestamp_ms" }),
        refresh_token_expires_at: integer({ mode: "timestamp_ms" }),
        scope: text(),
        password: text(),
        created_at: integer({ mode: "timestamp_ms" }).default(currentTimestampMs).notNull(),
        updated_at: integer({ mode: "timestamp_ms" })
            .$onUpdate(() => new Date())
            .notNull(),
    },
    (table) => [index("accounts_user_id_idx").on(table.user_id)],
);
