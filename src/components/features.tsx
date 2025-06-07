import Image from "next/image"

export function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl xl:text-7xl">¿Como lo haremos?</h2>
          <p className=" text-gray-700 mt-4 text-lg">
            Pues eliminando tus mayores dolores de cabeza al estudiar. Así de simple.
          </p>
        </div>

        {/* Primera fila: 2 bloques */}
        <div className=" flex flex-col gap-6 justify-center mb-6">
          <div className="rounded-2xl border-2 border-transparent hover:border-[var(--neon-sun)]/40 transition-all duration-300 p-6 bg-[var(--neon-sun)]/20">
            <small className="text-sm font-medium text-gray-700 dark:text-gray-900">Planning totalmente personalizado</small>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Te doy el mapa para que no te pierdas</h3>
            <div className="rounded-xl bg-white p-4 shadow-md  transition-transform group-hover:-translate-y-1">
              <p className="text-gray-700 mb-2 text-lg">
              <span className="font-medium text-black"> Nada de perderte entre apuntes </span> y estudiar cosas aleatorias. 
              Vas a saber exactamente 
              <span className="font-medium text-black"> qué orden seguir, que es lo importante, qué puedes ignorar, y qué siempre debes saber al 100% </span>
              </p>
              <p className="text-gray-700 mb-2 text-lg">
              <span className="font-medium text-black"> No pierdas mas tiempo con gilipolleces. </span>
              </p>
              {/*<Image src="/solucion-bloqueo.png" alt="explicacion clara" width={100} height={60} className="rounded-md mx-auto" />*/}
            </div>
          </div>

          <div className="w-full rounded-2xl border-2 border-transparent hover:border-[var(--neon-mint)]/40 p-6 bg-[var(--neon-mint)]/20 transition-all duration-300">
            <small className="text-sm font-medium text-gray-700 dark:text-gray-900">Apuntes entendibles hasta estando en un garito</small>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Te doy apuntes de verdad, hechos por mí en base a mi experiencia y a lo que sé que funciona, de esos legibles y con dibujitos</h3>
            <div className="rounded-xl bg-white p-4 shadow-md transition-transform group-hover:-translate-y-1">
              <p className="text-gray-700mb-2 text-lg">
              Deja de estudiar tus asignaturas con 500 páginas sacadas del 1960. 
              <span className="font-medium text-black"> Te doy apuntes con los que puedes estudiar mientras
               esperas la birra. </span> Entiendes las cosas, no las copias. Y empiezas a disfrutar las mates aunque antes las odiaras.
              </p>
              <p className="text-gray-700mb-2 text-lg">
              Y ahora me preguntarás "Pero María, <span className="font-medium text-black"> ¿Y si no se adaptan a mi uni y a mi temario?" </span>
              No te rayes por eso, los apuntes te los adapto para ti, independientemente de donde sea que vengas. 
              <span className="font-medium text-black"> No doy apuntes genéricos ni reciclados.</span> y
              <span className="font-medium text-black"> tampoco los vas a encontrar en otro sitio.</span>
              </p>
            </div>
          </div>

          

          
        </div>

        {/* Segunda fila: 1 bloque */}
        <div className="flex flex-col gap-6 justify-center mb-6">
          <div className="w-full rounded-2xl border-2 border-transparent hover:border-[var(--neon-purple)]/40 p-6 bg-[var(--neon-purple)]/20 transition-all duration-300">
            <small className="text-sm font-medium text-gray-700 dark:text-gray-900">Entrenar, entrenar y entrenar, pero con un plan</small>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Te entreno como si tuvieses que perder 10kg en un mes</h3>
            <div className="rounded-xl bg-white p-4 shadow-md">
              <p className="text-gray-700mb-2 text-lg">
              Las mates y la lógica no se memorizan, 
              <span className="font-medium text-black "> se entrenan. </span>
              ¿A que nunca has visto a nadie levantando pesas como un pro solo habiendose comido un manual de técnica? Pues eso, a entrenar.
              </p>
            </div>
          </div>
        </div>

        {/* Tercera fila: 2 bloques */}
        <div className="flex flex-col gap-6 justify-center">
          <div className=" rounded-2xl border-2 border-transparent hover:border-[var(--neon-rose)]/40 transition-all duration-300 p-6 bg-[var(--neon-rose)]/20">
            <small className="text-sm font-medium text-gray-800">Aprender el lenguaje matemático, pero de verdad</small>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Te enseño a leer matemáticas como un pro</h3>
            <div className="rounded-xl bg-white p-4 shadow-md transition-transform group-hover:-translate-y-1">
              <p className="text-gray-700 mb-2 text-lg">
              <span className="font-medium text-black "> No más copiar sin entender. </span> Vas a leer, 
              traducir y escribir como quien aprende a hablar chino… pero con más sentido. Si no entiendes el lenguaje estás perdido.
                
              </p>
              <p className="text-gray-700 mb-2 text-lg">
              Olvidate de pararte cada cinco minutos para descifrar tus apuntes. 
              </p>
              {/*<Image src="/solucion-bloqueo.png" alt="explicacion clara" width={100} height={60} className="rounded-md mx-auto" />*/}
            </div>
          </div>
        
          <div className=" rounded-2xl border-2 border-transparent hover:border-[var(--neon-lime)]/40 transition-all duration-300 p-6 bg-[var(--neon-lime)]/20">
            <small className="text-sm font-medium text-gray-700 dark:text-gray-900">Estudio en equipo</small>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Te acompaño de forma continua. ¿Tienes una duda? Me llamas</h3>
            <div className="rounded-xl bg-white p-4 shadow-md">
              <p className="text-gray-700  mb-2 text-lg">
              <span className="font-medium text-black"> Tutorías semanales y soporte constante </span>   por WhatsApp, Telegram o paloma mensajera, lo que prefieras. Estudiar solo, aburrido, sin dirección y sin tener ni idea de lo que haces es el cóctel perfecto para el fracaso.
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
