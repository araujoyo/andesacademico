// Configuración de colores corporativos
export const COLORS = {
  primary: "#0A192F",
  secondary: "#00AEEF",
  accent: "#00FFFF",
  white: "#FFFFFF",
  dark: "#0A192F",
  light: "#F5F5F5",
  success: "#00D084",
  warning: "#FFB81C",
  error: "#FF6B6B",
} as const;

// Configuración del sitio
export const SITE_CONFIG = {
  name: "ANDES ACADÉMICO",
  slogan: "Transformación Digital para la Educación y las Empresas",
  description:
    "Consultoría especializada en Moodle LMS, Odoo ERP, Ciberseguridad, Inteligencia Artificial y Desarrollo de Software.",
  url: "https://andesacademico.com",
  logo: "/logo.svg",
  email: "contacto@andesacademico.com",
  phone: "+57XXXXXXXXXX",
  whatsapp: "+57XXXXXXXXXX",
};

// Menú de navegación
export const NAVIGATION = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Portafolio", href: "/portafolio" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/contacto" },
];

// Redes sociales
export const SOCIAL_MEDIA = [
  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { name: "GitHub", href: "https://github.com", icon: "github" },
  { name: "YouTube", href: "https://youtube.com", icon: "youtube" },
  { name: "WhatsApp", href: `https://wa.me/${SITE_CONFIG.whatsapp}`, icon: "whatsapp" },
];

// Servicios
export const SERVICES = [
  {
    id: 1,
    name: "Moodle LMS",
    description: "Soluciones completas de LMS para educación virtual",
    features: ["Implementación", "Migración", "Actualización Moodle 5.2", "Integración IA"],
    icon: "BookOpen",
    color: "from-blue-600 to-blue-400",
  },
  {
    id: 2,
    name: "Odoo ERP",
    description: "Gestión empresarial integrada y escalable",
    features: ["CRM", "Ventas", "Inventario", "RRHH", "Contabilidad"],
    icon: "BarChart3",
    color: "from-purple-600 to-purple-400",
  },
  {
    id: 3,
    name: "Ciberseguridad",
    description: "Protección avanzada de tus activos digitales",
    features: ["Pentesting", "Hardening", "SIEM", "Wazuh", "SOC"],
    icon: "Shield",
    color: "from-red-600 to-red-400",
  },
  {
    id: 4,
    name: "Desarrollo de Software",
    description: "Aplicaciones empresariales de alta calidad",
    features: [".NET", "APIs", "Integraciones", "Aplicaciones Empresariales"],
    icon: "Code",
    color: "from-green-600 to-green-400",
  },
  {
    id: 5,
    name: "Inteligencia Artificial",
    description: "Soluciones IA para automatización y análisis",
    features: ["Automatización", "Chatbots", "Analítica", "Machine Learning"],
    icon: "Brain",
    color: "from-yellow-600 to-yellow-400",
  },
  {
    id: 6,
    name: "Transformación Digital",
    description: "Modernización completa de tu negocio",
    features: ["Consultoría", "Gobierno TI", "Modernización Tecnológica"],
    icon: "Zap",
    color: "from-cyan-600 to-cyan-400",
  },
];

// Estadísticas
export const STATISTICS = [
  { label: "Años de Experiencia", value: 15 },
  { label: "Proyectos Ejecutados", value: 50 },
  { label: "Usuarios Capacitados", value: 5000 },
  { label: "Disponibilidad", value: 99.9 },
];

// Portafolio
export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Moodle para Universidades",
    description: "Implementación de plataforma educativa virtual para 50+ instituciones",
    category: "Moodle",
    image: "/images/portfolio-1.jpg",
    tags: ["Moodle", "Educación", "LMS"],
  },
  {
    id: 2,
    title: "Odoo ERP Implementación",
    description: "Migración e implementación de ERP para empresa multinacional",
    category: "Odoo",
    image: "/images/portfolio-2.jpg",
    tags: ["Odoo", "ERP", "Integración"],
  },
  {
    id: 3,
    title: "Auditoría de Ciberseguridad",
    description: "Evaluación integral de infraestructura y aplicaciones",
    category: "Ciberseguridad",
    image: "/images/portfolio-3.jpg",
    tags: ["Seguridad", "Pentesting", "Auditoría"],
  },
  {
    id: 4,
    title: "Plataforma Empresarial",
    description: "Desarrollo de aplicación empresarial con +100k usuarios",
    category: "Desarrollo",
    image: "/images/portfolio-4.jpg",
    tags: [".NET", "APIs", "Escalabilidad"],
  },
];

// Categorías de Blog
export const BLOG_CATEGORIES = [
  "Moodle",
  "Odoo",
  "Ciberseguridad",
  "Inteligencia Artificial",
  "Transformación Digital",
];
