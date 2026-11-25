import type { TIcon } from "@/types/utils";

export const ChartIcon: TIcon = (props) => {
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
            <path d="M3 3v16a2 2 0 0 0 2 2h16" />
            <path d="m19 9-5 5-4-4-3 3" />
        </svg>
    );
};
