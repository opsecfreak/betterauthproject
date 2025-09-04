'use server';

import { signIn as signInAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';

/**
 * Server action to handle user sign-in.
 * @param formData The form data from the login form.
 * @returns An object with a success or error message.
 */
export async function signIn(prevState: any, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // Basic validation
  if (!email || !password) {
    return { success: false, message: 'Email and password are required.' };
  }

  // Call the main signIn function
  const result = await signInAuth(email, password);

  // Redirect to the protected page on success
  if (result.success) {
    redirect('/protected');
  } else {
    // Return the error message to be displayed on the form
    return { success: false, message: result.message };
  }
}
