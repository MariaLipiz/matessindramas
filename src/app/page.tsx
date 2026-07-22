import PrincipalNewsletterForm from "@/components/newsletter/PrincipalNewsletterForm";

export default function Home() {
    return (
      <main>
      
      <section className="section  space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl"> Fiestas, citas, resacas, festivales, 
          porros, Erasmus, casi algos...
        </h1>
        {/*<h2 className="mx-auto text-gray-900 text-xl font-semibold tracking-tighter sm:text-2xl lg:text-3xl mt-12">
        Los años de universidad son demasiado buenos como para dejar que un examen, una asignatura o un profesor cabrón te los arruine.  
        </h2> */}
        <h2 className="mx-auto text-gray-900 text-xl font-semibold tracking-tighter sm:text-2xl lg:text-3xl mt-6">
        Los años de universidad son demasiado buenos como para dejar que las matemáticas, un examen o un profesor cabrón te los arruine.  
        </h2> 
      </section>

      <section className="section space-y-6 mb-12 text-base sm:text-xl  font-normal mt-4">
      
        <p>
        Por eso te traigo <span className="font-bold">"Tres formas (dos 
          poco éticas) de aprobar un examen”</span>
        </p>

        
        <p className="mb-6">
        Lo reciben quienes se apuntan aquí 👇
        </p>
        <PrincipalNewsletterForm />

        {/*}

        <h2 className="mt-12 mx-auto text-gray-900 text-xl font-semibold tracking-tighter sm:text-2xl lg:text-3xl">
         Si te apuntas, también recibirás...
        </h2> 

        <ul className="list-disc pl-6 space-y-4 mb-10">
          <li>Un <span className="font-semibold">consejo cada día</span> para aprobar más y hacer tu vida universitaria un poquito más llevadera</li>
          <li>Acceso a <span className="font-semibold">productos exclusivos</span> para estudiantes de matemáticas</li>
          <li>Una dosis de humor y motivación diaria</li>
        </ul>

        <p className="mb-12">
        Y recuerda, <span className="font-semibold">día que estás fuera, consejo que te pierdes.</span>
        </p>
        <PrincipalNewsletterForm />
        */}
  
        
      </section>
      </main>
    )
  }