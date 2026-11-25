import { useLocation, useRouteContext } from "@tanstack/react-router";

export const VerifyEmailBar = () => {
    const { pathname } = useLocation();
    const { user } = useRouteContext({ from: "__root__" });

    if (!user || user.emailVerified || pathname === "/verify-email") return null;

    return (
        <div
            role="status"
            className="-mx-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 border-b border-warning/30 bg-warning/10 px-6 py-2 text-sm text-ink-300"
        >
            <span>
                Verify <span className="font-medium text-ink-100">{user.email}</span> to save your
                results and join the leaderboard.
            </span>
            <a
                href="/verify-email"
                className="font-medium text-ink-100 underline decoration-warning underline-offset-2 hover:decoration-2"
            >
                Verify now
            </a>
        </div>
    );
};
