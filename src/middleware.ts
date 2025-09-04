import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSession } from './lib/auth';

/**
 * Middleware to protect routes based on authentication status.
 * @param request The incoming request.
 * @returns A response, which can be a redirect or the next step in the chain.
 */
export async function middleware(request: NextRequest) {
  const session = await getSession();
  const { pathname } = request.nextUrl;

  // If the user is not logged in, redirect them to the login page.
  // This applies to the root path and any protected routes.
  if (!session && (pathname === '/' || pathname.startsWith('/protected'))) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If the user is logged in and tries to access the login or register pages,
  // redirect them to the main protected area.
  if (session && (pathname.startsWith('/login') || pathname.startsWith('/register'))) {
    return NextResponse.redirect(new URL('/protected', request.url));
  }

  // Continue to the requested page if no redirection is needed.
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/protected/:path*', '/login', '/register'],
};
