import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import { defineConfig, lazyPlugins } from "vite-plus";
import { reactCompilerPreset } from "@vitejs/plugin-react";

import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    resolve: { tsconfigPaths: true },
    plugins: lazyPlugins(() => [
        devtools(),
        nitro({ rollupConfig: { external: [/^@sentry\//] } }),
        tailwindcss(),
        tanstackStart({
            router: {
                generatedRouteTree: "tree.gen.ts",
            },
        }),
        react(),
        babel({
            presets: [reactCompilerPreset()],
        }),
    ]),
    server: {
        watch: {
            ignored: ["**/.agents/**", "**/.claude/**", "**/.cursor/**", "**/.junie/**"],
        },
    },
    lint: {
        ignorePatterns: [
            "node_modules/**",
            "public/**",
            ".output/**",
            ".nitro/**",
            ".tanstack/**",
            "drizzle/**",
            "src/tree.gen.ts",
        ],
        options: {
            denyWarnings: true,
            typeAware: true,
        },
    },
    fmt: {
        printWidth: 100,
        tabWidth: 4,
        singleQuote: false,
        semi: true,
        singleAttributePerLine: false,
        htmlWhitespaceSensitivity: "css",
        ignorePatterns: [".github/**", "src/tree.gen.ts"],
        sortTailwindcss: {
            functions: ["clsx"],
            stylesheet: "src/main.css",
        },
    },
});
