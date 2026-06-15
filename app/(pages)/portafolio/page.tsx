import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Conoce nuestros proyectos destacados en Moodle, Odoo, Ciberseguridad y Desarrollo de Software.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-[600px] pt-32 pb-12 px-4 flex items-center">
        <div className="container-custom w-full">
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-6">Portafolio de Proyectos</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proyectos ejecutados que demuestran nuestra experiencia y capacidad de transformación
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding px-4">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PORTFOLIO_ITEMS.map((item) => (
              <div
                key={item.id}
                className="group glass-effect-dark overflow-hidden rounded-2xl hover:border-[#00AEEF]/50 transition-all"
              >
                {/* Image */}
                <div className="h-64 bg-gradient-to-br from-[#00AEEF]/20 to-[#00FFFF]/20 border-b border-[#00AEEF]/20 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all">
                  <div className="text-center">
                    <div className="text-5xl mb-2">🎯</div>
                    <p className="text-gray-300">{item.category}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#00FFFF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{item.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-[#00AEEF]/20 text-[#00AEEF] border border-[#00AEEF]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
