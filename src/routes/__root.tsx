import { createRootRoute } from "@tanstack/react-router";

import { HeadContent, Scripts } from "@tanstack/react-router";
import { TooltipProvider } from "@/components/ui/tooltip";

import mainCss from "@/main.css?url";

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
    shellComponent: ({ children }) => (
        <html lang="en">
            <head>
                <HeadContent />
            </head>
            <body>
                <TooltipProvider>{children}</TooltipProvider>
                <Scripts />
            </body>
        </html>
    ),
    notFoundComponent: () => (
        <main className="grid min-h-screen place-items-center">
            <h1 className="text-4xl font-bold">Page not found</h1>
        </main>
    ),
});
