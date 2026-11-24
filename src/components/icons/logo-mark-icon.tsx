import type { TIcon } from "@/types/utils";

export const LogoMarkIcon: TIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width={256}
            height={256}
            {...props}
        >
            <title>strokr</title>
            <rect width={32} height={32} rx={9} fill="var(--primary)" />
            <rect x={3} y={3} width={26} height={23} rx={7} fill="#fff" fillOpacity="0.18" />
            <g stroke="var(--ink-950)" strokeLinecap="round" strokeWidth="2.4">
                <path d="M7.5 11.5h7" />
                <path d="M9.5 16h5" strokeOpacity="0.75" />
                <path d="M11.5 20.5h3" strokeOpacity="0.5" />
            </g>
            <rect x="18.5" y="8.5" width={3} height={15} rx="1.5" fill="var(--ink-950)" />
        </svg>
    );
};
