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
      estudios: formData.get("estudios"),
      curso: formData.get("curso"),
      objetivoPrincipal: formData.get("objetivoPrincipal"),
      objetivo: formData.get("objetivo"),
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
    <section className="max-w-3xl py-10">
      <details
        className="border-[3px] border-blue-200 rounded-xl bg-white p-6 md:p-8"
      >
        <summary className=" cursor-pointer list-none text-xl font-normal text-black md:text-3xl">
          <span className="mr-4 ">▶</span>
          Formulario de acceso
        </summary>

        

        <form onSubmit={handleSubmit} className="space-y-8">

        

          <div>
            <label className=" mt-10 mb-3 block text-xl font-bold text-neutral-900">
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
              placeholder="tuemail@email.com"
              className="w-full max-w-2xl rounded border border-neutral-300 px-4 py-3 text-lg outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-3 block text-xl font-bold text-neutral-900">
              ¿Qué movida estás estudiando? <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="estudios"
              className="w-full max-w-3xl rounded border border-neutral-300 px-6 py-6 text-lg outline-none focus:border-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
                — Selecciona una —
              </option>
              <option>Carrera de Matemáticas</option>
              <option>Carrera de Fisica</option>
              <option>Ingeniería</option>
              <option>ADE</option>
              <option>Economía</option>
              <option>Master</option>
              <option>Matemáticas de Bachillerato/Instituto</option>
            </select>
          </div>

          <div>
            <label className="mb-3 block text-xl font-bold text-neutral-900">
              ¿En qué curso estás? <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="curso"
              className="w-full max-w-3xl rounded border border-neutral-300 px-6 py-6 text-lg outline-none focus:border-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
              — Selecciona una —
              </option>
              <option>1º de carrera</option>
              <option>2º de carrera</option>
              <option>3º de carrera</option>
              <option>4º de carrera</option>
              <option>Máster</option>
              <option>Otro</option>
            </select>
          </div>

          <div>
            <label className="mb-3 block text-xl font-bold text-neutral-900">
              ¿Cuál de estas opciones describe mejor tu objetivo principal AHORA?{" "}
              <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="objetivoPrincipal"
              className="w-full max-w-3xl rounded border border-neutral-300 px-6 py-6 text-lg outline-none focus:border-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
              — Selecciona una —
              </option>
              <option>Quiero quitarme un muerto de asignatura que no me deja vivir</option>
              <option>Quiero dejar de ir mas perdido/a que un socialista en el registro mercantil</option>
              <option>Quiero estudiar menos horas para poder dedicarme a la vida contemplativa</option>
              <option>Voy aprobando pero quiero tener mas contentos a mis padres</option>
            </select>
          </div>

          <div>
            <label className="mb-3 block text-xl font-bold text-neutral-900">
              ¿Cuál es tu objetivo de aquí a 1 mes – 4 meses?{" "}
              <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="objetivo"
              className="w-full max-w-3xl rounded border border-neutral-300 px-6 py-6 text-lg outline-none focus:border-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
              — Selecciona una —
              </option>
              <option>Aprobar y olvidarme de todo</option>
              <option>Entender por fin de que va mi carrera</option>
              <option>Dejar de memorizar como un papagallo</option>
            </select>
          </div>

          <div>
            <label className="mb-3 block text-xl font-bold text-neutral-900">
              ¿Qué tan pronto quieres resolver los obstáculos que hoy te impiden
              alcanzar tu objetivo? <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="urgencia"
              className="w-full max-w-3xl rounded border border-neutral-300 px-6 py-6 text-lg outline-none focus:border-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
              — Selecciona una —
              </option>
              <option>Lo quiero resolver ya mismo</option>
              <option>Quiero ponerme a resolverlo en 2-4 semanas</option>
              <option>Quiero resolverlo antes de los próximos exámenes, pero no ahora</option>
              <option>Aún no sé cuándo resolverlo</option>
            </select>
          </div>

          <div>
            <label className="mb-3 block max-w-4xl text-xl font-bold text-neutral-900">
              ¿Confirmas que has leido y aceptas que el precio es de 500€/mes?{" "}
              <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="capital"
              className="w-full max-w-3xl rounded border border-neutral-300 px-6 py-6 text-lg outline-none focus:border-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
              — Selecciona una —
              </option>
              <option>Si, prometo no ser una sucia rata regateadora</option>
              <option>No, quiero una rebaja porque he visto que otro lo hace mas barato (cierra esta página y no me escribas por favor)</option>
            </select>
          </div>

          <div>
            <label className="mb-3 block max-w-4xl text-xl font-bold text-neutral-900">
              En caso de decidir comenzar a trabajar juntos, ¿existe alguien más
              que deba estar presente para tomar la decisión?{" "}
              <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="decision"
              className="w-full max-w-3xl rounded border border-neutral-300 px-6 py-6 text-lg outline-none focus:border-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
              — Selecciona una —
              </option>
              <option>Sí, tengo que consultarlo con mis padres</option>
              <option>Sí, otra persona debería estar presente en la llamada</option>
              <option>No, puedo tomar la decisión por mí mismo/a. No necesito a nadie.</option>
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
              className="w-full max-w-3xl rounded border border-neutral-300 px-6 py-6 text-lg outline-none focus:border-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
              — Selecciona una —
              </option>
              <option>No, prometo que asistiré puntual.</option>
              <option>Sí, es posible que no pueda asistir</option>
            </select>
          </div>

          <div>
            <label className="mb-3 block max-w-4xl text-2xl font-bold text-red-700">
              Al pulsar Continuar te aparecerá un calendario. Debes RESERVAR tu reunión de admisión. De lo contrario, no atenderé tu solicitud <span className="text-red-500">*</span>
            </label>
            
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