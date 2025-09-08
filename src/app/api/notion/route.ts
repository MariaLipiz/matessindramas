import { NextResponse } from 'next/server'
import { notion } from '@/lib/notion'
import { z } from 'zod'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const LeadSchema = z.object({
  nombre: z.string().min(1, 'Nombre requerido').max(120),
  telefono: z
    .string()
    .min(5, 'Teléfono demasiado corto')
    .max(25, 'Teléfono demasiado largo')
    .regex(/^[+\d][\d\s()-]{4,24}$/, 'Formato de teléfono inválido'),
  email: z.string().email('Email inválido').max(254),
  company: z.string().max(0).optional(), // honeypot anti-bots
})

export async function POST(req: Request) {
  try {
    const json = await req.json().catch(() => null)
    if (!json) {
      return NextResponse.json(
        { ok: false, error: 'JSON inválido' },
        { status: 400 }
      )
    }

    const parsed = LeadSchema.safeParse(json)
    if (!parsed.success) {
      const issues = parsed.error.issues.map(i => i.message)
      return NextResponse.json(
        { ok: false, error: 'Validación: ' + issues.join('; ') },
        { status: 400 }
      )
    }

    const { nombre, telefono, email, company } = parsed.data

    if (typeof company === 'string' && company.length > 0) {
      return NextResponse.json({ ok: true }) // honeypot → ignoramos bots
    }

    const databaseId = process.env.NOTION_DATABASE_ID
    if (!databaseId) {
      return NextResponse.json(
        { ok: false, error: 'Falta NOTION_DATABASE_ID en el servidor' },
        { status: 500 }
      )
    }

    const page = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Nombre: {
          title: [{ type: 'text', text: { content: nombre.slice(0, 250) } }],
        },
        Telefono: { phone_number: telefono },
        Email: { email: email }, // mantenemos el email
        Origen: {
          rich_text: [{ type: 'text', text: { content: 'web-form' } }],
        },
      },
    })

    return NextResponse.json({ ok: true, id: page.id })
  } catch (err: any) {
    console.error('Error Notion:', err?.message || err)
    return NextResponse.json(
      {
        ok: false,
        error:
          'No se pudo guardar en Notion. Revisa token, permisos y nombres de propiedades.',
      },
      { status: 500 }
    )
  }
}
