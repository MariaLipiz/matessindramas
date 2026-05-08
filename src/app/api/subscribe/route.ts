import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, acceptedPrivacy } = await req.json();

    if (!acceptedPrivacy) {
      return NextResponse.json(
        { ok: false, error: "Debes aceptar la política de privacidad." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { ok: false, error: "Introduce un email válido." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizedEmail)) {
      return NextResponse.json(
        { ok: false, error: "Introduce un email válido." },
        { status: 400 }
      );
    }

    const apiKey = process.env.CM_API_KEY;
    const listId = process.env.CM_LIST_ID;

    console.log("CM_API_KEY:", apiKey);
    console.log("CM_LIST_ID:", listId);

    if (!apiKey || !listId) {
      return NextResponse.json(
        { ok: false, error: "Faltan variables de entorno de Campaign Monitor." },
        { status: 500 }
      );
    }

    const auth = Buffer.from(`${apiKey}:x`).toString("base64");

    const cmResponse = await fetch(
      `https://api.createsend.com/api/v3.3/subscribers/${listId}.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({
          EmailAddress: normalizedEmail,
          Resubscribe: true,
          RestartSubscriptionBasedAutoresponders: false,
          ConsentToTrack: "Yes",
        }),
      }
    );

    if (!cmResponse.ok) {
      const errorText = await cmResponse.text();
      console.error("Campaign Monitor error:", cmResponse.status, errorText);

      return NextResponse.json(
        {
          ok: false,
          error: "Error al registrar el email en Campaign Monitor.",
          details: errorText,
        },
        { status: cmResponse.status }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Internal subscribe error:", error);

    return NextResponse.json(
      { ok: false, error: "Ha ocurrido un error interno." },
      { status: 500 }
    );
  }
}