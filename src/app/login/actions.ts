'use server';

import { signIn as signInAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function signIn(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { success: false, message: 'Email and password are required' };
  }

  const result = await signInAuth(email, password);

  if (result.success) {
    // Redirect to a protected page on success
    redirect('/protected');
  } else {
    return result;
  }
}
