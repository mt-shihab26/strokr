import type { ReactNode } from "react";

export const AuthLayout = ({
    heading,
    subheading,
    icon,
    children,
}: {
    heading: string;
    subheading: ReactNode;
    icon?: ReactNode;
    children: ReactNode;
}) => {
    return (
        <>
            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 left-1/2 size-144 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
            </div>
            <div className="flex flex-1 items-center justify-center py-10">
                <div className="w-full max-w-sm">
                    <div className="mb-8 text-center">
                        {icon && (
                            <span className="mx-auto mb-4 grid size-12 place-items-center rounded-2xl bg-primary/10 text-2xl">
                                {icon}
                            </span>
                        )}
                        <h1 className="text-2xl font-semibold text-ink-100">{heading}</h1>
                        <p className="mt-2 text-sm text-ink-500">{subheading}</p>
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
};
