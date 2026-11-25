import { LogoMarkIcon } from "@/components/icons/logo-mark-icon";
import { LogoWideIcon } from "@/components/icons/logo-wide-icon";

export const Logo = () => {
    return (
        <a
            href="/"
            aria-label="strokr home"
            className="group flex items-center rounded-lg px-1.5 py-1"
        >
            <span className="sm:hidden">
                <LogoMarkIcon className="size-8" role="img" aria-label="strokr" />
            </span>
            <span className="hidden sm:block">
                <LogoWideIcon />
            </span>
        </a>
    );
};
