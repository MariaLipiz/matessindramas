import { resend } from '../../../../lib/resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { subject, content, scheduledAt } = await req.json();

    const broadcast = await resend.broadcasts.create({
      name: `MatesSinDramas - ${subject}`,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
      from: 'María Lipiz <marialipiz@matessindramas.com>',
      subject,
      html: `${content}<hr><p style="font-size: 12px; color: #666;">Puedes darte de baja <a href="{{{RESEND_UNSUBSCRIBE_URL}}}">aquí</a></p>`,
    });

    const response = await fetch(`https://api.resend.com/v1/broadcasts/${broadcast.data?.id}/send`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY_ADMIN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ scheduledAt }),
    });

    if (!response.ok) {
      throw new Error(`Error al programar envío: ${response.status}`);
    }

    return NextResponse.json({ success: true, broadcastId: broadcast.data?.id });
  } catch (error: any) {
    console.error('❌ Error al programar broadcast:', error);
    return NextResponse.json({ error: error.message || 'Error interno' }, { status: 500 });
  }
}
