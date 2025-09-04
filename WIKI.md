# Project Wiki

Welcome to the Better Auth Project wiki!

## 1. Authentication System

The authentication system is built using the `better-auth` library, which provides a flexible and secure way to handle user authentication. The core logic is located in `src/lib/auth.ts`.

### Authentication Flow

1.  **User Registration:** New users can register through the `/register` page. The `register` function in `src/lib/auth.ts` handles the creation of a new user in the database. Passwords are hashed using `bcryptjs` before being stored.

2.  **User Sign-in:** Existing users can sign in through the `/login` page. The `signIn` function validates the user's credentials. Upon successful validation, a session is created and a session cookie is sent to the client.

3.  **Session Management:** The `getSession` function is used to retrieve the current user's session from the session cookie. This function is used to protect routes and access user information on the server-side.

### Key Files

*   `src/lib/auth.ts`: Core authentication logic.
*   `src/app/login/page.tsx`: Login page UI.
*   `src/app/register/page.tsx`: Registration page UI.
*   `src/app/protected/page.tsx`: Example of a protected page.

## 2. Database Schema

The database schema is defined in `prisma/schema.prisma` and managed using the Prisma ORM.

### Models

*   **`User`**: Represents a user of the application.
    *   `id`: Unique identifier for the user.
    *   `email`: The user's e-mail address (unique).
    *   `password`: The user's hashed password.
    *   `emailVerified`: A timestamp indicating when the user's e-mail was verified.
*   **`Account`**: Represents a linked account from a third-party provider (e.g., Google, GitHub).
*   **`Session`**: Represents a user's session.

### Migrations

Database migrations are handled by Prisma. To apply the schema to the database, run:

```sh
npx prisma db push
```

## 3. Contributing

We welcome contributions to the Better Auth Project! To contribute, please follow these steps:

1.  **Fork the repository.**
2.  **Create a new branch for your feature or bug fix.**
3.  **Make your changes and commit them with a clear and descriptive commit message.**
4.  **Push your changes to your fork.**
5.  **Create a pull request to the main repository.**

### Coding Style

Please follow the existing coding style and conventions used in the project. The project uses TypeScript and follows the standard Next.js project structure.
