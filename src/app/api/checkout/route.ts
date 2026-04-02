import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// 10 abril 2026, 23:59 en Madrid = 21:59 UTC
const CUTOFF_UTC = new Date("2026-04-10T21:59:00.000Z");

export async function POST() {
  try {
    const now = new Date();

    const selectedPriceId =
      now <= CUTOFF_UTC
        ? process.env.STRIPE_PRICE_ID_260!
        : process.env.STRIPE_PRICE_ID_320!;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: selectedPriceId,
          quantity: 1,
        },
      ],

      // Fuerza recogida de dirección de facturación
      billing_address_collection: "required",

      // Crea siempre un Customer con los datos del checkout
      customer_creation: "always",

      // Permite que Stripe genere una factura pagada tras la compra
      invoice_creation: {
        enabled: true,
      },

      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/confirmacion-de-compra?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/codigo-fuente-de-las-matematicas`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);

    return NextResponse.json(
      { error: "No se pudo crear la sesión de pago" },
      { status: 500 }
    );
  }
}