import { pages, render, sitemap } from "./render";

const out = `${import.meta.dir}/dist`;

for (const page of pages()) {
    await Bun.write(`${out}/${page}.html`, await render(page));
    console.log(`dist/${page}.html`);
}

await Bun.write(`${out}/sitemap.xml`, sitemap());
console.log("dist/sitemap.xml");

// Compile and minify main.css with the Tailwind CLI.
const tailwind = Bun.spawnSync(
    ["./node_modules/.bin/tailwindcss", "-i", "main.css", "-o", `${out}/main.css`, "--minify"],
    { cwd: import.meta.dir, stderr: "inherit" },
);
if (!tailwind.success) process.exit(1);
console.log("dist/main.css");

for (const file of new Bun.Glob("**/*").scanSync(`${import.meta.dir}/public`)) {
    await Bun.write(`${out}/${file}`, Bun.file(`${import.meta.dir}/public/${file}`));
    console.log(`dist/${file}`);
}
