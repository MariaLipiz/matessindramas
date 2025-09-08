import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex items-end justify-end px-6 lg:px-30">
      {/* Logo */}
      <div className="text-2xl font-bold text-foreground">
        <Image
                src="/images/Mates sin dramas Grande.png" // Ruta optimizada y formato moderno (ideal: .webp o .avif)
                alt="Estudiantes aprobados gracias a este método"
                width={1000}
                height={400}
                priority // si es una imagen above-the-fold (visible al cargar)
                quality={100}
                className="w-[10rem] lg:w-[13rem]" // opcional, calidad ajustable para WebP/AVIF
              />
      </div>
    </header>
  );
}
