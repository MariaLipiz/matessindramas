// components/CaptacionAtencion.tsx

export function CaptacionAtencion() {
    return (
      <section className="section flex flex-col space-y-8 text-sm sm:text-base font-medium">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl xl:text-7xl">¿Esto te resulta familiar?</h2>

        <div className="flex gap-6 justify-center">
          <div className="tarjeta hover:border-[var(--neon-lime)]/40  bg-[var(--neon-lime)]/20">
            <h3>Tu profe lee diapositivas sin sentido en clase o llena de pizarra de demostraciones y <span className="font-bold">no entiendes ni papa</span></h3>
          </div>
          <div className="tarjeta hover:border-[var(--neon-sun)]/40 bg-[var(--neon-sun)]/20">
            
            <h3>Lees los enunciados de los ejercicios y <span className="font-bold">no sabes ni de que te están hablando</span></h3>
          </div>
          <div className="tarjeta hover:border-[var(--neon-tangerine)]/40 bg-[var(--neon-tangerine)]/20">
            
            <h3><span className="font-bold">Mecanizas los ejercicios tipo</span> y te la meten doblada en el examen al cambiarte cuatro cosas</h3>
          </div>
        
        </div>
        <div className="flex gap-6 justify-center">
          <div className=" tarjeta hover:border-[var(--neon-mint)]/40 bg-[var(--neon-mint)]/20">
            <h3>Sientes que <span className="font-bold">nunca tienes tiempo</span> para ponerte a estudiar y si lo tienes <span className="font-bold">te dispersas</span></h3>
          </div>
          <div className=" tarjeta hover:border-[var(--neon-rose)]/40 bg-[var(--neon-rose)]/20">
            
            <h3><span className="font-bold">Te armas cacaos increibles</span> con el existe, el para todo, el epsilon mayor que cero y demas simbolos raros</h3>
          </div>
        
        </div>

        <div className="flex gap-6 justify-center">
          <div className=" rounded-2xl border-2 border-transparent hover:border-[var(--neon-purple)]/40 transition-all duration-300 p-4 bg-[var(--neon-purple)]/20">
            <h3><span className="font-bold">No puedes estudiar de la frustración y ansiedad</span> que llevas encima</h3>
          </div>
          <div className=" rounded-2xl border-2 border-transparent hover:border-[var(--neon-sky)]/40 transition-all duration-300 p-4 bg-[var(--neon-sky)]/20">
            
            <h3><span className="font-bold">Trabajas y estudias a la vez,</span> y suspendes porque no te da la vida para más</h3>
          </div>
          <div className=" rounded-2xl border-2 border-transparent hover:border-[var(--neon-red)]/40 transition-all duration-300 p-4 bg-[var(--neon-red)]/20">
            
            <h3><span className="font-bold">Te cuesta un mundo planificarte el estudio</span> y, para más emoción, <span className="font-bold">no sabes ni por donde empezar</span></h3>
          </div>
        
        </div>
        
      </section>
    )
  }
  