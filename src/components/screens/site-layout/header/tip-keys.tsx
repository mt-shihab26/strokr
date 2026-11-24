export const TipKeys = ({ keys }: { keys: string[] }) => {
    return (
        <span className="flex gap-0.5 font-mono text-[10px]">
            {keys.map((key) => (
                <kbd
                    key={key}
                    className="rounded border border-ink-700 bg-ink-800 px-1 text-ink-300"
                >
                    {key}
                </kbd>
            ))}
        </span>
    );
};
