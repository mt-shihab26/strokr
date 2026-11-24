import mainCss from "@/main.css?url";

import type { ReactNode } from "react";

import { createRootRoute } from "@tanstack/react-router";

import { HeadContent, Scripts } from "@tanstack/react-router";
import { NotFound } from "@/components/screens/errors/not-found";
import { TooltipProvider } from "@/components/ui/tooltip";

const ShellLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <head>
                <HeadContent />
            </head>
            <body>
                <TooltipProvider>{children}</TooltipProvider>
                <Scripts />
            </body>
        </html>
    );
};

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { charSet: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { title: "strokr" },
        ],
        links: [
            { rel: "stylesheet", href: mainCss }, //
        ],
    }),
    shellComponent: ShellLayout,
    notFoundComponent: NotFound,
});
