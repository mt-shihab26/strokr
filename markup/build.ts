import { pages, render, sitemap } from "./render";

const out = `${import.meta.dir}/dist`;

for (const page of pages()) {
    await Bun.write(`${out}/${page}.html`, await render(page));
    console.log(`dist/${page}.html`);
}

await Bun.write(`${out}/sitemap.xml`, sitemap());
console.log("dist/sitemap.xml");

// Theme CSS is shared with the app.
const styles = `${import.meta.dir}/../src/styles`;
for (const file of new Bun.Glob("**/*.css").scanSync(styles)) {
    await Bun.write(`${out}/${file}`, Bun.file(`${styles}/${file}`));
    console.log(`dist/${file}`);
}

for (const file of new Bun.Glob("**/*").scanSync(`${import.meta.dir}/public`)) {
    await Bun.write(`${out}/${file}`, Bun.file(`${import.meta.dir}/public/${file}`));
    console.log(`dist/${file}`);
}
