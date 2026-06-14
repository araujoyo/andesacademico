import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed z-50 w-full border-b border-cyan-500/20 bg-black/40 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-cyan-400">Andes Académico</h1>

        <div className="space-x-8 text-white">
          <Link href="/">Inicio</Link>
          <Link href="/services">Servicios</Link>
          <Link href="/portfolio">Portafolio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}
