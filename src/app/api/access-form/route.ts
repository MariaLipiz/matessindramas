// app/api/access-form/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      whatsapp,
      email,
      twitter,
      objetivoPrincipal,
      dedicacion,
      objetivo,
      obstaculos,
      urgencia,
      capital,
      decision,
      puntualidad,
    } = data;

    if (!whatsapp || !email || !twitter) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Formulario Web <onboarding@resend.dev>",
      to: process.env.ACCESS_FORM_TO_EMAIL as string,
      subject: "Nueva solicitud desde el formulario de acceso",
      html: `
        <h2>Nueva solicitud de acceso</h2>

        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Usuario de X/Twitter:</strong> ${twitter}</p>

        <hr />

        <p><strong>Objetivo principal:</strong> ${objetivoPrincipal}</p>
        <p><strong>Dedicación actual:</strong> ${dedicacion}</p>
        <p><strong>Objetivo 3 meses - 1 año:</strong> ${objetivo}</p>
        <p><strong>Obstáculos:</strong> ${
          Array.isArray(obstaculos) ? obstaculos.join(", ") : obstaculos
        }</p>
        <p><strong>Urgencia:</strong> ${urgencia}</p>
        <p><strong>Capital disponible:</strong> ${capital}</p>
        <p><strong>Decisión:</strong> ${decision}</p>
        <p><strong>Puntualidad:</strong> ${puntualidad}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Error enviando el formulario" },
      { status: 500 }
    );
  }
}