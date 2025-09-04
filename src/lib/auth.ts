import { betterAuth } from "better-auth";
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  url: process.env.BETTER_AUTH_URL,
});

// Ensure the JWT_SECRET is set in the environment
if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is not set');
}
const secretKey = process.env.JWT_SECRET;
const key = new TextEncoder().encode(secretKey);

/**
 * Encrypts a payload into a JWT.
 * @param payload The data to encrypt.
 * @returns The JWT string.
 */
export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1h') // Token expires in 1 hour
    .sign(key);
}

/**
 * Decrypts a JWT and returns its payload.
 * @param input The JWT string to decrypt.
 * @returns The payload of the JWT, or null if verification fails.
 */
export async function decrypt(input: string): Promise<any> {
  try {
    const { payload } = await jwtVerify(input, key, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    // Return null if the token is invalid or expired
    return null;
  }
}

import { z } from 'zod';

// Schema for registration form validation
export const registerSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  // Password must be at least 8 characters long and contain one number
  password: z.string().min(8, 'Password must be at least 8 characters long.').regex(/\d/, 'Password must contain at least one number.'),
});

/**
 * Registers a new user.
 * @param values The user's email and password.
 * @returns An object indicating success or failure.
 */
export async function register(values: z.infer<typeof registerSchema>) {
  // Validate the input fields
  const validatedFields = registerSchema.safeParse(values);
  if (!validatedFields.success) {
    return { success: false, message: 'Invalid fields', errors: validatedFields.error.flatten().fieldErrors };
  }

  const { email, password } = validatedFields.data;

  // Check if the user already exists
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return { success: false, message: 'Email already registered.' };
  }

  // Hash the password before saving it to the database
  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({ data: { email, password: hashed } });

  return { success: true, user: { email: user.email } };
}

/**
 * Signs in a user.
 * @param email The user's email.
 * @param password The user's password.
 * @returns An object indicating success or failure.
 */
export async function signIn(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !user.password) {
    return { success: false, message: 'Invalid credentials.' };
  }

  // Compare the provided password with the hashed password in the database
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return { success: false, message: 'Invalid credentials.' };
  }

  // Create a session JWT
  const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour from now
  const session = await encrypt({ user: { id: user.id, email: user.email }, expires });

  // Store the session in a secure, HTTP-only cookie
  cookies().set('session', session, { expires, httpOnly: true });

  return { success: true, user: { email: user.email } };
}

/**
 * Signs out the current user by deleting the session cookie.
 */
export async function signOut() {
  cookies().set('session', '', { expires: new Date(0) });
}

/**
 * Retrieves the current user's session from the session cookie.
 * @returns The session payload, or null if no valid session is found.
 */
export async function getSession() {
  const session = cookies().get('session')?.value;
  if (!session) return null;
  return await decrypt(session);
}