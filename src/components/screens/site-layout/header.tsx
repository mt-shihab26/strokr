import type { ReactNode } from "react";

import { useLocation } from "@tanstack/react-router";
import { focusTip } from "./tip";
import { cn } from "@/lib/utils";

import { PaletteIcon } from "@/components/icons/palette-icon";
import { SearchIcon } from "@/components/icons/search-icon";

import { Tip } from "./tip";
import { Logo } from "./logo";
import { Links } from "./links";

const themeNames = ["system", "dark", "light", "nord", "sepia", "tokyo-night", "matrix"];

// Command menu (opens when the URL hash is #command).
type CommandItem = { label: string; keys: string[]; theme?: string };

const commandGroups: { title: string; items: CommandItem[] }[] = [
    {
        title: "Test",
        items: [
            { label: "Restart test", keys: ["tab", "enter"] },
            { label: "Time 15 / 30 / 60 / 120", keys: ["ctrl", "shift", "p"] },
            { label: "Toggle punctuation", keys: [] },
            { label: "Toggle numbers", keys: [] },
        ],
    },
    {
        title: "Go to",
        items: [
            { label: "Practice drills", keys: [] },
            { label: "Custom text", keys: [] },
            { label: "Leaderboard", keys: [] },
            { label: "History", keys: ["ctrl", "h"] },
            { label: "Settings", keys: ["ctrl", ","] },
        ],
    },
    { title: "Theme", items: themeNames.map((name) => ({ label: name, keys: [], theme: name })) },
];

// Keyboard shortcuts overlay (opens on "?" or #shortcuts-help).
const shortcutGroups: { title: string; items: { keys: string[]; action: string }[] }[] = [
    {
        title: "Test",
        items: [
            { keys: ["tab", "enter"], action: "Restart test" },
            { keys: ["esc"], action: "Command menu" },
            { keys: ["ctrl", "shift", "p"], action: "Change mode" },
            { keys: ["ctrl", "backspace"], action: "Delete word" },
        ],
    },
    {
        title: "Navigate",
        items: [
            { keys: ["ctrl", "k"], action: "Search" },
            { keys: ["g", "t"], action: "Typing test" },
            { keys: ["g", "p"], action: "Practice" },
            { keys: ["g", "h"], action: "History" },
            { keys: ["g", "l"], action: "Leaderboard" },
            { keys: ["ctrl", ","], action: "Settings" },
        ],
    },
    {
        title: "Results",
        items: [
            { keys: ["tab"], action: "Next test" },
            { keys: ["r"], action: "Repeat test" },
            { keys: ["s"], action: "Share result" },
        ],
    },
    {
        title: "General",
        items: [
            { keys: ["?"], action: "This list" },
            { keys: ["f"], action: "Focus mode" },
            { keys: ["t"], action: "Cycle theme" },
        ],
    },
];

const Kbd = ({ children }: { children: ReactNode }) => (
    <kbd className="rounded border border-ink-800 bg-ink-900 px-1.5 py-0.5 font-mono text-xs text-ink-400">
        {children}
    </kbd>
);

const Keys = ({ keys }: { keys: string[] }) => (
    <span className="flex gap-1">
        {keys.map((key) => (
            <Kbd key={key}>{key}</Kbd>
        ))}
    </span>
);

export const Header = () => {
    const { pathname } = useLocation();

    return (
        <>
            <a
                href="#main"
                className="fixed top-3 left-3 z-60 -translate-y-20 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-ink-950 shadow-lg focus:translate-y-0"
            >
                Skip to content
            </a>
            <header className="sticky top-0 z-30 -mx-6 mb-4 px-6 py-4 backdrop-blur-md">
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-ink-900 bg-ink-950/70 px-3 py-2 shadow-sm shadow-black/5">
                    <Logo />
                    <Links />

                    {/* Actions */}
                    <div className="flex items-center gap-1">
                        <a
                            href="#command"
                            aria-label="Search (ctrl + k)"
                            aria-keyshortcuts="Control+K"
                            className="group/tip relative grid size-9 place-items-center rounded-lg text-ink-500 hover:bg-ink-900 hover:text-ink-100"
                        >
                            <SearchIcon className="size-4.5" stroke="currentColor" />
                            <Tip className={focusTip}>
                                <span className="flex items-center gap-2">
                                    Search
                                    <span className="flex gap-0.5 font-mono text-[10px]">
                                        <kbd className="rounded border border-ink-700 bg-ink-800 px-1 text-ink-300">
                                            ctrl
                                        </kbd>
                                        <kbd className="rounded border border-ink-700 bg-ink-800 px-1 text-ink-300">
                                            k
                                        </kbd>
                                    </span>
                                </span>
                            </Tip>
                        </a>

                        {/* Theme picker. Buttons use data-set-theme, handled by the theme script in __root.tsx. */}
                        <details className="group relative">
                            <summary
                                aria-label="Theme"
                                className="group/tip relative grid size-9 cursor-pointer list-none place-items-center rounded-lg text-ink-500 group-open:bg-ink-900 group-open:text-primary hover:bg-ink-900 hover:text-ink-100"
                            >
                                <PaletteIcon
                                    className="size-4.5 [&_circle]:fill-current"
                                    stroke="currentColor"
                                />
                                <Tip className="group-open:hidden">Theme</Tip>
                            </summary>
                            <div className="absolute right-0 z-40 mt-2 w-44 rounded-xl border border-ink-800 bg-ink-900 p-1 shadow-xl">
                                {themeNames.map((name) => (
                                    <button
                                        key={name}
                                        type="button"
                                        data-set-theme={name}
                                        className="flex w-full items-center gap-2 rounded-lg border border-transparent px-2 py-1.5 text-left text-sm text-ink-300 hover:bg-ink-800"
                                    >
                                        <span
                                            data-theme={name === "system" ? "dark" : name}
                                            className="flex gap-0.5 rounded bg-ink-950 p-1"
                                        >
                                            <span className="size-2 rounded-full bg-primary" />
                                            <span className="size-2 rounded-full bg-ink-100" />
                                            <span className="size-2 rounded-full bg-ink-600" />
                                        </span>
                                        {name}
                                    </button>
                                ))}
                            </div>
                        </details>

                        <span className="mx-1 h-6 w-px bg-ink-800" />

                        <a
                            href="/profile"
                            aria-label="Profile"
                            className={cn(
                                "group/tip relative grid size-9 place-items-center rounded-full bg-linear-to-br from-primary/80 to-ink-700 font-mono text-xs font-bold text-ink-950 ring-2 ring-offset-2 ring-offset-ink-950",
                                pathname === "/profile"
                                    ? "ring-primary"
                                    : "ring-transparent hover:ring-ink-700",
                            )}
                        >
                            SM
                            <Tip className={focusTip}>Profile</Tip>
                        </a>
                    </div>
                </div>
            </header>

            {/* Command menu: opens when the URL hash is #command (ctrl + k, / or esc). */}
            <div
                id="command"
                className="fixed inset-0 z-50 hidden items-start justify-center bg-ink-950/80 p-4 pt-[15vh] backdrop-blur-sm target:flex"
            >
                <a href="#" className="absolute inset-0" aria-label="Close command menu" />
                <div className="relative w-full max-w-lg overflow-hidden rounded-xl border border-ink-800 bg-ink-900 shadow-2xl">
                    <div className="flex items-center gap-3 border-b border-ink-800 px-4">
                        <SearchIcon className="size-4 text-ink-500" stroke="currentColor" />
                        <input
                            className="h-12 flex-1 bg-transparent text-sm text-ink-100 outline-none placeholder:text-ink-600"
                            placeholder="Type a command…"
                        />
                        <Kbd>esc</Kbd>
                    </div>
                    <div className="max-h-80 overflow-y-auto p-2">
                        {commandGroups.map((group, g) => (
                            <div key={group.title}>
                                <p className="px-2 pt-2 pb-1 text-xs text-ink-500">{group.title}</p>
                                {group.items.map((item, i) => (
                                    <button
                                        key={item.label}
                                        type="button"
                                        data-set-theme={item.theme}
                                        className={cn(
                                            "flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm",
                                            g === 0 && i === 0
                                                ? "bg-ink-800 text-ink-100"
                                                : "text-ink-300 hover:bg-ink-800",
                                        )}
                                    >
                                        {item.label}
                                        <Keys keys={item.keys} />
                                    </button>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-4 border-t border-ink-800 px-4 py-2 text-xs text-ink-500">
                        <span className="flex items-center gap-1">
                            <Kbd>↑</Kbd>
                            <Kbd>↓</Kbd> move
                        </span>
                        <span className="flex items-center gap-1">
                            <Kbd>enter</Kbd> select
                        </span>
                    </div>
                </div>
            </div>

            {/* Keyboard shortcuts overlay: opens on "?" or #shortcuts-help. */}
            <div
                id="shortcuts-help"
                className="fixed inset-0 z-50 hidden items-center justify-center bg-ink-950/80 p-4 backdrop-blur-sm target:flex"
            >
                <a href="#" className="absolute inset-0" aria-label="Close shortcuts" />
                <div className="relative w-full max-w-2xl rounded-2xl border border-ink-800 bg-ink-900 p-6 shadow-2xl">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-lg font-medium text-ink-100">Keyboard shortcuts</h2>
                        <a
                            href="#"
                            className="flex items-center gap-1.5 text-xs text-ink-500 hover:text-ink-200"
                        >
                            close <Kbd>esc</Kbd>
                        </a>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                        {shortcutGroups.map((group) => (
                            <section key={group.title}>
                                <h3 className="mb-2 text-xs font-medium tracking-wider text-ink-500 uppercase">
                                    {group.title}
                                </h3>
                                <ul className="flex flex-col gap-1">
                                    {group.items.map((item) => (
                                        <li
                                            key={item.action}
                                            className="flex items-center justify-between rounded-lg px-2 py-1.5 text-sm hover:bg-ink-800/50"
                                        >
                                            <span className="text-ink-300">{item.action}</span>
                                            <Keys keys={item.keys} />
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
