// Tipos generales del aplicación
export interface Service {
  id: number;
  name: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author?: string;
  content?: string;
  readTime?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  message: string;
  image?: string;
  rating: number;
}

export interface ContactForm {
  nombre: string;
  correo: string;
  telefono: string;
  empresa: string;
  mensaje: string;
}

export interface SiteConfig {
  name: string;
  slogan: string;
  description: string;
  url: string;
  logo: string;
  email: string;
  phone: string;
  whatsapp: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface SocialMediaLink {
  name: string;
  href: string;
  icon: string;
}
