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
              De igual forma, si has aterrizado aquí por obra y gracia y eres de esos que quieren seguir echando horas inutiles estudiando con unos apuntes mal hechos en LaTeX y pagar segundas y terceras matrículas como un campeón, por favor, <span className="font-medium text-black">NO SIGAS LEYENDO, esto no es para ti</span>.
              </p>
              <p>
              ...
              </p>
              <p>
              Ahora bien, si estás aquí porque te lo ha dicho tu colega el que es un crack, porque quieres mejorar tu forma de estudiar matemáticas o porque me has visto en Instagram o Twitter (X para los mas modernillos) soltando beef con cuatro gatos escuchandome y te identificas conmigo, <span className="font-medium text-black">tengo una pregunta que hacerte</span>.
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
              <span className="font-medium text-black"> Sin necesitar que justo caiga algo del tema que mejor has memorizado </span>             
              </p>
              <p>             
              <span className="font-semibold text-black"> Y sobre todo, sin aburrirte </span>             
              </p>

              <p>             
              Ahora el asunto es...           
              </p>


      </section>
      <Features />
      <section className="section space-y-6 text-gray-700 md:text-lg ">
      <p>
        ¿Y sabes que es lo mejor?
              </p>
              <p>
      <span className="font-medium text-black">Solo necesito que te comprometas a dejar de estudiar como un mono con apuntes</span>
              </p>
              <p>
                ¿No estás dispuesto a hacerte ese favor a ti mismo? Por favor, 
      <span className="font-medium text-black"> no sigas leyendo</span>
              </p>
              <p>
               ...
              </p>
              <p>
               Veo que aquí sigues. Y no es casualidad.
              </p>
              <p>
               Estás con el agua al cuello y necesitas un salvavidas. ¿Qué asignatura te preocupa? 
              </p>
              <p>
              <span className="font-medium text-black"> ¿Álgebra? ¿Cálculo? ¿Análisis? ¿Topología? ¿Geometría diferencial/afín/vectorial?</span>
              </p>
              <p>
               Quizas lo que te acojona son <span className="font-medium text-black"> las medidas y las integrales. </span> 
               O los <span className="font-medium text-black"> espacios normados. </span>  
               O el <span className="font-medium text-black"> teorema de Stokes </span> y las flechas que dan vueltas. 
               O los <span className="font-medium text-black"> numeros primos </span> y las <span className="font-medium text-black"> congruencias. </span>
              </p>
              <p>
               Sea lo que sea, me es completamente indiferente. <span className="font-medium text-black"> Este método funciona.</span>
              
              </p>
              <p>
            
               Mientras no me pidas que te salve el culo con estadística, modelización 
               o algoritmos turbios de simplex podemos hablar. Son asignaturas que no me gustan y no tengo intención de perder mi tiempo 
               con ellas.
              </p>
              <p>
               Ahora bien, <span className="font-medium text-black"> no es para todo el mundo</span>
              </p>
              <p>
               ...
              </p>
              <p>
              Si esperas algo barato o milagroso, ya te adelanto que estás en el sitio equivocado.
              </p>
              <p>
              <span className="font-medium text-black"> Yo no hago descuentos.</span>
              </p>
              <p>
              <span className="font-medium text-black"> No rebajo precios.</span>
              </p>
              <p>
              No hago Black Friday, promoción de Navidad o de vuelta al cole ni mierdas de esas
              </p>
              <p>
               Y <span className="font-medium text-black"> cuanto más sube la demanda, más sube mi tarifa</span>
              </p>
              <p>
              ¿Y por qué? <span className="font-medium text-black"> Porque funciona.</span> Y llevo 10 años demostrándolo. Este método 
              es el fruto de toda mi experiencia como estudiante y profesora.
              Y  <span className="font-medium text-black">puedes cogerlo o no cogerlo, </span>me es indiferente.
              </p>
              <p>
              Cuando empecé tenía 16 años, acababa de descubrir que lo que me gustaba eran las mates
               y cobraba 8 euros la hora. Tenía cinco alumnos y pocos me tomaban en serio. Iba en bici casa 
              por casa a dar clase, y perdía casi toda la tarde.
              </p>
              <p>
              Al año siguiente subí a 10 euros y vinieron más alumnos. 
              Como acababa de empezar el 
              <span className="font-medium text-black"> grado en matemáticas</span> ya me tomaban un poco más en serio.
              </p>
              <p>
              Tras un primer año de grado catastrófico, donde casi hago pleno de suspensos,
               decidí cambiar el enfoque y 
               <span className="font-medium text-black"> empecé a estudiar a mi manera.</span> Dejé de lado las técnicas de estudio
               (que desde mi punto de vista no valen para nada),
                el hacer ejercicios porque sí y las tonterías de Bachillerato, y oye, funcionó.
              </p>
              <p>
              Como estaba en 
              la UNED, no tenia clases, ni profesores, ni ningún profesor particular dispuesto o capaz de pegarse con mi temario,
               ni nadie que me respaldase, solo un libro del siglo pasado por asignatura que a veces 
              se dejaba leer, <span className="font-medium text-black"> así que me lo monté a mi manera.</span>
              </p>
              <p>
              Tras este cambio, mis notas mejoraron brutalmente. Y lo mas gracioso es que en toda la carrera he aprobado casi todo en primera matrícula. 
              Fue tan loco que en tercero de carrera me matriculé de 11 asignaturas, entre las que se encontraban
              <span className="font-medium text-black"> topología, geometría diferencial, espacios normados, estructuras 
                algebraicas, ecuaciones diferenciales, cálculo de probabilidades,</span> y demás mounstruos 
              y solo dejé una.
              
              </p>
              <p>
              Y todo esto dando entre 6 y 7 horas diarias de clase por semana y yendome todo el finde de ruta por el monte.
              </p>
              Al ver esto, decidí subir las clases a 14 euros la hora y empecé a aplicar mi mismo método con mis alumnos. Vinieron más alumnos.
              Al año siguiente subí a 18. Y llegaban todavía más alumnos.
              <p>
              El día que pasé de 20 a 30 euros, varios antiguos alumnos se fueron porque “era carísimo”,  
              <span className="font-medium text-black"> ¿Y sabes qué pasó?</span>
              </p>
              <p>
              Dos meses después, 
              <span className="font-medium text-black"> estaba dando 9 horas diarias de clase, incluidos los sabados, y tenía el doble de alumnos.</span>
              </p>
              <p> 
              <span className="font-medium text-black"> Casi todos recomendados por otro alumnos. Todos con hambre de aprobar. Todos dispuestos a currar.</span>
              </p>
              <p> 
              Y todo porque su colega o la madre de su amigo les había dicho que esto 
              <span className="font-medium text-black"> funcionaba. </span> Que había una profe de mates de la uni que no vendía humo. 
              Que por fin entendía la asignatura. Que aprobó sin vivir en la biblioteca y sin matarse.
              </p>
              <p> 
              A día de hoy,
              <span className="font-medium text-black"> cobro 60 euros por una hora de mi tiempo y me vuelco completamente en cada alumno. </span>
              Me tomo muy a lo personal su aprobado.
              Y mis alumnos están más contentos que nunca. Porque no solo <span className="font-medium text-black"> aprueban, </span>  
              entienden y <span className="font-medium text-black"> tienen tiempo para dormir, salir de fiesta y rascarse la barriga en el sofá. </span>
              </p>
              <p> 
              <span className="font-medium text-black"> ¿Quieres ser como esos chavales? </span> 
              ¿O prefieres seguir comiendo mierda en la uni porque “es demasiado caro”?
              </p>
              </section>
      <About />
      <PricingTable />
      <Footer />
    </main>
  )
}