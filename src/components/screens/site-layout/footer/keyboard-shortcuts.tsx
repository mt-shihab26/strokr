import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { useEffect, useRef, useState } from "react";

import { Kbd } from "@/components/ui/kbd";
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
    const [open, setOpen] = useState<boolean>(false);

    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            const typing = /^(INPUT|TEXTAREA|SELECT)$/.test((event.target as HTMLElement).tagName);
            if (event.key === "?" && !typing) {
                setOpen((value) => !value);
            }
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, []);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger
                aria-keyshortcuts="?"
                className="flex cursor-pointer items-center gap-1.5 hover:text-ink-300"
            >
                <Kbd>?</Kbd>
                Shortcuts
            </DialogTrigger>
            <DialogContent
                ref={popupRef}
                initialFocus={popupRef}
                showCloseButton={false}
                overlayClassName="bg-ink-950/80 backdrop-blur-sm data-open:animate-none! data-closed:animate-none!"
                className="block w-[calc(100%-2rem)] max-w-2xl gap-0 rounded-2xl border border-ink-800 bg-ink-900 p-6 text-ink-300 shadow-2xl ring-0 sm:max-w-2xl data-open:animate-none! data-closed:animate-none!"
            >
                <div className="mb-6 flex items-center justify-between">
                    <DialogTitle className="text-lg font-medium tracking-normal text-ink-100 normal-case">
                        Keyboard shortcuts
                    </DialogTitle>
                    <DialogClose className="flex cursor-pointer items-center gap-1.5 text-xs text-ink-500 hover:text-ink-200">
                        close <Kbd>esc</Kbd>
                    </DialogClose>
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
            </DialogContent>
        </Dialog>
    );
};
