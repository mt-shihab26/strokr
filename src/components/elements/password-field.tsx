import type { ComponentProps, ReactNode } from "react";

import { useState } from "react";

import { EyeIcon } from "@/components/icons/eye-icon";
import { EyeOffIcon } from "@/components/icons/eye-off-icon";
import { Field } from "./field";

export const PasswordField = ({
    label = "Password",
    ...props
}: Omit<ComponentProps<typeof Field>, "type" | "label" | "end"> & {
    label?: ReactNode;
}) => {
    const [visible, setVisible] = useState(false);
    const Icon = visible ? EyeOffIcon : EyeIcon;

    return (
        <Field
            label={label}
            type={visible ? "text" : "password"}
            name="password"
            autoComplete="current-password"
            placeholder="••••••••"
            end={
                <button
                    type="button"
                    aria-label={visible ? "Hide password" : "Show password"}
                    aria-pressed={visible}
                    onClick={() => setVisible((value) => !value)}
                    className="grid size-10 cursor-pointer place-items-center text-ink-500 hover:text-ink-300"
                >
                    <Icon className="size-4" stroke="currentColor" />
                </button>
            }
            {...props}
        />
    );
};
