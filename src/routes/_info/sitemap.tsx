import { createFileRoute } from "@tanstack/react-router";

const groups = [
    {
        title: "Train",
        links: [
            {
                href: "/",
                label: "Typing test",
                hint: "Timed and word-count tests with live feedback.",
            },
            {
                href: "/practice",
                label: "Practice",
                hint: "Drills for one group of keys at a time.",
            },
            { href: "/custom", label: "Custom text", hint: "Type your own text, code or lyrics." },
            {
                href: "/custom-import",
                label: "Import text",
                hint: "Bring in a file, web page or gist.",
            },
            {
                href: "/lesson-complete",
                label: "Lesson complete",
                hint: "What you see after passing a drill.",
            },
            { href: "/focus", label: "Focus mode", hint: "Just the test, nothing else on screen." },
            {
                href: "/test-finished",
                label: "Test finished",
                hint: "The moment between the last keystroke and results.",
            },
            { href: "/results", label: "Results", hint: "Charts and stats after a test." },
            { href: "/share", label: "Share result", hint: "A result card for social media." },
        ],
    },
    {
        title: "Compete",
        links: [
            { href: "/leaderboard", label: "Leaderboard", hint: "Fastest typists this week." },
            { href: "/race", label: "Race", hint: "Type against other people, live." },
            { href: "/user", label: "Public profile", hint: "Another typist's stats and badges." },
            { href: "/history", label: "History", hint: "Every test you've finished." },
            { href: "/profile", label: "Profile", hint: "Personal bests, activity and weak keys." },
            {
                href: "/achievements",
                label: "Achievements",
                hint: "Badges for speed, accuracy and streaks.",
            },
        ],
    },
    {
        title: "Account",
        links: [
            { href: "/login", label: "Sign in", hint: "Sync your history across devices." },
            { href: "/signup", label: "Sign up", hint: "Create a free account." },
            {
                href: "/onboarding",
                label: "Onboarding",
                hint: "First-visit setup: layout, goal, placement test.",
            },
            {
                href: "/forgot-password",
                label: "Forgot password",
                hint: "Get a reset link by email.",
            },
            {
                href: "/reset-password",
                label: "Reset password",
                hint: "Choose a new password from the email link.",
            },
            {
                href: "/verify-email",
                label: "Verify email",
                hint: "Enter the 6-digit code we sent you.",
            },
            {
                href: "/profile-edit",
                label: "Edit profile",
                hint: "Name, account, privacy and connections.",
            },
            { href: "/settings", label: "Settings", hint: "Test, behaviour, theme and shortcuts." },
        ],
    },
    {
        title: "Info",
        links: [
            { href: "/about", label: "About", hint: "What strokr is and how it works." },
            { href: "/privacy", label: "Privacy", hint: "What we store and why." },
            { href: "/terms", label: "Terms", hint: "The rules for using strokr." },
            { href: "/sitemap", label: "Sitemap", hint: "Every page on strokr, grouped." },
            {
                href: "/sitemap.xml",
                label: "sitemap.xml",
                hint: "Machine-readable sitemap for search engines.",
            },
        ],
    },
    {
        title: "States and errors",
        links: [
            {
                href: "/empty-states",
                label: "Empty states",
                hint: "What new users see before there's data.",
            },
            {
                href: "/loading-states",
                label: "Loading and toasts",
                hint: "Skeletons and notifications.",
            },
            { href: "/404", label: "Not found", hint: "The 404 page." },
            { href: "/500", label: "Server error", hint: "The 500 page." },
        ],
    },
];

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
            <div className="stagger grid gap-4 sm:grid-cols-2">
                {groups.map((group) => (
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
                                        <span className="text-ink-700 transition group-hover:translate-x-0.5 group-hover:text-primary">
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
