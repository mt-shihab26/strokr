import { createFileRoute } from "@tanstack/react-router";

import { ProseLayout } from "@/components/layouts/prose-layout";

export const Route = createFileRoute("/_info/terms")({
    head: () => ({ meta: [{ title: "Terms — strokr" }] }),
    component: Terms,
});

function Terms() {
    return (
        <ProseLayout
            kicker="legal"
            heading="Terms of use"
            updated="November 24, 2026"
            sections={[
                {
                    title: "Using strokr",
                    body: ["strokr is free to use. By using it you agree to these terms."],
                },
                {
                    title: "Your account",
                    body: [
                        "Keep your password safe. You're responsible for activity on your account.",
                    ],
                },
                {
                    title: "Fair play",
                    body: [
                        "Don't use scripts, macros or other tools to post scores to the leaderboard. Suspicious results may be removed.",
                    ],
                },
                {
                    title: "Your content",
                    body: [
                        "Text you save in Custom mode is yours. Don't upload content you don't have the right to use.",
                    ],
                },
                {
                    title: "Changes",
                    body: [
                        "We may update these terms. We'll note the date at the top of this page when we do.",
                    ],
                },
            ]}
        />
    );
}
