import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections";
import Link from "next/link";
import { BLOG_CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos y recursos sobre Moodle LMS, Odoo ERP, Ciberseguridad, IA y Transformación Digital.",
};

// Mock blog posts - reemplazar con datos dinámicos
const BLOG_POSTS = [
  {
    id: 1,
    slug: "guia-completa-moodle-2024",
    title: "Guía Completa de Moodle 5.2",
    excerpt: "Todo lo que necesitas saber para implementar Moodle en tu institución educativa",
    category: "Moodle",
    date: "2024-06-10",
    image: "📚",
  },
  {
    id: 2,
    slug: "odoo-erp-transformacion",
    title: "Transformación Digital con Odoo ERP",
    excerpt: "Cómo modernizar tu negocio implementando Odoo",
    category: "Odoo",
    date: "2024-06-08",
    image: "⚙️",
  },
  {
    id: 3,
    slug: "seguridad-empresarial",
    title: "Seguridad Empresarial en 2024",
    excerpt: "Mejores prácticas en ciberseguridad para proteger tu negocio",
    category: "Ciberseguridad",
    date: "2024-06-05",
    image: "🔐",
  },
  {
    id: 4,
    slug: "ia-en-educacion",
    title: "Inteligencia Artificial en Educación",
    excerpt: "Cómo la IA está revolucionando el aprendizaje digital",
    category: "Inteligencia Artificial",
    date: "2024-06-01",
    image: "🤖",
  },
  {
    id: 5,
    slug: "transformacion-digital-pasos",
    title: "5 Pasos para tu Transformación Digital",
    excerpt: "Hoja de ruta práctica para modernizar tu organización",
    category: "Transformación Digital",
    date: "2024-05-28",
    image: "🚀",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-[600px] pt-32 pb-12 px-4 flex items-center">
        <div className="container-custom w-full">
          <div className="text-center mb-16">
            <h1 className="heading-lg mb-6">Blog de Transformación Digital</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Artículos, guías y recursos sobre Moodle, Odoo, Ciberseguridad e Inteligencia Artificial
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="px-4 py-8 sticky top-24 z-40 bg-[#0A192F]/80 backdrop-blur-md border-y border-[#00AEEF]/20">
        <div className="container-custom">
          <div className="flex gap-3 overflow-x-auto pb-2">
            <button className="px-6 py-2 rounded-full bg-[#00AEEF] text-[#0A192F] font-semibold whitespace-nowrap">
              Todos
            </button>
            {BLOG_CATEGORIES.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-[#00AEEF]/50 text-gray-300 hover:bg-[#00AEEF]/10 transition-colors whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding px-4">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div className="group glass-effect-dark overflow-hidden rounded-xl hover:border-[#00AEEF]/50 transition-all cursor-pointer h-full flex flex-col hover:shadow-lg hover:shadow-cyan-500/20">
                  {/* Image */}
                  <div className="h-40 bg-gradient-to-br from-[#00AEEF]/20 to-[#00FFFF]/20 border-b border-[#00AEEF]/20 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                    {post.image}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs px-3 py-1 rounded-full bg-[#00AEEF]/20 text-[#00AEEF] border border-[#00AEEF]/30">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>

                    <h3 className="text-lg font-bold mb-2 group-hover:text-[#00FFFF] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 text-sm line-clamp-3 flex-grow">{post.excerpt}</p>

                    <div className="mt-4 text-[#00AEEF] font-semibold group-hover:gap-2 transition-all flex items-center gap-1">
                      Leer más →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
