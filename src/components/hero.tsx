
import Subrayado from "@/components/subrayados/Subrayado"

export function Hero() {
  return (
    <section className="section justify-center align-center text-center space-y-6 h-screen">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl xl:text-7xl">
            ¿Y si pudieras  
            <Subrayado 
            type="highlight" 
            colorLight="#99ff66" 
            colorDark="#99ff66"
            animationDelay={400} 
            animationDuration={1500}
            padding={1}
            
            > aprobar</Subrayado>
            <Subrayado 
            type="highlight" 
            colorLight="#99ff66" 
            colorDark="#99ff66"
            animationDelay={500} 
            animationDuration={1500}
            
            > mates</Subrayado> con menos esfuerzo del que crees?
            </h1>
            <p className="mx-auto text-gray-700 md:text-xl">
            Ayudo a <span className="font-semibold">estudiantes universitarios</span> a aprobar matemáticas sin ansiedad y sin estudiar como locos.<br />
            <Subrayado 
            type="underline" 
            colorLight="#ff0000" 
            colorDark="#ff0000"
            animationDelay={2000} 
            animationDuration={1500}
            
            >Menos esfuerzo. Menos tiempo de estudio. </Subrayado>
              Cero ansiedad. 
             <Subrayado 
            type="circle" 
            colorLight="#66ccff" 
            colorDark="#66ccff"
            animationDelay={2500} 
            animationDuration={1500}
            className="font-medium"
            padding={6}
            
            > Resultados reales.</Subrayado>
             
            </p>
            <p className="mx-auto text-gray-700 md:text-xl">
              </p>
          <div className="space-x-6 mt-6">
              
              <button
                className="inline-flex items-center justify-center shadow-md rounded-full px-6 py-2 text-sm sm:text-base lg:text-lg font-medium transition-colors
                  bg-black text-white hover:bg-zinc-800
                  
                  focus:outline-none"
                  aria-label="Ir a la sección de servicios y precios"
              >
                Empezar ahora
              </button>

              {/* Descubrir más */}
              <button
                className="inline-flex items-center justify-center shadow-md rounded-full px-6 py-2 text-sm sm:text-base lg:text-lg  font-medium transition-colors
                  bg-white text-black border border-zinc-300 hover:bg-zinc-100
                  focus:outline-none"
                  aria-label="Ver descripción del servicio"
              >
                Descubrir más
              </button>
            </div>
          {/*<Subrayado as="h1" type="highlight" className="text-4xl font-bold">
  Título importante
</Subrayado>*/}
{/*<p className="mx-auto text-gray-700 md:text-xl">
              Si eres de esos que quieren seguir echando horas inutiles estudiando con unos apuntes que parecen jeroglificos y pagar segundas y terceras matrículas como un campeón, por favor, <span className="font-medium">NO SIGAS LEYENDO</span>.
              </p>*/}

    </section>
  )
}
