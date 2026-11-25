import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { GitHubIcon } from "@/components/icons/github-icon";

export const GitHubButton = () => {
    return (
        <>
            <Button
                type="button"
                variant="outline"
                className="h-10 gap-2 rounded-lg border-ink-800 bg-ink-950 text-sm font-normal tracking-normal text-ink-200 normal-case hover:border-ink-700 hover:bg-ink-900 hover:text-ink-200 dark:hover:bg-ink-900"
            >
                <GitHubIcon className="size-4" fill="currentColor" aria-hidden="true" />
                Continue with GitHub
            </Button>
            <div className="flex items-center gap-3 text-xs text-ink-600">
                <Separator className="flex-1 bg-ink-800 data-horizontal:w-auto" />
                or
                <Separator className="flex-1 bg-ink-800 data-horizontal:w-auto" />
            </div>
        </>
    );
};
