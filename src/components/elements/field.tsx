import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Field = ({
    label,
    aside,
    error,
    end,
    className,
    ...props
}: ComponentProps<typeof Input> & {
    label: ReactNode;
    aside?: ReactNode;
    error?: ReactNode;
    end?: ReactNode;
}) => {
    return (
        <Label className="flex-col items-stretch gap-1.5 font-normal tracking-normal normal-case select-auto">
            <span className="flex items-center justify-between text-sm text-ink-300">
                {label}
                {aside}
            </span>
            <span className="relative flex">
                <Input
                    aria-invalid={error ? true : undefined}
                    className={cn(
                        "h-10 rounded-md border-ink-800 bg-ink-950 px-3 py-0 text-sm text-ink-100 placeholder:text-ink-600 focus:border-primary focus-visible:border-primary md:text-sm",
                        error && "border-rose-700",
                        end && "pr-10",
                        className,
                    )}
                    {...props}
                />
                {end && <span className="absolute inset-y-0 right-0 flex items-center">{end}</span>}
            </span>
            {error && <span className="text-xs text-rose-400">{error}</span>}
        </Label>
    );
};
