import Link from "next/link";

export default function ConfirmacionDeCompra() {
  return (
    <main>
      
      <section className="section space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
          Importante leer esto
        </h1>
      </section>

      <section className="section space-y-6 mb-12 text-base sm:text-xl font-normal mt-4">
        <p className="mb-12">
          Si has llegado hasta aquí es porque acabas de comprar un curso/libro, por lo que <span className="font-semibold">debes seguir estas instrucciones para poder acceder (si el curso se imparte en directo ve abajo):</span> 
        </p>


        <ol className="list-decimal pl-6 space-y-4">
          <li>
            Ve a <span className="font-semibold">https://www.notion.com/es-es</span> o escribe en el navegador <span className="font-semibold">notion.com</span>
          </li>

          <li>
            Pulsa en el boton Iniciar sesión que encontrarás arriba a la derecha.
          </li>

          <li>
            Si es la primera vez que accedes, <span className="font-semibold">registrate con EL MISMO CORREO CON EL QUE TE SUSCRIBISTE LA NEWSLETTER</span>. Sino, inicia sesión normalmente.
          </li>

          <li>
            Al acceder, verás a la izquierda una pestaña llamada MDS Academia. Abre el desplegable, ahí verás el curso/libro que acabas de comprar. 
          </li>

        </ol>

        <p className="my-12 font-semibold">
          Si todavía no aparece el curso/libro:
        </p>

        <ol className="list-decimal pl-6 space-y-4 mb-12">
          <li>
            Comprueba que has iniciado sesión con el mismo correo con el que te diste de alta en la newsletter. Si no es así, vuelve a iniciar sesión, esta vez con ese correo.
          </li>

          <li>
            Si es así, espera unos minutos y refresca la página. 
          </li>

          <li>
            Si sigue sin aparecer, es probable que la aplicación tarde unos minutos/horas en concederte el acceso.
          </li>

          <li>
            Si todo falla, escribeme un email a maria@matessindramas.es indicandome tu nombre completo (el que pusiste al hacer la compra) y el email con el que estás suscrito a la newsletter. Yo misma te daré acceso manualmente. 
          </li>

        </ol>

        <p className="mb-12">
          Si lo que has comprado es un curso que se impartirá en directo no tienes que hacer nada. Me pondre en contacto contigo en un plazo breve de tiempo.
        </p>

      </section>

    </main>
  );
}