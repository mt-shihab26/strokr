import type { TIcon } from "@/types/utils";

export const MoonIcon: TIcon = (props) => {
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
            <path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9z" />
        </svg>
    );
};
