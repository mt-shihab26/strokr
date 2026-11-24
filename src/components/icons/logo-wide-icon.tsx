import type { TIcon } from "@/types/utils";

export const LogoWideIcon: TIcon = (props) => {
    return (
        <svg
            viewBox="0 0 120 32"
            className="<%= locals.size ?? 'h-8 w-auto' %>"
            role="img"
            aria-label="strokr"
            {...props}
        >
            <g className="origin-[16px_16px] transition group-hover:rotate-[-8deg]">
                <rect width={32} height={32} rx={9} fill="var(--primary)" />
                <rect x={3} y={3} width={26} height={23} rx={7} fill="#fff" fillOpacity="0.18" />
                <g stroke="var(--ink-950)" strokeLinecap="round" strokeWidth="2.4">
                    <path d="M7.5 11.5h7" />
                    <path d="M9.5 16h5" strokeOpacity="0.75" />
                    <path d="M11.5 20.5h3" strokeOpacity="0.5" />
                </g>
                <rect x="18.5" y="8.5" width={3} height={15} rx="1.5" fill="var(--ink-950)" />
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
