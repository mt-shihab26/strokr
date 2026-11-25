import { Logo } from "./logo";
import { Links } from "./links";
import { Commands } from "./commands";
import { ThemePicker } from "./theme-picker";
import { Profile } from "./profile";
import { VerifyEmailBar } from "./verify-email-bar";

export const Header = () => {
    return (
        <>
            <a
                href="#main"
                className="fixed top-3 left-3 z-60 -translate-y-20 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-ink-950 shadow-lg focus:translate-y-0"
            >
                Skip to content
            </a>
            <VerifyEmailBar />
            <header className="sticky top-0 z-30 -mx-6 mb-4 px-6 py-4 backdrop-blur-md">
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-ink-900 bg-ink-950/70 px-3 py-2 shadow-sm shadow-black/5">
                    <Logo />
                    <Links />
                    <div className="flex items-center gap-1">
                        <Commands />
                        <ThemePicker />
                        <span className="mx-1 h-6 w-px bg-ink-800" />
                        <Profile />
                    </div>
                </div>
            </header>
        </>
    );
};
