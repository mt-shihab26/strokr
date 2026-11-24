import { pages, render, sitemap } from "./render";

const server = Bun.serve({
    port: 4000,
    async fetch(request) {
        const path = new URL(request.url).pathname.replace(/^\/|\.html$/g, "") || "index";

        const asset = Bun.file(`${import.meta.dir}/public/${path}`);
        if (path && (await asset.exists())) {
            return new Response(asset);
        }

        // Theme CSS is shared with the app and served straight from src/styles.
        const style = Bun.file(`${import.meta.dir}/../src/styles/${path}`);
        if (path.endsWith(".css") && (await style.exists())) {
            return new Response(style);
        }

        if (path === "sitemap.xml") {
            return new Response(sitemap(), { headers: { "Content-Type": "application/xml" } });
        }

        if (!pages().includes(path)) {
            return new Response(await render("404"), {
                status: 404,
                headers: { "Content-Type": "text/html" },
            });
        }

        return new Response(await render(path), { headers: { "Content-Type": "text/html" } });
    },
});

console.log(`Markup running at ${server.url}`);
