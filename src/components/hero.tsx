import Link from "next/link"
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
            
            > mates</Subrayado> con 
            <Subrayado 
            type="underline" 
            colorLight="#ff66b3" 
            colorDark="#ff66b3"
            animationDelay={1500} 
            animationDuration={1500}
            
            > menos esfuerzo</Subrayado> del que crees?
            </h1>
            <p className="mx-auto text-gray-700 md:text-xl dark:text-gray-700">
            Ayudo a <span className="font-semibold">estudiantes universitarios</span> a aprobar matemáticas sin ansiedad y sin estudiar como locos.<br />
            <Subrayado 
            type="box" 
            colorLight="#ff0000" 
            colorDark="#ff0000"
            animationDelay={2000} 
            animationDuration={1500}
            
            >Menos esfuerzo. Menos tiempo de estudio.
             </Subrayado>
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
          <div className="space-x-6 mt-6">
            
              <button
                className="inline-flex h-11 items-center justify-center rounded-full px-8 text-sm sm:text-base lg:text-lg font-medium transition-colors
                  bg-black text-white hover:bg-zinc-800
                  
                  focus:outline-none"
                  aria-label="Ir a la sección de servicios y precios"
              >
                Empezar ahora
              </button>

              {/* Descubrir más */}
              <button
                className="inline-flex h-11 items-center justify-center rounded-full px-8 text-sm sm:text-base lg:text-lg  font-medium transition-colors
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

    </section>
  )
}
