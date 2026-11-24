import type { TIcon } from "@/types/utils";

export const TextIcon: TIcon = (props) => {
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
            <path d="M17 6.1H3M21 12.1H3M15.1 18H3" />
        </svg>
    );
};
