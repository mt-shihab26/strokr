import { useRouteContext } from "@tanstack/react-router";
import { footerLinks, githubUrl } from "@/lib/links";

import { GitHubIcon } from "@/components/icons/github-icon";
import { KeyboardShortcuts } from "./keyboard-shortcuts";

export const Footer = () => {
    const { user } = useRouteContext({ from: "__root__" });

    return (
        <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-ink-900 py-6 text-xs text-ink-600">
            <p>© {new Date().getFullYear()} strokr. All rights reserved.</p>
            <nav className="flex items-center gap-4">
                {footerLinks
                    .filter((link) => !(user && "guest" in link))
                    .map((link) => (
                        <a key={link.href} href={link.href} className="hover:text-ink-300">
                            {link.label}
                        </a>
                    ))}
                <a href={githubUrl} aria-label="GitHub" className="hover:text-ink-300">
                    <GitHubIcon className="size-4" fill="currentColor" />
                </a>
                <KeyboardShortcuts />
            </nav>
        </footer>
    );
};
