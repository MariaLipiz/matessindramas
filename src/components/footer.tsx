import Link from "next/link"
import { Mountain } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 md:flex-row md:gap-8 md:px-6">
        <div className="flex items-center gap-2">
          <Mountain className="h-6 w-6" />
          <span className="font-caveat text-2xl">Mates sin Dramas</span>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            Inicio
          </Link>
          <Link href="#features" className="text-sm hover:underline underline-offset-4">
            Características
          </Link>
          <Link href="#pricing" className="text-sm hover:underline underline-offset-4">
            Precios
          </Link>
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            Contacto
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">© 2024 Mates sin Dramas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
