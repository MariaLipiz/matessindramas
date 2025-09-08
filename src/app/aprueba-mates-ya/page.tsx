// /app/lead/page.tsx
'use client'
import { useState } from 'react'

export default function LeadFormPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>(
    'idle'
  )
  const [message, setMessage] = useState<string>('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)

    // Validación de checkbox de privacidad
    if (!formData.get('consentimiento')) {
      setStatus('error')
      setMessage('Debes aceptar la política de privacidad.')
      return
    }

    const payload = Object.fromEntries(formData.entries())

    try {
      const res = await fetch('/api/notion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.error || 'Error desconocido')
      setStatus('ok')
      setMessage(
        '¡Guardado! Si las plazas no se acaban antes, recibirás un guaspap antes del próximo cuatri.'
      )
      form.reset()
    } catch (err: any) {
      setStatus('error')
      setMessage(
        err?.message || 'Esto ha fallado por algún motivo que desconozco.'
      )
    }
  }

  return (
    <main className="section  space-y-6 ">

      <section className="space-y-6 mb-12 ">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">  
        Este cuatri <span className="bg-[#b0e4fc]">se aprueba.</span> 
        </h1>
        <h2 className="mx-auto text-xl font-semibold tracking-tighter sm:text-2xl lg:text-3xl">
          Sí o sí.
        </h2> 
      </section>

      <section className="space-y-6 text-base sm:text-xl  font-normal mt-4">
        <p className="font-semibold">
          Este servicio es muy simple.  
        </p>
        <p>
          Te ayudaré personalmente a lo largo de todo un cuatrimestre a praparar tus asignaturas para asegurar tu aprobado.
        </p>
        <p>
          Cuando digo asegurar me refiero a ASEGURAR. No a resolverte cuatro dudas contadas y darte dos clases mal dadas.
        </p>
        <h2 className="mx-auto my-12 text-xl font-semibold tracking-tighter sm:text-2xl lg:text-3xl">
          ¿En que consiste?
          </h2> 
          <p>
          Esto es una preparación intensiva de un cuatrimestre de duración para sacar tus asignaturas, donde estaré contigo durante todo 
          el proceso para asegurar unos buenos resultados (y evitar segundas matriculas y convocatorias extraordinarias).
        </p>

        <h2 className="mx-auto my-12 text-xl font-semibold tracking-tighter sm:text-2xl lg:text-3xl">
          ¿Que incluye?
          </h2> 
          <p>
          Esta preparación incluye todo lo necesario para asegurar unos buenos resultados. 
        </p>
        <ul className="list-disc pl-6 space-y-2">
        <li><strong>Planning</strong> para organizarnos como debe ser y llevar las cosas al día</li>
        <li><strong>Apuntes que no suenan a chino</strong> hechos por mí que podrás llevar en tu ordenador, movil o impresos para poder estudiar
          en cualquier lado </li>
        <li><strong>Seguimiento</strong> para que no se nos quede ningún cabo suelto</li>
        <li><strong>Tutorías semanales</strong> para resolver dudas, ejercicios e ir al día con todo. Por si te surje la duda, estas tutorías no son clases de una hora para 
        contarte exactamente lo mismo que pone en los apuntes. </li>
        <li><strong>Ayuda ilimitada</strong> fuera de clases. ¿Que tienes una duda y necesitas resolverla para avanzar? Me llamas y te la resuelvo
        en el momento. </li>
      </ul>

      <h2 className="mx-auto my-12 text-xl font-semibold tracking-tighter sm:text-2xl lg:text-3xl">
          ¿Con qué asignaturas me ayudarás?
          </h2> 
          <p>
          No me gustan las matemáticas aplicadas, así que te ayudaré con todas las asignaturas que tengas que no estén relacionadas con estadística, 
          análisis numérico, modelización, optimización, investigación operativa y movidas así. 
        </p>
        <p>
          Es decir, que si tu programa incluye álgebra, cálculo, topología, geometría e inferencia estadística, te ayudaré con las cuatro primeras.
        </p>

      <h2 className="mx-auto my-12 text-xl font-semibold tracking-tighter sm:text-2xl lg:text-3xl">
          ¿Qué precio tiene?
          </h2> 
          <p>
          Este método de un cuatrimestre de duración tiene un precio de 1300€. El pago se realiza en dos veces de la siguiente forma:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
        <li>Para reservar plaza se hace un pago inicial de 650€</li>
        <li>El segundo mes otros 650€ al inicio de mes</li>
        <li>El tercer y cuatro mes ya no pagas nada</li>
      </ol>
      <p>
          Este precio incluye TODAS las asignaturas que no sean de matemáticas aplicadas.
        </p>
        
      

      <h2 className="mx-auto my-12 text-xl font-semibold tracking-tighter sm:text-2xl lg:text-3xl">
        Si todo te parece correcto, te apuntas aquí a la lista de espera del siguiente cuatri
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Metes tu nombre, tu correo y tu telefono, y si hay plaza para ti te avisaré antes del comienzo del próximo cuatri. <strong>Solo abro plazas tres 
        veces al año.</strong>
      </p>

      <form onSubmit={onSubmit} className="grid gap-4 max-w-100">
        <div>
          <label className="block text-lg font-medium">Nombre</label>
          <input
            name="nombre"
            required
            maxLength={120}
            className="mt-1 w-full rounded-xl border px-3 py-2"
            placeholder="Tu nombre"
            autoComplete="name"
          />
        </div>

        <div>
          <label className="block text-lg font-medium">Teléfono</label>
          <input
            name="telefono"
            required
            maxLength={25}
            className="mt-1 w-full rounded-xl border px-3 py-2"
            placeholder="+34 600 000 000"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
          />
          <p className="text-sm text-gray-500 mt-1">
            Solo acepto formatos tipo: +34 600 000 000. Si tu número es español, delante de tu número va +34.
          </p>
        </div>

        <div>
          <label className="block text-lg font-medium">Email</label>
          <input
            name="email"
            required
            type="email"
            maxLength={254}
            placeholder="pepito@email.com"
            autoComplete="email"
            className="mt-1 w-full rounded-xl border px-3 py-2"
          />
        </div>

        {/* Checkbox de política de privacidad */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="consentimiento"
            required
            className="w-4 h-4 rounded border-gray-300"
          />
          <label className="text-sm">
            Acepto la{' '}
            <a href="/legal" className="underline text-black">
              política de privacidad
            </a>.
          </label>
        </div>

        {/* Honeypot oculto (anti-bots) */}
        <input
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-xl border px-4 py-2 font-medium shadow-sm disabled:opacity-60"
        >
          {status === 'loading' ? 'Enviando…' : 'Apúntame a la lista'}
        </button>

        {status !== 'idle' && (
          <div
            role="status"
            className={
              status === 'ok'
                ? 'text-sm text-green-700'
                : status === 'error'
                ? 'text-sm text-red-700'
                : 'text-sm text-gray-700'
            }
          >
            {message}
          </div>
        )}
      </form>

      <h2 className="mx-auto my-12 text-xl font-semibold tracking-tighter sm:text-2xl lg:text-3xl">
          Preguntas frecuentes
          </h2> 
          <h3 className="mx-auto my-12 text-lg font-semibold tracking-tighter sm:text-xl lg:text-2xl">
          ¿Cuando abres plazas?
          </h3>
          <p>
          Solo abro plazas en tres periodos al año, a comienzo del primer cuatrimestre, segundo cuatrimestre y veraro. 
        </p>
        <p>
          Es decir, a finales de agosto, finales de enero y finales de mayo. Este periodo solo durá unos pocos días, y nunca se prolonga. 
        </p>

        <h3 className="mx-auto my-12 text-lg font-semibold tracking-tighter sm:text-xl lg:text-2xl">
          ¿Cuantas plazas hay?
          </h3>
          <p>
          Como a mi me gusta y me parece lógico cuidar a mis clientes actuales, las plazas libres serán las que sobrén despues de que se hayan apuntado 
          las personas que alguna vez han sido alumnos mios. 
        </p>
        <p>
          Igualmente, el número máximo de alumnos que acepto cada cuatri es de 12, incluyendo alumnos antiguos y nuevos.
        </p>

        <h3 className="mx-auto my-12 text-lg font-semibold tracking-tighter sm:text-xl lg:text-2xl">
          ¿Con que asignaturas me puedes ayudar?
          </h3>
          <p>
          Como se que muchas personas no estarán contentas con decir que no ayudo con matemáticas aplicadas, pongo aqui un listado orientativo de las 
          asignaturas en las que SÍ te puedo ayudar:
        </p>
        <ul className="list-disc pl-6 space-y-2">
        <li><strong>Álgebra</strong> (cualquier álgebra, ya sea lineal, estructuras algebráicas o teoría de galois)</li>
        <li><strong>Cálculo</strong> (también se puede llamar funciones de una o varias variables, calculo diferencial, infinitesimal, campos 
        y formas, variedades, y así) </li>
        <li><strong>Geometría</strong> (vectorial, básica, afín, lineal, diferencial, proyectiva...)</li>
        <li><strong>Matemáticas discretas, Lenguaje y Conjuntos</strong> (teoría de numeros, lógica, grafos, combinatoria, conjuntos, etc...) </li>
        <li><strong>Topología</strong> y derivados (Analisis funcional, Espacios de Hilbert, Espacios normados, Topología Algebráica, Geometríca, etc...) </li>
        <li><strong>EDOS y EDPs</strong></li>
        <li><strong>Variable compleja</strong></li>
        <li><strong>Teoría de la medida e Integral de Lebesgue</strong></li>
      </ul>
        <p>
          Repito, todo lo que incluya la palabra estadística, optimización, numérico, modelización y así, NO LO INCLUYO.
        </p>
        <p>
          Esto es así porque son asignaturas que ni me gustan ni me interesan, y no quiero transmitirte este sentimiento (cosa que haría 
          si te ayudase con ellas).
        </p>
      
        <h3 className="mx-auto my-12 text-lg font-semibold tracking-tighter sm:text-xl lg:text-2xl">
          ¿El precio es por asignatura?
          </h3>
          <p>
          No. El precio (1300€) incluye TODAS las asignaturas que tengas de la lista anterior por cuatrimestre.
        </p>
        <h3 className="mx-auto my-12 text-lg font-semibold tracking-tighter sm:text-xl lg:text-2xl">
          ¿Puedo cancelar a mitad de cuatrimestre?
          </h3>
          <p>
          Por poder claro que puedes, pero no recibirás ningún reembolso de la cantidad ya pagada (incluida tu reserva de plaza) y perderás la 
          posibilidad de volver a acceder a este servicio / cualquier tipo de ayuda que yo ofrezca en el futuro, además del acceso a todos los 
          materiales.
        </p>
        <p>
          Ten en cuenta que esta ayuda es para alumnos comprometidos con sus resultados, por lo que 
          si tu idea es tantear el terreno y dejarlo si no te convence o abandonar a mitad de cuatri, lo mejor es que directamente no te apuntes a la lista de espera.
        </p>
        <h3 className="mx-auto my-12 text-lg font-semibold tracking-tighter sm:text-xl lg:text-2xl">
          ¿Haces rebajas?
          </h3>
          <p>
          Por muy raro, extraño y absurdo que pueda parecer, las rebajas me parecen un insulto a las personas que ya son mis clientes, por lo que no, no hago Black Friday, 
          ni rebajas de Navidad, ni rebajas por mi cumpleaños ni nada por el estilo.
        </p>
        <p>
          De hecho, ten claro que el precio subirá con el tiempo.
        </p>

        <h3 className="mx-auto my-12 text-lg font-semibold tracking-tighter sm:text-xl lg:text-2xl">
          Me parece muy caro por solo un cuatrimestre.
          </h3>
          <p>
          Caro es pagar una segunda matrícula sin tener la certeza de que no vas a tener que pagar una tercera.
        </p>
        <p>
          Eso sin contar todo el tiempo 
          que vas a perder yendo de nuevo a clase y estudiando algo que ya has estudiado una vez, más los años de más que vas a tardar en sacarte 
          la carrera y que no vas a estar trabajando para amortizar tu inversión en esta ayuda.
        </p>
        <p>
          Esto, amigo mío, si que me parece caro.
        </p>

        <h3 className="mx-auto my-12 text-lg font-semibold tracking-tighter sm:text-xl lg:text-2xl">
          ¿Cuantas horas de clase incluye este precio?
          </h3>
          <p>
          Si te interesan más las horas de clase que el resultado que obtengas, te sugiero que no te apuntes.
        </p>

        <h3 className="mx-auto my-12 text-lg font-semibold tracking-tighter sm:text-xl lg:text-2xl">
          ¿Para quién es esto?
          </h3>
          <p>
          Esto es para cualquier estudiante del grado en matemáticas que necesite ayuda para sacar sus asignaturas.
        </p>
        <p>
          Entre las <strong> personas que más aprovechan esta ayuda y que más partido le pueden sacar </strong> están:
        </p>
        <ul className="list-disc pl-6 space-y-2">
        <li>Estudiantes que acaban de comenzar el grado en matemáticas y quieren aprender a estudiar y asegurar buenos resultados desde 
          el inicio
        </li>
        <li>Estudiantes que quieran evitar a toda costa repetir asignaturas / ir a la extraordinaria</li>
        <li>Estudiantes que tengan asignaturas que no se sacan ni a tiros</li>
        <li>Estudiantes que quieran / necesiten estar acompañados de una persona con experiencia que les guie</li>
        <li>Estudiantes que trabajan / quieran reducir su tiempo de estudio al máximo para poder dedicarse a otras cosas</li>
      </ul>

      <p>
          Entre las <strong> personas que menos aprovechan esta ayuda y que menos partido le pueden sacar </strong> están:
        </p>
        <ul className="list-disc pl-6 space-y-2">
        <li>Estudiantes que busquen milagros o que les salve el culo a última hora</li>
      </ul>

        <h3 className="mx-auto my-12 text-lg font-semibold tracking-tighter sm:text-xl lg:text-2xl">
          ¿Esto es para mí?
          </h3>
          <p>
          Si de verdad te estás haciendo esta pregunta, mi respuesta es que no, no es para ti.
        </p>

        <h3 className="mx-auto my-12 text-lg font-semibold tracking-tighter sm:text-xl lg:text-2xl">
          Una vez que me avises para decirme que tengo plaza, ¿Cuanto tiempo tengo para decidir si me apunto o no y hacer el primer pago?
          </h3>
          <p>
          12 horas improrrogables. Pasado este tiempo perderás tu plaza.
        </p>

        <h3 className="mx-auto my-12 text-lg font-semibold tracking-tighter sm:text-xl lg:text-2xl">
          ¿Como sabré si tengo plaza?
          </h3>
          <p>
          Yo misma (y no una IA ni mi asistente que no tengo) te avisaré por WhatsApp o email.
        </p>

        <h3 className="mx-auto my-12 text-lg font-semibold tracking-tighter sm:text-xl lg:text-2xl">
          ¿Y si me apunto, hago el pago y luego no me gusta / no me caes bien?
          </h3>
          <p>
          Si crees que esto no es algo muy remotamente posible, no te apuntes.
        </p>

        <h3 className="mx-auto my-12 text-lg font-semibold tracking-tighter sm:text-xl lg:text-2xl">
          Estoy estudiando ingeniería / física, ¿Puedo apuntarme?
          </h3>
          <p>
          Puedes apuntarte, pero es muy probable que no consigas plaza, puesto que doy prioridad a las personas del grado en matemáticas, todos los años 
          lleno plazas y hay gente que se queda fuera.
        </p>

        

        
        
        

      </section>

      <h2 className="mx-auto my-12 text-xl font-semibold tracking-tighter sm:text-2xl lg:text-3xl">
        Si todo te parece correcto, te apuntas aquí a la lista de espera del siguiente cuatri
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Metes tu nombre, tu correo y tu telefono, y si hay plaza para ti te avisaré antes del comienzo del próximo cuatri. <strong>Solo abro plazas tres 
        veces al año.</strong>
      </p>
    
      <form onSubmit={onSubmit} className="grid gap-4 max-w-100">
        <div>
          <label className="block text-lg font-medium">Nombre</label>
          <input
            name="nombre"
            required
            maxLength={120}
            className="mt-1 w-full rounded-xl border px-3 py-2"
            placeholder="Tu nombre"
            autoComplete="name"
          />
        </div>

        <div>
          <label className="block text-lg font-medium">Teléfono</label>
          <input
            name="telefono"
            required
            maxLength={25}
            className="mt-1 w-full rounded-xl border px-3 py-2"
            placeholder="+34 600 000 000"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
          />
          <p className="text-sm text-gray-500 mt-1">
            Solo acepto formatos tipo: +34 600 000 000. Si tu número es español, delante de tu número va +34.
          </p>
        </div>

        <div>
          <label className="block text-lg font-medium">Email</label>
          <input
            name="email"
            required
            type="email"
            maxLength={254}
            placeholder="pepito@email.com"
            autoComplete="email"
            className="mt-1 w-full rounded-xl border px-3 py-2"
          />
        </div>

        {/* Checkbox de política de privacidad */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="consentimiento"
            required
            className="w-4 h-4 rounded border-gray-300"
          />
          <label className="text-sm">
            Acepto la{' '}
            <a href="/legal" className="underline text-black">
              política de privacidad
            </a>.
          </label>
        </div>

        {/* Honeypot oculto (anti-bots) */}
        <input
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-xl border px-4 py-2 font-medium shadow-sm disabled:opacity-60"
        >
          {status === 'loading' ? 'Enviando…' : 'Apúntame a la lista'}
        </button>

        {status !== 'idle' && (
          <div
            role="status"
            className={
              status === 'ok'
                ? 'text-sm text-green-700'
                : status === 'error'
                ? 'text-sm text-red-700'
                : 'text-sm text-gray-700'
            }
          >
            {message}
          </div>
        )}
      </form>

    </main>
  )
}
