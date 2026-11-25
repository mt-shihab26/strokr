import mainCss from "@/styles/main.css?url";

import { createRootRoute } from "@tanstack/react-router";

import { NotFound } from "@/components/screens/errors/not-found";
import { SiteLayout } from "@/components/layouts/site-layout";

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
    shellComponent: SiteLayout,
    notFoundComponent: NotFound,
});
