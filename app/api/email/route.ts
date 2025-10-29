import { NextRequest, NextResponse } from 'next/server';
import { sendHello } from '@/lib/email';

export async function POST(req: NextRequest) {
  const { to } = await req.json();
  const out = await sendHello(to);
  return NextResponse.json(out);
}
