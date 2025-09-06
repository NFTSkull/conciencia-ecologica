# Conciencia Ecológica

Sitio web profesional para la doctora-investigadora **Dainiz Noray Montoya García** (Doctora en Ciencias Ambientales) bajo la marca **Conciencia Ecológica**.

## 🎯 Características

- **Investigación**: Publicaciones científicas, tesis y capítulos sobre metabolismo urbano y sustentabilidad
- **Divulgación**: Actividades de difusión del conocimiento ambiental
- **Consultoría**: Servicios especializados en análisis ambiental y planeación sustentable
- **Cursos**: Formación especializada para adolescentes y profesionales
- **Blog**: Artículos sobre ecología, sustentabilidad y pensamiento crítico
- **Donativos**: Sistema de donativos para apoyar proyectos
- **E-commerce**: Pasarela de pagos con Stripe para cursos

## 🚀 Stack Tecnológico

- **Frontend**: Next.js 14 (App Router) + TypeScript
- **Styling**: TailwindCSS + shadcn/ui
- **Base de Datos**: Supabase (PostgreSQL + Auth + Storage)
- **Pagos**: Stripe (MXN)
- **Formularios**: React Hook Form + Zod
- **SEO**: next-seo
- **Iconos**: Lucide React

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o pnpm
- Cuenta de Supabase
- Cuenta de Stripe

## 🛠️ Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd conciencia-ecologica
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   pnpm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp env.example .env.local
   ```
   
   Editar `.env.local` con tus credenciales:
   ```env
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

   # Stripe
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

   # Site
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   # o
   pnpm dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 🗄️ Configuración de Supabase

### 1. Crear proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com)
2. Crea un nuevo proyecto
3. Obtén las credenciales de la API

### 2. Ejecutar migraciones

```sql
-- Crear tablas principales
CREATE TABLE publicaciones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tipo TEXT CHECK (tipo IN ('cientifico', 'divulgacion', 'capitulo', 'tesis')),
  titulo TEXT NOT NULL,
  autores TEXT NOT NULL,
  anio INTEGER NOT NULL,
  contenedor TEXT NOT NULL,
  doi TEXT,
  url TEXT,
  pdf_url TEXT,
  destacado BOOLEAN DEFAULT FALSE,
  creado_en TIMESTAMPTZ DEFAULT NOW(),
  actualizado_en TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE cursos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  titulo TEXT NOT NULL,
  resumen TEXT NOT NULL,
  descripcion_md TEXT NOT NULL,
  precio_mxn INTEGER NOT NULL,
  modalidad TEXT CHECK (modalidad IN ('en_vivo', 'grabado')),
  duracion TEXT NOT NULL,
  fecha_inicio DATE,
  portada_url TEXT,
  audiencia TEXT CHECK (audiencia IN ('adolescentes', 'academica')),
  publicado BOOLEAN DEFAULT FALSE,
  stripe_price_id TEXT,
  creado_en TIMESTAMPTZ DEFAULT NOW(),
  actualizado_en TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE inscripciones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  curso_id UUID REFERENCES cursos(id),
  user_id UUID REFERENCES auth.users(id),
  status TEXT CHECK (status IN ('pagado', 'pendiente', 'fallido')),
  amount_mxn INTEGER NOT NULL,
  payment_intent_id TEXT NOT NULL,
  creado_en TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE donativos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_email TEXT NOT NULL,
  amount_mxn INTEGER NOT NULL,
  payment_intent_id TEXT NOT NULL,
  status TEXT NOT NULL,
  creado_en TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE publicaciones ENABLE ROW LEVEL SECURITY;
ALTER TABLE cursos ENABLE ROW LEVEL SECURITY;
ALTER TABLE inscripciones ENABLE ROW LEVEL SECURITY;
ALTER TABLE donativos ENABLE ROW LEVEL SECURITY;

-- Políticas RLS básicas
CREATE POLICY "Publicaciones públicas" ON publicaciones FOR SELECT USING (true);
CREATE POLICY "Cursos públicos" ON cursos FOR SELECT USING (publicado = true);
```

### 3. Configurar Storage

1. En Supabase Dashboard, ve a Storage
2. Crea buckets para:
   - `portadas-cursos`: Imágenes de portada de cursos
   - `pdfs-publicaciones`: PDFs de publicaciones
   - `portadas-blog`: Imágenes de portada del blog

## 💳 Configuración de Stripe

### 1. Crear cuenta en Stripe

1. Ve a [stripe.com](https://stripe.com)
2. Crea una cuenta y configura México como país
3. Obtén las claves de API

### 2. Configurar webhooks

1. En Stripe Dashboard, ve a Developers > Webhooks
2. Crea un endpoint: `https://tu-dominio.com/api/stripe/webhook`
3. Selecciona eventos:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
4. Copia el webhook secret

### 3. Configurar productos

1. Crea productos para cada curso en Stripe
2. Copia los `price_id` y agrégalos a la base de datos

## 🚀 Despliegue en VPS (HostGator)

### 1. Preparar el servidor

```bash
# Conectar al VPS
ssh usuario@tu-servidor.com

# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Instalar PM2
sudo npm install -g pm2

# Instalar Nginx
sudo apt install nginx -y

# Instalar Certbot
sudo apt install certbot python3-certbot-nginx -y
```

### 2. Desplegar la aplicación

```bash
# Clonar repositorio
git clone <repository-url>
cd conciencia-ecologica

# Instalar dependencias
npm install

# Configurar variables de entorno
cp env.example .env.production
# Editar .env.production con credenciales de producción

# Construir aplicación
npm run build

# Iniciar con PM2
pm2 start npm --name "conciencia-eco" -- start
pm2 save
pm2 startup
```

### 3. Configurar Nginx

Crear archivo `/etc/nginx/sites-available/conciencia-ecologica`:

```nginx
server {
    listen 80;
    server_name tu-dominio.com www.tu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Habilitar el sitio:

```bash
sudo ln -s /etc/nginx/sites-available/conciencia-ecologica /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 4. Configurar SSL

```bash
sudo certbot --nginx -d tu-dominio.com -d www.tu-dominio.com
```

### 5. Variables de entorno de producción

```env
# .env.production
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_production_supabase_service_role_key

STRIPE_SECRET_KEY=your_production_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_production_stripe_webhook_secret

NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

## 📊 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── (marketing)/       # Páginas públicas
│   │   ├── page.tsx       # Home
│   │   ├── investigacion/ # Investigación
│   │   ├── divulgacion/   # Divulgación
│   │   ├── consultoria/   # Consultoría
│   │   ├── cursos/        # Cursos
│   │   ├── blog/          # Blog
│   │   ├── donar/         # Donativos
│   │   ├── contacto/      # Contacto
│   │   └── legal/         # Páginas legales
│   ├── dashboard/         # Panel de administración
│   └── api/               # API routes
├── components/             # Componentes React
│   ├── ui/                # Componentes de shadcn/ui
│   ├── layout/            # Componentes de layout
│   └── sections/          # Componentes de secciones
├── lib/                   # Utilidades y configuraciones
└── content/               # Contenido MDX
    ├── legal/             # Documentos legales
    └── blog/              # Posts del blog
```

## 🎨 Temas Visuales

El sitio utiliza un sistema de temas por sección:

- **Investigación**: Verde esmeralda (#047857)
- **Divulgación**: Verde lima (#65a30d)
- **Consultoría**: Cian (#0e7490)
- **Cursos Adolescentes**: Verde lima (#65a30d)
- **Cursos Académicos**: Verde azulado (#0d9488)
- **Blog**: Verde esmeralda oscuro (#065f46)

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Construcción
npm run build

# Producción
npm start

# Linting
npm run lint

# Type checking
npm run type-check
```

## 📝 Notas de Desarrollo

### Contenido Sensible

Para artículos del blog con contenido político/sociocultural:

1. **NO** renderizar automáticamente textos que contengan ataques o generalizaciones hacia grupos protegidos
2. Crear archivos MDX placeholder con comentario `<!-- Pendiente de revisión editorial -->`
3. Implementar flujo de revisión editorial en el dashboard

### Integración con Stripe

- Los pagos se procesan en pesos mexicanos (MXN)
- Monto mínimo para donativos: $50 MXN
- Webhooks para procesar pagos exitosos y fallidos
- Integración con base de datos para inscripciones y donativos

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Dr. Dainiz Noray Montoya García**
- Email: contacto@concienciaecologica.com
- Sitio web: [concienciaecologica.com](https://concienciaecologica.com)

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) por el framework
- [Supabase](https://supabase.com/) por la infraestructura
- [Stripe](https://stripe.com/) por los pagos
- [shadcn/ui](https://ui.shadcn.com/) por los componentes
- [Tailwind CSS](https://tailwindcss.com/) por el styling
