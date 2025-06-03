"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-4 px-6 dark:border-gray-700">
      {/* Logo */}
      <div className="text-2xl font-bold text-foreground">
        <Link href="/">
          <span className="font-inter">Mates Sin Dramas</span>
        </Link>
      </div>

      {/* Nav menu */}
      

      {/* CTA */}
      <div className="ml-auto md:ml-0 flex items-center gap-8">
      <nav className="hidden md:flex gap-2 font-medium text-base">
        <Link href="/precios" className=" px-3 py-1 rounded-full hover:bg-gray-100">Precios</Link>
        <Link href="/gratis" className="px-3 py-1 rounded-full hover:bg-gray-100">Gratis</Link>
        <Link href="/about" className="px-3 py-1 rounded-full hover:bg-gray-100">Sobre mí</Link>
        <Link href="/blog" className="px-3 py-1 rounded-full hover:bg-gray-100">Blog</Link>
      </nav>
        <a
          href="#"
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-md"
        >
          Empezar ahora
        </a>
      </div>
    </header>
  );
}
