import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import { defineConfig, lazyPlugins } from "vite-plus";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    resolve: { tsconfigPaths: true },
    plugins: lazyPlugins(() => [
        nitro(),
        tailwindcss(),
        tanstackStart({ router: { generatedRouteTree: "tree.gen.ts" } }),
        react(),
    ]),
    server: {
        watch: {
            ignored: [
                "**/.agents/**",
                "**/.claude/**",
                "**/.cursor/**",
                "**/.junie/**", //
            ],
        },
    },
    lint: {
        ignorePatterns: [
            "node_modules/**",
            "public/**",
            ".output/**",
            ".nitro/**",
            ".tanstack/**",
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
        ignorePatterns: ["src/tree.gen.ts"],
        sortTailwindcss: { stylesheet: "src/main.css" },
    },
});
