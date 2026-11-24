import { pages, render, sitemap } from "./render";

// Compile main.css with the Tailwind CLI on each request, so view and style changes show on reload.
const css = `${import.meta.dir}/.cache/main.css`;
const compileCss = () =>
    Bun.spawnSync(["./node_modules/.bin/tailwindcss", "-i", "main.css", "-o", css], {
        cwd: import.meta.dir,
        stderr: "inherit",
    });

const server = Bun.serve({
    port: Number(process.env.PORT ?? 4000),
    async fetch(request) {
        const path = new URL(request.url).pathname.replace(/^\/|\.html$/g, "") || "index";

        const asset = Bun.file(`${import.meta.dir}/public/${path}`);
        if (path && (await asset.exists())) {
            return new Response(asset);
        }

        if (path === "main.css") {
            compileCss();
            return new Response(Bun.file(css), { headers: { "Content-Type": "text/css" } });
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
