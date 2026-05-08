// app/components/AccessForm.tsx

"use client";

import { useState } from "react";

const CALENDAR_URL = "https://calendar.app.google/Hy4qRrHY25MucymMA";

export default function AccessForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);

    const payload = {
      whatsapp: formData.get("whatsapp"),
      email: formData.get("email"),
      twitter: formData.get("twitter"),
      objetivoPrincipal: formData.get("objetivoPrincipal"),
      dedicacion: formData.get("dedicacion"),
      objetivo: formData.get("objetivo"),
      obstaculos: formData.getAll("obstaculos"),
      urgencia: formData.get("urgencia"),
      capital: formData.get("capital"),
      decision: formData.get("decision"),
      puntualidad: formData.get("puntualidad"),
    };

    try {
      const response = await fetch("/api/access-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario");
      }

      window.location.href = CALENDAR_URL;
    } catch {
      setError("Ha habido un error al enviar el formulario. Inténtalo otra vez.");
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10">
      <details
        open
        className="border-[3px] border-blue-200 bg-white p-6 md:p-8"
      >
        <summary className="mb-10 cursor-pointer list-none text-3xl font-normal text-black md:text-5xl">
          <span className="mr-4 inline-block text-black">▶</span>
          Formulario de acceso
        </summary>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="mb-3 block text-xl font-bold text-neutral-900">
              Contacto WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              required
              name="whatsapp"
              type="tel"
              placeholder="612 34 56 78"
              className="w-full max-w-2xl rounded border border-neutral-300 px-4 py-3 text-lg outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-3 block text-xl font-bold text-neutral-900">
              Correo electrónico <span className="text-red-500">*</span>
            </label>
            <input
              required
              name="email"
              type="email"
              className="w-full max-w-2xl rounded border border-neutral-300 px-4 py-3 text-lg outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-3 block text-xl font-bold text-neutral-900">
              ¿Tu usuario de X / Twitter? ejemplo: @honordetigre{" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              name="twitter"
              rows={5}
              className="w-full rounded border border-neutral-300 px-4 py-3 text-lg outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-3 block text-xl font-bold text-neutral-900">
              ¿Cuál de estas opciones describe mejor tu objetivo principal AHORA?{" "}
              <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="objetivoPrincipal"
              className="w-full max-w-2xl rounded border border-neutral-300 px-4 py-3 text-lg outline-none focus:border-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
                — Select Choice —
              </option>
              <option>Deseo convertirme en creador viral de X</option>
              <option>Quiero captar leads para mi negocio</option>
            </select>
          </div>

          <div>
            <label className="mb-3 block text-xl font-bold text-neutral-900">
              ¿A qué te dedicas actualmente?{" "}
              <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="dedicacion"
              className="w-full max-w-2xl rounded border border-neutral-300 px-4 py-3 text-lg outline-none focus:border-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
                — Select Choice —
              </option>
              <option>Tengo mi propio negocio, pero aún no puedo vivir de ello</option>
              <option>
                Tengo mi propio negocio y ya genero entre $2.000 y $20.000 USD
                netos de ganancia
              </option>
              <option>Soy empleado y gano más de $1000 USD mensuales</option>
              <option>Soy empleado y gano menos de $1000 USD mensuales</option>
              <option>Soy empleado y gano menos de $300 USD mensuales</option>
            </select>
          </div>

          <div>
            <label className="mb-3 block text-xl font-bold text-neutral-900">
              ¿Cuál es tu objetivo de aquí a 3 meses – 1 año?{" "}
              <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="objetivo"
              className="w-full max-w-2xl rounded border border-neutral-300 px-4 py-3 text-lg outline-none focus:border-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
                — Select Choice —
              </option>
              <option>Crecer mi negocio y duplicar la facturación</option>
              <option>Darle más presencia a mi negocio en redes sociales</option>
              <option>Generar entre $100-300 USD extras mensuales con X</option>
              <option>
                Generar entre $600-3000 USD mensuales creando mi propio negocio en X
              </option>
            </select>
          </div>

          <div>
            <label className="mb-3 block text-xl font-bold text-neutral-900">
              ¿Qué te está impidiendo alcanzar tu objetivo mensual AHORA MISMO?{" "}
              <span className="text-red-500">*</span>
            </label>
            <select
              required
              multiple
              name="obstaculos"
              className="h-36 w-full max-w-2xl rounded border border-neutral-300 px-4 py-3 text-lg outline-none focus:border-blue-500"
            >
              <option>No sé cómo generar leads con X</option>
              <option>Tengo que afinar mi oferta</option>
              <option>Necesito llegar a más personas</option>
              <option>No tengo ni idea de crecer y monetizar en X</option>
              <option>Pierdo mucho tiempo en redes y quiero aprovecharlo</option>
              <option>Hace mucho que quiero empezar y nunca lo hago</option>
            </select>
            <p className="mt-2 text-sm text-neutral-500">
              Mantén pulsado Cmd o Ctrl para seleccionar varias opciones.
            </p>
          </div>

          <div>
            <label className="mb-3 block text-xl font-bold text-neutral-900">
              ¿Qué tan pronto quieres resolver los obstáculos que hoy te impiden
              alcanzar tu meta de ingresos? <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="urgencia"
              className="w-full max-w-2xl rounded border border-neutral-300 px-4 py-3 text-lg outline-none focus:border-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
                — Select Choice —
              </option>
              <option>Lo quiero resolver YA mismo</option>
              <option>Quiero verlo en 2-4 semanas</option>
              <option>Quiero resolverlo en unos meses</option>
              <option>Aún no sé cuándo resolverlo</option>
            </select>
          </div>

          <div>
            <label className="mb-3 block max-w-4xl text-xl font-bold text-neutral-900">
              ¿Cuánto capital tienes disponible para invertir en la reunión en
              caso de que te pueda ayudar a crecer tu cuenta de X/tu negocio?{" "}
              <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="capital"
              className="w-full max-w-2xl rounded border border-neutral-300 px-4 py-3 text-lg outline-none focus:border-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
                — Select Choice —
              </option>
              <option>Tengo 300€</option>
              <option>Tengo de 300 a 600€</option>
              <option>Tengo de 600 a 1200€</option>
              <option>Tengo más de 1200€</option>
            </select>
          </div>

          <div>
            <label className="mb-3 block max-w-4xl text-xl font-bold text-neutral-900">
              En caso de decidir comenzar a trabajar en el VIP, ¿existe alguien
              más que deba estar presente para tomar la decisión de hacerlo?{" "}
              <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="decision"
              className="w-full max-w-2xl rounded border border-neutral-300 px-4 py-3 text-lg outline-none focus:border-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
                — Select Choice —
              </option>
              <option>Sí, tengo que ingresar con mi socio</option>
              <option>Sí, tengo que ingresar con mi pareja o algún familiar</option>
              <option>No, puedo tomar la decisión por mí mismo. No necesito a nadie.</option>
            </select>
          </div>

          <div>
            <label className="mb-3 block max-w-4xl text-xl font-bold text-neutral-900">
              Para confirmar: ¿Hay alguna razón por la que no puedas asistir
              puntualmente a tu cita? <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="puntualidad"
              className="w-full max-w-2xl rounded border border-neutral-300 px-4 py-3 text-lg outline-none focus:border-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
                — Select Choice —
              </option>
              <option>No. Yo voy a asistir a la llamada de admisión.</option>
              <option>Sí, necesito reprogramar ahora</option>
            </select>
          </div>

          {error && <p className="text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="rounded bg-blue-600 px-6 py-3 text-xl font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Enviando..." : "Continuar"}
          </button>
        </form>
      </details>
    </section>
  );
}