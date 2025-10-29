import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(_req: NextRequest) {
  const key = process.env.STRIPE_SECRET_KEY;
  const priceId = process.env.STRIPE_PRICE_ID;
  if (!key || !priceId) {
    return NextResponse.json({ error: 'Stripe env not set' }, { status: 500 });
  }
  const stripe = new Stripe(key, { apiVersion: '2024-06-20' });
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${process.env.NEXTAUTH_URL}/dashboard?success=1`,
    cancel_url: `${process.env.NEXTAUTH_URL}/dashboard?canceled=1`
  });
  return NextResponse.redirect(session.url!, { status: 303 });
}
