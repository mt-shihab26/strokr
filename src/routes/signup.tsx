import { createFileRoute } from "@tanstack/react-router";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { getStrength, isTooShort, strengthColors } from "@/lib/password";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { EmailField } from "@/components/elements/email-field";
import { Field } from "@/components/elements/field";
import { GitHubButton } from "@/components/screens/auth/shared/github-button";
import { PasswordField } from "@/components/elements/password-field";
import { AuthLayout } from "@/components/layouts/auth-layout";

export const Route = createFileRoute("/signup")({
    head: () => ({ meta: [{ title: "Sign up — strokr" }] }),
    component: Signup,
});

function Signup() {
    const [password, setPassword] = useState("");

    const strength = getStrength(password);
    const tooShort = isTooShort(password);

    return (
        <AuthLayout
            heading="Create an account"
            subheading="Keep your history across devices. Tests you've already taken come with you."
        >
            <form className="flex flex-col gap-4 rounded-2xl border border-ink-900 bg-ink-900/40 p-6 shadow-sm">
                <GitHubButton />
                <Field
                    label="Username"
                    name="username"
                    autoComplete="username"
                    placeholder="fastfingers"
                />
                <EmailField />
                <div className="flex flex-col gap-2">
                    <PasswordField
                        autoComplete="new-password"
                        placeholder="At least 8 characters"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        error={tooShort ? "Password must be at least 8 characters." : undefined}
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
                </div>
                <Label className="items-start font-normal tracking-normal text-ink-500 normal-case">
                    <Checkbox
                        defaultChecked
                        className="mt-0.5 size-3.5 rounded-[3px] border-ink-700 [&_svg]:size-3"
                    />
                    Show me on the public leaderboard
                </Label>
                <Button
                    type="submit"
                    className="h-10 rounded-lg text-sm font-medium tracking-normal text-ink-950 normal-case hover:bg-primary hover:opacity-90"
                >
                    Create account
                </Button>
                <p className="text-center text-xs text-ink-600">
                    By signing up you agree to the{" "}
                    <a href="/terms" className="underline hover:text-ink-300">
                        terms
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="underline hover:text-ink-300">
                        privacy policy
                    </a>
                    .
                </p>
            </form>
            <p className="mt-6 text-center text-sm text-ink-500">
                Already have one?{" "}
                <a href="/login" className="text-primary hover:underline">
                    Sign in
                </a>
            </p>
        </AuthLayout>
    );
}
