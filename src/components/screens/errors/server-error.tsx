export const ServerError = () => {
    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
            <p className="font-mono text-7xl font-bold text-rose-500">500</p>
            <div>
                <h1 className="text-xl font-semibold text-ink-100">Something broke on our side</h1>
                <p className="mt-1 max-w-sm text-sm text-ink-500">
                    It's not you. Your past tests are safe. Try again in a moment — if it keeps
                    happening, let us know.
                </p>
            </div>
            <div className="flex gap-2">
                <a
                    href="/"
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-ink-950 hover:opacity-90"
                >
                    Try again
                </a>
                <a
                    href="https://github.com/mt-shihab26/strokr/issues"
                    className="rounded-lg border border-ink-800 px-4 py-2 text-sm text-ink-300 hover:bg-ink-900"
                >
                    Report a problem
                </a>
            </div>
            {/* <p className="font-mono text-xs text-ink-700">error id: 7f3a-91c2</p> */}
        </div>
    );
};
