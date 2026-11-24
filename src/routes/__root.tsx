import mainCss from "@/main.css?url";

import { createRootRoute } from "@tanstack/react-router";

import { ShellLayout } from "@/components/layouts/shell-layout";
import { NotFound } from "@/components/screens/errors/not-found";

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { charSet: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { title: "strokr" },
        ],
        links: [
            { rel: "stylesheet", href: mainCss }, //
        ],
    }),
    shellComponent: ShellLayout,
    notFoundComponent: NotFound,
});
