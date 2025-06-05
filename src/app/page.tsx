import { PricingTable } from "@/components/pricing-table"
import { Features } from "@/components/features"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { CaptacionAtencion } from "@/components/captacionatencion"
import Image from "next/image"
export default function Home() {
  return (
    
    <main className="min-h-screen bg-grid-animation">
      <Hero />
      <section className="section space-y-6 text-gray-700 md:text-lg ">
      <p>
              Pero espera, para el carro...
              </p>
              <p>
              
               Quizás habrás leido eso de 
               <span className="font-medium text-black"> aprobar mates con menos esfuerzo y sin echar tantas horas </span> 
               y te habrás venido arriba. O quizás esperabas que te lo iba a poner facil para conseguir mi telefono o correo en ese botón 
               de "empezar ahora"
                y te iba a permitir que me frieses a preguntas y me hicieses perder mi tiempo para que al final me digas 
                "muchas gracias, pero no me interesa"
              
              </p>

              <p>
              Si quieres saber <span className="font-medium text-black"> como aprobar mates llorar, </span>
              te quedas hasta el final y ya luego me llamas para decirme que aceptas el reto, pero no respondo preguntas por telefono 
              que se puedan responder aquí. Si no te interesa lo que te voy a contar, 
              <span className="font-medium text-black"> no sigas leyendo. </span>
                Cierras esta pestaña y adiós. Tú decides.
              
              </p>
              <p>
                Si esperas algún <span className="font-medium text-black">curso milagroso</span>, la enésima reinvención del Pomodoro
                o que te salve el culo con tu examen de mañana porque no has hecho ni el huevo todo el cuatri,
                hazte un favor: cierra esta pestaña, apaga el móvil y ponte a estudiar y a rezar a partes iguales.
              </p>
              <p>
              Y si has aterrizado aquí esperando seguir estudiando con apuntes de LaTeX que no entiende ni tu profe,
              y seguir pagando <span className="font-medium text-black">segundas y terceras matrículas como un campeón</span>, 
              entonces te lo digo claro: <span className="font-medium text-black">NO SIGAS LEYENDO</span>. Esto no es para ti.
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
              Llegados a este punto te preguntarás, "Vale,<span className="font-medium text-black"> ¿Y como hago para aprobar mates sin llorar en el intento?"</span>
              </p>
              <p>             
              <span className="font-medium text-black">Buena pregunta</span>
              </p>
              <p>             
              Y si me dejas, te la respondo sin chorradas, sin prometerte unicornios, 
              y sin gurús en una piscina de billetes diciendo “yo también suspendí y ahora doy mates en Bali”.
              </p>
              <p>             
              La cosa es simple: <span className="font-medium text-black">lo estás enfocando mal.</span> Y no, no te estoy vendiendo la frase
              de "el inglés se enseña mal".
              </p>
              <p>             
              No necesitas ser mas listo, ni mas constante, ni mas productivo. Lo que necesitas es
               <span className="font-medium text-black"> cambiar la manera de estudiar. </span> 
              Aprender matemáticas como lo haría un matemático, no repitiendo cosas como un loro con estres postraumático.
               Dejar de perder horas con resúmenes
               que parecen escritos sacados de una excavación arqueológica. Y sobre todo, aprender resolviendo, no memorizando.
              </p>

              <p>             
              Ahora bien, si estás esperando una receta mágica te aviso: <span className="font-medium text-black">No es mágia, es un método que funciona.</span>
              </p>
              <p>             
              Y sí, <span className="font-medium text-black">funciona.</span> No porque lo diga yo (que también), sinó porque llevo 
              muchos años ayudando a estudiantes como tú y viendo como pasan de pagar segundas mátriculas y vivir frustrados a
               <span className="font-medium text-black"> aprobar asignaturas que parecían imposibles.</span>
              
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
              Como habrás podido observar... si, me llamo María. Encantada de conocerte. Ahora vamos con lo importante.             
                       
              </p>
              <p>
              Si te paras a mirar los mensajes, verás que muchos de ellos (y unos cuantos más en los que no lo pone) son de topología,
               una de las asignaturas mas exigentes, por no decir la que más, del Grado en Matemáticas. El peso pesado de las mates.
               (si estás en dicho grado sabrás de lo que hablo). Pues bien,  
               <span className="font-medium text-black"> con este método es posible aprobar </span>  
                hasta eso.          
              </p>
              <p>             
              Hace tiempo tuve durante a un curso entero a un señor de cincuenta años que iba por su quinta matrícula 
                en esta asignatura y era la última para sacarse la carrera. El hombre estaba desesperado. Le dimos caña el primer cuatri, 
                suspendió de nuevo, y le dije que continuaría con él lo que hiciera falta, porque de verdad que el tio se lo curraba. 
                Le dije que esto se lo iba a sacar sí o sí.            
              </p>
              <p>             
               <span className="font-medium text-black"> Aprobó con un 6,5 </span> en la extraordinaria. El pobre ni se lo creía.
                        
              </p>
              <p>             
               ¿Pero sabes donde había estado el problema? 
               <span className="font-medium text-black"> En su manera de estudiar. </span> Y para mí fue 
               evidente desde la primera tutoría con él. Su forma de abordar el temario le había servido toda la carrera, pero no para esta asignatura.
                        
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
      <span className="font-medium text-black">Solo necesito que te comprometas a dejar de estudiar como un mono con apuntes.</span> Nada más.
              </p>
              <p>
                ¿No estás dispuesto a hacerte ese favor a ti mismo? Por favor, 
      <span className="font-medium text-black"> no sigas leyendo.</span> No perdamos tu tiempo ni el mío.
              </p>
              <p>
               ...
              </p>
              <p>
               Veo que aquí sigues. Y creo que no es casualidad.
              </p>
              <p>
               Estás con el agua al cuello, necesitas un salvavidas y quizás no lo sabes. ¿Qué asignatura te preocupa? 
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
               Ahora bien, <span className="font-medium text-black"> esto no es para todo el mundo</span>
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
              <span className="font-medium text-black"> No hago Black Friday, promoción de Navidad o de vuelta al cole ni mierdas de esas.</span>
              
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
              por casa a dar clase, y perdía casi toda la tarde. Y seguro que estarás pensando: ‘menuda pringada’. 
              Y no te culpo, yo pensaría lo mismo si fuese tú. Pero así se empieza. En el barro, sin excusas, y con todo el mundo tomándote a coña.
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
               (las cuales, desde mi punto de vista, no valen para nada),
                el hacer ejercicios porque sí y las tonterías de Bachillerato, y oye, funcionó.
              </p>
              <p>
              Como estaba en 
              la UNED, no tenia clases, ni profesores, ni ningún profesor particular dispuesto o capaz de pegarse con mi temario,
               ni nadie que me respaldase, solo un libro del siglo pasado por asignatura que a veces 
              se dejaba leer, <span className="font-medium text-black"> así que me lo monté a mi manera.</span>
              </p>
              <p>
              Tras este cambio, mis notas mejoraron brutalmente. Y lo mas gracioso es que, despues de eso, practicamente toda la carrera la he aprobado 
              en primera matrícula. 
              Fue tan loco que en tercero de carrera me vine arriba y me matriculé de 11 asignaturas, entre las que se encontraban
              <span className="font-medium text-black"> topología, geometría diferencial, espacios normados, estructuras 
                algebraicas, ecuaciones diferenciales, cálculo de probabilidades,</span> y demás mounstruos 
              y solo dejé una. Por si te lo estás preguntando, fue 
              <span className="font-medium text-black"> análisis numérico.</span>
              
              </p>
              <p>
              Y todo esto dando entre 6 y 7 horas diarias de clase por semana y yendome todos los findes de ruta por el monte.
              </p>
              <p>
              Al ver esto, decidí subir las clases a 14 euros la hora y empecé a aplicar mi mismo método con mis alumnos. Vinieron más alumnos. Después 
              de eso empezaron a venir los primeros alumnos referidos.
              Al año siguiente subí a 18. Y llegaban todavía más alumnos.
              </p>
              <p>
              El día que pasé de 20 a 30 euros, varios antiguos alumnos se fueron porque “era carísimo”,  
              <span className="font-medium text-black"> ¿Y sabes qué pasó?</span>
              </p>
              <p>
              Dos meses después, 
              <span className="font-medium text-black"> estaba dando 9 horas diarias de clase, incluidos los sabados, y tenía el doble de alumnos.</span>
              </p>
              <p> 
              <span className="font-medium text-black"> Casi todos recomendados por otros alumnos. Todos con hambre de aprobar. Todos dispuestos a currar.</span>
              </p>
              <p> 
              Y todo porque su colega o la madre de su amigo les había dicho que esto 
              <span className="font-medium text-black"> funcionaba. </span> Que había una profe de mates de la uni que no vendía humo. 
              Que por fin entendía la asignatura. Que aprobó sin vivir en la biblioteca y sin matarse.
              </p>
              <p> 
              A día de hoy,
              cobro bastante más por una hora de mi tiempo y me vuelco completamente en cada alumno, 
                en gran parte porque ahora <span className="font-medium text-black"> solo cojo un numero muy límitado de personas cada cuatri. </span>
              Me tomo muy a lo personal su aprobado. 
              Y mis alumnos están más contentos que nunca. Porque no solo <span className="font-medium text-black"> aprueban, </span>  
              entienden y <span className="font-medium text-black"> tienen tiempo para dormir, salir de fiesta y rascarse la barriga en el sofá. </span> 
              </p>
              <p>

              Solo este año, 
              <span className="font-medium text-black"> de 42 alumos que he tenido, 39 han aprobado en primera convocatoría </span>
               y el resto en extraordinaría.
              </p>
              <p>

              No te voy a engañar, me gusta mucho ver como recogen los frutos de su esfuerzo.
              </p>
              <p> 
              <span className="font-medium text-black"> ¿Quieres ser como esos chavales? </span> 
              ¿O 
              <span className="font-medium text-black"> prefieres seguir comiendo mierda en la uni </span>  porque mi metodo “es demasiado caro”?
              </p>
              <p> 
              ... 
              </p>
              <p> 
              Si has llegado hasta aquí, probablmenete no habrás aprobado, pero al menos 
              <span className="font-medium text-black"> ya te has ganado mi respeto.  </span> 
              </p>

              <p> 
              Solo por eso, voy a romper esta tensión y 
              <span className="font-medium text-black"> te voy a sacar de dudas. </span> 
              </p>
              <p> 
              ...
              </p>

              <p> 
              Veo que <span className="font-medium text-black"> tienes ganas de aprobar, </span> ¿Eh?
              </p>
              <p> 
              Venga, ahora si que sí, 
              <span className="font-medium text-black"> vamos a hablar de lo que te interesa. </span>
              </p>
              <p> 
              Acompañarte a ti solo todo el cuatri (es decir, que no vengas en grupo con tus colegas) y asegurar tu aprobado tiene un precio de 
              <span className="font-medium text-black"> 290 euros </span> al mes durante cuatro meses. Pero si quieres que lo haga
              te tienes que comprometer a poner tu parte y a currar. Yo no trabajo con gente que quiere quedarse en el banquillo a mirar.
               
              </p>
              <p> 
              <span className="font-medium text-black"> Y sí, entran todas tus asignaturas de mates </span> 
              (salvo las que ya he dicho que no ne gustan). 
              </p>

               <p>
               <span className="font-medium text-black"> Y sí, te voy a dar unos apuntes de puta madre </span> 
              con los que vas a poder entenderlo todo y vas a tener ejercicios guiados 
              de todo. 
              </p>

              <p>
              <span className="font-medium text-black"> Y sí, te daré feedback todo el rato </span>  para que sepas si vas bien, si vas mal, 
              si vas de culo o si vas del reves.
              </p>

              <p>
              <span className="font-medium text-black"> Y sí, te haré un planning de estudio full optimizado </span> para que no te me pierdas por el camino.
              </p>

              <p>
              <span className="font-medium text-black"> Y si, tendremos tutorías semanales. </span>Pero no vengas a contarme que no 
              hiciste nada. Esto no es el cole. Aquí vienes a mejorar y a conseguir tu aprobado, no a justificarte
              </p>

              <p>
              <span className="font-medium text-black"> Y si, tambien me puedes llamar,
               escribir por WhatsApp, o por Telegram o mandarme señales de humo cada vez
                que estés estudiando y tengas la más mínima duda </span> o necesites pistas
               para hacer los ejercicios porque te encuentras más perdido que un pulpo en un garaje.
              </p>

              </section>
      <About />
      <PricingTable />
      <Footer />
    </main>
  )
}