import { createFileRoute, redirect } from "@tanstack/react-router";

const guestOnly = ["/login", "/signup"];

export const Route = createFileRoute("/_auth")({
    beforeLoad: ({ context, location }) => {
        if (context.user && guestOnly.includes(location.pathname)) throw redirect({ to: "/" });
    },
});
