import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY_PUBLIC);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID!;

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
    }

    await resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId: AUDIENCE_ID,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    if (error.message?.includes('already exists')) {
      return NextResponse.json({ error: 'Este email ya está suscrito' }, { status: 409 });
    }

    console.error(error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
