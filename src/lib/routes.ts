export type TAccess = "guest" | "private" | "protected";

export const routes: { path: string; access: TAccess; verified?: boolean }[] = [
    { path: "/", access: "protected" },
    { path: "/about", access: "protected" },
    { path: "/privacy", access: "protected" },
    { path: "/terms", access: "protected" },
    { path: "/sitemap", access: "protected" },
    { path: "/login", access: "guest" },
    { path: "/signup", access: "guest" },
    { path: "/verify-email", access: "private" },
];

export const getRoute = (path: string) => routes.find((route) => route.path === path);
