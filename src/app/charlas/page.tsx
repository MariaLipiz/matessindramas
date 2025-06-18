export const metadata = {
  title: 'Charlas que despiertan neuronas (y de paso bajan los suspensos)',
  description: 'Invítame a dar una charla en tu facultad o podcast si estás harto de discursos motivacionales y quieres resultados reales. Sin filtros. Sin dramas. Solo resultados.',
  alternates: {
    canonical: 'https://www.matessindramas.com/charlas',
  },
  keywords: [
    'charlas matemáticas universidad',
    'invitada podcast matemáticas',
    'mates sin dramas',
    'como aprobar mates',
    'eventos educativos universidad',
    'charlas disruptivas para estudiantes',
    'aprueba matemáticas en la uni'
  ],
  openGraph: {
    title: 'Charlas sin dramas para dejar de suspender',
    description: 'Charlas directas para estudiantes de ingeniería, física o mates. Nada de palabrería. Solo lo que funciona.',
    url: 'https://www.matessindramas.com/charlas',
    siteName: 'Mates Sin Dramas',
    images: [
      {
        url: 'https://www.matessindramas.com/og.jpg', // puedes crear una imagen distinta si quieres reforzar la identidad visual
        width: 1000,
        height: 400,
        alt: 'Charlas Mates Sin Dramas',
      },
    ],
  },
  locale: 'es_ES',
  type: 'website',
};


export default function Charlas() {
  return (
    <main>
      <section className="section space-y-6 text-lg">
        <h1 className="text-4xl font-bold text-black tracking-tighter sm:text-5xl lg:text-6xl xl:text-7xl">
          Charlas que despiertan neuronas (y de paso bajan los suspensos)
        </h1>

        <p className="mt-6">
          Si organizas eventos para estudiantes de carreras técnicas y estás harto de los mismos discursos
          motivacionales de siempre, te interesa esto.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-black tracking-tighter sm:text-3xl lg:text-4xl xl:text-5xl">
          ¿Qué ofrezco?
        </h2>

        <ul className="list-disc pl-6">
          <li>Charlas de 20–60 minutos que no suenan a clase ni a TED Talk</li>
          <li>Críticas sin anestesia al sistema educativo y a los métodos de estudio basura</li>
          <li>Enfoque centrado en estudiantes de mates, física e ingenierías</li>
          <li>Tono directo, con humor y sin victimismo</li>
        </ul>

        <h2 className="mt-12 text-2xl font-bold text-black tracking-tighter sm:text-3xl lg:text-4xl xl:text-5xl">
          Títulos disponibles
        </h2>

        <ul className="list-disc pl-6">
          <li>Por qué suspendes mates aunque estudies como un loco</li>
          <li>Mates sin dramas: cómo dejar de estudiar como un idiota y empezar a aprobar</li>
          <li>Los 5 errores que cometen el 90% de estudiantes de mates en la uni (y cómo evitarlos)</li>
        </ul>

        <h2 className="mt-12 text-2xl font-bold text-black tracking-tighter sm:text-3xl lg:text-4xl xl:text-5xl">
          ¿Dónde encaja?
        </h2>

        <ul className="list-disc pl-6">
          <li>Asociaciones estudiantiles universitarias</li>
          <li>Charlas extracurriculares en facultades</li>
          <li>Podcasts, canales de YouTube, Twitch o TikTok</li>
          <li>Ferias educativas y eventos de divulgación</li>
          <li>O simplemente lo montamos en Zoom. Sin permiso. Sin excusas.</li>
        </ul>

        <h2 className="mt-12 text-2xl font-bold text-black tracking-tighter sm:text-3xl lg:text-4xl xl:text-5xl">
          ¿Quieres que participe?
        </h2>

        <p>
          Escríbeme a <strong>marialipiz@matessindramas.com</strong> o pásales esta página a tus delegados, profesores
          o colegas para que me inviten.
        </p>

        <p className="mt-4 font-semibold">
          ¿Eres alumno y quieres que dé esta charla en tu facultad? Haz que llegue a quien decide. Yo me encargo del resto.
        </p>
      </section>
    </main>
  )
}
