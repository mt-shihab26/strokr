import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { themes } from "@/lib/themes";

import { PaletteIcon } from "@/components/icons/palette-icon";
import { Tip } from "./tip";

export const ThemePicker = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                aria-label="Theme"
                className="group/tip relative grid size-9 cursor-pointer place-items-center rounded-lg text-ink-500 hover:bg-ink-900 hover:text-ink-100 data-popup-open:bg-ink-900 data-popup-open:text-primary"
            >
                <PaletteIcon className="size-4.5 [&_circle]:fill-current" stroke="currentColor" />
                <Tip className="group-data-popup-open/tip:hidden">Theme</Tip>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                sideOffset={8}
                className="z-40 w-44 min-w-0 rounded-xl border border-ink-800 bg-ink-900 p-1 text-ink-300 shadow-xl ring-0 data-open:animate-none! data-closed:animate-none!"
            >
                {themes.map((theme) => (
                    <DropdownMenuItem
                        key={theme.key}
                        data-set-theme={theme.key}
                        className="flex w-full cursor-pointer items-center gap-2 rounded-lg border border-transparent px-2 py-1.5 text-left text-sm font-normal tracking-normal text-ink-300 normal-case hover:bg-ink-800 focus:bg-ink-800 focus:text-ink-300"
                    >
                        <span
                            data-theme={theme.key === "system" ? "dark" : theme.key}
                            className="flex gap-0.5 rounded bg-ink-950 p-1"
                        >
                            <span className="size-2 rounded-full bg-primary" />
                            <span className="size-2 rounded-full bg-ink-100" />
                            <span className="size-2 rounded-full bg-ink-600" />
                        </span>
                        {theme.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
