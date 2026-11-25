import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { APIError } from "better-auth/api";
import { z } from "zod";
import { authServer } from "@/lib/auth-server";

export const loginSchema = z.object({
    email: z
        .string()
        .trim()
        .toLowerCase() //
        .pipe(z.email("Enter a valid email address.")),
    password: z
        .string() //
        .min(1, "Enter your password."),
    remember: z //
        .boolean(),
});

export type TLoginInput = z.input<typeof loginSchema>;
export type TLoginErrors = Partial<Record<keyof TLoginInput | "form", string>>;
export type TLoginResult = { ok: true } | { ok: false; errors: TLoginErrors };

export const validateLogin = (input: TLoginInput) => {
    const result = loginSchema.safeParse(input);
    if (result.success) return {};
    const { fieldErrors } = z.flattenError(result.error);
    const errors: TLoginErrors = {};
    for (const [field, messages] of Object.entries(fieldErrors)) {
        errors[field as keyof TLoginInput] = messages?.[0];
    }
    return errors;
};

export const login = createServerFn({ method: "POST" })
    .validator(loginSchema)
    .handler(async ({ data }): Promise<TLoginResult> => {
        try {
            await authServer.api.signInEmail({
                body: { email: data.email, password: data.password, rememberMe: data.remember },
                headers: getRequestHeaders(),
            });
            return { ok: true };
        } catch (error) {
            if (error instanceof APIError && error.status === "UNAUTHORIZED") {
                return { ok: false, errors: { form: "Invalid email or password." } };
            }
            throw error;
        }
    });
