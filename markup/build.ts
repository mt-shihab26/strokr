import { pages, render, sitemap } from "./render";

const out = `${import.meta.dir}/dist`;

for (const page of pages()) {
    await Bun.write(`${out}/${page}.html`, await render(page));
    console.log(`dist/${page}.html`);
}

await Bun.write(`${out}/sitemap.xml`, sitemap());
console.log("dist/sitemap.xml");

for (const file of new Bun.Glob("**/*").scanSync(`${import.meta.dir}/public`)) {
    await Bun.write(`${out}/${file}`, Bun.file(`${import.meta.dir}/public/${file}`));
    console.log(`dist/${file}`);
}
