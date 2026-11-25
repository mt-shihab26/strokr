import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { authServer } from "@/lib/auth-server";

export const getUser = createServerFn({ method: "GET" }).handler(async () => {
    const session = await authServer.api.getSession({ headers: getRequestHeaders() });
    return session?.user ?? null;
});
