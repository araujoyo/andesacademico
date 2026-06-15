import Hero from "@/src/components/Hero";
import Navbar from "@/src/components/Navbar";
import {
  ArrowRight,
  Bot,
  Boxes,
  BrainCircuit,
  Check,
  GraduationCap,
  Layers3,
  Lightbulb,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: BrainCircuit,
    number: "01",
    title: "Inteligencia artificial",
    description:
      "Integro IA en procesos reales para reducir trabajo repetitivo, organizar conocimiento y mejorar decisiones.",
    tags: ["Automatización", "Asistentes", "Estrategia"],
  },
  {
    icon: GraduationCap,
    number: "02",
    title: "Ecosistemas Moodle",
    description:
      "Diseño experiencias de aprendizaje digitales que conectan contenido, personas y seguimiento.",
    tags: ["LMS", "Formación", "Experiencia"],
  },
  {
    icon: Boxes,
    number: "03",
    title: "Soluciones con Odoo",
    description:
      "Adapto procesos empresariales en una plataforma central, modular y preparada para crecer.",
    tags: ["ERP", "Procesos", "Integración"],
  },
];

const principles = [
  "Entender el problema antes de elegir la herramienta.",
  "Diseñar para las personas que usarán la solución.",
  "Entregar tecnología clara, medible y mantenible.",
];

const projects = [
  {
    icon: Bot,
    category: "IA aplicada",
    title: "Conocimiento que responde",
    description:
      "Asistentes internos capaces de encontrar, sintetizar y convertir información dispersa en acciones concretas.",
    accent: "from-cyan-300/20 to-blue-500/5",
  },
  {
    icon: Layers3,
    category: "Educación digital",
    title: "Aprendizaje con dirección",
    description:
      "Campus virtuales pensados como experiencias completas, no como simples depósitos de archivos.",
    accent: "from-violet-400/20 to-fuchsia-500/5",
  },
  {
    icon: Workflow,
    category: "Transformación empresarial",
    title: "Procesos que conversan",
    description:
      "Flujos conectados que disminuyen tareas manuales y ofrecen una visión más clara de la operación.",
    accent: "from-blue-400/20 to-cyan-500/5",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="servicios" className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Lo que hago"
              title="Tecnología útil, desde la estrategia hasta la implementación."
              description="Combino visión académica, comprensión del negocio y desarrollo para construir soluciones que las personas realmente pueden adoptar."
            />

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.055]"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                        <Icon size={24} />
                      </span>
                      <span className="font-mono text-sm text-slate-600">
                        {service.number}
                      </span>
                    </div>
                    <h3 className="mt-8 text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-4 leading-7 text-slate-400">
                      {service.description}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="perfil" className="px-6 py-24 sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-14 rounded-[2rem] border border-white/10 bg-[#0a1727] p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Mi forma de trabajar
              </p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
                Primero el propósito.
                <br />
                Después la tecnología.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                Andes Académico nace de una convicción personal: una buena
                solución digital debe sentirse comprensible, cercana y
                alineada con la realidad de cada organización.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4">
              {principles.map((principle, index) => (
                <div
                  key={principle}
                  className="flex gap-4 rounded-2xl border border-white/8 bg-white/[0.025] p-5"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-cyan-300 font-bold text-slate-950">
                    {index + 1}
                  </span>
                  <p className="pt-1 leading-6 text-slate-200">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Áreas de impacto"
              title="Proyectos pensados para dejar capacidad instalada."
              description="No se trata solo de poner una herramienta en marcha. El objetivo es que cada solución mejore una experiencia, un proceso o una decisión."
            />

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {projects.map((project) => {
                const Icon = project.icon;

                return (
                  <article
                    key={project.title}
                    className={`min-h-96 rounded-3xl border border-white/10 bg-gradient-to-b ${project.accent} flex flex-col p-7`}
                  >
                    <Icon size={34} className="text-cyan-200" />
                    <div className="mt-auto">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                        {project.category}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-4 leading-7 text-slate-400">
                        {project.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contacto" className="px-6 py-24 sm:py-32">
          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-gradient-to-br from-cyan-300 to-violet-400 p-8 text-slate-950 sm:p-12">
              <Lightbulb size={40} />
              <p className="mt-10 text-sm font-black uppercase tracking-[0.2em]">
                Hablemos
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Tu próximo proyecto puede empezar con una conversación.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-800">
                Cuéntame qué estás intentando resolver. Revisaremos juntos el
                contexto y el mejor punto de partida.
              </p>
              <div className="mt-10 space-y-3">
                {["Respuesta clara", "Enfoque práctico", "Sin tecnicismos innecesarios"].map(
                  (item) => (
                    <p key={item} className="flex items-center gap-3 font-semibold">
                      <Check size={18} />
                      {item}
                    </p>
                  ),
                )}
              </div>
            </div>

            <form
              name="contacto"
              method="POST"
              data-netlify="true"
              className="grid gap-5 p-8 sm:p-12"
            >
              <input type="hidden" name="form-name" value="contacto" />
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Nombre
                <input
                  required
                  name="nombre"
                  autoComplete="name"
                  className="rounded-xl border border-white/10 bg-[#07111f] px-4 py-3 font-normal text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60"
                  placeholder="¿Cómo te llamas?"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Correo
                <input
                  required
                  type="email"
                  name="correo"
                  autoComplete="email"
                  className="rounded-xl border border-white/10 bg-[#07111f] px-4 py-3 font-normal text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60"
                  placeholder="tu@correo.com"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                ¿Qué quieres construir o mejorar?
                <textarea
                  required
                  name="mensaje"
                  rows={5}
                  className="resize-none rounded-xl border border-white/10 bg-[#07111f] px-4 py-3 font-normal text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60"
                  placeholder="Cuéntame brevemente sobre tu idea..."
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                Enviar mensaje
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Andes Académico</p>
          <p>Estrategia · Educación · Tecnología</p>
        </div>
      </footer>
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.035em] text-white sm:text-5xl">
          {title}
        </h2>
      </div>
      <p className="max-w-xl text-lg leading-8 text-slate-400">{description}</p>
    </div>
  );
}
