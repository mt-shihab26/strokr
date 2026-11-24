import { createFileRoute } from "@tanstack/react-router";

const App = () => {
    return (
        <main className="grid min-h-screen place-items-center">
            <h1 className="text-4xl font-bold">Hello world</h1>
        </main>
    );
};

export const Route = createFileRoute("/")({ component: App });
