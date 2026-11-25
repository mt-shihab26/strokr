import dotenv from "dotenv";
import { expand } from "dotenv-expand";

expand(dotenv.config({ quiet: true }));

export const envServer = {
    APP_NAME: process.env.APP_NAME ?? "strokr",
    DB_FILE_NAME: process.env.DB_FILE_NAME!,
    AUTH_SECRET: process.env.AUTH_SECRET!,
    APP_URL: process.env.APP_URL!,
    MAIL_HOST: process.env.MAIL_HOST || "smtp.gmail.com",
    MAIL_PORT: Number(process.env.MAIL_PORT ?? 587),
    MAIL_USERNAME: process.env.MAIL_USERNAME!,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD!,
    MAIL_FROM_ADDRESS: process.env.MAIL_FROM_ADDRESS ?? process.env.MAIL_USERNAME!,
    MAIL_FROM_NAME: process.env.MAIL_FROM_NAME ?? process.env.APP_NAME ?? "strokr",
} as const;
