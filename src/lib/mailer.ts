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
    host: envServer.MAIL_HOST,
    port: envServer.MAIL_PORT,
    secure: envServer.MAIL_PORT === 465,
    auth: {
        user: envServer.MAIL_USERNAME,
        pass: envServer.MAIL_PASSWORD,
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
    await transporter.sendMail({
        from: { name: envServer.MAIL_FROM_NAME, address: envServer.MAIL_FROM_ADDRESS },
        ...email,
    });
};
