import Link from "next/link";
import MailerLiteInlineForm from "../components/MailerLiteInlineForm";

export default function Home() {
    return (
      <main>
      
      <section className="section  space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl"> ¿El grado en&nbsp;

        <span className="bg-[#b0e4fc]">matemáticas</span> te trae por la calle de la amargura?
        </h1>
        <h2 className="mx-auto text-gray-900 text-xl font-semibold tracking-tighter sm:text-2xl lg:text-3xl">
         Tranquilo, no es culpa tuya.
        </h2> 
      </section>

      <section className="section space-y-6 mb-12 text-base sm:text-xl  font-normal mt-4">
        <p>
        Tus apuntes son un cacao y suenan a chino. Aparentemente nada tiene sentido.
        </p>

        <p>
        Definición. Proposición. Teorema. Corolario… Y así, en bucle.
        </p>
        <p>
        Mecanizar ejercicios es misión imposible. Dos ejercicios iguales se razonan de maneras distintas.
        </p>
        <p>
        El profesor viene a clase a hacer de todo menos explicar y todo se da por sabido. -Esto ya se vio el año pasado-.
        </p>
        <p>
        O no viene porque no tienes profesor.
        </p>
        <p>
        Los exámenes son una ida de olla y aparecen cosas que ni has visto ni nadie te había dicho que podían caer.
        </p>
        <p>
        De la nada, te piden inventarte cosas y sacarte resultados de la manga que no sabías ni que existían. 
        </p>
        <p>
        Echas horas y horas en la biblioteca o en casa estudiando porque ves que sino, no te da. 
        </p>
        <p>
        No tienes tiempo para ti y ves que no llegas a todo. La carga de trabajo es descomunal.
        </p>
        <p>
        Y no encuentras paper, libro ni video de Youtube que te salve. 
        </p>
        <p className="mt-16">
        Por eso, te traigo <span className="font-semibold">una estrategia que podrás aplicar hoy mismo</span> para hacer tu estudio más eficiente, y ya de paso, que todo deje de sonar a chino.
        </p>
        <p>
        ¿Que hay que hacer para conseguirla?
        </p>
        <p>
        Dejas <span className="font-semibold">aquí abajo</span> tu correo.
        </p>
        <MailerLiteInlineForm />

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
        <MailerLiteInlineForm />
  
        
      </section>
      </main>
    )
  }