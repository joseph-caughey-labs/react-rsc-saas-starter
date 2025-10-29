import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: NextRequest) {
  const whSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!whSecret || !key) return NextResponse.json({ error: 'Stripe config' }, { status: 500 });

  const body = await req.text();
  const sig = req.headers.get('stripe-signature') as string;
  const stripe = new Stripe(key, { apiVersion: '2024-06-20' });

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, whSecret);
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // handle events
  switch (event.type) {
    case 'checkout.session.completed':
      // TODO: mark user as subscribed
      break;
  }

  return NextResponse.json({ received: true });
}

export const config = { api: { bodyParser: false } } as any;
