import { FlagIcon } from "@/components/icons/flag-icon";
import { HistoryIcon } from "@/components/icons/history-icon";
import { KeyboardIcon } from "@/components/icons/keyboard-icon";
import { SettingsIcon } from "@/components/icons/settings-icon";
import { TargetIcon } from "@/components/icons/target-icon";
import { TextIcon } from "@/components/icons/text-icon";
import { TrophyIcon } from "@/components/icons/trophy-icon";

export const githubUrl = "https://github.com/mt-shihab26/strokr";
export const issuesUrl = `${githubUrl}/issues`;

export const headerLinks = [
    { href: "/leaderboard", label: "Leaderboard", icon: TrophyIcon },
    { href: "/", label: "Typing test", icon: KeyboardIcon },
    { href: "/practice", label: "Practice", icon: TargetIcon },
    { href: "/custom", label: "Custom text", icon: TextIcon },
    { href: "/race", label: "Race", icon: FlagIcon },
    { href: "/history", label: "History", icon: HistoryIcon },
    { href: "/settings", label: "Settings", icon: SettingsIcon },
];

export const footerLinks = [
    { href: "/login", label: "Sign in", guest: true },
    { href: "/signup", label: "Sign up", guest: true },
    { href: "/about", label: "About" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/sitemap", label: "Sitemap" },
];
