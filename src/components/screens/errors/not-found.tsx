import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export const NotFound = () => {
    return (
        <main className="grid min-h-screen place-items-center p-4">
            <div className="flex flex-col items-center gap-6 text-center">
                <p className="font-mono text-7xl font-bold">404</p>
                <div>
                    <h1 className="text-xl font-semibold">Page not found</h1>
                    <p className="mt-1 text-sm text-muted-foreground">This page doesn't exist.</p>
                </div>
                <Button render={<Link to="/" />}>Back home</Button>
            </div>
        </main>
    );
};
