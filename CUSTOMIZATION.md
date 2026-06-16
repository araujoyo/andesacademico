# 📖 Guía de Personalización

## Actualizar Información de la Empresa

### 1. Configuración General

Editar `src/lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: "ANDES ACADÉMICO",
  slogan: "Transformación Digital para la Educación y las Empresas",
  description: "Consultoría especializada...",
  url: "https://andesacademico.com",
  email: "araujoyosmarvi@gmail.com",
  phone: "+573225511943",
  whatsapp: "+573225511943",
};
```

### 2. Colores Corporativos

Editar `src/lib/constants.ts`:

```typescript
export const COLORS = {
  primary: "#0A192F",    // Color principal
  secondary: "#00AEEF",  // Color secundario
  accent: "#00FFFF",     // Color de acento
  white: "#FFFFFF",      // Blanco
};
```

### 3. Servicios

Agregar o editar servicios en `src/lib/constants.ts`:

```typescript
export const SERVICES = [
  {
    id: 1,
    name: "Servicio 1",
    description: "Descripción del servicio",
    features: ["Feature 1", "Feature 2"],
    icon: "IconName",
    color: "from-blue-600 to-blue-400",
  },
  // ...
];
```

### 4. Portafolio

Editar portafolio en `src/lib/constants.ts`:

```typescript
export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Nombre del Proyecto",
    description: "Descripción...",
    category: "Moodle",
    image: "/images/project.jpg",
    tags: ["tag1", "tag2"],
  },
  // ...
];
```

## Agregar Imágenes

### Fotografías

1. Colocar imagen en `public/images/yosmarvi.png`
2. Referenciar en componentes:

```tsx
import Image from "next/image";

<Image
  src="/images/yosmarvi.png"
  alt="Consultor"
  width={400}
  height={400}
/>
```

### Logos y Assets

Colocar en `public/`:
- `public/logo.svg` - Logo principal
- `public/og-image.jpg` - Imagen OpenGraph (1200x630)
- `public/twitter-image.jpg` - Imagen Twitter

## Personalizar Páginas

### Página de Inicio

Archivo: `app/page.tsx`

Cambiar secciones importadas o descomentarlas.

### Página de Servicios

Archivo: `app/(pages)/servicios/page.tsx`

Editar contenido y descripción.

### Blog

Archivo: `app/(pages)/blog/page.tsx`

Agregar posts a `BLOG_POSTS` en `app/(pages)/blog/[slug]/page.tsx`.

## Configurar SEO

### Meta Tags Globales

Editar `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: {
    default: "Tu Título | Tu Empresa",
    template: "%s | Tu Empresa",
  },
  description: "Tu descripción...",
};
```

### Meta Tags por Página

Editar cada archivo `page.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Nombre Página",
  description: "Descripción de la página",
};
```

## Redes Sociales

Actualizar en `src/lib/constants.ts`:

```typescript
export const SOCIAL_MEDIA = [
  { name: "LinkedIn", href: "tu-url", icon: "linkedin" },
  { name: "GitHub", href: "tu-url", icon: "github" },
  // ...
];
```

## Variables de Entorno

Crear `.env.local`:

```env
NEXT_PUBLIC_SITE_NAME="Tu Empresa"
NEXT_PUBLIC_CONTACT_EMAIL="tu@email.com"
NEXT_PUBLIC_WHATSAPP_NUMBER="+57XXXXXXXXXX"
```

## Desplegar en Netlify

1. Conectar repositorio GitHub
2. Configurar build:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
3. Agregar variables de entorno en Netlify
4. Deploy automático

## Tips de Optimización

✅ Comprimir imágenes con https://tinypng.com
✅ Usar WebP para imágenes
✅ Mantener meta descriptions bajo 160 caracteres
✅ Actualizar blog regularmente para SEO
✅ Usar Schema.org para datos estructurados

## Solución de Problemas

### Build falla
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Cambios no se ven
```bash
npm run dev
```

### Problemas de CORS
Revisar configuración en `next.config.ts`

## Contacto

Para preguntas adicionales, contactar a ANDES ACADÉMICO.
