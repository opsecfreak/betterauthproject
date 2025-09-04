"use client";

import { useFormState } from 'react-dom';
import { signIn } from './actions';
import Link from 'next/link';

/**
 * The login page component.
 * This component renders a form that uses a server action to sign in the user.
 */
export default function LoginPage() {
  // The initial state for the form
  const initialState = { success: false, message: '' };
  // useFormState is a hook that manages form state and returns the current state and a dispatch function
  const [state, dispatch] = useFormState(signIn, initialState);

  return (
    <div>
      <h1>Login</h1>
      {/* The form calls the server action on submission */}
      <form action={dispatch}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Password" required />
        </div>
        <button type="submit">Sign In</button>
      </form>
      {/* Display an error message if the sign-in fails */}
      {state && !state.success && state.message && (
        <p style={{ color: 'red' }}>{state.message}</p>
      )}
      <p>
        Don't have an account? <Link href="/register">Register</Link>
      </p>
    </div>
  );
}
