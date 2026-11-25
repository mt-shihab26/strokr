import type { ReactElement } from "react";

import { envServer } from "./env-server";
import { render } from "@react-email/render";

import nodemailer from "nodemailer";

export type TEmail = {
    to: string;
    subject: string;
    html: string;
    text: string;
};

const transporter = nodemailer.createTransport({
    host: envServer.SMTP_HOST,
    port: envServer.SMTP_PORT,
    secure: envServer.SMTP_PORT === 465,
    auth: {
        user: envServer.SMTP_USER,
        pass: envServer.SMTP_PASS,
    },
});

export const renderEmail = async ({
    to,
    subject,
    element,
}: {
    to: string;
    subject: string;
    element: ReactElement;
}): Promise<TEmail> => ({
    to,
    subject,
    html: await render(element),
    text: await render(element, { plainText: true }),
});

export const sendEmail = async (email: TEmail) => {
    await transporter.sendMail({ from: envServer.MAIL_FROM, ...email });
};
