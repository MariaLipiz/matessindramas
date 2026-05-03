export default function WhatsAppPage() {
    const whatsappUrl =
      "https://wa.me/34673055115?text=APROBADO";
  
    return (
      <main className="min-h-screen px-6 py-20">
        <section className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <h1 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            El botón de debajo te lleva directo a mi WhatsApp.
            <br />
            Haz clic, dime “APROBADO” y te envío el video:
          </h1>
  
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-24 w-full rounded-xl bg-[#b0e4fc] px-8 py-7 text-center text-2xl font-semibold text-black transition hover:bg-blue-300 sm:text-3xl"
          >
            Mi Whatsapp
          </a>
  
          
        </section>
      </main>
    );
  }