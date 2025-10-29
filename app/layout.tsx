import './globals.css';
import Link from 'next/link';
import { ReactNode } from 'react';

export const metadata = {
  title: 'RSC SaaS Starter',
  description: 'Next.js App Router SaaS starter',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <nav className="max-w-5xl mx-auto flex items-center gap-6 p-4">
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <a href="/api/auth/signin">Sign in</a>
            <a href="/api/auth/signout">Sign out</a>
          </nav>
        </header>
        <main className="max-w-5xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
