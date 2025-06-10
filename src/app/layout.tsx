import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: "400", // Puedes añadir más pesos si los necesitas
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mates Sin Dramas",
  description: "Apoyo de matemáticas de la uni sin dramas ni lloros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${caveat.variable}`}>
      <body className="font-inter antialiased">
      
        
        {children}
       <Footer />
        </body>
    </html>
  );
}
