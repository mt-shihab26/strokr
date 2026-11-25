import { renderEmail } from "@/lib/mailer";

import { Layout } from "./layout";

export const resetPasswordEmail = (to: string, url: string) => {
    return renderEmail({
        to,
        subject: "Reset your strokr password",
        element: (
            <Layout
                preview="Choose a new password for your strokr account"
                heading="Reset your password"
                action="Choose a new password"
                url={url}
            >
                Someone asked to reset the password for your strokr account. If it wasn't you,
                ignore this email.
            </Layout>
        ),
    });
};
