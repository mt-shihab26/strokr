import { createFileRoute } from "@tanstack/react-router";
import { envServer } from "@/lib/env-server";
import { sitemapGroups } from "@/lib/sitemap";

export const Route = createFileRoute("/_info/sitemap.xml")({
    server: {
        handlers: {
            GET: () => {
                const urls = sitemapGroups
                    .filter((group) => group.indexed !== false)
                    .flatMap((group) => group.links)
                    .filter((link) => !link.href.endsWith(".xml"))
                    .map((link) => `    <url><loc>${envServer.BASE_URL}${link.href}</loc></url>`);

                const xml = [
                    '<?xml version="1.0" encoding="UTF-8"?>',
                    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
                    ...urls,
                    "</urlset>",
                ].join("\n");

                return new Response(xml, {
                    headers: { "Content-Type": "application/xml; charset=utf-8" },
                });
            },
        },
    },
});
