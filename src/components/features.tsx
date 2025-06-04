import Image from "next/image"

export function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl xl:text-7xl">Olvídate de...</h2>
          <p className=" text-gray-700 mt-4 text-lg">
            Nuestro método elimina los mayores dolores de cabeza al estudiar matemáticas. Te lo ponemos fácil.
          </p>
        </div>

        {/* Primera fila: 2 bloques */}
        <div className=" flex flex-col md:flex-row gap-6 justify-center mb-6">
          <div className=" rounded-2xl border-2 border-transparent hover:border-[var(--neon-rose)]/40 transition-all duration-300 p-6 bg-[var(--neon-rose)]/20">
            <small className="text-sm font-medium text-gray-800">No saber ni por donde empezar</small>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">No entiendes nada y los apuntes del profe son un cacao</h3>
            <div className="rounded-xl bg-white p-4 shadow-md transition-transform group-hover:-translate-y-1">
              <p className="text-gray-700 mb-2">
                Te doy explicaciones paso a paso desde cero, apuntes fáciles de entender acordes a tu nivel, y todo acompañado con ejemplos y muchos dibujitos.
                
              </p>
              {/*<Image src="/solucion-bloqueo.png" alt="explicacion clara" width={100} height={60} className="rounded-md mx-auto" />*/}
            </div>
          </div>

          <div className="rounded-2xl border-2 border-transparent hover:border-[var(--neon-sun)]/40 transition-all duration-300 p-6 bg-[var(--neon-sun)]/20">
            <small className="text-sm font-medium text-gray-700 dark:text-gray-900">Pérder el tiempo</small>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Echas horas y horas estudiando y sientes que no avanzas</h3>
            <div className="rounded-xl bg-white p-4 shadow-md  transition-transform group-hover:-translate-y-1">
              <p className="text-gray-700 mb-2">
              Fijaremos una primera sesión para ver cuales son tus dificultades, elaborar un planning a tu medida, y después, te guiaré durante todo el proceso hasta el ansiado aprobado
              </p>
              {/*<Image src="/solucion-bloqueo.png" alt="explicacion clara" width={100} height={60} className="rounded-md mx-auto" />*/}
            </div>
          </div>
        </div>

        {/* Segunda fila: 1 bloque */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-6">
          <div className="w-full rounded-2xl border-2 border-transparent hover:border-[var(--neon-mint)]/40 p-6 bg-[var(--neon-mint)]/20 transition-all duration-300">
            <small className="text-sm font-medium text-gray-700 dark:text-gray-900">No ser capaz de organizarte</small>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Te abruma tanto que no eres capaz de planificar tu estudio de forma eficiente</h3>
            <div className="rounded-xl bg-white p-4 shadow-md transition-transform group-hover:-translate-y-1">
              <p className="text-gray-700mb-2">
                Prepararemos un planning personalizado y ajustado a tus necesidades para que puedas estudiar de forma eficiente, lógica y sin apuros. Y eso no es todo, durante todo el proceso llevaré un seguimiento de tu progreso que compartiré contigo cada semana.
              </p>
              {/*<Image src="/solucion-bloqueo.png" alt="explicacion clara" width={100} height={60} className="rounded-md mx-auto" />*/}
            </div>
          </div>
        </div>

        {/* Tercera fila: 2 bloques */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className=" rounded-2xl border-2 border-transparent hover:border-[var(--neon-lime)]/40 transition-all duration-300 p-6 bg-[var(--neon-lime)]/20">
            <small className="text-sm font-medium text-gray-700 dark:text-gray-900">Clases particulares y apuntes que no sirven</small>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">No sabes a quién preguntar ni por dónde tirar</h3>
            <div className="rounded-xl bg-white p-4 shadow-md transition-transform group-hover:-translate-y-1">
              <p className="text-gray-700  mb-2">
                Fijaremos tutorías semanales para clarar todas tus dudas y darte feedback y podrás contactarme por WhatsApp o llamada mientras estudias para que no queden dudas sin resolver.
              </p>
              {/*<Image src="/solucion-bloqueo.png" alt="explicacion clara" width={100} height={60} className="rounded-md mx-auto" />*/}
            </div>
          </div>
          <div className=" rounded-2xl border-2 border-transparent hover:border-[var(--neon-tangerine)]/40 transition-all duration-300 p-6 bg-[var(--neon-tangerine)]/20">
            <small className="text-sm font-medium text-gray-700 dark:text-gray-900">Liarte hasta con los ejercicios mas básicos</small>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Lees un ejercicio y ves que no hay por donde cogerlo</h3>
            <div className="rounded-xl bg-white p-4 shadow-md transition-transform group-hover:-translate-y-1">
              <p className="text-gray-700 mb-2">
                Tendrás acceso a ejercicios resueltos de forma clara y detallada (para que hasta tu gato los entienda), y si aun así no lo entiendes, ¡Me llamas o me escribes!
              </p>
              {/*<Image src="/solucion-bloqueo.png" alt="explicacion clara" width={100} height={60} className="rounded-md mx-auto" />*/}
            </div>
          </div>

          {/* Aquí puedes añadir un quinto problema si quieres mantener el balance visual */}
        </div>
      </div>
    </section>
  )
}
