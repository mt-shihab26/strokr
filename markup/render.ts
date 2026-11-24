import ejs from "ejs";

export const pagesDir = `${import.meta.dir}/views/pages`;

// Public URL the sitemap points at. Override with SITE_URL when building.
const siteUrl = (process.env.SITE_URL ?? "https://strokr.app").replace(/\/$/, "");

// Pages that should not appear in search results.
const unlisted = new Set([
    "404",
    "500",
    "reset-password",
    "verify-email",
    "profile-edit",
    "onboarding",
    "lesson-complete",
    "empty-states",
    "share",
]);

export const pages = () =>
    Array.from(new Bun.Glob("*.ejs").scanSync(pagesDir)).map((file) => file.replace(/\.ejs$/, ""));

export const render = (page: string) => ejs.renderFile(`${pagesDir}/${page}.ejs`, { page });

export const sitemap = () => {
    const today = new Date().toISOString().slice(0, 10);
    const urls = pages()
        .filter((page) => !unlisted.has(page))
        .sort()
        .map((page) => {
            const loc = page === "index" ? `${siteUrl}/` : `${siteUrl}/${page}.html`;
            const priority = page === "index" ? "1.0" : "0.7";
            return `    <url>\n        <loc>${loc}</loc>\n        <lastmod>${today}</lastmod>\n        <priority>${priority}</priority>\n    </url>`;
        });

    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
};
