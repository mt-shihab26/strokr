import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { APIError } from "better-auth/api";
import { z } from "zod";
import { authServer } from "@/lib/auth-server";
import { minPasswordLength } from "@/lib/password";

export const resetPasswordSchema = z
    .object({
        token: z.string().min(1),
        password: z
            .string()
            .min(minPasswordLength, `Password must be at least ${minPasswordLength} characters.`),
        confirm: z.string(),
    })
    .refine((data) => data.password === data.confirm, {
        message: "Passwords don't match.",
        path: ["confirm"],
    });

export type TResetPasswordInput = z.input<typeof resetPasswordSchema>;
export type TResetPasswordErrors = Partial<Record<"password" | "confirm" | "form", string>>;
export type TResetPasswordResult = { ok: true } | { ok: false; errors: TResetPasswordErrors };

export const validateResetPassword = (input: TResetPasswordInput) => {
    const result = resetPasswordSchema.safeParse(input);
    if (result.success) return {};
    const { fieldErrors } = z.flattenError(result.error);
    return { password: fieldErrors.password?.[0], confirm: fieldErrors.confirm?.[0] };
};

export const resetPassword = createServerFn({ method: "POST" })
    .validator(resetPasswordSchema)
    .handler(async ({ data }): Promise<TResetPasswordResult> => {
        try {
            await authServer.api.resetPassword({
                body: { token: data.token, newPassword: data.password },
                headers: getRequestHeaders(),
            });
            return { ok: true };
        } catch (error) {
            if (error instanceof APIError && error.status === "BAD_REQUEST") {
                return {
                    ok: false,
                    errors: {
                        form: "This reset link is invalid or has expired. Ask for a new one.",
                    },
                };
            }
            throw error;
        }
    });
