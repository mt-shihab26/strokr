import { sql } from "drizzle-orm";

export { cn } from "cn";

export const currentTimestampMs = sql`(cast(unixepoch('subsecond') * 1000 as integer))`;

export const getText = (form: FormData, name: string) => {
    const value = form.get(name);
    return typeof value === "string" ? value : "";
};

export const getInitials = (name: string) => {
    const words = name
        .trim()
        .split(/[\s_-]+/)
        .filter(Boolean);
    const initials = words.length > 1 ? words[0][0] + words[1][0] : (words[0] ?? "").slice(0, 2);
    return initials.toUpperCase();
};
