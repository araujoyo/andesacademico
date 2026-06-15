import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Andes Académico | Tecnología con propósito",
    template: "%s | Andes Académico",
  },
  description:
    "Consultoría en inteligencia artificial, Moodle y Odoo para organizaciones de Latinoamérica.",
  keywords: [
    "inteligencia artificial",
    "Moodle",
    "Odoo",
    "transformación digital",
    "consultoría tecnológica",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
