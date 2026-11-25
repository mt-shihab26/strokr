export const strengthColors = ["bg-rose-500", "bg-amber-500", "bg-lime-500", "bg-emerald-500"];

export const getStrength = (password: string) => {
    if (!password) return 0;
    const checks = [
        password.length >= 8,
        /[a-z]/.test(password) && /[A-Z]/.test(password),
        /\d/.test(password),
        /[^A-Za-z0-9]/.test(password),
    ];
    return Math.max(1, checks.filter(Boolean).length);
};
