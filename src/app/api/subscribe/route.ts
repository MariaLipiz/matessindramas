import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY_ADMIN);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID!;

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    console.log('👉 Email recibido:', email);
    console.log('👉 Audience ID:', AUDIENCE_ID);

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log('❌ Email inválido');
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
    }

    const result = await resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId: AUDIENCE_ID,
    });

    console.log('✅ Contacto creado en Resend:', result);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('🔥 ERROR al crear contacto:', error);
    return NextResponse.json(
      { error: error.message || 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
