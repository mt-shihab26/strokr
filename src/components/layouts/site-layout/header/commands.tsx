import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandShortcut,
} from "@/components/ui/command";

import { useEffect, useState } from "react";
import { useRouteContext } from "@tanstack/react-router";
import { useLogout } from "@/hooks/use-logout";
import { Tip, focusTip } from "./tip";
import { setTheme, themes } from "@/lib/themes";

import { SearchIcon } from "@/components/icons/search-icon";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Kbd } from "@/components/ui/kbd";
import { TipKeys } from "./tip-keys";

const commandGroups: {
    title: string;
    items: {
        label: string;
        keys: string[];
        theme?: string;
        href?: string;
        logout?: boolean;
    }[];
}[] = [
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
            { label: "Practice drills", keys: [], href: "/practice" },
            { label: "Custom text", keys: [], href: "/custom" },
            { label: "Leaderboard", keys: [], href: "/leaderboard" },
            { label: "History", keys: [], href: "/history" },
            { label: "Settings", keys: [], href: "/settings" },
        ],
    },
    {
        title: "Theme",
        items: themes.map((theme) => ({
            label: theme.label,
            keys: [],
            theme: theme.key,
        })),
    },
];

export const Commands = () => {
    const [open, setOpen] = useState<boolean>(false);
    const { user } = useRouteContext({ from: "__root__" });
    const logout = useLogout();

    const groups = user
        ? [
              ...commandGroups,
              { title: "Account", items: [{ label: "Log out", keys: [], logout: true }] },
          ]
        : commandGroups;

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            const typing = /^(INPUT|TEXTAREA|SELECT)$/.test((event.target as HTMLElement).tagName);
            if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
                event.preventDefault();
                setOpen((value) => !value);
            } else if (event.key === "/" && !typing) {
                event.preventDefault();
                setOpen(true);
            } else if (event.key === "Escape" && !typing) {
                const overlayOpen = document.querySelector(
                    '[data-slot="dialog-content"], [data-slot="dropdown-menu-content"]',
                );
                if (!overlayOpen) setTimeout(() => setOpen(true));
            }
        };
        document.addEventListener("keydown", onKeyDown, true);
        return () => document.removeEventListener("keydown", onKeyDown, true);
    }, []);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger
                aria-label="Search (ctrl + k)"
                aria-keyshortcuts="Control+K"
                className="group/tip relative grid size-9 cursor-pointer place-items-center rounded-lg text-ink-500 hover:bg-ink-900 hover:text-ink-100"
            >
                <SearchIcon className="size-4.5" stroke="currentColor" />
                <Tip className={focusTip}>
                    <span className="flex items-center gap-2">
                        Search
                        <TipKeys keys={["ctrl", "k"]} />
                    </span>
                </Tip>
            </DialogTrigger>
            <DialogContent
                showCloseButton={false}
                overlayClassName="bg-ink-950/80 backdrop-blur-sm duration-150 ease-out data-closed:animate-none!"
                className="top-[15vh] block w-[calc(100%-2rem)] max-w-lg translate-y-0 gap-0 overflow-hidden rounded-xl border border-ink-800 bg-ink-900 p-0 text-ink-300 shadow-2xl ring-0 duration-180 ease-[cubic-bezier(0.2,0.8,0.2,1)] sm:max-w-lg data-open:slide-in-from-top-[6px]! data-open:zoom-in-98! data-closed:animate-none!"
            >
                <DialogTitle className="sr-only">Command menu</DialogTitle>
                <Command className="bg-transparent text-ink-300">
                    <CommandInput
                        placeholder="Type a command…"
                        wrapperClassName="border-b border-ink-800 p-0"
                        groupClassName="h-12 gap-3 border-0 px-4"
                        className="h-12 flex-1 bg-transparent px-0 text-ink-100 placeholder:text-ink-600"
                        icon={<SearchIcon className="size-4 text-ink-500" stroke="currentColor" />}
                    >
                        <Kbd className="in-data-[slot=input-group]:bg-ink-900">esc</Kbd>
                    </CommandInput>
                    <CommandList className="max-h-80 p-2">
                        <CommandEmpty className="text-ink-500">No results.</CommandEmpty>
                        {groups.map((group) => (
                            <CommandGroup
                                key={group.title}
                                heading={group.title}
                                className="p-0 text-ink-300 **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:pt-2 **:[[cmdk-group-heading]]:pb-1 **:[[cmdk-group-heading]]:font-normal **:[[cmdk-group-heading]]:tracking-normal **:[[cmdk-group-heading]]:text-ink-500 **:[[cmdk-group-heading]]:normal-case"
                            >
                                {group.items.map((item) => (
                                    <CommandItem
                                        key={item.label}
                                        value={`${group.title} ${item.label}`}
                                        data-set-theme={item.theme}
                                        onSelect={() => {
                                            if (item.theme) setTheme(item.theme);
                                            if (item.href) window.location.assign(item.href);
                                            if (item.logout) {
                                                setOpen(false);
                                                void logout();
                                            }
                                        }}
                                        className="cursor-pointer justify-between rounded-md px-2 py-2 text-left text-ink-300 in-data-[slot=dialog-content]:rounded-md data-selected:bg-ink-800 data-selected:text-ink-100"
                                    >
                                        {item.label}
                                        <CommandShortcut className="ml-0 flex gap-1 tracking-normal">
                                            {item.keys.map((key) => (
                                                <Kbd key={key}>{key}</Kbd>
                                            ))}
                                        </CommandShortcut>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        ))}
                    </CommandList>
                    <div className="flex gap-4 border-t border-ink-800 px-4 py-2 text-xs text-ink-500">
                        <span className="flex items-center gap-1">
                            <Kbd>↑</Kbd>
                            <Kbd>↓</Kbd> move
                        </span>
                        <span className="flex items-center gap-1">
                            <Kbd>enter</Kbd> select
                        </span>
                    </div>
                </Command>
            </DialogContent>
        </Dialog>
    );
};
