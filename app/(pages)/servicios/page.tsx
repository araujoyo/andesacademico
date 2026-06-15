import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections";
import Link from "next/link";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Conoce nuestros servicios de transformación digital especializado en Moodle LMS, Odoo ERP, Ciberseguridad e Inteligencia Artificial.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-12 px-4">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-6">Nuestros Servicios Premium</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Soluciones integrales de transformación digital adaptadas a tus necesidades específicas
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {SERVICES.map((service) => (
              <div key={service.id} className="glass-effect-dark p-12 rounded-2xl hover:border-[#00AEEF]/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <span className="text-2xl">🎯</span>
                </div>
                
                <h2 className="text-3xl font-bold mb-4">{service.name}</h2>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-8">
                  <p className="font-semibold text-[#00AEEF]">Características principales:</p>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-[#00FFFF]">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contacto" className="btn-primary inline-block">
                  Solicitar Consultoría
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
