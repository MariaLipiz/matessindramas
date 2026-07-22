export default function ConfirmaTuEmail() {
  return (
    <main>
      
      <section className="section space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
          Tu suscripción ha sido <span className="bg-[#b0e4fc]">RECHAZADA</span> (continúa leyendo)👇
        </h1>
      </section>

      <section className="section space-y-6 mb-12 text-base sm:text-xl font-normal mt-4">
        <p>
          Para que tu solicitud sea aprobada debes abrir el email que te acabo de enviar y hacer clic en el enlace que contiene.
        </p>

        <p>
          Esto sirve para verificar que la dirección de correo que has proporcionado es correcta y no eres un bot ni nada de eso.
        </p>

        <p className="font-semibold">
          Para que funcione tienes que hacerlo antes de 5 minutos.
        </p>

        <p>
          De no hacerlo en ese tiempo, es muy probable que tu solicitud caduque y no podrás suscribirte.
        </p>

        <p className="mt-12 font-semibold">
          Si no recibes ese correo…
        </p>

        <ul className="list-disc pl-6 space-y-4">
          <li>
            Comprueba la carpeta de spam y también el apartado «Social» y «Promociones». Si me encuentras ahí, pásame a la bandeja de entrada principal.
          </li>

          <li>
            Si consultas tu correo a través de un cliente como Apple Mail o usas una dirección @icloud.com, es habitual que este mensaje sea borrado automáticamente y nunca te llegue. Evítalo.
          </li>

          <li>
            Vuelve a apuntarte y presta especial atención a la dirección de email. Es MUY habitual que el problema sea un error al escribirla.
          </li>

          <li>
            Si esto no es, guárdame en la agenda de contactos → Nombre: María Lípz, email: maria@matessindramas.es y espera unos minutos.
          </li>

          <li>
            Si nada de esto funciona, espera. Normalmente llega en unos minutos, pero a veces puede tardar hasta un par de horas.
          </li>
        </ul>

      </section>

    </main>
  );
}
