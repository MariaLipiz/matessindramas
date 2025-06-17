import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mates Sin Dramas",
  description: "Aprueba mates en la universidad sin llorar.",
  keywords: [
    "Aprueba matemáticas en la uni",
    "Método para aprobar matemáticas",
    "Aprueba mates",
    "Consejos de estudio",
  ],
  authors: [
    {
      name: "Mates Sin Dramas",
      url: "https://www.matessindramas.com",
    },
  ],
  robots: "index, follow",
  openGraph: {
    title: "Mates Sin Dramas | Aprueba Matemáticas sin llorar",
    description:
      "Aprueba mates en la universidad sin llorar. Métodos serios, cero dramas.",
    url: "https://matessindramas.com",
    siteName: "Mates Sin Dramas",
    images: [
      {
        url: "https://matessindramas.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "Mates Sin Dramas",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mates Sin Dramas",
    description:
      "Aprueba mates en la universidad sin llorar. Métodos serios, cero dramas.",
    images: ["https://matessindramas.com/og.jpg"],
    creator: "@matessindramas",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${caveat.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K2TTZRQT');`,
          }}
        />
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Mates Sin Dramas",
              url: "https://www.matessindramas.com",
              logo: "https://www.matessindramas.com/og.png",
              description:
                "Aprueba matemáticas en la uni sin llorar. Métodos serios, cero dramas.",
              sameAs: [
                "https://twitter.com/matessindramas",
                "https://www.instagram.com/matessindramas",
              ],
              founder: {
                "@type": "Person",
                name: "María Lipiz",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "marialipiz@matessindramas.com",
                contactType: "customer support",
                availableLanguage: ["Spanish"],
              },
            }),
          }}
        />
      </head>
      <body className="font-inter antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K2TTZRQT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
