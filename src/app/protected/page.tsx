import { getSession } from '@/lib/auth';
import { signOut } from './actions';

/**
 * A protected page that is only accessible to authenticated users.
 * The protection is enforced by the middleware.
 */
export default async function ProtectedPage() {
  // The session is guaranteed to exist here because of the middleware.
  const session = await getSession();

  return (
    <div>
      <h1>Welcome, {session?.user?.email}!</h1>
      <p>This is a protected page.</p>

      {/* A form that calls the signOut server action. */}
      <form action={signOut}>
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
}
