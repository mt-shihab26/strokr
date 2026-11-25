import type { SubmitEvent } from "react";

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { getText } from "@/lib/utils";
import { forgotPassword, validateForgotPassword } from "@/server/auth/forgot-password";

import { Button } from "@/components/ui/button";

import { EmailField } from "@/components/elements/email-field";
import { CheckIcon } from "@/components/icons/check-icon";
import { KeyIcon } from "@/components/icons/key-icon";
import { AuthLayout } from "@/components/layouts/auth-layout";

export const Route = createFileRoute("/_auth/forgot-password")({
    head: () => ({ meta: [{ title: "Forgot password — strokr" }] }),
    component: ForgotPassword,
});

function ForgotPassword() {
    const [error, setError] = useState<string>();
    const [formError, setFormError] = useState<string>();
    const [pending, setPending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const input = { email: getText(new FormData(event.currentTarget), "email") };

        const clientError = validateForgotPassword(input);
        setError(clientError);
        setFormError(undefined);
        if (clientError) return;

        setPending(true);
        try {
            await forgotPassword({ data: input });
            setSent(true);
        } catch {
            setFormError("Something went wrong. Try again.");
        } finally {
            setPending(false);
        }
    };

    return (
        <AuthLayout
            icon={<KeyIcon className="size-6 text-primary" stroke="currentColor" />}
            heading="Forgot your password?"
            subheading="Enter your email and we'll send you a link to reset it."
        >
            <form
                method="post"
                noValidate
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 rounded-2xl border border-ink-900 bg-ink-900/40 p-6 shadow-sm"
            >
                <EmailField error={error} />
                {formError && (
                    <p role="alert" className="text-center text-xs text-rose-400">
                        {formError}
                    </p>
                )}
                <Button
                    type="submit"
                    disabled={pending}
                    className="h-10 rounded-lg text-sm font-medium tracking-normal text-ink-950 normal-case hover:bg-primary hover:opacity-90"
                >
                    {pending ? "Sending…" : "Send reset link"}
                </Button>
            </form>
            {sent && (
                <div
                    role="status"
                    className="mt-4 flex items-start gap-3 rounded-xl border border-success/30 bg-success/10 p-4 text-sm text-ink-300"
                >
                    <CheckIcon
                        className="mt-0.5 size-4 shrink-0 text-success"
                        stroke="currentColor"
                    />
                    <p>
                        If an account exists for that email, a reset link is on its way. It expires
                        in 30 minutes.
                    </p>
                </div>
            )}
            <p className="mt-6 text-center text-sm text-ink-500">
                <a href="/login" className="text-primary hover:underline">
                    ← Back to sign in
                </a>
            </p>
        </AuthLayout>
    );
}
