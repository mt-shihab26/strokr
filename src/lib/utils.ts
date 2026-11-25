import { sql } from "drizzle-orm";

export { cn } from "cn";

export const currentTimestampMs = sql`(cast(unixepoch('subsecond') * 1000 as integer))`;

export const getText = (form: FormData, name: string) => {
    const value = form.get(name);
    return typeof value === "string" ? value : "";
};
