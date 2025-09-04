'use server';

import { register as registerAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { registerSchema } from '@/lib/auth';

/**
 * Server action to handle user registration.
 * @param prevState The previous state of the form.
 * @param formData The form data from the registration form.
 * @returns An object with a success or error message, and validation errors.
 */
export async function register(prevState: any, formData: FormData) {
  // Convert the form data to an object
  const values = Object.fromEntries(formData.entries());

  // Validate the form data against the schema
  const validatedFields = registerSchema.safeParse(values);

  // If validation fails, return the errors
  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid fields. Please check your input.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Call the main register function
  const result = await registerAuth(validatedFields.data);

  // Redirect to the login page on success
  if (result.success) {
    redirect('/login');
  } else {
    // Return the error message to be displayed on the form
    return {
      success: false,
      message: result.message,
    };
  }
}
