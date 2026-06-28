import BuyBlockLimites from "@/components/BuyBlockLimites";

const STORAGE_KEY = "mmi-offer-deadline-v1";


function ExpiringCta() {
  return (
    <div className="space-y-6">
      <p className="text-xl sm:text-2xl">
        Una guía en la que destripo como resolver cualquier límite por turbio que sea para que nunca 
        te vuelvan a pillar por sorpresa
      </p>

      <ul className="list-disc pl-6 space-y-4">
        <li>Precio: 9 €, impuestos incluidos.</li>
        <li>
          <span className="bg-[#b0e4fc] px-1 font-semibold">
            Oferta válida únicamente durante los próximos 15 minutos.
          </span>{" "}
          <span className="bg-[#b0e4fc] px-1 font-semibold">
            Pasado ese tiempo no será posible adquirir esta guía.
          </span>
        </li>
      </ul>

      <BuyBlockLimites />
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
        He preparado algo. Una guía que, si aplicas paso por paso tal y como te cuento (en la guía, no aquí), hará que seas capaz de resolver cualquier 
        limite por raro / turbio / extraño que sea. 
        </p>
        <p>
        Palabrita del niño jesus.
        </p>
        
      </section>

      <section className="section space-y-8 mb-12 text-base sm:text-xl font-normal mt-4">
        

        <BuyBlockLimites />

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
              Consiste en un texto leible y sin mucha floritura en la que te explico de forma sencilla como resolver
              cualquier tipo de límite. 
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold tracking-tighter sm:text-3xl">
              ¿Es válido para {"{X}"} asignatura? / ¿Vale para mi caso?
            </h3>
            <p>
              Sustituye «X» por lo que quieras: «cálculo», «matemáticas I», «matemáticas de Bachillerato», «análisis matemático», «estudio de la cobaya naranja fosforito» o cualquier asignatura 
              en la que tengas que resolver un límite.
            </p>
            <p>
              Esta guía es para ti si te piden saber resolver limites, indeterminaciones, usar L'Hopital o cualquiera de esas vainas. 
            </p>
            
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold tracking-tighter sm:text-3xl">
              ¿Cuál es su precio?
            </h3>
            <p>El precio es de 9 €, precio final vivas donde vivas.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold tracking-tighter sm:text-3xl">
              ¿Cuándo podré acceder al contenido?
            </h3>
            <p>
              Justo después de comprarlo.
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
        Bájate cualquier límite
        </h2>

        <p className="text-xl sm:text-2xl">
        Una guía en la que destripo como resolver cualquier límite por turbio que sea para que nunca 
        te vuelvan a pillar por sorpresa en un examen
        </p>

        <ul className="list-disc pl-6 space-y-4">
          <li>Precio: 9 €, impuestos incluidos.</li>
          <li>
            <span className="bg-[#b0e4fc] px-1 font-semibold">
              Oferta válida únicamente durante los próximos 15 minutos.
            </span>{" "}
            <span className="bg-[#b0e4fc] px-1 font-semibold">
              Pasado ese tiempo no será posible adquirir esta guía.
            </span>
          </li>
        </ul>

        <BuyBlockLimites />

        <hr className="border-slate-300 my-12" />

        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
          ¿Qué más contiene la guía?
        </h2>

        <ol className="list-decimal pl-8 space-y-4">
          <li>
            <span className="bg-[#b0e4fc] px-1 font-semibold">
              Cómo identificar que tipo de limite tenemos delante sin posibilidad de error
            </span>
          </li>
          <li>
            <span className="bg-[#b0e4fc] px-1 font-semibold">
              Tres cosas imprescindibles para jamas atascarnos al resolver límites donde aparezca el número e o una funcion exponencial.
            </span>
          </li>
          <li>
            <span className="bg-[#b0e4fc] px-1 font-semibold">
              Limites trampa que caen en los exámenes y que parecen una cosa pero luego son otra
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
            Una sencilla práctica con la que hasta un mono con deficit de atención puede identificar que tipo de indeterminación tenemos delante
          </li>
          <li>
            Porque los límites trigonometricos tienen trampa (y como hacer para no caer en ella)
          </li>
          <li>
            Una forma infalible para saber cuando tenemos que aplicar límites (aparte de para calcular asintotas o continuidad)
          </li>
          <li>
            El criterio real para saber si un límite existe o no
          </li>
          <li>
            Los limites laterales: destripados
          </li>
          <li>Y mucho, mucho, pero que mucho más. 9 €.</li>
        </ul>

        <hr className="border-slate-300 my-12" />

        <BuyBlockLimites/>
      </section>
    </main>
  );
}