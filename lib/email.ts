import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY || '';
export const resend = new Resend(apiKey);

export async function sendHello(to: string) {
  if (!apiKey) return { error: 'RESEND_API_KEY not set' };
  const from = process.env.FROM_EMAIL || 'hello@example.com';
  return resend.emails.send({
    to, from, subject: 'Welcome to SaaS Starter', html: '<h1>Hello!</h1><p>Thanks for trying the starter.</p>'
  });
}
