import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export const focusTip = "group-focus-visible/tip:translate-y-0 group-focus-visible/tip:opacity-100";

export const Tip = ({ children, className }: { children: ReactNode; className?: string }) => (
    <span
        role="tooltip"
        className={cn(
            "pointer-events-none absolute top-full left-1/2 z-50 mt-2 -translate-x-1/2 translate-y-1 rounded-md border border-ink-800 bg-ink-900 px-2 py-1 text-xs whitespace-nowrap text-ink-100 opacity-0 shadow-lg transition group-hover/tip:translate-y-0 group-hover/tip:opacity-100",
            className,
        )}
    >
        {children}
    </span>
);
