import mainCss from "@/styles/main.css?url";

import { createRootRoute } from "@tanstack/react-router";
import { getUser } from "@/server/auth/session";

import { SiteLayout } from "@/components/layouts/site-layout";

const site = {
    name: "strokr",
    title: "strokr — typing speed trainer",
    desc: "A keyboard-first typing speed trainer with per-character feedback, charts and history.",
    url: "https://strokr.developershihab.com",
    image: "https://strokr.developershihab.com/og.png",
};

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { charSet: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { title: site.title },
            { name: "description", content: site.desc },
            { property: "og:site_name", content: site.name },
            { property: "og:url", content: site.url },
            { property: "og:title", content: site.title },
            { property: "og:description", content: site.desc },
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
    beforeLoad: async () => ({
        user: await getUser(), //
    }),
});
