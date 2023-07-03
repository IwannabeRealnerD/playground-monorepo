<div align="center">
  <h2 align="center">playground-monorepo</h2>

  <p align="center">
    monorepo for playgrounds(nextjs(react), vite(svelte), vite(react), nestjs)
  </p>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/svelte-FF3200?style=for-the-badge&logo=svelte&logoColor=white"> 
  <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white">
  <br>
  <img src="https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white">
  <img src="https://img.shields.io/badge/turborepo-EF4444?style=for-the-badge&logo=turborepo&logoColor=white">
</div>

This repository is a monorepo built on top of pnpm workspace and contains projects that I use to test and learn various web development frameworks.

## Projects in the repository

- Four front-end projects and one back-end project exist inside `apps` directory.

### Project description

- nextjs-playground: playground based on Next.js 13 and React 18
- vite-react-playground: Web UI component playground based on Vite and React 18
- svelte-kit-playground: playground using Svelte Kit
- nest-server: backend playground with a server based on nestjs (no progress yet)

## How to run projects

### nextjs-playground

1. Download pnpm and turbo on your local machine
   - https://pnpm.io/installation - corepack recommended
   - https://turbo.build/repo/docs/getting-started/add-to-project
2. Run the `pnpm i --frozen-lockfile` command to install the dependency.
   - ```bash
       pnpm i --frozen-lockfile
     ```
3. Check package.json scripts in project's root directoriy to find out how to start each playground project
   - Start nextjs playground dev server
     ```bash
         pnpm dev-nextjs
     ```
   - Start uivite(react) playground storybook
     ```bash
         pnpm storybook-uivite
     ```
