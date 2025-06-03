import Image from "next/image"
import { LucideFrown, LucideBrainCog, LucideClock, LucideCheckCircle } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="section">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Olvídate de...</h2>
          <p className="max-w-3xl mx-auto text-gray-500 dark:text-gray-400 mt-4 text-lg">
            Nuestro método elimina los mayores dolores de cabeza al estudiar matemáticas. Te lo ponemos fácil.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* PROBLEMA 1 */}
          <div className="rounded-2xl p-6 bg-[var(--neon-rose)]/20">
            <small className="text-sm font-medium text-gray-700 dark:text-gray-900">Bloqueo mental</small>
            <h3 className="text-2xl font-bold mb-4">No entiendes nada por más que lo intentes</h3>
            <div className="rounded-xl bg-white p-4 shadow-md dark:bg-zinc-950">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Te damos explicaciones paso a paso, desde cero. Sin tecnicismos. Aprendes con ejemplos reales.
              </p>
              <Image
                src="/solucion-bloqueo.png"
                alt="explicacion clara"
                width={400}
                height={240}
                className="rounded-md mx-auto"
              />
            </div>
          </div>

          {/* PROBLEMA 2 */}
          <div className="rounded-2xl p-6 bg-[var(--neon-sun)]/20">
            <small className="text-sm font-medium text-gray-700 dark:text-gray-900">Pérdida de tiempo</small>
            <h3 className="text-2xl font-bold mb-4">Horas de estudio que no sirven para nada</h3>
            <div className="rounded-xl bg-white p-4 shadow-md dark:bg-zinc-950">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Vas directo al grano con lo que realmente cae. Menos horas. Más resultados.
              </p>
              <Image
                src="/solucion-tiempo.png"
                alt="optimizar estudio"
                width={400}
                height={240}
                className="rounded-md mx-auto"
              />
            </div>
          </div>

          {/* PROBLEMA 3 */}
          <div className="rounded-2xl p-6 bg-[var(--neon-tangerine)]/20 hover:border-3 hover:border-[var(--neon-tangerine)]/40 transition-all duration-500">
            <small className="text-sm font-medium text-gray-700 dark:text-gray-900">Ansiedad</small>
            <h3 className="text-2xl font-bold mb-4">Te bloqueas antes incluso de empezar</h3>
            <div className="rounded-xl bg-white p-4 shadow-md dark:bg-zinc-950">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Te guiamos con estructura y seguridad. Avanzas paso a paso, sintiendo que progresas de verdad.
              </p>
              <Image
                src="/solucion-ansiedad.png"
                alt="confianza y claridad"
                width={400}
                height={240}
                className="rounded-md mx-auto"
              />
            </div>
          </div>

          {/* PROBLEMA 4 */}
          <div className="rounded-2xl p-6 bg-[var(--neon-lime)]/20">
            <small className="text-sm font-medium text-gray-700 dark:text-gray-900">Soledad al estudiar</small>
            <h3 className="text-2xl font-bold mb-4">No sabes a quién preguntar ni por dónde tirar</h3>
            <div className="rounded-xl bg-white p-4 shadow-md dark:bg-zinc-950">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Tienes soporte constante, comunidad de compañeros y profes para que nunca te sientas perdido.
              </p>
              <Image
                src="/solucion-soporte.png"
                alt="acompañamiento"
                width={400}
                height={240}
                className="rounded-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
