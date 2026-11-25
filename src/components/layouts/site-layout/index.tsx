import type { ReactNode } from "react";

import { defaultTheme, themeKey } from "@/lib/themes";

import { HeadContent, Scripts } from "@tanstack/react-router";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Header } from "./header";
import { Footer } from "./footer";

const themeScript = `(() => {
    const choice = localStorage.getItem(${JSON.stringify(themeKey)}) ?? ${JSON.stringify(defaultTheme)};
    const light = matchMedia("(prefers-color-scheme: light)").matches;
    document.documentElement.dataset.theme = choice === "system" ? (light ? "light" : "dark") : choice;
    document.documentElement.dataset.themeChoice = choice;
})();`;

export const SiteLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en" data-theme="dark" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
                <HeadContent />
            </head>
            <body className="min-h-screen bg-ink-950 font-sans text-ink-300 antialiased">
                <TooltipProvider>
                    <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6">
                        <Header />
                        <main id="main" className="flex flex-1 flex-col justify-center gap-8 pb-16">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </TooltipProvider>
                <Scripts />
            </body>
        </html>
    );
};
