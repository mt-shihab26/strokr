import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routeTree } from "@/tree.gen";

import { NotFound } from "@/components/screens/errors/not-found";
import { ServerError } from "@/components/screens/errors/server-error";

export const getRouter = () => {
    const router = createTanStackRouter({
        routeTree,
        scrollRestoration: true,
        defaultPreload: "intent",
        defaultPreloadStaleTime: 0,
        defaultErrorComponent: ServerError,
        defaultNotFoundComponent: NotFound,
    });

    return router;
};

declare module "@tanstack/react-router" {
    interface Register {
        router: ReturnType<typeof getRouter>;
    }
}
