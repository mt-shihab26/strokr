import type { ComponentProps, ReactNode } from "react";

import { Field } from "./field";

export const EmailField = ({
    label = "Email",
    ...props
}: Omit<ComponentProps<typeof Field>, "type" | "label"> & {
    label?: ReactNode;
}) => {
    return (
        <Field
            label={label}
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            {...props}
        />
    );
};
