
import BuyBlock from "@/components/BuyBlock";

const STORAGE_KEY = "mmi-offer-deadline-v1";


function ExpiringCta() {
  return (
    <div className="space-y-6">
      <p className="text-xl sm:text-2xl">
        Una guía en la que destripo como aprendí a bajarme cualquier demostración/ejercicio sin aprenderme 83774820 teoremas y proposiciones inutiles.
      </p>

      <ul className="list-disc pl-6 space-y-4">
        <li>Precio: 20 €, impuestos incluidos.</li>
        <li>
          <span className="bg-[#b0e4fc] px-1 font-semibold">
            Oferta válida únicamente durante los próximos 15 minutos.
          </span>{" "}
          <span className="bg-[#b0e4fc] px-1 font-semibold">
            Pasado ese tiempo no será posible adquirir esta guía.
          </span>
        </li>
      </ul>

      <BuyBlock />
    </div>
  );
}

export default function ConfirmadoPage() {
  return (
    <main>
      <section className="section space-y-6 text-base sm:text-xl font-normal">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
          Un mensaje importante
        </h1>
        <h3 className="text-2xl font-semibold tracking-tighter sm:text-3xl mb-12">
              Que se esfumará si no actuas en los próximos 15 minutos. 
            </h3>
        <p>
        He preparado algo. Una guía que, si aplicas paso por paso tal y como te cuento (en la guía, no aquí), hará que seas capaz de abordar problemas 
        que antes te parecían imposibles y demostraciones que antes te sonaban a chino.
        </p>
        <p>
        Palabrita del niño jesus.
        </p>
        
      </section>

      <section className="section space-y-8 mb-12 text-base sm:text-xl font-normal mt-4">
        

        <BuyBlock />

        <hr className="border-slate-300 my-12" />

        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Preguntas frecuentes
        </h2>

        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold tracking-tighter sm:text-3xl">
              ¿Cómo es la guía? ¿Qué contiene?
            </h3>
            <p>
              Consiste en un texto leible y sin mucha floritura matemática en la que te explico de forma sencilla como abordar 
              el estudio independientemente del nivel en el que estés para no perder ni un minuto estudiando cosas innecesarias y que puedas llegar a sacar 
              cualquier ejercicio que te pongan delante.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold tracking-tighter sm:text-3xl">
              ¿Es válido para estudiar {"{X}"} asignatura? / ¿Vale para mi caso?
            </h3>
            <p>
              Sustituye «X» por lo que quieras: «álgebra», «geometría diferencial»,
              «topología», «estudio de la cobaya naranja fosforito» o la asignatura o tema que te esté volviendo loco ahora mismo.
            </p>
            <p>
              Este curso es válido para ti si eres consciente de que el éxito en toda la carrera dependerá de tu capacidad para identificar patrones, inventar argumentos en el momento 
              y salir del paso. 
            </p>
            <p>
              Si eres consciente de eso, el curso es para ti. Si me vas a venir
              con que tu quieres empollartelo todo desde el principio y que lo que a ti te importa es ser super mega correcto matemáticamente, poner 
              muchos simbolitos raros porque así está todo mas formal y sacar las 
              demostraciones haciendo primero un doble salto mortal y luego un triple tirabuzon con pirueta, ni yo, ni esta guía ni nadie puede ayudarte.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold tracking-tighter sm:text-3xl">
              ¿Cuál es su precio?
            </h3>
            <p>El precio es de 20 €, precio final vivas donde vivas.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold tracking-tighter sm:text-3xl">
              ¿Cuándo podré acceder al contenido?
            </h3>
            <p>
              Justo después de comprarlo te daré acceso yo misma a la guía.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold tracking-tighter sm:text-3xl">
              ¿Cómo se accederá a la guía?
            </h3>
            <p>
              Entrarás a una plataforma que te dire cuando la compres con el correo electrónico con el que te hayas suscrito.
            </p>
          </div>

        
        </div>

        <hr className="border-slate-300 my-12" />

        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
        Como estudiar matemáticas en cualquier curso de la carrera sin volverte loco por el camino
        </h2>

        <p className="text-xl sm:text-2xl">
        Una guía en la que destripo como aprendí a bajarme cualquier demostración/ejercicio sin aprenderme 83774820 teoremas y proposiciones inutiles.
        </p>

        <ul className="list-disc pl-6 space-y-4">
          <li>Precio: 20 €, impuestos incluidos.</li>
          <li>
            <span className="bg-[#b0e4fc] px-1 font-semibold">
              Oferta válida únicamente durante los próximos 15 minutos.
            </span>{" "}
            <span className="bg-[#b0e4fc] px-1 font-semibold">
              Pasado ese tiempo no será posible adquirir esta guía.
            </span>
          </li>
        </ul>

        <BuyBlock />

        <hr className="border-slate-300 my-12" />

        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
          ¿Qué más contiene la guía?
        </h2>

        <ol className="list-decimal pl-8 space-y-4">
          <li>
            <span className="bg-[#b0e4fc] px-1 font-semibold">
              Cómo aprendi a bajarme cualquier demostración que se me pusiese por delante
            </span>
          </li>
          <li>
            <span className="bg-[#b0e4fc] px-1 font-semibold">
              La absolutamente mejor técnica de estudio (que llevo probando con mis alumnos durante 10 años con muchisimo éxito) que, en realidad, 
              de técnica de estudio tiene poco
            </span>
          </li>
          <li>
            <span className="bg-[#b0e4fc] px-1 font-semibold">
              Cómo DEJAR de perder tiempo mientras tratas de averiguar por donde empezar un ejercicio (y como saber por donde empezarlo)
            </span>
          </li>
        </ol>

        <p>
          Solo eso compensa por un gran margen el precio de la guía, pero es más larga, así que encontrarás mucho más, incluyendo…
        </p>

        <ul className="list-disc pl-6 space-y-4">
          <li>
            3 cosas que casi seguro estás haciendo en los examenes y empujan a tu profesor a suspenderte
          </li>
          <li>
            Una sencilla práctica con la que hasta un mono con deficit de atención puede aprender matemáticas más rapidamete que cualquiera
          </li>
          <li>
            Cómo plantear con éxito (casi) cualquier problema usando solo lo que te enseñaron en el instituto.
          </li>
          <li>
            Una forma garantizada de rascar puntos en cualquier examen (si, en cualquiera, esto es válido para todas las asignaturas)
          </li>
          <li>
            Mi mayor error y mi gran acierto mientras estudiaba la carrera. 
          </li>
          <li>
            La pregunta con la que identifico rápidamente a los estudiantes que no dominan una asignatura aunque ellos crean que si lo hacen, y como conocerla
            hará que dejes de estar atascado en muchos puntos del temario que estés estudiando 
          </li>
          <li>Y mucho, mucho, pero que mucho más. 20 €.</li>
        </ul>

        <hr className="border-slate-300 my-12" />

        <BuyBlock />
      </section>
    </main>
  );
}