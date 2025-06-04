// components/CaptacionAtencion.tsx

export function CaptacionAtencion() {
    return (
      <section className="section flex flex-col space-y-6">
        <div className="container mx-auto ">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl xl:text-7xl">¿Esto te resulta familiar?</h2>
        </div>


        <div className="flex gap-6 justify-center">
          <div className=" rounded-2xl border-2 border-transparent hover:border-[var(--neon-lime)]/40 transition-all duration-300 p-4 bg-[var(--neon-lime)]/20">
            <small className="text-sm font-medium text-gray-700 dark:text-gray-900">Clases particulares y apuntes que no sirven</small>
            <h3 className="text-lg sm:text-xl font-semibold">Tu profe lee diapositivas en clase y no entiendes ni papa</h3>
          </div>
          <div className=" rounded-2xl border-2 border-transparent hover:border-[var(--neon-tangerine)]/40 transition-all duration-300 p-4 bg-[var(--neon-tangerine)]/20">
            <small className="text-sm font-medium text-gray-700 dark:text-gray-900">Liarte hasta con los ejercicios mas básicos</small>
            <h3 className="text-xl sm:text-2xl font-semibold">Lees un ejercicio y ves que no hay por donde cogerlo</h3>
          </div>

          {/* Aquí puedes añadir un quinto problema si quieres mantener el balance visual */}
        </div>
      </section>
    )
  }
  