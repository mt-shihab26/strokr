export const NotFound = () => {
    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
            <p className="font-mono text-7xl font-bold text-primary">404</p>
            <div>
                <h1 className="text-xl font-semibold text-ink-100">Page not found</h1>
                <p className="mt-1 text-sm text-ink-500">
                    This page doesn't exist. Your fingers may have slipped.
                </p>
            </div>
            <a
                href="/"
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-ink-950 hover:opacity-90"
            >
                Back to the test
            </a>
        </div>
    );
};
