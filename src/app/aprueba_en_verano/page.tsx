import StripeBuyButton from '@/components/SripeBuyButton'
import Image from "next/image"

export const metadata = {
  title: 'Aprueba mates en la uni',
  description: 'Método de estudio para aprobar mates en la uni sin llorar',
  alternates: {
    canonical: 'https://www.matessindramas.com/metodo_para_aprobar_matematicas',
  },
  keywords: ['como aprobar matemáticas', 'aprueba mates sin estudiar', 'aprueba mates en la uni'],
  openGraph: {
    title: 'Aprueba mates en la uni',
    description: 'Aprueba sin llorar. Método serio, cero dramas.',
    url: 'https://www.matessindramas.com/metodo_para_aprobar_matematicas',
    siteName: 'Mates Sin Dramas',
    images: [
      {
        url: 'https://www.matessindramas.com/og.jpg',
        width: 1000,
        height: 400,
        alt: 'Mates Sin Dramas',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
};


export default function MetodoParaAprobarMatematicas() {
  return (
    <main>
    <section className="section space-y-6 text-lg">
      <h1 className="text-4xl font-bold text-black tracking-tighter sm:text-5xl lg:text-6xl xl:text-7xl"> 
        Aprobar mates es infinitamente más fácil, rápido y divertido cuando dejas de usar métodos de mierda.</h1>

      <h2 className="mt-14 text-2xl font-bold text-black tracking-tighter sm:text-3xl lg:text-4xl xl:text-5xl">
        Aprobar mates en la uni ya es suficientemente difícil como para que te pongas tú mismo más barreras de las que ya tienes.
      </h2>

      <p>
        Un método de estudio de mierda es cualquier método que 
        te impide avanzar en el aprendizaje y más que ayudarte, hace que te frustres.
      </p>

      <p>
        Y puede ser que esos métodos te sirvan para estudiar derecho, filología, o cualqueir carrera de esas que a 
        ninguno de los que estamos aquí nos interesan, pero no para estudiar matemáticas. Eso también incluye:
      </p>

      <ul className="list-disc pl-6">
        <li>Metodo Pomodoro: la mierda entre las mierdas</li>
        <li>Memorizar demostraciones</li>
        <li>Hacer ejercicios tipo </li>
        <li>Aprender a resolver problemas como quién sigue una receta de cocina </li>
        <li>Meterse panzadas inútiles a estudir </li>
      </ul>

      <p>
        ¿Has aplicado alguno de estos métodos antes? ¿Subrayas tus apuntes 
        mal hechos con siete colores? ¿Estudias 20 minutos y descansas 5? ¿Te ha funcionado? 
      </p>
      <p>
        Me importa entre cero y nada si en bachillerato sacabas notazas y te creías 
        el mejor, si estas en ADE y crees que estudiar 
        mates no te va a valer para nada o si pensabas que en la uni ibas a estudiar lo que te gustaba y te la han metido doblada.
      </p>
      <p>
        La única verdad absoluta que hay es que si no sacas las puñeteras matemáticas es que nunca 
        vas a tener un papel que ponga que eres “Graduado en -inserta aquí tu carrera-.
      </p>
      <p>
        Punto.
      </p>
      <p>
        Autoconvencerse de que algo no vale para nada y es una mierda para tapar el “esto no me gusta, soy un vago 
        se me da de culo, y encima, me estoy quedando calvo” es algo innato 
        al ser humano. Un acto reflejo para que los demás seres humanos no nos vean como unos completos inutiles.
      </p>
      <p>
        Y eso es algo que ciertas personas han sabido convertir en una gran ventaja para lograr sus objetivos.
      </p>
      <p>
        Me explico.
      </p>
      <p>
        Me dedico a la enseñanza de las matemáticas y en los ultimos diez años he dado clase a más de 1000 alumnos. 
      </p>
      <p>
        Estudiantes del grado en matemáticas, de física, futuros ingenierios, economistas y 
        estudiantes de ADE. Inutiles integrales y verdaderos genios. 
        Vagos y trabajadores. Autistas y no autistas. Con problemas de concentración y 
        con hiperfoco. Con talento y sin talento.  
      </p>
      <p>
        Y he llenado cuadernos, blocks de notas y mi propio One Drive tomando notas. He tomado notas como una desgraciada. 
        He anotado que funciona con cada alumno, que no, que aborrecen, que les encanta, que me ha funcionado a mí 
        y sobre todo, he anotado todas las técnicas de estudio de esos 
        alumnos brillantes.  
      </p>
      <p>
        De los más brillantes, te digo, alumnos a los que no les escucharás gilipolleces como… 
      </p>


      <ul className="list-disc pl-6">
        <li>“Esta fórmula sirve para…”</li>
        <li>"Para hacer este ejercicio seguimos estos pasos”</li>
        <li>"No tengo ni idea de que significa esto gráficamente”" </li>
        <li>“No se que estoy haciendo, solo mecanizo y ya”</li>
        <li>“Mi profe me ha dicho que el examen está fátal y yo lo veo bien”</li>
        <li>“Mi profe está de la olla porque mira que dificil este ejercicio que ha puesto”</li>
      </ul>

      <p>Estudiantes que tienen autocrítica cuando alguien les dice que lo que hacen está fatal. </p>

      <p>
        Estudiantes que no se sientan a leer el libro o los apuntes 
        como si estuviesen leyendo el manual de instrucciones de la lavadora.
      </p>
      <p>
        Estudiantes que se paran a pensar en una idea fuera de su hora de estudio con la única intención de comprenderla. 
      </p>
      <p>
        Ahora he organizado toda esa información acumulado y la he juntado para crear un método de estudio para aprobar 
        matemáticas a la primera. 
      </p>

      




      <p>
        7 cosas que te enseñará este método: 
      </p>

      <ol className="list-decimal pl-6">
        <li>El gran fallo que cometen todos los gurús de la enseñanza y que perpetuan 
            la tasa de suspensos en asignaturas de matemáticas a cualquier nivel.</li>
        <li>Porqué tu método de estudio y tu propia percepción de lo que haces están consiguiendo 
            que suspendas como un campeón -y que debes hacer para evitarlo-</li>
        <li>Una cosa que debes hacer después de cada rato de estudio. </li>
        <li>Por qué, para mejorar tus resultados, deberías tomarte más tiempo de descanso.  </li>
        <li>Algo que hará que saques cualquier ejercicio a la primera.  </li>
        <li>Por qué normalmente no deberías seguir el ordén de estudio habitual.  </li>
        <li>Dos cosas que hacen que te bloquees en el examen.</li>
      </ol>

      <p>
        <span className="italic">“Lo más importante que he aprendido estudiando mates contigo es que las mates no se estudian”</span>
        <br />
        <span className="italic">-Sergio, alumno de ingeniería industrial.</span>
      </p>

      <p>
        Ojo.
      </p>


      <h2 className="mt-14 text-2xl font-bold text-black tracking-tighter sm:text-3xl lg:text-4xl xl:text-5xl">Esto no es para 
        todo el mundo</h2>

      <p>
        En mis años como profesora he conocido a alumnos incapaces de poner en práctica lo que explico en mi método. 
      </p>
      <p>
        Estudiantes mediocres. Estudiantes vagos a los que les puede más su vaguería que seguir suspendiendo. 
        Estudiantes que se creen 
        más listos que todo el mundo, que por más que les pones la realidad en sus narices no son capaces de reaccionar. 
      </p>
      <p>
        Si te puede más tu vaguería o tu ego o si me vas a decir que ya esás con otro profe y 
        vas a esperar a ver que tal, mejor no compres mi método, porque no vas a sacarle ningún partido.  
      </p>

      <p>
        Si crees que nada de esto es un problema y no te cagas encima al 
        poner en práctica todo lo que explico en mi método hay tres cosas que te puedo asegurar:  
      </p>

      <ol className="list-decimal pl-6">
        <li>Aprobarás con más facilidad</li>
        <li>Tendrás bastante mas tiempo libre</li>
        <li>Tendrás mucho menos estrés </li>
      </ol>

      <h2 className=" mt-14 text-2xl font-bold text-black tracking-tighter sm:text-3xl lg:text-4xl xl:text-5xl">Mi método contiene 
        cinco elementos</h2>
        
        <ol className="list-decimal pl-6">
        <li>Reunión inicial para evaluar tu caso</li>
        <li>Planning personalizado de estudio.</li>
        <li>Apuntes digitales hechos por mí donde podrás estudiar todas las asignaturas que tengas que recuperar este verano 
            sin querer morirte en el intento. Esto lo entrego por dos motivos: el primero, que dejes de estudiar 
            con apuntes de mierda. El segundo, poder aplicar correctamente mi método.</li>
        <li>Una tutoría semanal online de seguimiento donde te diré si vas bien, si vas mal, 
            o si vas de culo, y te iré explicando todos los puntos. </li>
        <li>Soporte ilimitado durante todo el verano hasta el examen. Podrás escribirme por WhatsApp, email o 
            paloma mensajera cualquier duda que te surja mientras estudias. </li>
        <li>Ejercicios de todo tipo para que vayas preparado y seguro al examen. </li>
      </ol>

      <h2 className="mt-14 text-2xl font-bold text-black tracking-tighter sm:text-3xl lg:text-4xl xl:text-5xl">Algo que deberías saber</h2>

      <p>
        Esto es un método para estudiar matemáticas en la uní, en el que durante todo el verano te guiaré 
        para que aprendas a estudiar y consigas aprobar cualquier asignatura.
      </p>
      <p>
        Esto es así porque si yo te soltase todo mi método en un curso 
        intensivo de dos horas, no sería eficiente ni prácico.
      </p>
      <p>
        Así que lo que enseño es, sobre todo, a adquirir una manera de estudiar óptima que te permita continuar 
        con toda tu carrera sin pagar 80 segundas matrículas, usando como entrenamiento las asignatuas que tengas 
        este verano que te estén costando sangre, sudor y lágrimas - salvo estadística, modelización y analisis 
        numérico, que no me gustan, pero igualmente el método sería válido para estas -
      </p>

      <h2 className="mt-14 text-2xl font-bold text-black tracking-tighter sm:text-3xl lg:text-4xl xl:text-5xl">Si compras</h2>
      <p>
        El método ahora lo harás a un precio total de 760€.
        Este precio no bajará nunca. 
        No hago descuentos, ni Black Friday, ni cosas del estilo. Y tampoco el precio final será menor si vienes 
        a última hora (de hecho, no podrás venir a última hora). Es más, con el paso del tiempo subirá, pero bajar, jamás.
      </p>

      <p>
        Unas horas después de que lo compres me pondré en contacto contigo para fijar una primera llamada,  
        conocer bien tu caso, saber que asignaturas quieres estudiar este cuatri y preparar todo el material necesario 
        para comenzar.
      </p>
      <h2 className="mt-14 text-2xl font-bold text-black tracking-tighter sm:text-3xl lg:text-4xl xl:text-5xl">Que sepas que solo…</h2>
      <p>
        Hay 6 plazas este verano. Si se llenan, cierro hasta el siguiente cuatrimestre.
      </p>
      <h2 className=" mt-14 text-2xl font-bold text-black tracking-tighter sm:text-3xl lg:text-4xl xl:text-5xl">Método para aprobar 
        matemáticas sin llorar: 760€</h2>
        <StripeBuyButton />

        <p>
        •	Pago seguro con tarjeta, Google Pay o Apple Pay.
        
      </p>
      
      <h2 className=" mt-14 text-2xl font-bold text-black tracking-tighter sm:text-3xl lg:text-4xl xl:text-5xl">Doce asignaturas aprobadas 
        en un solo curso: el mayor logro de un alumno</h2>

      <p>
        Durante los dos meses que estemos juntos, te enseñaré todas las técnicas que 
        apliqué para conseguir que un alumno del grado en matemáticas aprobase doce asignaturas –entre las que no
        se incluia historia de las matematicas o similares- en un curso.
      </p>
      <p>
        No hubiese sido posible conseguir eso si no supiera cosas como estas:
      </p>
      <ul className="list-disc pl-6">
        <li>Lo que debes hacer para estudiar lo mismo en menos tiempo.</li>
        <li>Una cosa que debes hacer para ser capaz de acordarte de cualquier concepto sin sentarte a memorizar.</li>
        <li>Por qué siempre te pillan en los examenes al cambiarte la más mínima cosa en un enunciado y como solucionarlo.</li>
        <li>Una cagada que todos los estudiantes de matemáticas cometen y que echa por tierra todo su estudio.</li>
        <li>Dos cosas que debes saber para poder resolver cualquier ejercicio aunque no tengas ni idea de por donde cogerlo.</li>
      </ul>

      <h2 className=" mt-14 text-2xl font-bold text-black tracking-tighter sm:text-3xl lg:text-4xl xl:text-5xl">Método para aprobar 
        matemáticas sin llorar: 760€</h2>
        <StripeBuyButton />

        <p>
        •	Pago seguro con tarjeta, Google Pay o Apple Pay.
        
      </p>
    

      <h2 className="mt-14 text-2xl font-bold text-black tracking-tighter sm:text-3xl lg:text-4xl xl:text-5xl">Testimonios no solicitados</h2>

      <Image
                      src="/images/Opinion1.jpg" // Ruta optimizada y formato moderno (ideal: .webp o .avif)
                      alt="Opinion no solicitada"
                      width={3000}
                      height={2000}
                      priority // si es una imagen above-the-fold (visible al cargar)
                      quality={100} // opcional, calidad ajustable para WebP/AVIF
                      className="max-w-150"
                    />
        <Image
                      src="/images/Opinion2.jpg" // Ruta optimizada y formato moderno (ideal: .webp o .avif)
                      alt="Opinion no solicitada"
                      width={3000}
                      height={2000}
                      priority // si es una imagen above-the-fold (visible al cargar)
                      quality={100} // opcional, calidad ajustable para WebP/AVIF
                      className="max-w-150"
                    />

      <h2 className=" mt-14 text-2xl font-bold text-black tracking-tighter sm:text-3xl lg:text-4xl xl:text-5xl">Preguntas frecuentes</h2>
      
      <h3 className="text-lg font-bold text-black tracking-tighter sm:text-xl lg:text-2xl xl:text-3xl">¿Cómo será el método? 
        ¿Qué haremos?</h3>

      <p>
        El método será un acompañamiento intensivo con dos meses de duración donde te guiaré en las 
        asignaturas de matemáticas que tengas este verano para asegurar 
        tu aprobado y que aprendas a estudiar.
      </p>
      <p>
        Todas las semanas haremos una tutoría de seguimiento, ejercicios nuevos y nuevos apartados para que 
        vayas estudiando de manera progresiva y eficiente. Tendrás soporte ilimitado de dudas durante estos meses.
      </p>

      <h3 className="text-lg font-bold text-black tracking-tighter sm:text-xl lg:text-2xl xl:text-3xl">¿Es válido para 
        estudiar X asignatura?</h3>

      <p>
        Sustituye X por cualquier asignatura de matemáticas que se te venga a la cabeza y ahí tienes 
        tu respuesta. Ten en cuenta que no te ayudaré con estadística, modelización y analisis numérico.
      </p>
      <p>
        Este método es válido para ti si:
      </p>

      <ul className="list-disc pl-6">
        <li>Estudias una carrera</li>
        <li>Tienes asignaturas de matemáticas</li>
        <li>Tu tasa de éxito no es del 100%</li>
      </ul>


      <h3 className="text-lg font-bold text-black tracking-tighter sm:text-xl lg:text-2xl xl:text-3xl">¿Esta formación es para mí?</h3>

      <p>
        Esta es una pregunta que solo puedes responder tú, así que si me escribes 
        para preguntarme esto no te contestaré. Sin embargo…
      </p>
      <p>
        Si después de leer esta página todavía te lo preguntas, no lo compres. 
        Esto no es una retahila de tips de estudio ni un manual de consejos.
      </p>

      <h3 className="text-lg font-bold text-black tracking-tighter sm:text-xl lg:text-2xl xl:text-3xl">¿Puedo apuntarme también si solo quiero
        repasar o prepararme para el próximo curso?</h3>

      <p>
        Sí.
      </p>
      

      <h3 className="text-lg font-bold text-black tracking-tighter sm:text-xl lg:text-2xl xl:text-3xl">¿Cuándo podré acceder 
        a los materiales?</h3>

      <p>
        A las pocas horas de comprarlo me pondré en contacto contigo para concretar una primera llamada y 
        preparar todo tu material, por lo que el material para comenzar estará disponible uno o dos días después.
      </p>


      <h3 className="text-lg font-bold text-black tracking-tighter sm:text-xl lg:text-2xl xl:text-3xl">¿Cómo podré acceder 
        a los materiales?</h3>

      <p>
        Mediante un enlace que te enviaré al correo electrónico que hayas introducido en el momento de la compra.
      </p>

      <h3 className="text-lg font-bold text-black tracking-tighter sm:text-xl lg:text-2xl xl:text-3xl">¿Durante cuánto tiempo 
        podré acceder a los materiales?</h3>

      <p>
        Podrás acceder al material durante los meses que preparemos tus asignaturas. Después, dejará de estar disponible.
      </p>

      <h3 className="text-lg font-bold text-black tracking-tighter sm:text-xl lg:text-2xl xl:text-3xl">¿Podré estudiar
        si me voy de vacaciones?
      </h3>

      <p>
        Podrás llevar tus apuntes en tu movil/tablet y estudiar y conectarte conmigo desde una playa en Cancún, si eso es lo que te mola.
      </p>

      <h3 className="text-lg font-bold text-black tracking-tighter sm:text-xl lg:text-2xl xl:text-3xl">¿Cuál es su precio? 
        ¿Bajará alguna vez?</h3>

      <p>
        El precio del método en verano es de 760€ y nunca bajará. 
        No hago ofertas ni cosas de esas, y según suba la demanda, más subirá el precio.
      </p>

      <h3 className="text-lg font-bold text-black tracking-tighter sm:text-xl lg:text-2xl xl:text-3xl">¿Y si me apunto a mitad de 
        verano el precio será menor?</h3>

      <p>
        No podrás apuntarte una vez que haya finalizado el plazo de inscripción.
        
      </p>

      <h3 className="text-lg font-bold text-black tracking-tighter sm:text-xl lg:text-2xl xl:text-3xl">¿Y si necesito mucha
        ayuda y quiero apuntarme despues del plazo?
      </h3>

      <p>
        Entonces aprenderás una valiosa lección y estarás más atento para la próxima.
        
      </p>

      <h3 className="text-lg font-bold text-black tracking-tighter sm:text-xl lg:text-2xl xl:text-3xl">¿Hay plazas limitadas? </h3>

      <p>
        Sí. Cada verano acepto a 6 alumnos, y en el momento que se llene, no acepto a nadie más. 
      </p>

      <h3 className="text-lg font-bold text-black tracking-tighter sm:text-xl lg:text-2xl xl:text-3xl">¿Tendré soporte ilimitado?  </h3>

      <p>
        Sí, durante los meses que preparemos tus asignaturas podrás preguntarme dudas en cualquier 
        momento. 
      </p>

      <h3 className="text-lg font-bold text-black tracking-tighter sm:text-xl lg:text-2xl xl:text-3xl">¿Puedo ir pagándo el método
        a lo largo de todo el verano? </h3>

      <p>
        No. El método se paga íntegro en el momento de la inscripción. 
      </p>

      <h3 className="text-lg font-bold text-black tracking-tighter sm:text-xl lg:text-2xl xl:text-3xl">¿Y si tengo dudas sobre
        si este método funcionará conmigo y por eso quiero ir pagando poco a poco? </h3>

      <p>
        Entonces no lo compres. No pierdas tu tiempo ni el mío.
      </p>

      <h3 className="text-lg font-bold text-black tracking-tighter sm:text-xl lg:text-2xl xl:text-3xl">¿Y que pasa si no apruebo?   </h3>

      <p>
        Si haces todo lo pactado, vienes a todas las tutorias 
        -no a calentar la silla-, hacer todo lo que te diga, sigues mi método, y aun así no apruebas, 
        te acompaño en las asignaturas suspensas hasta que apruebes.
      </p>

      <h3 className="text-lg font-bold text-black tracking-tighter sm:text-xl lg:text-2xl xl:text-3xl">¿Puedo apuntarme más veces si necesito ayuda con más asignaturas?    </h3>

      <p>
        Sí.
      </p>
      

      <h3 className="text-lg font-bold text-black tracking-tighter sm:text-xl lg:text-2xl xl:text-3xl">¿Y si no tengo tiempo 
        para seguir el método?    </h3>

      <p>
        Entonces tienes tiempo para seguir suspendiendo.
      </p>

      <h3 className="text-lg font-bold text-black tracking-tighter sm:text-xl lg:text-2xl xl:text-3xl">¿Y si 
        me cuesta concentrarme? </h3>

      <p>
        ¿De verdad esto es una razón para no sacar tus asignaturas? A mí me suena a excusa.
      </p>

      <h2 className=" mt-14 text-2xl font-bold text-black tracking-tighter sm:text-3xl lg:text-4xl xl:text-5xl">Método para aprobar 
        matemáticas sin llorar: 760€</h2>
        <StripeBuyButton />

      <p>
        •	Pago seguro con tarjeta, Google Pay o Apple Pay.
        
      </p>
    

      <h2 className="mt-14 text-2xl font-bold text-black tracking-tighter sm:text-3xl lg:text-4xl xl:text-5xl">Más opiniones/testimonios no solicitados</h2>

      <Image
                      src="/images/Opinion3.jpg" // Ruta optimizada y formato moderno (ideal: .webp o .avif)
                      alt="Opinion no solicitada"
                      width={3000}
                      height={2000}
                      priority // si es una imagen above-the-fold (visible al cargar)
                      quality={100} // opcional, calidad ajustable para WebP/AVIF
                      className="max-w-150"
                    />
        <Image
                      src="/images/Opinion4.jpg" // Ruta optimizada y formato moderno (ideal: .webp o .avif)
                      alt="Opinion no solicitada"
                      width={3000}
                      height={2000}
                      priority // si es una imagen above-the-fold (visible al cargar)
                      quality={100} // opcional, calidad ajustable para WebP/AVIF
                      className="max-w-150"
                    />
        <Image
                      src="/images/Opinion5.jpg" // Ruta optimizada y formato moderno (ideal: .webp o .avif)
                      alt="Opinion no solicitada"
                      width={3000}
                      height={2000}
                      priority // si es una imagen above-the-fold (visible al cargar)
                      quality={100} // opcional, calidad ajustable para WebP/AVIF
                      className="max-w-150"
                    />

    <h2 className=" mt-14 text-2xl font-bold text-black tracking-tighter sm:text-3xl lg:text-4xl xl:text-5xl">Método para aprobar 
        matemáticas sin llorar: 760€</h2>
        <StripeBuyButton />

      <p>
        •	Pago seguro con tarjeta, Google Pay o Apple Pay.
        
      </p>
    </section>
    
    </main>
  )
}
