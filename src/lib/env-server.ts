import "dotenv/config";

export const envServer = {
    DB_FILE_NAME: process.env.DB_FILE_NAME!,
    AUTH_SECRET: process.env.AUTH_SECRET!,
    BASE_URL: process.env.VITE_BASE_URL!,
    SMTP_HOST: process.env.SMTP_HOST ?? "smtp.gmail.com",
    SMTP_PORT: Number(process.env.SMTP_PORT ?? 465),
    SMTP_USER: process.env.SMTP_USER!,
    SMTP_PASS: process.env.SMTP_PASS!,
    MAIL_FROM: process.env.MAIL_FROM ?? `strokr <${process.env.SMTP_USER}>`,
} as const;
