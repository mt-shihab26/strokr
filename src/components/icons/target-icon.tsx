import type { TIcon } from "@/types/utils";

export const TargetIcon: TIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <circle cx={12} cy={12} r={10} />
            <circle cx={12} cy={12} r={6} />
            <circle cx={12} cy={12} r={2} />
        </svg>
    );
};
