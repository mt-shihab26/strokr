import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { createFileRoute } from "@tanstack/react-router";
import { getUser } from "@/server/auth/session";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
    loader: () => getUser(),
    component: App,
});

function App() {
    const user = Route.useLoaderData();

    return (
        <main className="grid place-items-center p-4">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <Badge variant="secondary">strokr</Badge>
                    <CardTitle className="text-4xl font-bold">Hello world</CardTitle>
                    <CardDescription>A keyboard-first typing speed trainer.</CardDescription>
                </CardHeader>
                <CardContent>
                    {user ? (
                        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
                            <dt className="text-muted-foreground">Name</dt>
                            <dd>{user.name}</dd>
                            <dt className="text-muted-foreground">Email</dt>
                            <dd>{user.email}</dd>
                            <dt className="text-muted-foreground">Leaderboard</dt>
                            <dd>{user.showOnLeaderboard ? "Shown" : "Hidden"}</dd>
                        </dl>
                    ) : (
                        <p className="text-sm text-muted-foreground">You're not signed in.</p>
                    )}
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Start typing</Button>
                </CardFooter>
            </Card>
        </main>
    );
}
