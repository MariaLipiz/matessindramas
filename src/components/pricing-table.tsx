"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export function PricingTable() {
  const [annual, setAnnual] = useState(false)

  return (
    <section id="pricing" className="section">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl relative inline-block">
              Planes y precios
              <span className="absolute bottom-2 left-0 w-full h-3 bg-pink-200 -z-10 animate-underline-delay"></span>
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Elige el plan que mejor se adapte a tus necesidades.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span className={cn("text-sm", !annual && "font-medium")}>Mensual</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200"
            >
              <span className="sr-only">Toggle annual billing</span>
              <span
                className={cn(
                  "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                  annual ? "translate-x-6" : "translate-x-1",
                )}
              />
            </button>
            <span className={cn("text-sm", annual && "font-medium")}>Anual (20% descuento)</span>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <div className="flex flex-col rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
            <div className="p-6">
              <h3 className="text-2xl font-bold">Básico</h3>
              <div className="mt-4 text-center">
                <div className="text-4xl font-bold">{annual ? "9,99€" : "12,99€"}</div>
                <div className="text-sm text-gray-500">{annual ? "al mes, facturado anualmente" : "al mes"}</div>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Acceso a lecciones básicas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Ejercicios interactivos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Foro de dudas</span>
                </li>
              </ul>
            </div>
            <div className="mt-auto p-6">
              <button className="w-full rounded-md border border-black bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-100">
                Empezar ahora
              </button>
            </div>
          </div>
          <div className="relative flex flex-col rounded-lg border border-blue-200 bg-white shadow-md transition-all hover:shadow-lg">
            <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-blue-100 px-3 py-1 text-center text-sm font-medium text-blue-800">
              Más popular
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold">Estándar</h3>
              <div className="mt-4 text-center">
                <div className="text-4xl font-bold">{annual ? "19,99€" : "24,99€"}</div>
                <div className="text-sm text-gray-500">{annual ? "al mes, facturado anualmente" : "al mes"}</div>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Todo lo del plan Básico</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Clases en directo semanales</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Resolución de dudas personalizadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Exámenes de práctica</span>
                </li>
              </ul>
            </div>
            <div className="mt-auto p-6">
              <button className="w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                Empezar ahora
              </button>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
            <div className="p-6">
              <h3 className="text-2xl font-bold">Premium</h3>
              <div className="mt-4 text-center">
                <div className="text-4xl font-bold">{annual ? "29,99€" : "39,99€"}</div>
                <div className="text-sm text-gray-500">{annual ? "al mes, facturado anualmente" : "al mes"}</div>
              </div>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Todo lo del plan Estándar</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Tutorías personalizadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Acceso a cursos avanzados</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Certificados de finalización</span>
                </li>
              </ul>
            </div>
            <div className="mt-auto p-6">
              <button className="w-full rounded-md border border-black bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-100">
                Empezar ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
