import Image from "next/image"

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl relative inline-block">
              Lo que dicen nuestros estudiantes
              <span className="absolute bottom-2 left-0 w-full h-3 bg-purple-200 -z-10 animate-underline-delay-2"></span>
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Descubre cómo hemos ayudado a estudiantes a superar sus dificultades con las matemáticas.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Avatar"
                className="rounded-full"
                width={40}
                height={40}
              />
              <div>
                <h3 className="font-semibold">Laura M.</h3>
                <p className="text-sm text-gray-500">Estudiante de Bachillerato</p>
              </div>
            </div>
            <p className="mt-4 text-gray-500">
              "Gracias a Mates sin Dramas, he pasado de suspender a sacar un 8 en matemáticas. Las explicaciones son muy
              claras."
            </p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Avatar"
                className="rounded-full"
                width={40}
                height={40}
              />
              <div>
                <h3 className="font-semibold">Carlos P.</h3>
                <p className="text-sm text-gray-500">Estudiante Universitario</p>
              </div>
            </div>
            <p className="mt-4 text-gray-500">
              "Los recursos interactivos me han ayudado mucho a entender conceptos complejos de cálculo que antes me
              parecían imposibles."
            </p>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Avatar"
                className="rounded-full"
                width={40}
                height={40}
              />
              <div>
                <h3 className="font-semibold">Ana R.</h3>
                <p className="text-sm text-gray-500">Estudiante de ESO</p>
              </div>
            </div>
            <p className="mt-4 text-gray-500">
              "Por fin entiendo las matemáticas y hasta me parecen divertidas. Los profesores explican de una forma que
              hace todo más fácil."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
