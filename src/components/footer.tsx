import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full flex items-center justify-end px-6 py-2 ">
          <Link href="/legal" className="text-xs text-center hover:underline underline-offset-4">
            Aviso legal
          </Link>
          
    </footer>
  )
}
