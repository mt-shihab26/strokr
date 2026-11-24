import { pages, render } from "./render";

const server = Bun.serve({
    port: 4000,
    async fetch(request) {
        const path = new URL(request.url).pathname.replace(/^\/|\.html$/g, "") || "index";

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
