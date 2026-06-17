"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type BaseNewsletterFormProps = {
  endpoint: string;
  redirectTo?: string;
  buttonText?: string;
};

export default function BaseNewsletterForm({
  endpoint,
  redirectTo = "/confirma-tu-email",
  buttonText = "Vale",
}: BaseNewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState<boolean | null>(null);

  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setMessage("");
    setSuccess(null);

    if (!acceptedPrivacy) {
      setSuccess(false);
      setMessage("Debes aceptar la política de privacidad.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          acceptedPrivacy,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        setSuccess(false);
        setMessage(data.error || "No se pudo completar la suscripción.");
        return;
      }

      setSuccess(true);
      setMessage("Perfecto. Ya estás dentro.");
      setEmail("");
      setAcceptedPrivacy(false);

      router.push(redirectTo);
    } catch {
      setSuccess(false);
      setMessage("Ha ocurrido un error. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-[620px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 sm:hidden">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu email"
            required
            className="h-[68px] w-full rounded-lg border border-slate-300 bg-white px-5 text-8 text-slate-900 outline-none placeholder:text-slate-500 focus:border-slate-500"
          />

          <label className="flex items-center gap-2 text-[14px] text-slate-800">
            <input
              type="checkbox"
              checked={acceptedPrivacy}
              onChange={(e) => setAcceptedPrivacy(e.target.checked)}
              className="h-4 w-4"
            />
            <span>
              Acepto la{" "}
              <Link href="/legal" className="text-sky-600 underline">
                política de privacidad
              </Link>
            </span>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="h-[68px] w-full rounded-lg bg-[#0B1633] px-5 text-8 font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "..." : buttonText}
          </button>
        </div>

        <div className="hidden sm:flex sm:flex-col sm:gap-3">
          <div className="flex gap-3 items-start">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu email"
              required
              className="h-[68px] w-full rounded-lg border border-slate-300 bg-white px-5 text-8 text-slate-900 outline-none placeholder:text-slate-500 focus:border-slate-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="h-[68px] min-w-30 rounded-lg bg-[#0B1633] px-5 text-8 font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "..." : buttonText}
            </button>
          </div>

          <label className="flex items-center gap-2 text-[14px] text-slate-800">
            <input
              type="checkbox"
              checked={acceptedPrivacy}
              onChange={(e) => setAcceptedPrivacy(e.target.checked)}
              className="h-4 w-4"
            />
            <span>
              Acepto la{" "}
              <Link href="/legal" className="text-sky-600 underline">
                política de privacidad
              </Link>&nbsp;
              <span className="line-through">aunque no la haya leido</span>
            </span>
          </label>
        </div>

        {message ? (
          <p
            className={`text-sm ${
              success ? "text-green-700" : "text-red-600"
            }`}
          >
            {message}
          </p>
        ) : null}
      </form>
    </div>
  );
}