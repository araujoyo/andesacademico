import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero, Services, Stats, About, Portfolio, Footer } from "@/components/sections";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "ANDES ACADÉMICO - Transformación Digital para Educación y Empresas. Consultoría en Moodle LMS, Odoo ERP, Ciberseguridad e IA.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Portfolio />
      <Footer />
    </>
  );
}

