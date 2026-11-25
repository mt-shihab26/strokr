import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useLocation, useRouteContext } from "@tanstack/react-router";
import { cn, getInitials } from "@/lib/utils";
import { useLogout } from "@/hooks/use-logout";

import { Tip } from "./tip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const itemClassName =
    "flex w-full cursor-pointer items-center rounded-lg px-2 py-1.5 text-left text-sm font-normal tracking-normal text-ink-300 normal-case hover:bg-ink-800 focus:bg-ink-800 focus:text-ink-100";

export const Profile = () => {
    const { pathname } = useLocation();
    const { user } = useRouteContext({ from: "__root__" });

    const logout = useLogout();

    if (!user) {
        return (
            <a
                href="/login"
                className="rounded-lg px-3 py-1.5 text-sm text-ink-300 hover:bg-ink-900 hover:text-ink-100"
            >
                Sign in
            </a>
        );
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                aria-label="Account"
                className={cn(
                    "group/tip relative cursor-pointer rounded-full ring-2 ring-offset-2 ring-offset-ink-950 data-popup-open:ring-primary",
                    pathname === "/profile"
                        ? "ring-primary"
                        : "ring-transparent hover:ring-ink-700",
                )}
            >
                <Avatar className="size-9 after:hidden">
                    {user.image && <AvatarImage src={user.image} alt={user.name} />}
                    <AvatarFallback className="bg-linear-to-br from-primary/80 to-ink-700 font-mono text-xs font-bold text-ink-950">
                        {getInitials(user.name)}
                    </AvatarFallback>
                </Avatar>
                <Tip className="group-data-popup-open/tip:hidden">{user.name}</Tip>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                sideOffset={8}
                className="z-40 w-56 min-w-0 rounded-xl border border-ink-800 bg-ink-900 p-1 text-ink-300 shadow-xl ring-0"
            >
                <div className="px-2 py-1.5">
                    <p className="truncate text-sm text-ink-100">{user.name}</p>
                    <p className="truncate text-xs text-ink-500">{user.email}</p>
                </div>
                <DropdownMenuSeparator className="my-1 bg-ink-800" />
                <DropdownMenuItem
                    onClick={() => window.location.assign("/profile")}
                    className={itemClassName}
                >
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => window.location.assign("/settings")}
                    className={itemClassName}
                >
                    Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-1 bg-ink-800" />
                <DropdownMenuItem onClick={logout} className={itemClassName}>
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
