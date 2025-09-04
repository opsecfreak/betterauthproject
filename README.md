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

## Issue Management and Labeling

This project uses a comprehensive labeling system to organize and prioritize issues effectively. 

### 📋 Current Issues Status

The project currently has **5 open issues** that need attention:

| Issue # | Title | Priority | Type | Area | Difficulty |
|---------|-------|----------|------|------|------------|
| [#9](https://github.com/opsecfreak/betterauthproject/issues/9) | Implement Session Management in signIn function | 🔴 High | Security | Authentication | Medium |
| [#10](https://github.com/opsecfreak/betterauthproject/issues/10) | Implement Session Retrieval in getSession function | 🔴 High | Security | Authentication | Medium |
| [#11](https://github.com/opsecfreak/betterauthproject/issues/11) | Create User Registration Page | 🟡 Medium | Enhancement | Frontend | Easy |
| [#7](https://github.com/opsecfreak/betterauthproject/issues/7) | Add E-mail Verification Flow | 🟡 Medium | Enhancement | Backend | Hard |
| [#6](https://github.com/opsecfreak/betterauthproject/issues/6) | Enhance UI/UX for Login and Protected Pages | 🟢 Low | Enhancement | UI | Easy |

### 🏷️ Label System

Our labeling system categorizes issues across multiple dimensions:

- **Priority**: `critical`, `high`, `medium`, `low`
- **Type**: `bug`, `enhancement`, `security`, `documentation`, `maintenance`
- **Area**: `authentication`, `frontend`, `backend`, `ui`, `database`, `email`
- **Difficulty**: `good first issue`, `easy`, `medium`, `hard`

### 🚀 Getting Involved

**For New Contributors:**
- Look for issues labeled `good first issue` or `easy`
- Start with Issue #11 (User Registration Page) - it's frontend-focused and well-defined

**For Experienced Developers:**
- Issues #9 and #10 are high-priority security features
- Issue #7 requires email integration expertise

### 📊 Issue Management Tools

We provide several tools to help with issue management:

1. **Issue Labeling Guide**: See `ISSUE_LABELING_GUIDE.md` for detailed labeling standards
2. **Label Management Script**: Use `scripts/update-issue-labels.js` to apply consistent labels
3. **Enhanced Issue Files**: Each issue has a detailed markdown file with metadata

#### Using the Label Management Script

```bash
# Install GitHub CLI if needed
gh auth login

# Show current issues and labels
node scripts/update-issue-labels.js --show-issues

# Create standardized labels in the repository
node scripts/update-issue-labels.js --create-labels

# Apply recommended labels to all issues
node scripts/update-issue-labels.js --apply-labels

# Do everything at once
node scripts/update-issue-labels.js --all
```

### 📈 Project Roadmap

**Phase 1: Core Security (High Priority)**
- [x] ~~Issue #1: Security Vulnerability Assessment~~ *(Completed)*
- [ ] Issue #9: Session Management Implementation
- [ ] Issue #10: Session Retrieval Implementation

**Phase 2: User Experience (Medium Priority)**
- [ ] Issue #11: User Registration Page
- [ ] Issue #7: Email Verification Flow

**Phase 3: Polish (Low Priority)**
- [ ] Issue #6: UI/UX Enhancements

## Contributing

Please read our [Issue Labeling Guide](ISSUE_LABELING_GUIDE.md) before contributing to ensure consistent issue management. When creating new issues, please use the appropriate labels and follow our established categories.
