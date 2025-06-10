import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full px-6 py-6 md:py-8">
      
          <Link href="/legal" className="text-base hover:underline underline-offset-4">
            Legal
          </Link>
          
    </footer>
  )
}
