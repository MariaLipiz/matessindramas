import NudesYMasNewsletterForm from "@/components/newsletter/NudesYMasNewsletterForm";

export default function Home() {
    return (
      <main>
      
      <section className="section  space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl"> Bueno, de momento te cuento el +
        </h1>
        
      </section>

      <section className="section space-y-6 mb-12 text-base sm:text-xl  font-normal mt-4">
        <p>
        + es un simbolo matemático que indica:
        </p>

        <ul className="list-disc pl-6 space-y-4 mb-10">
          <li>La operación suma o adicion (que no adicción, marihuano).</li>
          <li>Que algo es positivo (igual que tu compi antes de sacar un 0.5 en el final de álgebra)</li>
          <li>La unión de dos conjuntos disjuntos (como cuando te arrejuntas con tu crush en el trastero de tu abuela).</li>
        </ul>

        <p>
        Aquí abajo para ver los <span className="font-semibold">NUDES</span> 👇
        </p>
        
        <NudesYMasNewsletterForm />
        
      </section>
      </main>
    )
  }