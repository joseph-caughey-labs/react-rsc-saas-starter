import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/api/auth/signin');

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome, {session.user?.email}</p>

      <div className="card">
        <h2 className="font-semibold mb-2">Billing</h2>
        <form action="/api/stripe/checkout" method="POST">
          <button className="btn btn-primary" type="submit">Start Subscription</button>
        </form>
      </div>

      <div className="card">
        <h2 className="font-semibold mb-2">Upload</h2>
        <form action="/api/upload" method="POST">
          <button className="btn" type="submit">Get Signed URL</button>
        </form>
      </div>

      <Link href="/">← Back</Link>
    </section>
  );
}
