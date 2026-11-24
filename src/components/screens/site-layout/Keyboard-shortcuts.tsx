import { Kbd } from "./kbd";
import { Keys } from "./keys";

const shortcutGroups: {
    title: string;
    items: { keys: string[]; action: string }[];
}[] = [
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

export const KeyboardShortcuts = () => {
    return (
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
    );
};
