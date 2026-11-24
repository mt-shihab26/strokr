import ejs from "ejs";

export const pagesDir = `${import.meta.dir}/views/pages`;

export const pages = () =>
    Array.from(new Bun.Glob("*.ejs").scanSync(pagesDir)).map((file) => file.replace(/\.ejs$/, ""));

export const render = (page: string) => ejs.renderFile(`${pagesDir}/${page}.ejs`, { page });
