import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const tabs = [
    { href: "/about", label: "About" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/sitemap", label: "Sitemap" },
];

export const Route = createFileRoute("/_info")({
    component: InfoLayout,
});

function InfoLayout() {
    const { pathname } = useLocation();

    return (
        <div className="flex flex-col gap-10">
            <nav
                className="flex w-fit gap-1 rounded-xl bg-ink-900/60 p-1 text-sm"
                aria-label="Info pages"
            >
                {tabs.map((tab) => {
                    const active = tab.href === pathname;
                    return (
                        <a
                            key={tab.href}
                            href={tab.href}
                            aria-current={active ? "page" : undefined}
                            className={cn(
                                "rounded-lg px-4 py-1.5",
                                active
                                    ? "bg-ink-800 text-ink-100 shadow-sm"
                                    : "text-ink-500 hover:text-ink-200",
                            )}
                        >
                            {tab.label}
                        </a>
                    );
                })}
            </nav>
            <Outlet />
        </div>
    );
}
