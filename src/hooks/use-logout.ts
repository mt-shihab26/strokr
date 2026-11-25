import { useRouter } from "@tanstack/react-router";
import { authClient } from "@/lib/auth-client";

export const useLogout = () => {
    const router = useRouter();

    return async () => {
        await authClient.signOut();
        await router.invalidate();
    };
};
