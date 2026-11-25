import { useLocation } from "@tanstack/react-router";
import { Tip, focusTip } from "./tip";
import { cn } from "@/lib/utils";


export const Profile = () => {
    const { pathname } = useLocation();

    return (
        <a
            href="/profile"
            aria-label="Profile"
            className={cn(
                "group/tip relative grid size-9 place-items-center rounded-full bg-linear-to-br from-primary/80 to-ink-700 font-mono text-xs font-bold text-ink-950 ring-2 ring-offset-2 ring-offset-ink-950",
                pathname === "/profile" ? "ring-primary" : "ring-transparent hover:ring-ink-700",
            )}
        >
            SM
            <Tip className={focusTip}>Profile</Tip>
        </a>
    );
};
