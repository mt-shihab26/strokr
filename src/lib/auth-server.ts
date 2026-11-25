import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { tanstackStartCookies } from "better-auth/tanstack-start";
import { db } from "./db";
import { envServer } from "./env-server";
import { minPasswordLength } from "./password";

import * as schema from "@/schemas";

export const authServer = betterAuth({
    secret: envServer.AUTH_SECRET,
    baseURL: envServer.BASE_URL,
    database: drizzleAdapter(db, {
        provider: "sqlite",
        schema,
        usePlural: true,
    }),
    emailAndPassword: {
        enabled: true,
        minPasswordLength,
    },
    user: {
        fields: {
            createdAt: "created_at",
            updatedAt: "updated_at",
            emailVerified: "email_verified",
        },
        additionalFields: {
            showOnLeaderboard: {
                type: "boolean",
                fieldName: "show_on_leaderboard",
                defaultValue: true,
                input: true,
            },
        },
    },
    session: {
        fields: {
            createdAt: "created_at",
            updatedAt: "updated_at",
            expiresAt: "expires_at",
            ipAddress: "ip_address",
            userAgent: "user_agent",
            userId: "user_id",
        },
    },
    account: {
        fields: {
            createdAt: "created_at",
            updatedAt: "updated_at",
            accountId: "account_id",
            providerId: "provider_id",
            userId: "user_id",
            accessToken: "access_token",
            refreshToken: "refresh_token",
            idToken: "id_token",
            accessTokenExpiresAt: "access_token_expires_at",
            refreshTokenExpiresAt: "refresh_token_expires_at",
        },
    },
    verification: {
        fields: {
            createdAt: "created_at",
            updatedAt: "updated_at",
            expiresAt: "expires_at",
        },
    },
    plugins: [
        tanstackStartCookies(), //
    ],
});
