import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { useLogout } from "@/hooks/use-logout";
import { resendVerification } from "@/server/auth/verify-email";

import { Button } from "@/components/ui/button";
import { AuthLayout } from "@/components/layouts/auth-layout";

export const Route = createFileRoute("/_auth/verify-email")({
    validateSearch: z.object({ error: z.string().optional() }),
    beforeLoad: ({ context }) => {
        if (!context.user || context.user.emailVerified) throw redirect({ to: "/" });
        return { user: context.user };
    },
    head: () => ({ meta: [{ title: "Verify email — strokr" }] }),
    component: VerifyEmail,
});

const resendCooldown = 60;

const formatSeconds = (seconds: number) =>
    `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

function VerifyEmail() {
    const { user } = Route.useRouteContext();
    const { error: linkError } = Route.useSearch();
    const navigate = useNavigate();
    const logout = useLogout();

    const [error, setError] = useState(
        linkError ? "That link is invalid or has expired. Send a new one." : undefined,
    );
    const [notice, setNotice] = useState<string>();
    const [cooldown, setCooldown] = useState(0);

    useEffect(() => {
        if (cooldown <= 0) return;
        const id = setTimeout(() => setCooldown((value) => value - 1), 1000);
        return () => clearTimeout(id);
    }, [cooldown]);

    const handleResend = async () => {
        setError(undefined);
        setNotice(undefined);
        setCooldown(resendCooldown);
        try {
            await resendVerification();
            setNotice("We sent you a new link.");
        } catch {
            setCooldown(0);
            setError("Couldn't send a new link. Try again.");
        }
    };

    const handleChangeEmail = async () => {
        await logout();
        await navigate({ to: "/signup" });
    };

    return (
        <AuthLayout
            icon="✉️"
            heading="Check your inbox"
            subheading={
                <>
                    We sent a verification link to{" "}
                    <span className="text-ink-300">{user.email}</span>
                </>
            }
        >
            <div className="flex flex-col gap-5 rounded-2xl border border-ink-900 bg-ink-900/40 p-6 text-center shadow-sm">
                <p className="text-sm text-ink-400">
                    Open the email and click the link to verify your account. It expires in 24
                    hours.
                </p>
                {error && (
                    <p role="alert" className="text-xs text-rose-400">
                        {error}
                    </p>
                )}
                {notice && (
                    <p role="status" className="text-xs text-emerald-400">
                        {notice}
                    </p>
                )}
                <Button
                    type="button"
                    onClick={handleResend}
                    disabled={cooldown > 0}
                    className="h-10 rounded-lg text-sm font-medium tracking-normal text-ink-950 normal-case hover:bg-primary hover:opacity-90"
                >
                    {cooldown > 0 ? `Resend in ${formatSeconds(cooldown)}` : "Resend link"}
                </Button>
            </div>
            <p className="mt-6 text-center text-sm text-ink-500">
                Wrong email?{" "}
                <button
                    type="button"
                    onClick={handleChangeEmail}
                    className="cursor-pointer text-primary hover:underline"
                >
                    Sign out and start over
                </button>
            </p>
        </AuthLayout>
    );
}
