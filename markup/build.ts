import { pages, render } from "./render";

for (const page of pages()) {
    await Bun.write(`${import.meta.dir}/dist/${page}.html`, await render(page));
    console.log(`dist/${page}.html`);
}
