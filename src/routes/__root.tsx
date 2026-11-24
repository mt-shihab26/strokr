import mainCss from "@/styles/main.css?url";

import type { ReactNode } from "react";

import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";

import { NotFound } from "@/components/screens/errors/not-found";
import { TooltipProvider } from "@/components/ui/tooltip";

const SITE = {
    name: "strokr",
    description:
        "A keyboard-first typing speed trainer with per-character feedback, charts and history.",
    image: "https://strokr.app/og.png",
};

// Runs before the page paints (no flash of the wrong theme):
// - applies the saved theme ("system" follows the OS light/dark setting); themes live in src/styles/themes
// - redraws the favicon in the theme's colours
// - any element with data-set-theme="<name>" switches theme when clicked
const THEME_SCRIPT = `(() => {
    const root = document.documentElement;
    const updateFavicon = () => {
        const style = getComputedStyle(root);
        const brand = style.getPropertyValue("--primary").trim();
        const ink = style.getPropertyValue("--background").trim();
        const link = document.getElementById("favicon");
        if (!brand || !link) return;
        const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="9" fill="' + brand + '"/><g stroke="' + ink + '" stroke-linecap="round" stroke-width="3"><path d="M6.5 11h8"/><path d="M9 16.5h5.5" stroke-opacity="0.7"/></g><rect x="18.5" y="7" width="3.5" height="18" rx="1.75" fill="' + ink + '"/></svg>';
        link.href = "data:image/svg+xml," + encodeURIComponent(svg);
    };
    const applyTheme = (choice) => {
        const light = matchMedia("(prefers-color-scheme: light)").matches;
        root.dataset.theme = choice === "system" ? (light ? "light" : "dark") : choice;
        root.dataset.themeChoice = choice;
        updateFavicon();
    };
    applyTheme(localStorage.getItem("theme") ?? "dark");
    // Theme CSS loads after this script, so redraw the favicon once it has.
    addEventListener("DOMContentLoaded", updateFavicon);
    document.addEventListener("click", (event) => {
        const button = event.target.closest("[data-set-theme]");
        if (!button) return;
        localStorage.setItem("theme", button.dataset.setTheme);
        applyTheme(button.dataset.setTheme);
    });
})();`;

const ShellLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en" data-theme="dark" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
                <HeadContent />
            </head>
            <body className="min-h-screen">
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
            { title: SITE.name },
            { name: "description", content: SITE.description },
            { property: "og:site_name", content: SITE.name },
            { property: "og:title", content: SITE.name },
            { property: "og:description", content: SITE.description },
            { property: "og:image", content: SITE.image },
            { property: "og:image:width", content: "1200" },
            { property: "og:image:height", content: "630" },
            { name: "twitter:card", content: "summary_large_image" },
        ],
        links: [
            { rel: "stylesheet", href: mainCss },
            { id: "favicon", rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        ],
    }),
    shellComponent: ShellLayout,
    notFoundComponent: NotFound,
});
