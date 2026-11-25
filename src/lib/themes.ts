export const themes = [
    { key: "system", label: "System" },
    { key: "dark", label: "Dark" },
    { key: "light", label: "Light" },
    { key: "nord", label: "Nord" },
    { key: "sepia", label: "Sepia" },
    { key: "tokyo-night", label: "Tokyo Night" },
    { key: "matrix", label: "Matrix" },
];

export const themeKey = "theme";
export const defaultTheme = "system";

export const getTheme = () => localStorage.getItem(themeKey) ?? defaultTheme;

export const applyTheme = (choice: string) => {
    const root = document.documentElement;
    const light = matchMedia("(prefers-color-scheme: light)").matches;
    root.dataset.theme = choice === "system" ? (light ? "light" : "dark") : choice;
    root.dataset.themeChoice = choice;
};

export const setTheme = (choice: string) => {
    localStorage.setItem(themeKey, choice);
    applyTheme(choice);
};
