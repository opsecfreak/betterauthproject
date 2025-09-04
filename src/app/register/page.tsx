"use client";

import { useFormState } from 'react-dom';
import { register } from './actions';
import Link from 'next/link';

/**
 * The registration page component.
 * This component renders a form that uses a server action to register a new user.
 */
export default function RegisterPage() {
  // The initial state for the form, including fields for a general message and validation errors.
  const initialState = { success: false, message: '', errors: {} };
  // useFormState manages form state and returns the current state and a dispatch function.
  const [state, dispatch] = useFormState(register, initialState);

  return (
    <div>
      <h1>Register</h1>
      {/* The form calls the server action on submission. */}
      <form action={dispatch}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          {/* Display validation errors for the email field. */}
          {state.errors?.email && (
            <p style={{ color: 'red' }}>{state.errors.email[0]}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          {/* Display validation errors for the password field. */}
          {state.errors?.password && (
            <p style={{ color: 'red' }}>{state.errors.password[0]}</p>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
      {/* Display a general error message if registration fails. */}
      {state.message && <p style={{ color: 'red' }}>{state.message}</p>}
      <p>
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </div>
  );
}
