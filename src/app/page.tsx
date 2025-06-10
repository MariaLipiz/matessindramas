import Image from "next/image";
import NewsletterForm from '@/components/NewsletterForm';

export default function Home() {
    return (
      <section className="section section space-y-6 text-gray-700 md:text-lg">
        <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-4 md:gap-12">
        <Image
                src="/images/MariaLipiz.jpg" // Ruta optimizada y formato moderno (ideal: .webp o .avif)
                alt="María Lípiz Fernández dando clase"
                className="rounded-full max-w-25 md:max-w-35"
                width={1000}
                height={1000}
                priority // si es una imagen above-the-fold (visible al cargar)
                quality={100} // opcional, calidad ajustable para WebP/AVIF
              />
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold tracking-tighter md:text-3xl text-black"> 
                María Lípiz Fernández </h1>
                <p>
                Estudiar matemáticas no tiene por qué ser una tortura.
                </p>
            </div>
        </div>
          <h2 className="text-4xl font-bold tracking-tighter mt-10 text-black"> 
          Odio que me hagan perder el tiempo.</h2>
          <p>
          Lo odio te digo. Y eso es exactamente lo que hacen el 99 % de métodos de estudio.
        </p>

        <p>
        ¿Repetir ejercicios como un mono? Ok. ¿Memorizar demostraciones como si fueran salmos? No se que es eso.
        
        </p>
        <p>
        ¿Practicar y razonar? Te lo compro. ¿Mecanizar ejercicios? Que gracioso.
        </p>
        <p>
        Solo quiero una cosa, y es tener la capacidad de aprender cualquier tema en un tiempo lo suficientemente bajo como para 
        no tener que dedicarle más de 10 minutos a cada concepto.
        </p>
        <p>
        Y lograrlo sin tener que meterme horas y horas de estudio, sin comerme videos de Youtube que no me van a llevar a nada y 
        sin tener que arrastrarme para que un profesor que pasa de mí me solucione la papeleta.
        </p>

        <p>
        Eso es lo que me motiva y eso es de lo que hablo cada día. De como pasé de ser un fracaso escolar y suspender casi todo en 
        primero de matemáticas a dedicarle el mínimo tiempo posible a estudiar hasta las asignaturas más complicadas de la carrera y asegurarme
        el aprobado sin ir a clase.
        </p>

        <p>
        <strong>Cada día escribo un correo con una idea para aprobar más y aprender mejor.</strong>
        </p>
        <p>
        ¿Te gusta el concepto? Te apuntas abajo. ¿Prefieres pasar el dia llorando por lo cabron que es tu profesor? Con que no te apuntes basta.
        </p>
        <NewsletterForm />

        <h2 className="text-4xl font-bold tracking-tighter mt-10 text-black"> 
          No apto para todos los públicos</h2>
        <p>
        En mis emails encontrarás humor de mal gusto y cosas que harán que te caiga mal. 
        </p>
        <p>
        Si te escandalizas fácilmente lo que tengo que decir no es para ti y mis métodos tampoco. En ese caso, mi recomendación es que 
        ni te apuntes. Lo mismo si tienes demasiado amor propio, crees que tus suspensos son un castigo injustificado de Dios y crees que 
        eres el perfecto estudiante. 
        </p>
        <p>
        Lo que cuento es mi recomendación honesta para superar un problema que no para de crecer entre los estudiantes españoles.
        </p>
        <NewsletterForm />
        
        
  
        
      </section>
    )
  }
  