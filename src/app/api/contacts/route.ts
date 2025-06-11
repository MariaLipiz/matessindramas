import { resend } from '../../../../lib/resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email } = await req.json();
  const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID!;

  if (!email) return NextResponse.json({ error: 'Falta email' }, { status: 400 });

  try {
    const result = await resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId: AUDIENCE_ID,
    });

    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
