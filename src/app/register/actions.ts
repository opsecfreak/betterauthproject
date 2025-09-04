'use server';

import { register as registerAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { registerSchema } from '@/lib/auth';

export async function register(prevState: any, formData: FormData) {
  const values = Object.fromEntries(formData.entries());
  const validatedFields = registerSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Invalid fields',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const result = await registerAuth(validatedFields.data);

  if (result.success) {
    redirect('/login');
  } else {
    return {
      success: false,
      message: result.message,
    };
  }
}
