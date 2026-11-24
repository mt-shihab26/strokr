import { useLocation } from "@tanstack/react-router";
import { focusTip } from "./tip";
import { cn } from "@/lib/utils";

import { FlagIcon } from "@/components/icons/flag-icon";
import { HistoryIcon } from "@/components/icons/history-icon";
import { KeyboardIcon } from "@/components/icons/keyboard-icon";
import { SettingsIcon } from "@/components/icons/settings-icon";
import { TargetIcon } from "@/components/icons/target-icon";
import { TextIcon } from "@/components/icons/text-icon";
import { TrophyIcon } from "@/components/icons/trophy-icon";

import { Tip } from "./tip";

const links = [
    { href: "/leaderboard", label: "Leaderboard", icon: TrophyIcon },
    { href: "/", label: "Typing test", icon: KeyboardIcon },
    { href: "/practice", label: "Practice", icon: TargetIcon },
    { href: "/custom", label: "Custom text", icon: TextIcon },
    { href: "/race", label: "Race", icon: FlagIcon },
    { href: "/history", label: "History", icon: HistoryIcon },
    { href: "/settings", label: "Settings", icon: SettingsIcon },
];

export const Links = () => {
    const { pathname } = useLocation();

    return (
        <nav className="flex items-center gap-0.5 rounded-xl bg-ink-900/60 p-1" aria-label="Main">
            {links.map((link) => {
                const active = link.href === pathname;
                return (
                    <a
                        key={link.href}
                        href={link.href}
                        aria-label={link.label}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                            "group/tip relative grid size-9 place-items-center rounded-lg",
                            active
                                ? "bg-ink-800 text-primary shadow-sm"
                                : "text-ink-500 hover:bg-ink-800/60 hover:text-ink-100",
                        )}
                    >
                        <link.icon className="size-4.5" stroke="currentColor" />
                        {active && (
                            <span className="absolute -bottom-0.5 h-0.5 w-4 rounded-full bg-primary" />
                        )}
                        <Tip className={focusTip}>{link.label}</Tip>
                    </a>
                );
            })}
        </nav>
    );
};
