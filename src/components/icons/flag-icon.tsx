import type { TIcon } from "@/types/utils";

export const FlagIcon: TIcon = (props) => {
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
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <path d="M4 22v-7" />
        </svg>
    );
};
