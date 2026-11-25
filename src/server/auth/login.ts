import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

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
    .handler(async (): Promise<TLoginResult> => {
        return { ok: false, errors: { form: "Sign in isn't available yet." } };
    });
