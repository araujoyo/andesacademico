# 🚀 Guía de Despliegue

## Despliegue en Netlify (Recomendado)

### Opción 1: Git Integration (Automático)

**Ventajas:**
- Deploy automático con cada push
- Previas en Pull Requests
- Rollback automático
- SSL gratuito

**Pasos:**

1. **Crear cuenta en Netlify**
   - Ir a [netlify.com](https://netlify.com)
   - Registrarse con GitHub

2. **Conectar Repositorio**
   - Nuevo site desde Git
   - Seleccionar repositorio
   - Branch: `main`

3. **Configurar Build**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Production branch: `main`

4. **Variables de Entorno**
   - Settings → Environment
   - Agregar variables de `.env.example`:
     ```
     NEXT_PUBLIC_SITE_NAME=ANDES ACADÉMICO
     NEXT_PUBLIC_CONTACT_EMAIL=contacto@andesacademico.com
     NEXT_PUBLIC_WHATSAPP_NUMBER=+57XXXXXXXXXX
     ```

5. **Deploy**
   - Deploy automático en cada push a `main`
   - Previas en PRs
   - Status checks automáticos

### Opción 2: Deploy Manual via CLI

```bash
# 1. Instalar Netlify CLI
npm install -g netlify-cli

# 2. Conectar con Netlify (primera vez)
netlify connect

# 3. Build
npm run build

# 4. Deploy
netlify deploy --prod --dir=.next

# O simplemente
netlify deploy --prod --build
```

### Configuración Avanzada

El archivo `netlify.toml` contiene:
- Comando de build optimizado
- Configuración de headers de seguridad
- Caché agresivo para assets estáticos
- Redirecciones

No requiere cambios en la mayoría de casos.

## Variables de Entorno en Netlify

1. **Deploy Settings → Build & deploy → Environment**
2. **Edit variables**
3. Agregar:

```env
NEXT_PUBLIC_SITE_NAME=ANDES ACADÉMICO
NEXT_PUBLIC_SITE_URL=https://tudominio.com
NEXT_PUBLIC_CONTACT_EMAIL=contacto@andesacademico.com
NEXT_PUBLIC_CONTACT_PHONE=+57XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP_NUMBER=+57XXXXXXXXXX
```

## Dominio Personalizado

### Comprar Dominio

1. Registrar en:
   - GoDaddy
   - Namecheap
   - Google Domains
   - Otros registradores

### Conectar a Netlify

1. **Netlify Dashboard → Site settings → Domain management**
2. **Add custom domain**
3. Ingresar dominio
4. Configurar DNS:

**Option A: Cambiar nameservers (Recomendado)**
```
NS1.NETLIFY.COM
NS2.NETLIFY.COM
NS3.NETLIFY.COM
```

**Option B: Crear CNAME**
```
CNAME: [sitename].netlify.app
```

5. Esperar propagación (puede tardar 24-48 horas)
6. SSL se genera automáticamente

## SSL/TLS

✅ Automático con Netlify
✅ Renovación automática
✅ A+ rating de SSLLabs

## Optimización de Performance

### Caché

El `netlify.toml` configura:
- Cache de assets estáticos: 1 año
- Cache de HTML: 1 hora
- No cache de API

### Compresión

Netlify comprime automáticamente:
- Gzip para navegadores antiguos
- Brotli para navegadores modernos

### CDN Global

- 200+ servidores globales
- Distribución automática
- Latencia mínima

## Monitoreo

1. **Netlify Analytics**
   - Dashboard automático
   - Métricas de performance
   - Error tracking

2. **Google Analytics** (Opcional)
   - Agregar GA_ID en `.env.local`
   - Implementar en `app/layout.tsx`

## Rollback

Para revertir a version anterior:

1. **Netlify Dashboard → Deploys**
2. Seleccionar deployment anterior
3. **Publish deploy**

## Troubleshooting

### Build falla

```bash
# Limpiar cache
rm -rf .next node_modules
npm install
npm run build
```

### Build tarda mucho

- Verificar dependencias
- Optimizar imágenes
- Contactar a Netlify support

### Variables de entorno no se cargan

- Verificar nombres de variables
- Deben empezar con `NEXT_PUBLIC_` para ser públicas
- Redeploy después de cambiar

### Dominio no resuelve

- Esperar propagación DNS (24-48h)
- Verificar configuración en registrador
- Usar `nslookup` para debuggear

## Certificado SSL

✅ Automático en Netlify
✅ Renovación automática
✅ Wildcard para subdomios

Para forzar HTTPS:
```toml
[[redirects]]
  from = "http://*"
  to = "https://:splat"
  status = 301
  force = true
```

## Comparación de Opciones de Hosting

| Feature | Netlify | Vercel | AWS | DigitalOcean |
|---------|---------|--------|-----|--------------|
| Git Integration | ✅ | ✅ | ❌ | ⚠️ |
| SSL Gratis | ✅ | ✅ | ❌ | ⚠️ |
| CDN Global | ✅ | ✅ | ✅ | ✅ |
| Tier Gratis | ✅ | ✅ | ❌ | ❌ |
| Facilidad | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |

## Conclusión

**Recomendación:** Usar Netlify con Git Integration para máxima simplicidad y rendimiento.
