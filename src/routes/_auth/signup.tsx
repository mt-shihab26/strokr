import type { SubmitEvent } from "react";
import type { TSignupErrors, TSignupInput } from "@/server/auth/signup";

import { createFileRoute, useNavigate, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { cn, getText } from "@/lib/utils";
import { signup, validateSignup } from "@/server/auth/signup";
import { getStrength, isTooShort, minPasswordLength, strengthColors } from "@/lib/password";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { EmailField } from "@/components/elements/email-field";
import { Field } from "@/components/elements/field";
import { GitHubButton } from "@/components/screens/auth/shared/github-button";
import { PasswordField } from "@/components/elements/password-field";
import { AuthLayout } from "@/components/layouts/auth-layout";

export const Route = createFileRoute("/_auth/signup")({
    head: () => ({ meta: [{ title: "Sign up — strokr" }] }),
    component: Signup,
});

function Signup() {
    const router = useRouter();
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<TSignupErrors>({});
    const [pending, setPending] = useState(false);

    const strength = getStrength(password);
    const tooShort = isTooShort(password);

    const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = new FormData(event.currentTarget);

        const input: TSignupInput = {
            username: getText(form, "username").trim(),
            email: getText(form, "email").trim(),
            password: getText(form, "password"),
            showOnLeaderboard: form.get("showOnLeaderboard") !== null,
        };

        const clientErrors = validateSignup(input);
        setErrors(clientErrors);
        if (Object.keys(clientErrors).length > 0) return;

        setPending(true);
        try {
            const result = await signup({ data: input });
            if (result.ok) {
                await router.invalidate();
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
            heading="Create an account"
            subheading="Keep your history across devices. Tests you've already taken come with you."
        >
            <form
                method="post"
                noValidate
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 rounded-2xl border border-ink-900 bg-ink-900/40 p-6 shadow-sm"
            >
                <GitHubButton />
                <Field
                    label="Username"
                    name="username"
                    autoComplete="username"
                    placeholder="fastfingers"
                    error={errors.username}
                />
                <EmailField error={errors.email} />
                <div className="flex flex-col gap-2">
                    <PasswordField
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
                </div>
                <Label className="items-start font-normal tracking-normal text-ink-500 normal-case">
                    <Checkbox
                        name="showOnLeaderboard"
                        defaultChecked
                        className="mt-0.5 size-3.5 rounded-[3px] border-ink-700 [&_svg]:size-3"
                    />
                    Show me on the public leaderboard
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
                    {pending ? "Creating account…" : "Create account"}
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
