import { createFileRoute } from "@tanstack/react-router";
import { sitemapGroups } from "@/lib/sitemap";

export const Route = createFileRoute("/_info/sitemap")({
    head: () => ({ meta: [{ title: "Sitemap — strokr" }] }),
    component: Sitemap,
});

function Sitemap() {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                    <p className="font-mono text-xs text-primary">sitemap</p>
                    <h1 className="mt-2 text-3xl font-semibold text-ink-100">
                        Every page on strokr
                    </h1>
                    <p className="mt-2 text-sm text-ink-500">Lost? Everything is one click away.</p>
                </div>
                <a
                    href="/sitemap.xml"
                    className="flex items-center gap-2 rounded-lg border border-ink-800 px-3 py-2 font-mono text-sm text-ink-300 hover:border-primary hover:text-primary"
                >
                    <span className="rounded bg-ink-900 px-1.5 text-xs">XML</span>
                    sitemap.xml
                </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
                {sitemapGroups.map((group) => (
                    <section
                        key={group.title}
                        className="rounded-2xl border border-ink-900 bg-ink-900/30 p-5"
                    >
                        <h2 className="mb-3 text-xs font-medium tracking-wider text-ink-500 uppercase">
                            {group.title}
                        </h2>
                        <ul className="flex flex-col">
                            {group.links.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="group flex items-center justify-between gap-4 rounded-lg px-3 py-2.5 hover:bg-ink-900"
                                    >
                                        <span>
                                            <span className="block text-sm text-ink-100 group-hover:text-primary">
                                                {link.label}
                                            </span>
                                            <span className="block text-xs text-ink-500">
                                                {link.hint}
                                            </span>
                                        </span>
                                        <span className="text-ink-700 group-hover:text-primary">
                                            →
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </div>
    );
}
