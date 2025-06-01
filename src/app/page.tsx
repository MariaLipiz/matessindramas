"use client";

import { RoughNotation } from "react-rough-notation";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center transition-colors duration-300">
      {/* Botón de tema en la esquina */}
      <div className="absolute top-4 right-4">
        
      </div>

      {/* Hero */}
      <h1 className="text-5xl md:text-6xl font-inter font-bold mb-6 text-foreground">
        Mates{" "}
        <RoughNotation
          type="highlight"
          color="#fde68a" // amarillo pastel
          show={true}
          animationDelay={500}
          animationDuration={1200}
        >
          Sin Dramas
        </RoughNotation>
      </h1>

      <p className="font-caveat text-2xl text-pink-500 mb-10">
        Apoya a tu yo universitario. Te lo va a agradecer.
      </p>

      {/* CTA */}
      <a
        href="#"
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-lg transition-all duration-200 shadow-md font-inter"
      >
        Empezar ahora
      </a>
    </main>
  );
}
