import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { currentTimestampMs } from "@/lib/utils";

export const verifications = sqliteTable(
    "verifications",
    {
        id: text().primaryKey(),
        identifier: text().notNull(),
        value: text().notNull(),
        expires_at: integer({ mode: "timestamp_ms" }).notNull(),
        created_at: integer({ mode: "timestamp_ms" }).default(currentTimestampMs).notNull(),
        updated_at: integer({ mode: "timestamp_ms" })
            .default(currentTimestampMs)
            .$onUpdate(() => new Date())
            .notNull(),
    },
    (table) => [index("verifications_identifier_idx").on(table.identifier)],
);
