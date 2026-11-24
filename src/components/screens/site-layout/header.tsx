import { cn } from "@/lib/utils";

import { FlagIcon } from "@/components/icons/flag-icon";
import { HistoryIcon } from "@/components/icons/history-icon";
import { KeyboardIcon } from "@/components/icons/keyboard-icon";
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
                            <svg
                                viewBox="0 0 32 32"
                                className="size-8"
                                role="img"
                                aria-label="strokr"
                            >
                                <rect width="32" height="32" rx="9" fill="var(--primary)" />
                                <rect
                                    x="3"
                                    y="3"
                                    width="26"
                                    height="23"
                                    rx="7"
                                    fill="#fff"
                                    fill-opacity="0.18"
                                />
                                <g stroke="var(--ink-950)" stroke-linecap="round">
                                    <path d="M7.5 11.5h7" stroke-width="2.4" />
                                    <path d="M9.5 16h5" stroke-width="2.4" stroke-opacity="0.75" />
                                    <path
                                        d="M11.5 20.5h3"
                                        stroke-width="2.4"
                                        stroke-opacity="0.5"
                                    />
                                </g>
                                <rect
                                    x="18.5"
                                    y="8.5"
                                    width="3"
                                    height="15"
                                    rx="1.5"
                                    fill="var(--ink-950)"
                                />
                            </svg>
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
