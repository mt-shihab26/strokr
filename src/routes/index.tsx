import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { createFileRoute } from "@tanstack/react-router";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const App = () => {
    return (
        <main className="grid min-h-screen place-items-center p-4">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <Badge variant="secondary">strokr</Badge>
                    <CardTitle className="text-4xl font-bold">Hello world</CardTitle>
                    <CardDescription>A keyboard-first typing speed trainer.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        Built with TanStack Start, Tailwind CSS, and shadcn/ui.
                    </p>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Start typing</Button>
                </CardFooter>
            </Card>
        </main>
    );
};

export const Route = createFileRoute("/")({
    component: App,
});
