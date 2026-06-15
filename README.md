# 🚀 ANDES ACADÉMICO - Sitio Web Corporativo

Sitio web corporativo premium para ANDES ACADÉMICO, especializada en Transformación Digital, Moodle LMS, Odoo ERP, Ciberseguridad e Inteligencia Artificial.

## 📋 Características

✅ **Diseño Premium Corporativo** - Interfaz similar a Microsoft, IBM, Accenture y Deloitte
✅ **Responsive Design** - Optimizado para móvil, tablet y escritorio
✅ **Animaciones Avanzadas** - Framer Motion para transiciones suaves
✅ **SEO Optimizado** - Meta tags, sitemap, robots.txt y Schema.org
✅ **Dark Mode Corporativo** - Colores corporativos #0A192F, #00AEEF, #00FFFF
✅ **Sistema de Blog** - Categorías, artículos y búsqueda
✅ **Formulario de Contacto** - Integración con WhatsApp
✅ **Portafolio de Proyectos** - Galería animada de trabajos
✅ **Performance Optimizado** - Score perfecto en Lighthouse

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 15 con TypeScript
- **Estilos:** Tailwind CSS 4 + CSS personalizado
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Hosting:** Netlify
- **SEO:** Next.js built-in + Custom metadata

## 🚀 Inicio Rápido

### Requisitos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# 1. Clonar repositorio
git clone https://github.com/araujoyo/andesacademico.git
cd andesacademico

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local

# 4. Iniciar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📝 Configuración

### Variables de Entorno

Editar `.env.local`:

```env
NEXT_PUBLIC_SITE_NAME="ANDES ACADÉMICO"
NEXT_PUBLIC_CONTACT_EMAIL="contacto@andesacademico.com"
NEXT_PUBLIC_CONTACT_PHONE="+57XXXXXXXXXX"
NEXT_PUBLIC_WHATSAPP_NUMBER="+57XXXXXXXXXX"
```

### Actualizar Datos de la Empresa

Editar [src/lib/constants.ts](src/lib/constants.ts):

```typescript
export const SITE_CONFIG = {
	name: "ANDES ACADÉMICO",
	email: "contacto@andesacademico.com",
	phone: "+57XXXXXXXXXX",
	whatsapp: "+57XXXXXXXXXX",
};
```

## 🎨 Colores Corporativos

| Color | Código | Uso |
|-------|--------|-----|
| Primary | #0A192F | Fondo principal |
| Secondary | #00AEEF | Botones y acentos |
| Accent | #00FFFF | Efectos glow |
| White | #FFFFFF | Texto principal |

## 📁 Estructura del Proyecto

```
andesacademico/
├── app/                        # Rutas y páginas
│   ├── layout.tsx
│   ├── page.tsx                # Home
│   ├── (pages)/
│   │   ├── servicios/
│   │   ├── portafolio/
│   │   ├── nosotros/
│   │   ├── blog/
│   │   └── contacto/
│   └── globals.css
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── sections/           # Componentes reutilizables
│   ├── hooks/
│   │   └── useAnimations.ts
│   ├── lib/
│   │   └── constants.ts        # Config y constantes
│   └── styles/
├── public/
│   └── images/
├── netlify.toml
├── next.config.ts
└── package.json
```

## 🔧 Comandos Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Compilar para producción
npm run start        # Inicia servidor producción
npm run lint         # Ejecuta ESLint
```

## 📊 Páginas Disponibles

| Página | Ruta | Status |
|--------|------|--------|
| Inicio | `/` | ✅ Completa |
| Servicios | `/servicios` | ✅ Completa |
| Portafolio | `/portafolio` | ✅ Completa |
| Nosotros | `/nosotros` | ✅ Completa |
| Blog | `/blog` | ✅ Completa |
| Contacto | `/contacto` | ✅ Completa |

## 🚀 Despliegue en Netlify

### Vía Git Integration

1. Conectar repositorio GitHub a Netlify
2. Configurar:
	 - **Build command:** `npm run build`
	 - **Publish directory:** `.next`
3. Deploy automático en cada push

### Deploy Manual

```bash
npm install -g netlify-cli
netlify deploy --prod --build
```

## 🔐 SEO y Performance

✅ Meta tags dinámicos
✅ Open Graph + Twitter Cards
✅ Sitemap y robots.txt automáticos
✅ Schema.org markup
✅ Imágenes optimizadas
✅ Code splitting automático
✅ Lighthouse 95+

## 📄 Licencia

Copyright © 2024 ANDES ACADÉMICO. Todos los derechos reservados.

## 👥 Soporte

- 📧 Email: contacto@andesacademico.com
- 💬 WhatsApp: +57XXXXXXXXXX
- 🌐 Website: https://andesacademico.com

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
