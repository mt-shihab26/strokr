import type { SubmitEvent } from "react";
import type { TLoginErrors, TLoginInput } from "@/server/auth/login";

import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { getText } from "@/lib/utils";
import { login, validateLogin } from "@/server/auth/login";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { EmailField } from "@/components/elements/email-field";
import { ForgotPasswordLink } from "@/components/screens/auth/shared/forgot-password-link";
import { GitHubButton } from "@/components/screens/auth/shared/github-button";
import { PasswordField } from "@/components/elements/password-field";
import { AuthLayout } from "@/components/layouts/auth-layout";

export const Route = createFileRoute("/login")({
    head: () => ({ meta: [{ title: "Sign in — strokr" }] }),
    component: Login,
});

function Login() {
    const navigate = useNavigate();

    const [errors, setErrors] = useState<TLoginErrors>({});
    const [pending, setPending] = useState(false);

    const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const input: TLoginInput = {
            email: getText(form, "email"),
            password: getText(form, "password"),
            remember: form.get("remember") !== null,
        };

        const clientErrors = validateLogin(input);
        setErrors(clientErrors);
        if (Object.keys(clientErrors).length > 0) return;

        setPending(true);
        try {
            const result = await login({ data: input });
            if (result.ok) {
                await navigate({ to: "/" });
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
            heading="Welcome back"
            subheading="Sign in to sync your history and join the leaderboard."
        >
            <form
                method="post"
                noValidate
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 rounded-2xl border border-ink-900 bg-ink-900/40 p-6 shadow-sm"
            >
                <GitHubButton />
                <EmailField error={errors.email} />
                <PasswordField aside={<ForgotPasswordLink />} error={errors.password} />
                <Label className="font-normal tracking-normal text-ink-500 normal-case">
                    <Checkbox
                        name="remember"
                        defaultChecked
                        className="size-3.5 rounded-[3px] border-ink-700 [&_svg]:size-3"
                    />
                    Keep me signed in
                </Label>
                {errors.form && (
                    <p role="alert" className="text-center text-xs text-rose-400">
                        {errors.form}
                    </p>
                )}
                <Button
                    type="submit"
                    disabled={pending}
                    className="h-10 rounded-lg text-sm font-medium tracking-normal text-ink-950 normal-case hover:bg-primary hover:opacity-90"
                >
                    {pending ? "Signing in…" : "Sign in"}
                </Button>
            </form>
            <p className="mt-6 text-center text-sm text-ink-500">
                No account?{" "}
                <a href="/signup" className="text-primary hover:underline">
                    Sign up
                </a>
            </p>
        </AuthLayout>
    );
}
