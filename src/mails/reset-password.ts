import type { TEmail } from "@/lib/mailer";
import { layout } from "./layout";

export const resetPasswordEmail = (to: string, url: string): TEmail => ({
    to,
    subject: "Reset your strokr password",
    html: layout(
        "Reset your password",
        "Someone asked to reset the password for your strokr account. If it wasn't you, ignore this email.",
        "Choose a new password",
        url,
    ),
    text: `Reset your strokr password: ${url}`,
});
