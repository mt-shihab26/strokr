import { createFileRoute } from "@tanstack/react-router";

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
    return (
        <AuthLayout
            heading="Welcome back"
            subheading="Sign in to sync your history and join the leaderboard."
        >
            <form className="flex flex-col gap-4 rounded-2xl border border-ink-900 bg-ink-900/40 p-6 shadow-sm">
                <GitHubButton />
                <EmailField />
                <PasswordField aside={<ForgotPasswordLink />} />
                <Label className="font-normal tracking-normal text-ink-500 normal-case">
                    <Checkbox
                        defaultChecked
                        className="size-3.5 rounded-[3px] border-ink-700 [&_svg]:size-3"
                    />
                    Keep me signed in
                </Label>
                <Button
                    type="submit"
                    className="h-10 rounded-lg text-sm font-medium tracking-normal text-ink-950 normal-case hover:bg-primary hover:opacity-90"
                >
                    Sign in
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
