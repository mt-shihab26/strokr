import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";

import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { AuthLayout } from "@/components/layouts/auth-layout";

export const Route = createFileRoute("/_auth/verify-email")({
    head: () => ({ meta: [{ title: "Verify email — strokr" }] }),
    component: VerifyEmail,
});

const slotClassName =
    "size-12 rounded-lg border-ink-800 bg-ink-950 text-xl text-ink-100 first:rounded-lg last:rounded-lg data-[active=true]:border-primary data-[active=true]:ring-2 data-[active=true]:ring-primary/20";

function VerifyEmail() {
    const { user } = Route.useRouteContext();

    return (
        <AuthLayout
            icon="✉️"
            heading="Check your inbox"
            subheading={
                <>
                    We sent a 6-digit code to{" "}
                    <span className="text-ink-300">{user?.email ?? "your email"}</span>
                </>
            }
        >
            <form className="flex flex-col gap-5 rounded-2xl border border-ink-900 bg-ink-900/40 p-6 shadow-sm">
                <InputOTP
                    name="code"
                    maxLength={6}
                    autoFocus
                    containerClassName="justify-center gap-2 font-mono"
                >
                    <InputOTPGroup className="gap-2">
                        {[0, 1, 2].map((index) => (
                            <InputOTPSlot key={index} index={index} className={slotClassName} />
                        ))}
                    </InputOTPGroup>
                    <InputOTPSeparator className="text-ink-700" />
                    <InputOTPGroup className="gap-2">
                        {[3, 4, 5].map((index) => (
                            <InputOTPSlot key={index} index={index} className={slotClassName} />
                        ))}
                    </InputOTPGroup>
                </InputOTP>
                <Button
                    type="submit"
                    className="h-10 rounded-lg text-sm font-medium tracking-normal text-ink-950 normal-case hover:bg-primary hover:opacity-90"
                >
                    Verify
                </Button>
                <p className="text-center text-xs text-ink-500">
                    Didn't get it?{" "}
                    <button
                        type="button"
                        className="cursor-pointer text-ink-300 hover:text-primary"
                    >
                        Resend
                    </button>{" "}
                    <span className="text-ink-700">in 0:42</span>
                </p>
            </form>
            <p className="mt-6 text-center text-sm text-ink-500">
                Wrong email?{" "}
                <a href="/signup" className="text-primary hover:underline">
                    Change it
                </a>
            </p>
        </AuthLayout>
    );
}
