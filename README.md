# strokr

A keyboard-first typing speed trainer. It gives per-character feedback as you type, charts WPM and accuracy after each test, and keeps a history of past tests.

## Prerequisites

Install these before setting up the project:

| Tool                          | Version | Used for                                          |
| ----------------------------- | ------- | ------------------------------------------------- |
| [Git](https://git-scm.com)    | 2.56+   | Cloning the repository                            |
| [Bun](https://bun.sh)         | 1.4.5+  | Package manager and the setup script              |
| [Node.js](https://nodejs.org) | 26.12+  | Runs the Vite+ (`vp`) and TypeScript (`tsc`) CLIs |

## Getting started

```sh
git clone https://github.com/mt-shihab26/strokr.git
cd strokr
bun run setup
bun run dev
```

`bun run setup` installs dependencies. The app runs at http://localhost:3000.
