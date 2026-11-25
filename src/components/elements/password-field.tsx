import type { ComponentProps, ReactNode } from "react";

import { Field } from "./field";

export const PasswordField = ({
    label = "Password",
    ...props
}: Omit<ComponentProps<typeof Field>, "type" | "label"> & {
    label?: ReactNode;
}) => {
    return (
        <Field
            label={label}
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="••••••••"
            {...props}
        />
    );
};
