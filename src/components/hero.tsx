
import Subrayado from "@/components/subrayados/Subrayado"

export function Hero() {
  return (
    <section className="section justify-center align-center text-center space-y-6 h-screen">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl xl:text-7xl">  
            <Subrayado 
            type="highlight" 
            colorLight="#99ff66" 
            colorDark="#99ff66"
            animationDelay={400} 
            animationDuration={1500}
            padding={1}
            
            > Aprueba</Subrayado>
            <Subrayado 
            type="highlight" 
            colorLight="#99ff66" 
            colorDark="#99ff66"
            animationDelay={500} 
            animationDuration={1500}
            
            > mates</Subrayado> sin estudiar como un desgraciado, sin ansiedad y sin llorar. Así de claro.
            </h1>
            <p className="mx-auto text-gray-700 md:text-xl">
            Si estás harto de estudiar como un loco, suspender y sentirte idiota, esto es para ti. <br />
            <span className="font-semibold">Solo para 
              universitarios </span> que quieren dejar de arrastrarse.<br />
             
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
                Quiero aprobar mates sin llorar
              </button>

              {/* Descubrir más */}
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
