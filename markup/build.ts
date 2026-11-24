import { pages, render, sitemap } from "./render";

for (const page of pages()) {
    await Bun.write(`${import.meta.dir}/dist/${page}.html`, await render(page));
    console.log(`dist/${page}.html`);
}

await Bun.write(`${import.meta.dir}/dist/sitemap.xml`, sitemap());
console.log("dist/sitemap.xml");
