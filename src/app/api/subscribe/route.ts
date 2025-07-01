import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY_ADMIN
  const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID
  const FROM_EMAIL = 'María Lípiz <marialipiz@matessindramas.com>' // ⚠️ Debe estar verificado en Resend

  if (!RESEND_API_KEY || !AUDIENCE_ID || !FROM_EMAIL) {
    console.error('❌ Faltan variables de entorno necesarias')
    return NextResponse.json(
      { error: 'Configuración incompleta del servidor' },
      { status: 500 }
    )
  }

  const resend = new Resend(RESEND_API_KEY)

  try {
    const { email } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log('❌ Email inválido')
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }

    // 1. Añadir a la lista (audience)
    const contact = await resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId: AUDIENCE_ID,
    })

    console.log('✅ Contacto añadido a Resend:', contact)

    // 2. Enviar email de bienvenida
const welcomeEmail = await resend.emails.send({
  from: FROM_EMAIL,
  to: email,
  subject: 'Aquí no hay truco',
  html: `
  <div style="font-size: 1.125rem; line-height: 1.6; color: #0E0E0E; background-color: #ffffff;">
    <p>Te doy la bienvenida y te cuento algo.</p>

    <p>Después de 10 años impartiendo clases particulares, vendiendo cursos, trabajando con academias grandes y pequeñas y ayudando 
    a alumnos de todas las carreras, colores y formas a aprobar matemáticas...</p>

    <p>He observado dos tendencias que requieren atención urgente:</p>

    <p><strong>1- El mundo de la enseñanza está lleno de gente que no sabe enseñar.</strong></p>
    <p>Me explico:</p>
    <p>NO vendo cursos donde te digo "sigue esta fórmula para resolver X y aprueba Y a la primera" ni enseño a mis alumnos tonterías como esas.</p>
    <p>Primero: porque estaría inculcando todo lo contrario a lo que se necesita para superar cualquier asignatura de matemáticas.</p>
    <p>Segundo: porque te estaría engañando. Aquí no hay receta mágica.</p>

    <p>Soy matemática, enseño la rama de conocimiento más odiada de todas y lo hago como 
    lo haría un matemático: de forma lógica, entretenida, estructurada y sin enseñar a memorizar.</p>

    <p>Si aprendes de esta forma, no habrá profesor ni examen que te quite tu aprobado.</p>

    <p><strong>2- Con todo el ruido que hay ahí fuera, es muy difícil tomar buenas decisiones.</strong></p>

    <p>Todo lo que enseño y la manera en la que lo enseño es fruto de mi experiencia.</p>
    
    <p>No vale de nada replicar lo que otros hacen si no estás seguro de que funciona.</p>

    <p>Así que te mandaré un email semanal con un consejo para aprobar más y aprender mejor.</p>
    <p>Aquí el primero: las definiciones son tus mejores amigas.</p>

    <p>Pasa un buen día</p>
    </div>
  `,
  text: `
Te doy la bienvenida y te cuento algo.

Después de 10 años impartiendo clases particulares, vendiendo cursos, trabajando con academias grandes y pequeñas y ayudando 
a alumnos de todas las carreras, colores y formas a aprobar matemáticas...

He observado dos tendencias que requieren atención urgente:

1- El mundo de la enseñanza está lleno de gente que no sabe enseñar.

Me explico:
NO vendo cursos donde te digo "sigue esta fórmula para resolver X y aprueba Y a la primera" ni enseño a mis alumnos tonterías como esas.

Primero: porque estaría inculcando todo lo contrario a lo que se necesita para superar cualquier asignatura de matemáticas.
Segundo: porque te estaría engañando. Aquí no hay receta mágica.

Soy matemática, enseño la rama de conocimiento más odiada de todas y lo hago como lo haría un matemático: de forma lógica, entretenida, estructurada y sin enseñar a memorizar.

Si aprendes de esta forma, no habrá profesor ni examen que te quite tu aprobado.

2- Con todo el ruido que hay ahí fuera, es muy difícil tomar buenas decisiones.

Todo lo que enseño y la manera en la que lo enseño es fruto de mi experiencia.
No vale de nada replicar lo que otros hacen si no estás seguro de que funciona.

Así que te mandaré un email semanal con un consejo para aprobar más y aprender mejor.

Aquí el primero: las definiciones son tus mejores amigas.

Pasa un buen día
`
})



    console.log('📧 Email de bienvenida enviado:', welcomeEmail)

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('🔥 ERROR en subscribe:', error)
    return NextResponse.json(
      { error: error.message || 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
