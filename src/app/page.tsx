import { PricingTable } from "@/components/pricing-table"
import { Features } from "@/components/features"
import { Hero } from "@/components/hero"
import { Testimonials } from "@/components/testimonials"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import ModoOscuroToggle from "@/components/ModoOscuroToggle"
import { CaptacionAtencion } from "@/components/captacionatencion"
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
              Si lo que esperas es algún <span className="font-medium text-black">curso milagroso,</span> la decimoquinta reinvención del metodo 
              Pomodoro (que a mí, personalmente me parece, terrible), la quincuagesima guía de cálculo para salvar el culo el dia anterior
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
              Ahora bien, si estás aquí porque te lo ha dicho tu colega el que es un crack, o tu amiga la que aprueba y sale de fiesta todos los findes, o porque me has visto en Instagram o Twitter (X para los mas modernillos) soltando beef y te identificas conmigo, <span className="font-medium text-black">tengo una pregunta que hacerte</span>.
              </p>
      </section>
      <CaptacionAtencion />
      <Features />
      
      <About />
      <PricingTable />
      <Footer />
    </main>
  )
}