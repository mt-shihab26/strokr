import { createFileRoute } from "@tanstack/react-router";

import { Outlet } from "@tanstack/react-router";
import { Header } from "@/components/screens/site-layout/header";

const SiteLayout = () => {
    return (
        <>
            <Header />
            <main id="main" className="flex flex-1 flex-col justify-center gap-8 pb-16">
                <Outlet />
            </main>
        </>
    );
};

export const Route = createFileRoute("/_site")({
    component: SiteLayout,
});
