"use client";

import { useFormState } from 'react-dom';
import { signIn } from './actions';

export default function LoginPage() {
  const initialState = { success: false, message: '' };
  const [state, dispatch] = useFormState(signIn, initialState);

  return (
    <div>
      <h1>Login</h1>
      <form action={dispatch}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
      {state && !state.success && state.message && (
        <p style={{ color: 'red' }}>{state.message}</p>
      )}
    </div>
  );
}
