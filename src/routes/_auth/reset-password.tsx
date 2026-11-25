import type { SubmitEvent } from "react";
import type { TResetPasswordErrors } from "@/server/auth/reset-password";

import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { cn, getText } from "@/lib/utils";
import { getStrength, isTooShort, minPasswordLength, strengthColors } from "@/lib/password";
import { resetPassword, validateResetPassword } from "@/server/auth/reset-password";

import { Button } from "@/components/ui/button";

import { PasswordField } from "@/components/elements/password-field";
import { LockIcon } from "@/components/icons/lock-icon";
import { AuthLayout } from "@/components/layouts/auth-layout";

export const Route = createFileRoute("/_auth/reset-password")({
    validateSearch: z.object({
        token: z.string().optional(),
        error: z.string().optional(),
    }),
    head: () => ({ meta: [{ title: "Reset password — strokr" }] }),
    component: ResetPassword,
});

const strengthLabels = ["Weak password", "Fair password", "Good password", "Strong password"];

function ResetPassword() {
    const { token, error: linkError } = Route.useSearch();
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<TResetPasswordErrors>(
        linkError || !token
            ? { form: "This reset link is invalid or has expired. Ask for a new one." }
            : {},
    );
    const [pending, setPending] = useState(false);

    const strength = getStrength(password);
    const tooShort = isTooShort(password);

    const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!token) return;

        const form = new FormData(event.currentTarget);
        const input = {
            token,
            password: getText(form, "password"),
            confirm: getText(form, "confirm"),
        };

        const clientErrors = validateResetPassword(input);
        setErrors(clientErrors);
        if (clientErrors.password || clientErrors.confirm) return;

        setPending(true);
        try {
            const result = await resetPassword({ data: input });
            if (result.ok) {
                await navigate({ to: "/login" });
                return;
            }
            setErrors(result.errors);
        } catch {
            setErrors({ form: "Something went wrong. Try again." });
        } finally {
            setPending(false);
        }
    };

    return (
        <AuthLayout
            icon={<LockIcon className="size-6 text-primary" stroke="currentColor" />}
            heading="Choose a new password"
            subheading="Pick something you haven't used here before."
        >
            <form
                method="post"
                noValidate
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 rounded-2xl border border-ink-900 bg-ink-900/40 p-6 shadow-sm"
            >
                <div className="flex flex-col gap-2">
                    <PasswordField
                        label="New password"
                        autoComplete="new-password"
                        placeholder={`At least ${minPasswordLength} characters`}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        error={
                            errors.password ??
                            (tooShort
                                ? `Password must be at least ${minPasswordLength} characters.`
                                : undefined)
                        }
                    />
                    <div className="flex gap-1">
                        {strengthColors.map((_, index) => (
                            <span
                                key={index}
                                className={cn(
                                    "h-1 flex-1 rounded-full",
                                    index < strength ? strengthColors[strength - 1] : "bg-ink-800",
                                )}
                            />
                        ))}
                    </div>
                    {strength > 0 && (
                        <p className="text-xs text-ink-500">{strengthLabels[strength - 1]}</p>
                    )}
                </div>
                <PasswordField
                    label="Confirm password"
                    name="confirm"
                    autoComplete="new-password"
                    placeholder="Type it again"
                    error={errors.confirm}
                />
                {errors.form && (
                    <p role="alert" className="text-center text-xs text-rose-400">
                        {errors.form}{" "}
                        <a href="/forgot-password" className="text-primary hover:underline">
                            Get a new link
                        </a>
                    </p>
                )}
                <Button
                    type="submit"
                    disabled={pending || !token}
                    className="h-10 rounded-lg text-sm font-medium tracking-normal text-ink-950 normal-case hover:bg-primary hover:opacity-90"
                >
                    {pending ? "Updating…" : "Update password"}
                </Button>
            </form>
            <p className="mt-6 text-center text-sm text-ink-500">
                <a href="/login" className="text-primary hover:underline">
                    ← Back to sign in
                </a>
            </p>
        </AuthLayout>
    );
}
