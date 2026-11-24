import { footerLinks, githubUrl } from "@/lib/links";

import { GitHubIcon } from "@/components/icons/github-icon";
import { Kbd } from "@/components/ui/kbd";

export const Footer = () => {
    return (
        <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-ink-900 py-6 text-xs text-ink-600">
            <p>© {new Date().getFullYear()} strokr. All rights reserved.</p>
            <nav className="flex items-center gap-4">
                {footerLinks.map((link) => (
                    <a key={link.href} href={link.href} className="hover:text-ink-300">
                        {link.label}
                    </a>
                ))}
                <a href={githubUrl} aria-label="GitHub" className="hover:text-ink-300">
                    <GitHubIcon className="size-4" fill="currentColor" />
                </a>
                <a
                    href="#shortcuts-help"
                    aria-keyshortcuts="?"
                    className="flex items-center gap-1.5 hover:text-ink-300"
                >
                    <Kbd>?</Kbd>
                    Shortcuts
                </a>
            </nav>
        </footer>
    );
};
