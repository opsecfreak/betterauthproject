# Better Auth Project

This is a Next.js project demonstrating a basic authentication setup using `better-auth`, Prisma, and a PostgreSQL database.

## Technology Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Authentication:** [better-auth](https://www.npmjs.com/package/better-auth)
*   **ORM:** [Prisma](https://www.prisma.io/)
*   **Database:** [PostgreSQL](https://www.postgresql.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v20 or later)
*   npm
*   Docker (for running a local PostgreSQL instance)

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/your_username/betterauthproject.git
    cd betterauthproject
    ```

2.  **Install NPM packages**
    ```sh
    npm install
    ```

3.  **Set up environment variables**

    Create a `.env` file in the root of the project and add the following variables:

    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
    BETTER_AUTH_SECRET="your-super-secret-key"
    BETTER_AUTH_URL="http://localhost:3000/api/auth"
    ```

4.  **Set up the database**

    You can use Docker to spin up a PostgreSQL instance:

    ```sh
    docker run --name some-postgres -e POSTGRES_PASSWORD=password -e POSTGRES_USER=user -e POSTGRES_DB=mydb -p 5432:5432 -d postgres
    ```

    Once the database is running, apply the schema:

    ```sh
    npx prisma db push
    ```

### Running the Application

To run the application in development mode, use the following command:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

*   `src/app/`: Contains the application's pages and routes.
    *   `src/app/login/page.tsx`: The login page.
    *   `src/app/protected/page.tsx`: A sample protected page.
*   `src/lib/`: Contains the core logic of the application.
    *   `src/lib/auth.ts`: The authentication logic, including user registration, sign-in, and session management.
*   `prisma/`: Contains the database schema and migrations.
    *   `prisma/schema.prisma`: The Prisma schema for the database.
*   `public/`: Contains static assets like images and fonts.
*   `package.json`: Lists the project's dependencies and scripts.
*   `next.config.ts`: The configuration file for Next.js.
*   `tsconfig.json`: The configuration file for TypeScript.
