import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
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
    .handler(async (): Promise<TSignupResult> => {
        return { ok: false, errors: { form: "Sign up isn't available yet." } };
    });
