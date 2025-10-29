import Link from 'next/link';

export default function Page() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Next.js RSC SaaS Starter</h1>
      <p>A modern starter with auth, billing, uploads and tests.</p>
      <div className="flex gap-3">
        <Link className="btn btn-primary" href="/dashboard">Go to Dashboard</Link>
        <a className="btn" href="https://github.com/joeycaughey">GitHub</a>
      </div>
      <ul className="list-disc pl-5">
        <li>Auth.js (Credentials for demo) + Prisma (SQLite)</li>
        <li>Stripe checkout + webhook stub</li>
        <li>S3 signed uploads</li>
        <li>Resend email utility</li>
      </ul>
    </section>
  );
}
