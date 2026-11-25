import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { EmailField } from "@/components/elements/email-field";
import { PasswordField } from "@/components/elements/password-field";
import { GitHubIcon } from "@/components/icons/github-icon";
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
                <Button
                    type="button"
                    variant="outline"
                    className="h-10 gap-2 rounded-lg border-ink-800 bg-ink-950 text-sm font-normal tracking-normal text-ink-200 normal-case hover:border-ink-700 hover:bg-ink-900 hover:text-ink-200 dark:hover:bg-ink-900"
                >
                    <GitHubIcon className="size-4" fill="currentColor" aria-hidden="true" />
                    Continue with GitHub
                </Button>
                <div className="flex items-center gap-3 text-xs text-ink-600">
                    <Separator className="flex-1 bg-ink-800 data-horizontal:w-auto" />
                    or
                    <Separator className="flex-1 bg-ink-800 data-horizontal:w-auto" />
                </div>
                <EmailField />
                <PasswordField
                    aside={
                        <a href="/forgot-password" className="text-xs text-ink-500 hover:text-primary">
                            Forgot?
                        </a>
                    }
                />
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
