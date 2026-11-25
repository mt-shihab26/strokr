import { useLocation, useRouteContext } from "@tanstack/react-router";
import { Tip, focusTip } from "./tip";
import { cn, getInitials } from "@/lib/utils";

export const Profile = () => {
    const { pathname } = useLocation();
    const { user } = useRouteContext({ from: "__root__" });

    if (!user) {
        return (
            <a
                href="/login"
                className="rounded-lg px-3 py-1.5 text-sm text-ink-300 hover:bg-ink-900 hover:text-ink-100"
            >
                Sign in
            </a>
        );
    }

    return (
        <a
            href="/profile"
            aria-label="Profile"
            className={cn(
                "group/tip relative grid size-9 place-items-center rounded-full bg-linear-to-br from-primary/80 to-ink-700 font-mono text-xs font-bold text-ink-950 ring-2 ring-offset-2 ring-offset-ink-950",
                pathname === "/profile" ? "ring-primary" : "ring-transparent hover:ring-ink-700",
            )}
        >
            {getInitials(user.name)}
            <Tip className={focusTip}>{user.name}</Tip>
        </a>
    );
};
