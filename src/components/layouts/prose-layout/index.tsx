import type { ReactNode } from "react";

export const ProseLayout = ({
    kicker,
    heading,
    updated,
    sections,
}: {
    kicker: string;
    heading: string;
    updated?: string;
    sections: { title: string; body: ReactNode[] }[];
}) => {
    return (
        <div className="flex flex-col gap-10">
            <div className="max-w-2xl">
                <p className="font-mono text-xs text-primary">{kicker}</p>
                <h1 className="mt-2 text-3xl font-semibold text-ink-100">{heading}</h1>
                {updated && <p className="mt-2 text-sm text-ink-500">Last updated {updated}</p>}
            </div>
            <div className="grid items-start gap-10 lg:grid-cols-[12rem_1fr]">
                <nav className="hidden flex-col gap-1 text-sm lg:sticky lg:top-28 lg:flex">
                    {sections.map((section, index) => (
                        <a
                            key={section.title}
                            href={`#s${index}`}
                            className="rounded-lg px-3 py-1.5 text-ink-500 hover:bg-ink-900 hover:text-ink-200"
                        >
                            {section.title}
                        </a>
                    ))}
                </nav>
                <article className="flex max-w-2xl flex-col gap-8">
                    {sections.map((section, index) => (
                        <section key={section.title} id={`s${index}`} className="scroll-mt-28">
                            <h2 className="text-lg font-medium text-ink-100">{section.title}</h2>
                            {section.body.map((paragraph, paragraphIndex) => (
                                <p
                                    key={paragraphIndex}
                                    className="mt-3 leading-relaxed text-ink-400"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </section>
                    ))}
                </article>
            </div>
        </div>
    );
};
