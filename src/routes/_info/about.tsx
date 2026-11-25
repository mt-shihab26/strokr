import { createFileRoute } from "@tanstack/react-router";
import { githubUrl } from "@/lib/links";

import { ChartIcon } from "@/components/icons/chart-icon";
import { HistoryIcon } from "@/components/icons/history-icon";
import { KeyboardIcon } from "@/components/icons/keyboard-icon";
import { PaletteIcon } from "@/components/icons/palette-icon";
import { TargetIcon } from "@/components/icons/target-icon";
import { TextIcon } from "@/components/icons/text-icon";

const features = [
    {
        icon: KeyboardIcon,
        title: "Keyboard first",
        body: "Every action has a shortcut. Restart, switch modes and open settings without touching the mouse.",
    },
    {
        icon: TextIcon,
        title: "Per-character feedback",
        body: "Correct, wrong and extra characters are coloured as you type, so mistakes never hide.",
    },
    {
        icon: ChartIcon,
        title: "Charts after every test",
        body: "See wpm, raw speed and errors second by second, plus the keys you missed most.",
    },
    {
        icon: HistoryIcon,
        title: "Full history",
        body: "Every test is saved. Track personal bests and watch your average climb.",
    },
    {
        icon: TargetIcon,
        title: "Targeted practice",
        body: "Drills built from your weakest keys and finger groups.",
    },
    {
        icon: PaletteIcon,
        title: "Themes",
        body: "Dark, light, nord, sepia and matrix — or follow your system.",
    },
];

const numbers = [
    { value: "2.4M", label: "tests taken" },
    { value: "48k", label: "typists" },
    { value: "+18", label: "avg wpm gained" },
    { value: "0", label: "ads" },
];

const questions = [
    {
        question: "How is wpm calculated?",
        answer: "Every 5 correct characters, spaces included, count as one word. Raw wpm counts all characters, including mistakes.",
    },
    {
        question: "Do I need an account?",
        answer: "No. Tests are saved in your browser. Sign in only if you want to sync across devices or join the leaderboard.",
    },
    {
        question: "Is it free?",
        answer: "Yes, and there are no ads.",
    },
    {
        question: "Can I type code?",
        answer: "Yes. Paste any snippet into Custom text and turn on line breaks.",
    },
];

export const Route = createFileRoute("/_info/about")({
    head: () => ({ meta: [{ title: "About — strokr" }] }),
    component: About,
});

function About() {
    return (
        <div className="flex flex-col gap-16">
            <section className="flex flex-col items-center gap-6 pt-6 text-center">
                <p className="font-mono text-xs text-primary">about strokr</p>
                <h1 className="max-w-2xl text-4xl font-semibold text-balance text-ink-100 sm:text-5xl">
                    Get faster at typing by seeing every keystroke.
                </h1>
                <p className="max-w-xl text-ink-400">
                    strokr checks each character as you type, shows you exactly where you slipped,
                    and charts your speed and accuracy after every test — all without leaving the
                    keyboard.
                </p>
                <div className="flex gap-3">
                    <a
                        href="/"
                        className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-ink-950 hover:opacity-90"
                    >
                        Start typing
                    </a>
                    <a
                        href={githubUrl}
                        className="rounded-lg border border-ink-800 px-5 py-2.5 text-sm text-ink-300 hover:bg-ink-900"
                    >
                        View on GitHub
                    </a>
                </div>
            </section>

            <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="rounded-2xl border border-ink-900 bg-ink-900/30 p-6"
                    >
                        <span className="grid size-10 place-items-center rounded-xl bg-primary/10">
                            <feature.icon className="size-5 text-primary" stroke="currentColor" />
                        </span>
                        <h2 className="mt-4 font-medium text-ink-100">{feature.title}</h2>
                        <p className="mt-2 text-sm text-ink-500">{feature.body}</p>
                    </div>
                ))}
            </section>

            <section className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-900 bg-ink-900 md:grid-cols-4">
                {numbers.map((number) => (
                    <div key={number.label} className="bg-ink-950 p-6 text-center">
                        <p className="font-mono text-3xl font-bold text-primary">{number.value}</p>
                        <p className="mt-1 text-sm text-ink-500">{number.label}</p>
                    </div>
                ))}
            </section>

            <section className="mx-auto flex w-full max-w-2xl flex-col gap-3">
                <h2 className="mb-2 text-center text-2xl font-semibold text-ink-100">Questions</h2>
                {questions.map((item) => (
                    <details
                        key={item.question}
                        className="group rounded-xl border border-ink-900 bg-ink-900/30 px-5 open:bg-ink-900/60"
                    >
                        <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-sm text-ink-100">
                            {item.question}
                            <span className="text-ink-500 group-open:rotate-45">+</span>
                        </summary>
                        <div>
                            <p className="pb-4 text-sm text-ink-400">{item.answer}</p>
                        </div>
                    </details>
                ))}
            </section>
        </div>
    );
}
