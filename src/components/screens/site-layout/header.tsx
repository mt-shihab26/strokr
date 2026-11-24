import { cn } from "@/lib/utils";

import { FlagIcon } from "@/components/icons/flag-icon";
import { HistoryIcon } from "@/components/icons/history-icon";
import { KeyboardIcon } from "@/components/icons/keyboard-icon";
import { LogoIcon } from "@/components/icons/logo-icon";
import { LogoWideIcon } from "@/components/icons/logo-wide-icon";
import { SettingsIcon } from "@/components/icons/settings-icon";
import { TargetIcon } from "@/components/icons/target-icon";
import { TextIcon } from "@/components/icons/text-icon";
import { TrophyIcon } from "@/components/icons/trophy-icon";

const links = [
    { href: "/leaderboard", label: "Leaderboard", page: "leaderboard", icon: TrophyIcon },
    { href: "/", label: "Typing test", page: "index", icon: KeyboardIcon },
    { href: "/practice", label: "Practice", page: "practice", icon: TargetIcon },
    { href: "/custom", label: "Custom text", page: "custom", icon: TextIcon },
    { href: "/race", label: "Race", page: "race", icon: FlagIcon },
    { href: "/history", label: "History", page: "history", icon: HistoryIcon },
    { href: "/settings", label: "Settings", page: "settings", icon: SettingsIcon },
];

export const Header = () => {
    return (
        <>
            <a
                href="#main"
                className="fixed top-3 left-3 z-60 -translate-y-20 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-ink-950 shadow-lg focus:translate-y-0"
            >
                Skip to content
            </a>
            <header className="sticky top-0 z-30 -mx-6 mb-4 px-6 py-4 backdrop-blur-md">
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-ink-900 bg-ink-950/70 px-3 py-2 shadow-sm shadow-black/5">
                    <a
                        href="/"
                        aria-label="strokr home"
                        className="group flex items-center rounded-lg px-1.5 py-1"
                    >
                        <span className="sm:hidden">
                            <LogoIcon className="size-8" role="img" aria-label="strokr" />
                        </span>
                        <span className="hidden sm:block">
                            <LogoWideIcon />
                        </span>
                    </a>
                </div>
            </header>
        </>
    );
};
