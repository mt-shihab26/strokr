import { themeNames } from "@/lib/themes";

import { PaletteIcon } from "@/components/icons/palette-icon";

import { Tip } from "./tip";

export const ThemePicker = () => {
    return (
        <details className="group relative">
            <summary
                aria-label="Theme"
                className="group/tip relative grid size-9 cursor-pointer list-none place-items-center rounded-lg text-ink-500 group-open:bg-ink-900 group-open:text-primary hover:bg-ink-900 hover:text-ink-100"
            >
                <PaletteIcon className="size-4.5 [&_circle]:fill-current" stroke="currentColor" />
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
    );
};
