import type { ReactNode } from "react";

import { HeadContent, Scripts } from "@tanstack/react-router";
import { TooltipProvider } from "@/components/ui/tooltip";

export const ShellLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
            <head>
                <HeadContent />
            </head>
            <body>
                <TooltipProvider>{children}</TooltipProvider>
                <Scripts />
            </body>
        </html>
    );
};
