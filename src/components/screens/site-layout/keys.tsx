import { Kbd } from "./kbd";

export const Keys = ({ keys }: { keys: string[] }) => (
    <span className="flex gap-1">
        {keys.map((key) => (
            <Kbd key={key}>{key}</Kbd>
        ))}
    </span>
);
