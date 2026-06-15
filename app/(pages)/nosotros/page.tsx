import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce ANDES ACADÉMICO, 15+ años de experiencia en transformación digital, Moodle, Odoo y Ciberseguridad.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-12 px-4 flex items-center">
        <div className="container-custom w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative h-96 lg:h-full min-h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/20 to-[#00FFFF]/20 rounded-2xl backdrop-blur-sm border border-[#00AEEF]/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💼</div>
                  <p className="text-gray-400">Foto profesional</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h1 className="heading-lg mb-6">Nosotros</h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  ANDES ACADÉMICO es una empresa especializada en transformación digital para instituciones educativas y empresas. Con más de 15 años de experiencia, nos hemos consolidado como líder en la implementación de soluciones tecnológicas innovadoras.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-8 border-y border-white/10">
                {[
                  { label: "Años", value: "15+" },
                  { label: "Proyectos", value: "50+" },
                  { label: "Usuarios", value: "5K+" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-[#00FFFF]">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Expertise */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Nuestra Experiencia</h3>
                {[
                  "Moodle LMS - Implementación, migración y optimización de plataformas educativas",
                  "Odoo ERP - Gestión empresarial integral y escalable",
                  "Ciberseguridad - Pentesting, hardening y monitoreo SIEM",
                  "Desarrollo de Software - Aplicaciones empresariales robustas con .NET y APIs",
                  "Inteligencia Artificial - Automatización y análisis inteligente de datos",
                  "Transformación Digital - Consultoría y modernización tecnológica",
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 items-start p-3 rounded-lg hover:bg-white/5 transition-colors">
                    <span className="text-[#00FFFF] mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              {/* Values */}
              <div className="space-y-3 pt-8 border-t border-white/10">
                <h3 className="text-lg font-bold">Nuestros Valores</h3>
                <div className="space-y-2 text-gray-300">
                  <p>🎯 <strong>Excelencia:</strong> Comprometidos con la máxima calidad</p>
                  <p>🤝 <strong>Colaboración:</strong> Trabajamos como extensión de tu equipo</p>
                  <p>🚀 <strong>Innovación:</strong> Siempre a la vanguardia tecnológica</p>
                  <p>⏱️ <strong>Dedicación:</strong> Disponibles cuando nos necesitas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
