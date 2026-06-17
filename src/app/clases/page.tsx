
import Image from "next/image";
import AccessForm from "@/components/AccessForm";


const ADMISSION_URL = "https://calendar.app.google/yQmbK6y1WqMk1dUB8";

export default function Clases() {
  return (
    <main>
      <section className="section space-y-8 mb-12 text-base sm:text-xl font-normal mt-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
        Tu no quieres clases particulares
        </h1>

        <h2 className="mx-auto text-gray-900 text-2xl font-bold tracking-tighter sm:text-3xl lg:text-4xl mt-12">
        Lo que quieres es aprobar para que tus padres te dejen tranquilo y poder pegarte el verano de tu vida
        </h2>

        <p>
        ¿Perderte ese viaje con colegas a un lugar lleno de mosquitos y un calor infernal?
        </p>

        <p>
        Ni de coña
        </p>

        <p>
        ¿Ver como todo el mundo
        se lo pasa pipa en un festival lleno de drogadictos mientras cumples condena en casa por no haber hecho lo que tenías que hacer?
        </p>

        <p>
        Antes muerto
        </p>

        

        <p>
        Si no quieres que tu vida se convierta en una pelicula de un solo fotograma con tu escritorio, tus apuntes y tu como personajes principales,
        rellena el formulario de aquí abajo para ver si eres apto y reserva reunión de admisión en el calendario.
        </p>

        <p>
        En esta reunión hablaremos sobre tu caso y decidiré si tiene sentido que te ayude a conseguir la libertad condicional en verano para 
        poder ponerte hasta arriba de cervezas y canutos.
        </p>

        <AccessForm />

        <Image
            src="/images/Opinion1.jpg"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />
        <Image
            src="/images/Opinion2.jpg"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />
        
        <Image
            src="/images/testimonio1.png"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />

        <Image
            src="/images/testimonio2.png"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />
        <Image
            src="/images/testimonio3.png"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />
        <Image
            src="/images/testimonio19.png"
            alt="Descripción de la imagen"
            width={300}
            height={200}
            className="rounded-sm"
        />
        <Image
            src="/images/testimonio20.png"
            alt="Descripción de la imagen"
            width={300}
            height={200}
            className="rounded-sm"
        />
        

        <AccessForm />




        <h2 className="mx-auto text-gray-900 text-2xl font-bold tracking-tighter sm:text-3xl lg:text-4xl mt-12">
          Al grano, que te ayude tiene un precio mínimo de 500€/mes.
        </h2>


        <p className="my-12">
          Y no, no se hacen descuentos, ni se fraccionan los meses ni nada por el estilo.
        </p>

        <AccessForm />

        
        
        <Image
            src="/images/testimonio5.png"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />
        <Image
            src="/images/testimonio21.png"
            alt="Descripción de la imagen"
            width={300}
            height={200}
            className="rounded-sm"
        />
        <Image
            src="/images/testimonio6.png"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />
        <Image
            src="/images/testimonio7.png"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />
        <Image
            src="/images/testimonio22.png"
            alt="Descripción de la imagen"
            width={300}
            height={200}
            className="rounded-sm"
        />

        {/*<h2 className="mx-auto text-gray-900 text-2xl font-bold tracking-tighter sm:text-3xl lg:text-4xl mt-12">
        Irse es muy fácil
        </h2>

        <p>
        Si una vez empecemos sientes que no es para ti, me lo dices y santas pascuas.
        </p>

        <p>
        Una cosa quiero dejar clara.
        </p>

        <p>
        Me tomo esto muy en serio y espero el mismo nivel 
        compromiso por parte de mis alumnos, lo que 
        significa que eres libre de entrar, probar y 
        marcharte, pero una vez que te des de baja 
        perderás el acceso al contenido, a los apuntes, a los videos y ya no podrás 
        volver a entrar.
        </p>

        <p>
        Quiero relaciones a largo plazo en las que acabe 
        conociendo bien a mis alumnos y me convierta en un 
        activo de alto valor para ellos y que ellos puedan 
        sacarme el partido que se obtiene cuando estas 
        relaciones se extienden en el tiempo.
        </p>*/}

        <AccessForm />

        <h2 className="mx-auto text-gray-900 text-2xl font-bold tracking-tighter sm:text-3xl lg:text-4xl mt-12">
        Preguntas que quizás te estás haciendo
        </h2>

        <h3 className="mx-auto text-gray-900 text-xl font-semibold tracking-tighter sm:text-2xl lg:text-3xl mb-12">
        ¿Esto son clases particulares?
        </h3>

        <p>
        Esto es para que apruebes calculo, algebra (o la movida que te esté perturbando en este momento), 
        pases limpio al siguiente curso y tus padres no te manden a trabajar a la huerta en verano.
        </p>


        <h3 className="mx-auto text-gray-900 text-xl font-semibold tracking-tighter sm:text-2xl lg:text-3xl mb-12">
        ¿Para que es la reunión de admisión? ¿Porque no puedo solo pagar y entrar?
        </h3>

        <p>
        Porque al igual que tu no quedas con lo primero que se te aparece en Tinder (o si, no se), yo no cojo al primero que me dice que 
        quiere que le eche un cablecito.
        </p>

        <p>
        Algunos de los requisitos mínimos son:
        </p>

        <ul className="list-disc pl-12 space-y-4">
          <li>Saber hacer una regla de tres</li>
          <li>Saber leer Teo va al parque y ser capaz de responder a la pregunta -¿A donde va Teo?-</li>
          <li>No decir cosas como -Me lo tengo que pensar-</li>

        </ul>

        <h3 className="mx-auto text-gray-900 text-xl font-semibold tracking-tighter sm:text-2xl lg:text-3xl mb-12">
        ¿Cuantas horas de clase me vas a dar / le vas a dar a mi hijo?
        </h3>

        <p>
        Eso es un misterio que se resolverá cuando vea lo perdido que estás / está tu hijo.
        </p>

        

        <h3 className="mx-auto text-gray-900 text-xl font-semibold tracking-tighter sm:text-2xl lg:text-3xl mb-12">
        El precio me parece alto
        </h3>

        <p>
        Si eso es lo que piensas estás en lo correcto y 
        no tiene ningún sentido que perdamos ninguno nuestro 
        tiempo.
        </p>


        <h3 className="mx-auto text-gray-900 text-xl font-semibold tracking-tighter sm:text-2xl lg:text-3xl mb-12">
        ¿Cómo funciona? ¿Cómo me apunto?
        </h3>

        <ul className="list-disc pl-12 space-y-4">
          <li>Reservas tu reunión de admisión</li>
          <li>Hacemos la reunión de admisión</li>
          <li>Si tiene sentido que seas mi alumno, te lo digo. Si no lo tiene, tambien te lo digo
          </li>
          <li>Pagas</li>
          <li>Empezamos</li>
        </ul>

        <h3 className="mx-auto text-gray-900 text-xl font-semibold tracking-tighter sm:text-2xl lg:text-3xl mb-12">
        ¿Si pago mas podré decidir cuantas clases le das a mi hijo?
        </h3>

        <p>
        Señora, suelteme el brazo.
        </p>

        <h3 className="mx-auto text-gray-900 text-xl font-semibold tracking-tighter sm:text-2xl lg:text-3xl mb-12">
        Tengo contratado un profesor particular, ¿Merece la pena apuntarme aquí?
        </h3>

        <p>
        Ni idea.
        </p>

        <h3 className="mx-auto text-gray-900 text-xl font-semibold tracking-tighter sm:text-2xl lg:text-3xl mb-12">
        Estudio matemáticas / fisica / ingeniería / economía / ADE / estoy en el instituto... ¿Vale para mí?
        </h3>

        <p>
        Vale para quien quiera aprobar matemáticas.
        </p>

       

        <h2 className="mx-auto text-gray-900 text-2xl font-bold tracking-tighter sm:text-3xl lg:text-4xl mt-12">
        ¿Dudas?
        </h2>

        <p>
        Esta página es tan buena y está todo tan bien explicado que no contestaré preguntas.
        </p>

        <p>
        Si no quieres ayuda 0 problema. Si quieres que te ayude, reservas ahí:

        </p>

        <AccessForm />

        <h2 className="mx-auto text-gray-900 text-2xl font-bold tracking-tighter sm:text-3xl lg:text-4xl mt-12">
        Mas testimonios que nadie me ha pedido
        </h2>

        <Image
            src="/images/testimonio9.png"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />
        <Image
            src="/images/testimonio10.png"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />
        <Image
            src="/images/testimonio11.png"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />
        <Image
            src="/images/testimonio12.png"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />
        <Image
            src="/images/testimonio13.png"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />
        <Image
            src="/images/testimonio14.png"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />

        <Image
            src="/images/testimonio16.png"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />
        <Image
            src="/images/testimonio17.png"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />
        <Image
            src="/images/testimonio18.png"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />

        <Image
            src="/images/OP1.png"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />
        <Image
            src="/images/OP2.png"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />
        <Image
            src="/images/OP3.png"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />
        <Image
            src="/images/OP4.png"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />
        <Image
            src="/images/OP5.png"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />
        <Image
            src="/images/OP6.png"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />
        <Image
            src="/images/OP7.png"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />

        <Image
            src="/images/testimonio4.png"
            alt="Descripción de la imagen"
            width={600}
            height={200}
            className="rounded-sm"
        />

        <AccessForm />


      </section>
    </main>
  );
}