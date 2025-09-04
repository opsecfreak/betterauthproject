**Title:** Implement Session Management in `signIn` function

**Description:**

The `signIn` function in `src/lib/auth.ts` currently validates user credentials but does not create a user session upon successful authentication. This is a critical step in the authentication flow.

**Acceptance Criteria:**

*   Upon successful sign-in, a session should be created for the user.
*   The session should be stored securely (e.g., using a session cookie).
*   The session should have an expiration date.

**File to Modify:**

*   `src/lib/auth.ts`
