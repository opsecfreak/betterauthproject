**Title:** Add E-mail Verification Flow

**Description:**

The `User` model in `prisma/schema.prisma` includes an `emailVerified` field, but there is no implementation for this feature. An e-mail verification flow should be added to ensure that users have provided a valid e-mail address.

**Acceptance Criteria:**

*   After registration, the user should be sent a verification e-mail.
*   The e-mail should contain a unique link that the user can click to verify their e-mail address.
*   Upon clicking the link, the `emailVerified` field for the user should be updated in the database.
*   Users should not be able to access certain features until their e-mail is verified.

**Files to Modify:**

*   `src/lib/auth.ts`
*   `prisma/schema.prisma` (if any changes are needed)
