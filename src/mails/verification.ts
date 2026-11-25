import type { TEmail } from "@/lib/mailer";
import { layout } from "./layout";

export const verificationEmail = (to: string, url: string): TEmail => ({
    to,
    subject: "Verify your email for strokr",
    html: layout(
        "Verify your email",
        "Confirm this address to finish setting up your strokr account.",
        "Verify email",
        url,
    ),
    text: `Verify your email for strokr: ${url}`,
});
