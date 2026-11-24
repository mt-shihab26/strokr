import type { TIcon } from "@/types/utils";
import { cn } from "@/lib/utils";
import { LogoIcon } from "@/components/icons/logo-icon";

export const LogoWideIcon: TIcon = ({ className, ...props }) => {
    return (
        <svg
            viewBox="0 0 120 32"
            className={cn("h-8 w-auto", className)}
            role="img"
            aria-label="strokr"
            {...props}
        >
            <g className="origin-[16px_16px] transition group-hover:rotate-[-8deg]">
                <LogoIcon width={32} height={32} aria-hidden="true" />
            </g>
            <text
                x={41}
                y="22.5"
                fontFamily="JetBrains Mono, ui-monospace, monospace"
                fontSize={21}
                fontWeight={800}
                letterSpacing="-1.4"
                fill="var(--ink-100)"
            >
                strok<tspan fill="var(--primary)">r</tspan>
            </text>
            <rect
                className="caret"
                x={115}
                y={8}
                width="2.5"
                height={17}
                rx="1.25"
                fill="var(--primary)"
            />
        </svg>
    );
};
