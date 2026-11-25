import { renderEmail } from "@/lib/mailer";

import { Layout } from "./layout";

export const verificationEmail = (to: string, url: string) => {
    return renderEmail({
        to,
        subject: "Verify your email for strokr",
        element: (
            <Layout
                preview="Confirm your email to finish setting up strokr"
                heading="Verify your email"
                action="Verify email"
                url={url}
            >
                Confirm this address to finish setting up your strokr account. The link expires in
                24 hours.
            </Layout>
        ),
    });
};
