import React from 'react';
import { getSession } from '../../lib/auth';

export default async function ProtectedPage() {
  const session = await getSession();
  if (!session) {
    // Redirect to login or show unauthorized
    return <div>Unauthorized. Please <a href="/login">login</a>.</div>;
  }
  return <div>Welcome, {session.user.email}!</div>;
}
