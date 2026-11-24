import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const App = () => {
    const container = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            gsap.from("[data-animate]", {
                y: 24,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            });
        },
        { scope: container },
    );

    return (
        <main ref={container} className="grid min-h-screen place-items-center p-4">
            <Card data-animate className="w-full max-w-sm">
                <CardHeader>
                    <Badge variant="secondary">strokr</Badge>
                    <CardTitle className="text-4xl font-bold">Hello world</CardTitle>
                    <CardDescription>A keyboard-first typing speed trainer.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        Built with TanStack Start, Tailwind CSS, shadcn/ui and GSAP.
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
