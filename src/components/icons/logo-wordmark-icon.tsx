import type { TIcon } from "@/types/utils";

export const LogoWordmarkIcon: TIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 32"
            width={360}
            height={96}
            {...props}
        >
            <title>strokr</title>
            <rect width={32} height={32} rx={9} fill="#f5b83d" />
            <rect x={3} y={3} width={26} height={23} rx={7} fill="#fff" fillOpacity="0.18" />
            <g stroke="#09090b" strokeLinecap="round" strokeWidth="2.4">
                <path d="M7.5 11.5h7" />
                <path d="M9.5 16h5" strokeOpacity="0.75" />
                <path d="M11.5 20.5h3" strokeOpacity="0.5" />
            </g>
            <rect x="18.5" y="8.5" width={3} height={15} rx="1.5" fill="#09090b" />
            <text
                x={41}
                y="22.5"
                fontFamily="JetBrains Mono, ui-monospace, monospace"
                fontSize={21}
                fontWeight={800}
                letterSpacing="-1.4"
                fill="#fafafa"
            >
                strok<tspan fill="#f5b83d">r</tspan>
            </text>
            <rect x={115} y={8} width="2.5" height={17} rx="1.25" fill="#f5b83d" />
        </svg>
    );
};
