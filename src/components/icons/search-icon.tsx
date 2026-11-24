import type { TIcon } from "@/types/utils";

export const SearchIcon: TIcon = (props) => {
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
            <circle cx={11} cy={11} r={7} />
            <path d="m20 20-3.5-3.5" />
        </svg>
    );
};
