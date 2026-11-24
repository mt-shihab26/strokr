import { focusTip } from "./tip";
import { themeNames } from "@/lib/themes";
import { cn } from "@/lib/utils";

import { SearchIcon } from "@/components/icons/search-icon";

import { Tip } from "./tip";
import { Kbd } from "./kbd";
import { Keys } from "./keys";

type TCommandItem = { label: string; keys: string[]; theme?: string };

const commandGroups: { title: string; items: TCommandItem[] }[] = [
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

export const Commands = () => {
    return (
        <>
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
        </>
    );
};
