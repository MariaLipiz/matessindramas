import { PricingTable } from "@/components/pricing-table"
import { Features } from "@/components/features"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { CaptacionAtencion } from "@/components/captacionatencion"
import Image from "next/image"
import Link from "next/link"
export default function Home() {
  return (
    
    <main className="min-h-screen bg-grid-animation">
      <Hero />
      <section className="section space-y-6 text-gray-700 md:text-lg ">
      <p>
  Pero espera, para el carro...
</p>
<p>
  Quizá has leído eso de <span className="font-medium text-black">aprobar mates sin que te de la mala </span>  
  y se te ha subido el hype.  
  O tal vez esperabas encontrar mi número en el botón de "empezar ahora" para freirme a preguntas como si esto fuera un consultorio gratuito.
</p>
<p>
  Pues no.
</p>
<p>
  No estoy aquí para convencerte.
</p>
<p>
  Estoy aquí para dejarte sin excusas.
</p>
<p>
  Si no tienes los huevos de leerte esto hasta el final, no pierdas el tiempo. Ni el mío ni el tuyo.
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
              
              ...
              </p>
              <p>
              Bien, como veo que no te has ido, entiendo que quizás estás frustrado porque 
              <span className="font-medium text-black"> crees que el problema eres tú.</span>
              </p>
              <p>
              O <span className="font-medium text-black"> crees que no se te dan bien las matemáticas. </span> O que no eres lo bastante bueno.
              </p>
              <p>
              <span className="font-medium text-black">Echas tardes enteras estudiando para no llegar a nada.</span>
              </p>
              <p>
              <span className="font-medium text-black">Vas a las revisiones y el profesor se rie de ti.</span>
              </p>
              <p>
              <span className="font-medium text-black">Trabajas como nadie y no ves resultados.</span>
              </p>
              <p>
              Yo he vivido eso. Te entiendo. Se por lo que estás pasando.
              </p>
              <p>             
              Llegados a este punto te preguntarás, "Vale,<span className="font-medium text-black"> ¿Y como hago para aprobar mates sin llorar en el intento?". </span>
              Sin frustrarme, sin sentirme mal conmigo mismo.
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
              <span className="font-medium text-black"> El problema no eres tú </span> 
              
              </p>

              <p>             
              Ahora bien, si estás esperando una receta mágica te aviso: <span className="font-medium text-black">No es mágia, es un método que funciona.</span>
              </p>
              <p>             
              Y sí, <span className="font-medium text-black">funciona.</span> No porque lo diga yo (que también), sinó porque llevo 
              muchos años ayudando a estudiantes como tú y viendo como pasan de pagar segundas mátriculas y vivir amargados a
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
                en esta asignatura.           
              </p>
              <p>             
             <span className="font-medium text-black"> El hombre estaba desesperado.   </span>            
              </p>
              <p>
              Le dimos caña el primer cuatri, 
                suspendió de nuevo, y le dije que continuaría con él lo que hiciera falta, porque de verdad que el tio se lo curraba. 
                </p>
                <p>
                Le dije que esto se lo iba a sacar sí o sí. 
                </p>
              <p>             
               <span className="font-medium text-black"> Aprobó con un 6,5 </span> en la extraordinaria. Él ni se lo creía.
                        
              </p>
              <p>             
               ¿Pero sabes donde había estado el problema? 
               <span className="font-medium text-black"> En su manera de estudiar. </span> Y para mí fue 
               evidente desde la primera tutoría con él. 
                        
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
      <p>¿Sabes qué es lo mejor?</p>

<p>
  <span className="font-medium text-black">
    Que solo necesito que te comprometas a dejar de estudiar como un mono con apuntes.
  </span>{" "}
  Nada más. No tienes que ser un genio, ni hacer 200 ejercicios al día, ni encerrarte en la biblioteca.
</p>

<p>
  Pero si no estás dispuesto a hacerte ese favor a ti mismo,  
  <span className="font-medium text-black"> no sigas leyendo. </span>  
  En serio. No perdamos tu tiempo ni el mío.
</p>
              <p>
               ...
              </p>
              <p>
               Veo que aquí sigues. Y creo que no es casualidad.
              </p>
              
              <p>
               Tienes la sensación de que no sabes nada.
              </p>
              <p>
               Sabes que no es porque no te esfuerces… pero algo no cuadra.
              </p>
              <p>
               Estás con el agua al cuello, necesitas un salvavidas y aunque no lo digas en voz alta, lo sabes. 
              </p>
              <p>
              Conozco esa sensación. Y lo sé, es horrible.
              </p>
              
              <p>
               Quizas lo que te acojona son <span className="font-medium text-black"> las medidas y las integrales. </span> 
               O los <span className="font-medium text-black"> espacios normados. </span>  
               O la <span className="font-medium text-black"> topología. </span>  
               O el <span className="font-medium text-black"> teorema de Stokes </span>. 
    
              </p>
              <p>
               Sea lo que sea, me es completamente indiferente. <span className="font-medium text-black"> Este método funciona.</span>
              
              </p>
              <p>
               Ahora bien, <span className="font-medium text-black"> esto no es para todo el mundo</span>
              </p>
              <p>
  Y si te estás preguntando quién soy yo para decirte esto con tanta cara...
</p>
<p>
  Déjame contarte una cosa.
</p>
              
              <p>
  Cuando empecé tenía 16 años. Daba clase por 8 € la hora.  
  Iba en bici casa por casa y me tragaba tardes enteras solo para sacar lo justo para un café con los amigos y volver a casa hecha polvo.
</p>
<p>
  Y sí, daba clases de culo. Me costaba explicar, a veces me trababa y me quedaba en blanco.  
  Pero tenía algo que no me quitaba nadie: <span className="font-medium text-black">una obsesión enfermiza 
    por entender las cosas y explicarlas bien.</span>
</p>
<p>
  Entré en la UNED, en el grado en matemáticas. 
</p>
<p>
  <span className="font-medium text-black">Sin clases. Sin profesores. Sin apuntes. </span>  
 
</p>
<p>
  
  Solo libros del siglo pasado y preguntas con trampa.
</p>
<p>
  El primer año casi hago pleno de suspensos. Ahí fue cuando lo entendí:  
  <span className="font-medium text-black"> el problema no eran las mates, era cómo se estudian.</span>
</p>
<p>
  Me monté mi propio sistema.  

</p>
<p>
  
  Dejé de hacer resúmenes, de repetir ejercicios sin sentido y de seguir consejos absurdos tipo “subraya con colores”.
</p>
<p>
  Lo probé conmigo. <span className="font-medium text-black"> Y funcionó. </span>  
  
</p>
<p> 
  Me vine arriba y me metí 11 asignaturas en tercero de carrera. Aprobé 10.  
  Y mientras tanto daba entre 6 y 7 clases diarias y me iba de ruta los findes.
</p>
<p>
  Ahí <span className="font-medium text-black"> empecé a aplicarlo con mis alumnos.  Y lo mismo, los resultados fueron increibles  </span> 
  Tanto, que empecé a subir precios.
</p>
<p>
  Pasé de 14 a 18. Después a 20. Luego a 30.  
  Muchos se fueron, pero a los pocos meses tenía <span className="font-medium text-black">el doble de alumnos. Todos recomendados por otros alumnos.</span>
</p>
<p>
  Hoy cobro bastante más. Solo cojo a los que están dispuestos a currar.  
  Y me dejo la piel con cada uno porque <span className="font-medium text-black">el aprobado de mis alumnos también es mi victoria.</span>
</p>
<p>
  <span className="font-medium text-black">Y una prueba más de que mi método funciona</span>
</p>
<p>
  Este año, de 42 alumnos, <span className="font-medium text-black">39 han aprobado en primera convocatoria</span>  
  y los 3 restantes en la extraordinaria.
</p>

              <p> 
              <span className="font-medium text-black"> ¿Quieres ser como esos chavales? </span> 
              ¿O 
              <span className="font-medium text-black"> prefieres seguir comiendo mierda en la uni </span> como los que se fueron 
                porque mi metodo “es demasiado caro”?
              </p>
              <p> 
              ... 
              </p>
              <p> 
              Si has llegado hasta aquí, probablemente no habrás aprobado, pero al menos 
              <span className="font-medium text-black"> ya no eres como el resto.  </span> 
              </p>

              <p> 
              Solo por eso, 
              <span className="font-medium text-black"> te voy a sacar de dudas. </span> 
              </p>
              <p> 
              ...
              </p>

              <p> 
              Veo que <span className="font-medium text-black"> tienes ganas de aprobar, </span> ¿Eh?
              </p>
              <p> 
              Se te nota.
              </p>
              <p> 
              Venga, ahora si, 
              <span className="font-medium text-black"> vamos a hablar de lo que te interesa. </span>
              </p>
              <p> 
              Pero antes piensa en esto.
              </p>
              <p> 
              Piensa en <span className="font-medium text-black"> lo que ya has palmado en segundas matrículas.  </span>
              </p>
              <p> 
              <span className="font-medium text-black"> En los meses perdidos esforzandote como nadie. </span>
              </p>
              <p> 
              En el <span className="font-medium text-black"> estrés. </span> 
              En la <span className="font-medium text-black"> ansiedad. </span>  
              En las noches estudiando hasta las tantas.
              </p>
              <p> 
              En esa <span className="font-medium text-black"> sensación de impotencia cuando ves que no te llega la nota… </span> por una décima.
              </p>
              <p> 
              <span className="font-medium text-black"> ¿Te ha salido barato eso? </span>
              </p>
              <p> 
              <span className="font-medium text-black"> Seguro que no </span>
              </p>
              <p> 
              Y seguro que mientras lees esto, tu cerebro ya está sacando excusas para no moverse.  
              </p>
              <p> 
              Déjame adivinarlas: 
              </p>
              <p> 
              "Ya estoy con otro profe, voy a esperar a ver que tal"
              </p>
              <p> 
              Genial que tu profe sea un encanto. <span className="font-medium text-black"> Vuelve cuando suspendas. Si es que quedan plazas. </span>
              </p>
              <p> 
              “Voy a esperar al cuatri siguiente” 
              </p>
              <p> 
              Claro. Como cuando dijiste que el lunes empezabas el gym. <span className="font-medium text-black">  Y aquí estás de nuevo. 
                Al límite. </span> 
              </p>
              <p> 
              “Es que X euros me parece caro” 
              </p>
              <p> 
              ¿Sabes lo que es caro? <span className="font-medium text-black">  Suspender, pagar otra matrícula, seguir 
                sin enterarte de nada, pasarte el verano estudiando mientras tus colegas están en la playa y encima repetir la misma mierda un curso más. </span> 
              </p>
              <p> 
              No me vengas con cuentos.
              </p>
              <p> 
              Porque ahora te lo pongo claro.
              </p>
              <p> 
              Acompañarte todo el cuatri y <span className="font-medium text-black"> asegurar tu aprobado </span> tiene un precio de 
              <span className="font-medium text-black"> 270 euros</span>/mes durante cuatro meses. 
               
              </p>
              <p> 
              Y no, no es negociable.
               
              </p>
              <p> 
              Ni lo será.
               
              </p>
              <p> 
              Cada cuatri sube.
               
              </p>
              <p> 
              Porque no me ando con cuentos.
               
              </p>
              <p> 
              Y porque esto viene con una condición: 
               
              </p>
              <p> 
              <span className="font-medium text-black"> Garantía de aprobado. </span> 
               
              </p>
              <p> 
              ¿Tú te comprometes? Yo también.
               
              </p>
              <p> 
              Si haces todo lo pactado, estudias con mi método, 
              vienes a las tutorías, haces los ejercicios, preguntas dudas, 
              sigues el planning, me haces caso y aún así no apruebas…
               
              </p>
              <p> 
              <span className="font-medium text-black"> Te acompaño el tiempo que haga falta hasta que lo consigas. Sin pagar ni un euro más. </span>
               
              </p>
              <p> 
              Pero si vienes a calentar la silla o a quejarte porque no hiciste nada esa semana… esta garantía desaparece.
               
              </p>

              <p> 
              Yo no regalo aprobados.
               
              </p>
              

              <p>
              Y no, <span className="font-medium text-black"> no cojo a todo el mundo. </span> 
               
              
              </p>
              <p>
              <span className="font-medium text-black"> Este cuatri solo cojo a 10. </span> 
               
              
              </p>
              <p>
              <span className="font-medium text-black"> Cuando se llene, puerta cerrada. </span>
               
              
              </p>
              <p>
              Y <span className="font-medium text-black"> Y la siguiente vez costará más. </span> 
               
              
              </p>

              <p>
              <span className="font-medium text-black"> Porque los que entran, aprueban. </span> Punto.
              </p>

              <p>
                Así que hazte un favor y piensa en esto:
              </p>

              <p>
              ¿Cuánto más vas a permitir que esa asignatura te coma la vida?
              </p>

              <p>
              ¿Cuántas veces más vas a pagar segundas matrículas, estudiar hasta las tantas y salir del examen con ganas de llorar?
              </p>
              <p>
              <span className="font-medium text-black"> Esto se acaba hoy. </span>
              </p>
              <p>
              Puedes escribirme y  
              <span className="font-medium text-black"> salir del agujero. </span>
              </p>
              <p>
              O <span className="font-medium text-black"> puedes cerrar esto, seguir arrastrandote otro cuatri y venirme en enero con el mismo 3,5 de siempre.  </span> 
              </p>
              <p>
              Tú decides que te sale mas caro:  
              </p>
              <p>
              Pagar 270€ al mes con garantía de aprobado
              </p>
              <p>
               O seguir pagando con tu tiempo, tu dignidad y tus ganas de vivir.
              </p>
              <p>
              
              <span className="font-medium text-black"> Escríbeme. Y salgamos del agujero.   </span> 
              </p>

              <a
  href="https://wa.me/34673055115?text=QUIERO%20MI%20APROBADO."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center shadow-md rounded-full px-6 py-2 text-sm sm:text-base lg:text-lg  font-medium transition-colors
                  bg-black text-white border border-zinc-300 hover:bg-zinc-100
                  focus:outline-none"
>
  Quiero salir del agujero
</a>


              </section>
      <About />
      <PricingTable />
      <Footer />
    </main>
  )
}