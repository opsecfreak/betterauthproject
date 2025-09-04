'use server';

import { signOut as signOutAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';

/**
 * Server action to handle user sign-out.
 */
export async function signOut() {
  // Call the main signOut function to delete the session cookie
  await signOutAuth();
  // Redirect the user to the login page
  redirect('/login');
}
