import { PricingTable } from "@/components/pricing-table"
import { Features } from "@/components/features"
import { Hero } from "@/components/hero"
import { Testimonials } from "@/components/testimonials"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import ModoOscuroToggle from "@/components/ModoOscuroToggle"
import { CaptacionAtencion } from "@/components/captacionatencion"
import Image from "next/image"
export default function Home() {
  return (
    
    <main className="min-h-screen bg-grid-animation">
      <ModoOscuroToggle />
      <Hero />
      <section className="section space-y-6 text-gray-700 md:text-lg ">
      <p>
              Pero espera, para el carro...
              </p>
              <p>
              
               Quizás habrás leido eso de <span className="font-medium text-black">aprobar mates con menos esfuerzo y sin echar tantas horas </span> y te habrás venido arriba. 
              
              </p>
              <p> 
              Si lo que esperas es algún <span className="font-medium text-black">curso milagroso,</span> la decimoquinta reinvención del método 
              Pomodoro (método que a mí, personalmente, me parece terrible y lo digo con conocimiento de causa), la quincuagesima guía de cálculo para salvar el culo el dia anterior
              o que te ayude a <span className="font-medium text-black">aprobar tu examen de mañana </span>
              porque no has hecho ni el huevo todo el cuatri, pues definitivamente cierra esta pestaña, 
              cierra el navegador, apaga tu movil/tablet/pc y ponte a estudiar y a rezar a partes iguales, de momento no hago milagros.  
              </p>
              <p>
              
              </p>
              <p>
              Por otro lado, si has aterrizado aquí por obra y gracia y eres de esos que quieren seguir echando horas inutiles estudiando con unos apuntes mal hechos en LaTeX y pagar segundas y terceras matrículas como un campeón, por favor, <span className="font-medium text-black">NO SIGAS LEYENDO, esto no es para ti</span>.
              </p>
              <p>
              ...
              </p>
              <p>
              Ahora bien, si estás aquí porque te lo ha dicho tu colega el que es un crack, o tu amiga la que aprueba y sale de fiesta todos los findes, o porque me has visto en Instagram o Twitter (X para los mas modernillos) soltando beef con cuatro gatos escuchandome y te identificas conmigo, <span className="font-medium text-black">tengo una pregunta que hacerte</span>.
              </p>
      </section>
      <CaptacionAtencion />
      <section className="section space-y-6 text-gray-700 md:text-lg ">
      <p>
              Si te identificas con una, dos, tres o todas las afirmaciones anteriores, perfecto. Estás en mi team. Si no es el caso, ya sabes
              que el botón de cerrar pestaña está ahí arriba.
              </p>
              <p>             
              Llegados a este punto te preguntarás,<span className="font-medium text-black">"Vale, ¿Y como hago para aprobar mates sin sudor, sangre y lágrimas?"</span>
              </p>
              <p>             
              <span className="font-medium text-black">Buena pregunta</span>
              </p>
              <p>             
              Y si me dejas, te la respondo sin chorradas, sin prometerte unicornios, 
              y sin gurús en una piscina de billetes diciendo “yo también suspendí y ahora doy mates en Bali”.
              </p>
              <p>             
              La cosa es simple: <span className="font-medium text-black">lo estás enfocando mal.</span>
              </p>
              <p>             
              No necesitas ser mas listo, ni mas constante, ni mas productivo. Lo que necesitas es <span className="font-medium text-black">cambiar la manera de estudiar. </span> 
              Aprender matemáticas como lo haría un matemático, no repitiendo cosas como un loro con estres postraumático. Dejar de perder horas con resúmenes
              de apuntes que parecen escritos sacados de una excavación arqueológica. Y sobre todo, aprender resolviendo, no memorizando.
              </p>

              <p>             
              Ahora bien, si estás esperando una receta mágica te aviso: <span className="font-medium text-black">No es mágia, es un método que funciona.</span>
              </p>
              <p>             
              Y sí, <span className="font-medium text-black">funciona.</span> No porque lo diga yo, sinó porque llevo muchos años ayudando a estudiantes que pasan de pagar segundas mátriculas y vivir frustrados a <span className="font-medium text-black">aprobar asignaturas que parecían imposibles.</span>
              
              </p>
              <Image
                src="/images/testimonios.png" // Ruta optimizada y formato moderno (ideal: .webp o .avif)
                alt="Estudiantes aprobados gracias a este método"
                width={3000}
                height={2000}
                priority // si es una imagen above-the-fold (visible al cargar)
                quality={100} // opcional, calidad ajustable para WebP/AVIF
              />

              <p>             
              Si te paras a mirar los mensajes, verás que muchos de ellos (y unos cuantos más en los que no lo pone) son de topología,
               una de las asignaturas mas exigentes, por no decir la que más, del Grado en Matemáticas. El peso pesado de las mates.
               (si estás en dicho grado sabrás de lo que hablo). Pues bien,  
               <span className="font-medium text-black"> con este método es posible aprobar </span>  
                hasta eso.             
              </p>

              <p>             
              Antes de contarte como lo hago, quiero que te hagas una pregunta: <span className="font-medium text-black"> "¿Y si el problema no eres tú?" </span>  
                            
              </p>
              <p>             
              Te sueltan "fórmulas" y teoremas, te mandan ejercicios random y te dicen que estudies, como si eso significara algo. <span className="font-medium text-black"> Spoiler: no significa nada si no entiendes lo que haces. </span>  
                            
              </p>

              <p>             
              Y aquí es donde entro yo. Como dije antes, esto no es otro cursillo random de repaso con 500 videos y ninguna estructura.
              Tampoco es un canal de Youtube maquillado con Canva lleno de "sigueme para mas tips".
              Es un sistema escalonado y progresivo ajustado a tus necesidades que te llevará del caos mental a  
              <span className="font-medium text-black"> entender, dominar la asignatura y aprobar. </span>  
                            
              </p>

              <p>             
              <span className="font-medium text-black"> Sin depender de un profesor octogenario que no sabe enseñar </span>             
              </p>
              <p>             
              <span className="font-medium text-black"> Sin matarte a hacer 800 ejercicios tipo </span>             
              </p>
              <p>             
              <span className="font-medium text-black"> Y sin necesitar que justo caiga algo del tema que mejor has memorizado </span>             
              </p>

              <p>             
              Ahora el asunto es...           
              </p>


      </section>
      <Features />
      
      <About />
      <PricingTable />
      <Footer />
    </main>
  )
}