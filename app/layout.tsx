import type { Metadata } from "next";
import { ReactNode } from "react";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://andesacademico.com"),
  title: {
    default: "ANDES ACADÉMICO | Transformación Digital para Educación y Empresas",
    template: "%s | ANDES ACADÉMICO",
  },
  description:
    "Consultoría especializada en Moodle LMS, Odoo ERP, Ciberseguridad, Inteligencia Artificial y Desarrollo de Software.",
  keywords: [
    "Moodle",
    "LMS",
    "Odoo",
    "ERP",
    "Ciberseguridad",
    "Inteligencia Artificial",
    "Desarrollo de Software",
    "Transformación Digital",
    "Consultoría",
  ],
  authors: [{ name: "ANDES ACADÉMICO" }],
  creator: "ANDES ACADÉMICO",
  publisher: "ANDES ACADÉMICO",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://andesacademico.com",
    siteName: "ANDES ACADÉMICO",
    title: "ANDES ACADÉMICO | Transformación Digital para Educación y Empresas",
    description:
      "Consultoría especializada en Moodle LMS, Odoo ERP, Ciberseguridad, Inteligencia Artificial y Desarrollo de Software.",
    images: [
      {
        url: "https://andesacademico.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ANDES ACADÉMICO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ANDES ACADÉMICO | Transformación Digital",
    description:
      "Consultoría especializada en Moodle LMS, Odoo ERP, Ciberseguridad, IA y Desarrollo de Software",
    images: ["https://andesacademico.com/twitter-image.jpg"],
  },
  // viewport moved to separate export per Next.js metadata guidelines
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/andesacademico.ico" />
        <link rel="canonical" href="https://andesacademico.com" />
      </head>
      <body className="bg-[#0A192F] text-white">{children}</body>
    </html>
  );
}
