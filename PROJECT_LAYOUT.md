# Project Layout

This document provides a detailed breakdown of the project's directory and file structure.

## Root Directory

*   `.gitignore`: Specifies intentionally untracked files to ignore.
*   `next.config.ts`: Configuration file for Next.js.
*   `package.json`: Lists the project's dependencies and scripts.
*   `package-lock.json`: Records the exact version of each installed package.
*   `postcss.config.mjs`: Configuration for PostCSS, used by Tailwind CSS.
*   `README.md`: The main README file for the project.
*   `tsconfig.json`: The configuration file for TypeScript.
*   `vercel.json`: Configuration for deploying to Vercel.

## `src/` Directory

This directory contains the main source code for the application.

### `src/app/`

This directory contains the application's pages and routes, following the Next.js App Router structure.

*   `src/app/globals.css`: Global CSS styles for the application.
*   `src/app/layout.tsx`: The root layout for the application.
*   `src/app/page.tsx`: The main landing page of the application.
*   `src/app/login/page.tsx`: The login page for users to authenticate.
*   `src/app/protected/page.tsx`: A sample page that requires authentication to access.
*   `src/app/favicon.ico`: The favicon for the application.

### `src/lib/`

This directory contains the core logic of the application.

*   `src/lib/auth.ts`: This file contains the core authentication logic for the application. It includes functions for user registration, signing in, and session management. It uses the `better-auth` library to handle the authentication flow.

## `prisma/` Directory

This directory contains all files related to the Prisma ORM.

*   `prisma/schema.prisma`: The Prisma schema file, which defines the database models and their relationships.

## `public/` Directory

This directory contains static assets that are publicly accessible.

*   `public/*.svg`: Various SVG images used in the application.
