import { createFileRoute } from "@tanstack/react-router";

import { Outlet } from "@tanstack/react-router";
import { Header } from "@/components/screens/site-layout/header";

const SiteLayout = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <Outlet />
        </div>
    );
};

export const Route = createFileRoute("/_site")({
    component: SiteLayout,
});
