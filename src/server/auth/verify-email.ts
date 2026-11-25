import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { authServer } from "@/lib/auth-server";

export const resendVerification = createServerFn({ method: "POST" }).handler(async () => {
    const headers = getRequestHeaders();
    const session = await authServer.api.getSession({ headers });
    if (!session) throw new Error("Not signed in");

    await authServer.api.sendVerificationEmail({
        body: { email: session.user.email, callbackURL: "/verify-email" },
        headers,
    });
});
