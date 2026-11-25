import mainCss from "@/styles/main.css?url";

import type { ReactNode } from "react";

import { createRootRoute } from "@tanstack/react-router";

import { HeadContent, Scripts } from "@tanstack/react-router";
import { NotFound } from "@/components/screens/errors/not-found";
import { TooltipProvider } from "@/components/ui/tooltip";
import { defaultTheme, themeKey } from "@/lib/themes";

const themeScript = `(() => {
    const choice = localStorage.getItem(${JSON.stringify(themeKey)}) ?? ${JSON.stringify(defaultTheme)};
    const light = matchMedia("(prefers-color-scheme: light)").matches;
    document.documentElement.dataset.theme = choice === "system" ? (light ? "light" : "dark") : choice;
    document.documentElement.dataset.themeChoice = choice;
})();`;

const site = {
    name: "strokr",
    description:
        "A keyboard-first typing speed trainer with per-character feedback, charts and history.",
    image: "https://strokr.app/og.png",
};

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { charSet: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { title: site.name },
            { name: "description", content: site.description },
            { property: "og:site_name", content: site.name },
            { property: "og:title", content: site.name },
            { property: "og:description", content: site.description },
            { property: "og:image", content: site.image },
            { property: "og:image:width", content: "1200" },
            { property: "og:image:height", content: "630" },
            { name: "twitter:card", content: "summary_large_image" },
        ],
        links: [
            { rel: "stylesheet", href: mainCss },
            { id: "favicon", rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        ],
    }),
    shellComponent: ({ children }: { children: ReactNode }) => {
        return (
            <html lang="en" data-theme="dark" suppressHydrationWarning>
                <head>
                    <script dangerouslySetInnerHTML={{ __html: themeScript }} />
                    <HeadContent />
                </head>
                <body className="min-h-screen bg-ink-950 font-sans text-ink-300 antialiased transition-colors">
                    <TooltipProvider>
                        <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6">
                            {children}
                        </div>
                    </TooltipProvider>
                    <Scripts />
                </body>
            </html>
        );
    },
    notFoundComponent: NotFound,
});
