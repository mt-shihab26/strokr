import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";

import appCss from "@/main.css?url";

const RootDocument = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <head>
                <HeadContent />
            </head>
            <body>
                {children}
                <Scripts />
            </body>
        </html>
    );
};

const NotFound = () => {
    return (
        <main className="grid min-h-screen place-items-center">
            <h1 className="text-4xl font-bold">Page not found</h1>
        </main>
    );
};

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { charSet: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { title: "strokr" },
        ],
        links: [{ rel: "stylesheet", href: appCss }],
    }),
    shellComponent: RootDocument,
    notFoundComponent: NotFound,
});
