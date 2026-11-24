import { Outlet, createFileRoute } from "@tanstack/react-router";

const SiteLayout = () => {
    return (
        <div className="flex min-h-screen flex-col">
            hello
            <Outlet />
        </div>
    );
};

export const Route = createFileRoute("/_site")({
    component: SiteLayout,
});
