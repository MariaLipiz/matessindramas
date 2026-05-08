// app/api/access-form/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.ACCESS_FORM_TO_EMAIL;

    if (!resendApiKey) {
      console.error("Falta RESEND_API_KEY");
      return NextResponse.json(
        { error: "Falta configurar RESEND_API_KEY" },
        { status: 500 }
      );
    }

    if (!toEmail) {
      console.error("Falta ACCESS_FORM_TO_EMAIL");
      return NextResponse.json(
        { error: "Falta configurar ACCESS_FORM_TO_EMAIL" },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const data = await request.json();

    const {
      whatsapp,
      email,
      estudios,
      curso,
      objetivoPrincipal,
      objetivo,
      urgencia,
      capital,
      decision,
      puntualidad,
    } = data;

    if (
      !whatsapp ||
      !email ||
      !estudios ||
      !curso ||
      !objetivoPrincipal ||
      !objetivo ||
      !urgencia ||
      !capital ||
      !decision ||
      !puntualidad
    ) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Formulario Web <onboarding@resend.dev>",
      to: toEmail,
      subject: "Nueva solicitud desde el formulario de acceso",
      html: `
        <h2>Nueva solicitud de acceso</h2>

        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Email:</strong> ${email}</p>

        <hr />

        <p><strong>¿Qué está estudiando?:</strong> ${estudios}</p>
        <p><strong>¿En qué curso está?:</strong> ${curso}</p>

        <hr />

        <p><strong>Objetivo principal ahora:</strong> ${objetivoPrincipal}</p>
        <p><strong>Objetivo de aquí a 3 meses - 1 año:</strong> ${objetivo}</p>
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