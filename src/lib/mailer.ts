import { envServer } from "./env-server";

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

export const sendEmail = async (email: TEmail) => {
    await transporter.sendMail({ from: envServer.MAIL_FROM, ...email });
};
