import "dotenv/config";

export const envServer = {
    DB_FILE_NAME: process.env.DB_FILE_NAME!,
    AUTH_SECRET: process.env.AUTH_SECRET!,
    BASE_URL: process.env.VITE_BASE_URL!,
} as const;
