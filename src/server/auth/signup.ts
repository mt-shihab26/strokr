import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { APIError } from "better-auth/api";
import { z } from "zod";
import { authServer } from "@/lib/auth-server";
import { minPasswordLength } from "@/lib/password";

export const signupSchema = z.object({
    username: z
        .string()
        .trim()
        .regex(/^[a-z0-9_-]{3,20}$/i, "Use 3–20 letters, numbers, - or _."),
    email: z
        .string()
        .trim()
        .toLowerCase() //
        .pipe(z.email("Enter a valid email address.")),
    password: z
        .string()
        .min(minPasswordLength, `Password must be at least ${minPasswordLength} characters.`),
    showOnLeaderboard: z //
        .boolean(),
});

export type TSignupInput = z.input<typeof signupSchema>;
export type TSignupErrors = Partial<Record<keyof TSignupInput | "form", string>>;
export type TSignupResult = { ok: true } | { ok: false; errors: TSignupErrors };

export const validateSignup = (input: TSignupInput) => {
    const result = signupSchema.safeParse(input);
    if (result.success) return {};
    const { fieldErrors } = z.flattenError(result.error);
    const errors: TSignupErrors = {};
    for (const [field, messages] of Object.entries(fieldErrors)) {
        errors[field as keyof TSignupInput] = messages?.[0];
    }
    return errors;
};

export const signup = createServerFn({ method: "POST" })
    .validator(signupSchema)
    .handler(async ({ data }): Promise<TSignupResult> => {
        try {
            await authServer.api.signUpEmail({
                body: {
                    name: data.username,
                    email: data.email,
                    password: data.password,
                    showOnLeaderboard: data.showOnLeaderboard,
                },
                headers: getRequestHeaders(),
            });
            return { ok: true };
        } catch (error) {
            if (error instanceof APIError && error.body?.code?.startsWith("USER_ALREADY_EXISTS")) {
                return {
                    ok: false,
                    errors: { email: "An account with this email already exists." },
                };
            }
            throw error;
        }
    });
