
import Link from "next/link";

export default function Home() {
    return (
      <main>
      
      <section className="section  space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">  
        <span className="bg-[#b0e4fc]">Aprueba mates</span> sin estudiar como un desgraciado, sin ansiedad y sin llorar.
        </h1>
        <h2 className="mx-auto text-gray-900 text-xl font-semibold tracking-tighter sm:text-2xl lg:text-3xl">
          Si estás harto de estudiar como un loco, suspender y sentirte idiota, esto es para ti. Solo para 
          estudiantes del <span className="text-decoration: underline">Grado en Matemáticas.</span>
        </h2> 
      </section>

      <section className="section space-y-6 text-base sm:text-xl  font-normal mt-4">
        <p>
          Se como te sientes. 
        </p>

        <p>
        Tus apuntes te suenan a chino.
        </p>
        <p>
        El profesor viene a clase a hacer de todo menos explicar. O no viene porque no tienes profesor.
        </p>
        <p>
        Los examenes son una ida de olla y aparecen cosas que no has visto en tu vida.
        </p>
        <p>
        De la nada, te piden inventarte cosas y sacarte resultados de la manga que no sabías ni que existían.
        </p>
        <p>
        Echas horas y horas en la biblioteca o en casa estudiando porque ves que sino, no te da. No tienes tiempo para ti.
        </p>
        <p>
        Tampoco puedes recurrir a nadie, porque tus amigos están mas perdidos que tú.
        </p>
        <p>
        Y no encuentras profesor particular que te salve.
        </p>
        <p>
        En fin, que necesitas ayuda. Ayuda urgente.
        </p>
        <p className="mb-12">
        Apuntate a mi método y salva el cuatri (hay lista de espera, por lo que si no te apuntas ahora, es muy probable que pierdas tu plaza).
        </p>
        <Link
        href="/aprueba-mates-ya"
        className="rounded-xl border px-4 py-2 font-medium shadow-sm disabled:opacity-60"
      >
        Quiero apuntarme a tu método para aprobar mates de una vez por todas
      </Link>
        <h2 className="mx-auto text-gray-900 text-xl font-semibold tracking-tighter sm:text-2xl lg:text-3xl mt-12">
           <span className="bg-[#b0e4fc]">¿Quién</span> te está diciendo esto?
        </h2>
        <p>
        Soy María Lípiz.
        </p>
        <p>
        Ahora soy profesora, y antes también he sido estudiante del grado en matemáticas como tú.
        </p>
        
        <p>
        Por eso y porque cursé el grado a la par que trabajaba 8 horas al día, se lo que funciona y lo que no.
        </p>
        <p>
        Y se como ayudarte.
        </p>
        <p className="mb-12">
        Apuntate al método que ha hecho aprobar a decenas de alumnos como tú y olvidate de estudiar, no aprobar y sentirte idiota.
        </p>
        <Link
        href="/aprueba-mates-ya"
        className="rounded-xl border px-4 py-2 font-medium shadow-sm disabled:opacity-60"
      >
        Quiero apuntarme a tu método para aprobar mates de una vez por todas
      </Link>

      <p className="mb-12">
        
        </p>
        
        
        

      
        
        
  
        
      </section>
      </main>
    )
  }
  