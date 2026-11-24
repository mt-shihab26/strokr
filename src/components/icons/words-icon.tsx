import type { TIcon } from "@/types/utils";

export const WordsIcon: TIcon = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M4 7h16M4 12h10M4 17h13" />
        </svg>
    );
};
