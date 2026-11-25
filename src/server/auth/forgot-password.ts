import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { z } from "zod";
import { authServer } from "@/lib/auth-server";

export const forgotPasswordSchema = z.object({
    email: z
        .string()
        .trim()
        .toLowerCase() //
        .pipe(z.email("Enter a valid email address.")),
});

export type TForgotPasswordInput = z.input<typeof forgotPasswordSchema>;

export const validateForgotPassword = (input: TForgotPasswordInput) => {
    const result = forgotPasswordSchema.safeParse(input);
    if (result.success) return undefined;
    return z.flattenError(result.error).fieldErrors.email?.[0];
};

export const forgotPassword = createServerFn({ method: "POST" })
    .validator(forgotPasswordSchema)
    .handler(async ({ data }) => {
        await authServer.api.requestPasswordReset({
            body: { email: data.email, redirectTo: "/reset-password" },
            headers: getRequestHeaders(),
        });
    });
