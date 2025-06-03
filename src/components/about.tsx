export function About() {
  return (
    <section className="section">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl relative inline-block">
                Sobre nosotros
                <span className="absolute bottom-2 left-0 w-full h-3 bg-green-200 -z-10 animate-underline"></span>
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Somos un equipo de profesores apasionados por las matemáticas y la educación. Nuestra misión es hacer
                que las matemáticas sean accesibles y divertidas para todos los estudiantes.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <div className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 px-8 text-sm font-medium text-gray-900">
                +5000 Estudiantes
              </div>
              <div className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 px-8 text-sm font-medium text-gray-900">
                +200 Lecciones
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter">Nuestra filosofía</h3>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Creemos que cualquier persona puede aprender matemáticas con el enfoque adecuado. Nuestro método se basa
                en explicaciones claras, ejemplos prácticos y un apoyo constante para que puedas superar cualquier
                dificultad.
              </p>
            </div>
            <div className="font-caveat text-3xl text-blue-400">"Las matemáticas no tienen que ser un drama"</div>
          </div>
        </div>
      </div>
    </section>
  )
}