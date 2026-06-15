import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections";
import Link from "next/link";

// Mock blog posts
const BLOG_POSTS: Record<string, any> = {
  "guia-completa-moodle-2024": {
    title: "Guía Completa de Moodle 5.2",
    category: "Moodle",
    date: "2024-06-10",
    author: "ANDES ACADÉMICO",
    readTime: "8 min",
    content: `
# Introducción

Moodle es la plataforma de aprendizaje más utilizada en el mundo. Con la versión 5.2, se introducen nuevas características que facilitan la enseñanza virtual.

## Características principales

- Interfaz mejorada
- Mayor velocidad
- Integración IA
- Mejoras de seguridad

## Implementación

La implementación de Moodle requiere:
1. Análisis de requisitos
2. Instalación y configuración
3. Integración de datos
4. Capacitación de usuarios

## Conclusión

Moodle 5.2 es la solución ideal para instituciones educativas que desean modernizar su plataforma de aprendizaje.
    `,
  },
  "odoo-erp-transformacion": {
    title: "Transformación Digital con Odoo ERP",
    category: "Odoo",
    date: "2024-06-08",
    author: "ANDES ACADÉMICO",
    readTime: "10 min",
    content: `
# ¿Por qué implementar Odoo ERP?

Odoo es un sistema de gestión empresarial que centraliza todos tus procesos de negocio.

## Beneficios principales

- Reducción de costos operacionales
- Automatización de procesos
- Mejor toma de decisiones
- Escalabilidad

## Módulos disponibles

Odoo ofrece más de 20 módulos que puedes adaptar a tu negocio.

## ROI Esperado

Con una implementación correcta, espera resultados en 6-12 meses.
    `,
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS[params.slug];

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-32 px-4 flex items-center">
          <div className="container-custom text-center">
            <h1 className="heading-lg mb-4">Artículo no encontrado</h1>
            <p className="text-gray-300 mb-8">El artículo que buscas no existe.</p>
            <Link href="/blog" className="btn-primary">
              Volver al Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-[#0A192F]/50 to-transparent border-b border-[#00AEEF]/20">
        <div className="container-custom">
          <div className="space-y-6">
            <Link href="/blog" className="text-[#00AEEF] hover:text-[#00FFFF] transition-colors">
              ← Volver al Blog
            </Link>
            
            <h1 className="heading-lg">{post.title}</h1>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime} de lectura</span>
              <span>•</span>
              <span className="px-3 py-1 rounded-full bg-[#00AEEF]/20 text-[#00AEEF] border border-[#00AEEF]/30">
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding px-4">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-invert max-w-none">
            {post.content.split("\n").map((paragraph: string, index: number) => {
              if (paragraph.startsWith("#")) {
                return (
                  <h2 key={index} className="heading-sm mt-8 mb-4">
                    {paragraph.replace(/^#+\s/, "")}
                  </h2>
                );
              } else if (paragraph.startsWith("-")) {
                return (
                  <li key={index} className="text-gray-300 ml-6">
                    {paragraph.replace(/^-\s/, "")}
                  </li>
                );
              } else if (paragraph.startsWith("1.") || paragraph.match(/^\d+\./)) {
                return (
                  <li key={index} className="text-gray-300 ml-6 list-decimal">
                    {paragraph.replace(/^\d+\.\s/, "")}
                  </li>
                );
              } else if (paragraph.trim()) {
                return (
                  <p key={index} className="text-gray-300 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-16 border-t border-white/10">
            <h3 className="heading-sm mb-8">Artículos Relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {["guia-completa-moodle-2024", "odoo-erp-transformacion"]
                .filter((slug) => slug !== params.slug)
                .map((slug) => (
                  <Link
                    key={slug}
                    href={`/blog/${slug}`}
                    className="glass-effect-dark p-6 rounded-xl hover:border-[#00AEEF]/50 transition-all"
                  >
                    <div className="text-3xl mb-3">📝</div>
                    <h4 className="font-bold mb-2 hover:text-[#00FFFF] transition-colors">
                      {BLOG_POSTS[slug]?.title || slug}
                    </h4>
                    <p className="text-sm text-gray-400">{BLOG_POSTS[slug]?.date || ""}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
