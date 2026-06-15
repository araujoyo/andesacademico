import Link from "next/link";

const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Perfil", href: "#perfil" },
  { label: "Proyectos", href: "#proyectos" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#07111f]/80 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6">
        <Link
          href="#inicio"
          className="flex items-center gap-3"
          aria-label="Ir al inicio"
        >
          <span className="grid size-10 place-items-center rounded-xl bg-cyan-300 font-black text-slate-950">
            AA
          </span>
          <span className="hidden leading-tight sm:block">
            <strong className="block text-sm text-white">Andes Académico</strong>
            <span className="text-xs text-slate-400">Tecnología con propósito</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-cyan-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contacto"
          className="rounded-xl border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300 hover:text-slate-950"
        >
          Hablemos
        </Link>
      </nav>
    </header>
  );
}
