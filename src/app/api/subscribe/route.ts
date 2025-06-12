import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY_ADMIN
  const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID

  if (!RESEND_API_KEY || !AUDIENCE_ID) {
    console.error('❌ Faltan variables de entorno RESEND_API_KEY_ADMIN o RESEND_AUDIENCE_ID')
    return NextResponse.json(
      { error: 'Configuración incompleta del servidor' },
      { status: 500 }
    )
  }

  const resend = new Resend(RESEND_API_KEY)

  try {
    const { email } = await req.json()

    console.log('👉 Email recibido:', email)
    console.log('👉 Audience ID:', AUDIENCE_ID)

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log('❌ Email inválido')
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }

    const result = await resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId: AUDIENCE_ID,
    })

    console.log('✅ Contacto creado en Resend:', result)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('🔥 ERROR al crear contacto:', error)
    return NextResponse.json(
      { error: error.message || 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
