"use client";

import { useFormState } from 'react-dom';
import { register } from './actions';
import Link from 'next/link';

export default function RegisterPage() {
  const initialState = { success: false, message: '', errors: {} };
  const [state, dispatch] = useFormState(register, initialState);

  return (
    <div>
      <h1>Register</h1>
      <form action={dispatch}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          {state.errors?.email && (
            <p style={{ color: 'red' }}>{state.errors.email[0]}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          {state.errors?.password && (
            <p style={{ color: 'red' }}>{state.errors.password[0]}</p>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
      {state.message && <p style={{ color: 'red' }}>{state.message}</p>}
      <p>
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </div>
  );
}
