import { GitHubIcon } from "@/components/icons/github-icon";
import { Kbd } from "@/components/ui/kbd";

export const Footer = () => {
    return (
        <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-ink-900 py-6 text-xs text-ink-600">
            <p>© {new Date().getFullYear()} strokr. All rights reserved.</p>
            <nav className="flex items-center gap-4">
                <a href="login.html" className="hover:text-ink-300">
                    Sign in
                </a>
                <a href="signup.html" className="hover:text-ink-300">
                    Sign up
                </a>
                <a href="about.html" className="hover:text-ink-300">
                    About
                </a>
                <a href="privacy.html" className="hover:text-ink-300">
                    Privacy
                </a>
                <a href="terms.html" className="hover:text-ink-300">
                    Terms
                </a>
                <a href="sitemap.html" className="hover:text-ink-300">
                    Sitemap
                </a>
                <a
                    href="https://github.com/mt-shihab26/strokr"
                    aria-label="GitHub"
                    className="hover:text-ink-300"
                >
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
