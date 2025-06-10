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
    </header>
  );
}
