# 🌱 Conciencia Ecológica - Website Científico

[![Next.js](https://img.shields.io/badge/Next.js-14.0.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.0.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

## 🎯 Descripción del Proyecto

**Conciencia Ecológica** es un sitio web profesional y científico que presenta la investigación de la **Dra. Dainiz Noray Montoya García** en sustentabilidad urbana, termodinámica urbana y metabolismo social. El proyecto combina rigor académico con diseño moderno y conciencia ecológica.

## ✨ Características Destacadas

### 🧬 **Diseño Científico Profesional**
- **Interfaz elegante** con transiciones suaves y micro-interacciones
- **Paleta de colores ecológica** (emerald, teal, blue, slate)
- **Animaciones CSS personalizadas** para elementos flotantes
- **Backdrop blur** y efectos de transparencia moderna
- **Responsive design** optimizado para todos los dispositivos

### 🔬 **Contenido Académico Integral**
- **Líneas de investigación** en sustentabilidad urbana
- **Publicaciones científicas** organizadas cronológicamente
- **Tesis doctoral** con enlaces directos
- **Capítulos de libros** y contribuciones editoriales
- **Actividades de divulgación** y consultoría especializada

### 📚 **Secciones Principales**
- **🏠 Inicio**: Hero section con investigación destacada
- **🔬 Investigación**: Áreas de estudio y proyectos actuales
- **📖 Cursos**: Programas educativos para adolescentes y profesionales
- **📰 Publicaciones**: Artículos científicos y contribuciones
- **📧 Contacto**: Formulario de contacto y colaboración
- **💝 Donar**: Apoyo al proyecto de investigación
- **✍️ Blog**: Reflexiones críticas sobre conciencia humana

## 🚀 Tecnologías Utilizadas

### **Frontend Framework**
- **Next.js 14**: Framework React con App Router
- **React 18**: Biblioteca de interfaz de usuario
- **TypeScript**: Tipado estático para JavaScript

### **Styling & UI**
- **Tailwind CSS**: Framework CSS utility-first
- **Shadcn/ui**: Componentes UI reutilizables
- **Lucide React**: Iconografía moderna y personalizable

### **Animaciones & Efectos**
- **CSS Animations**: Keyframes personalizados
- **Transitions**: Efectos suaves y elegantes
- **Hover Effects**: Micro-interacciones avanzadas
- **Gradients**: Paletas de colores dinámicas

### **Deployment & Hosting**
- **Vercel**: Plataforma de hosting y deployment
- **GitHub**: Control de versiones y colaboración

## 🎨 Paleta de Colores Ecológica

```css
/* Colores principales */
--emerald-500: #10b981    /* Sustentabilidad */
--teal-600: #0d9488       /* Ecología */
--blue-500: #3b82f6       /* Ciencia */
--slate-700: #334155      /* Profesionalismo */

/* Gradientes */
--emerald-gradient: from-emerald-500 to-teal-600
--blue-gradient: from-blue-500 to-indigo-600
--slate-gradient: from-slate-50 to-emerald-50
```

## 📱 Características Responsivas

- **Mobile-first design** con breakpoints optimizados
- **Grid systems** adaptativos y flexibles
- **Typography scaling** automático
- **Touch-friendly** interfaces para dispositivos móviles
- **Performance optimization** para diferentes velocidades de conexión

## 🔧 Instalación y Configuración

### **Prerrequisitos**
- Node.js 18+ 
- npm o yarn
- Git

### **Pasos de Instalación**

```bash
# Clonar el repositorio
git clone https://github.com/NFTSkull/conciencia-ecologica.git

# Navegar al directorio
cd conciencia-ecologica

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

### **Variables de Entorno**

```bash
# Crear archivo .env.local
NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
```

## 📊 Estructura del Proyecto

```
conciencia-ecologica/
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Página de inicio
│   │   ├── globals.css        # Estilos globales
│   │   ├── investigacion/     # Página de investigación
│   │   ├── cursos/            # Página de cursos
│   │   ├── publicaciones/     # Página de publicaciones
│   │   ├── contacto/          # Página de contacto
│   │   └── donar/             # Página de donaciones
│   ├── components/            # Componentes reutilizables
│   │   ├── layout/            # Header y Footer
│   │   └── ui/                # Componentes UI base
│   └── lib/                   # Utilidades y helpers
├── public/                    # Archivos estáticos
├── tailwind.config.ts         # Configuración de Tailwind
├── next.config.js             # Configuración de Next.js
└── package.json               # Dependencias del proyecto
```

## 🌟 Características de Animación

### **Elementos Flotantes**
- **Blob animation**: Movimiento orgánico y fluido
- **Gradient shifts**: Transiciones de color suaves
- **Hover effects**: Interacciones responsivas
- **Scroll animations**: Efectos al desplazarse

### **Micro-interacciones**
- **Button hover**: Efectos de shine y transformación
- **Card interactions**: Elevación y sombras dinámicas
- **Icon animations**: Pulse, bounce y scale
- **Smooth transitions**: Todas las transiciones son fluidas

## 📈 SEO y Performance

- **Metadata optimizado** para motores de búsqueda
- **Open Graph tags** para redes sociales
- **Structured data** para rich snippets
- **Image optimization** automática
- **Lazy loading** para mejor performance
- **Core Web Vitals** optimizados

## 🤝 Contribución

Este proyecto está abierto a contribuciones de la comunidad científica y desarrolladores interesados en sustentabilidad urbana.

### **Cómo Contribuir**

1. **Fork** el repositorio
2. **Crea** una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

### **Estándares de Código**

- **TypeScript** para tipado estático
- **ESLint** para calidad de código
- **Prettier** para formateo consistente
- **Conventional Commits** para mensajes de commit

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👩‍🔬 Sobre la Investigadora

**Dra. Dainiz Noray Montoya García** es Doctora en Ciencias Ambientales especializada en:
- **Sustentabilidad Urbana**
- **Termodinámica Urbana**
- **Metabolismo Social y Urbano**
- **Sistemas Socio-ambientales Complejos**
- **Planeación Urbana Termodinámica**

## 🌐 Enlaces Importantes

- **🌐 Sitio Web**: [Conciencia Ecológica](https://conciencia-ecologica.vercel.app)
- **📚 Investigación**: [Áreas de Estudio](#)
- **📧 Contacto**: [Colaboración Científica](#)
- **💝 Apoyo**: [Donar al Proyecto](#)

## 📞 Contacto y Colaboración

Para colaboraciones académicas, consultorías especializadas o proyectos de investigación:

- **Email**: [contacto@conciencia-ecologica.com](#)
- **LinkedIn**: [Dra. Dainiz Noray Montoya García](#)
- **ResearchGate**: [Perfil Académico](#)

---

<div align="center">

**🌱 Construyendo un futuro urbano sostenible a través de la investigación científica**

*Desarrollado con ❤️ para la comunidad científica y la conciencia ecológica*

[![GitHub stars](https://img.shields.io/github/stars/NFTSkull/conciencia-ecologica?style=social)](https://github.com/NFTSkull/conciencia-ecologica)
[![GitHub forks](https://img.shields.io/github/forks/NFTSkull/conciencia-ecologica?style=social)](https://github.com/NFTSkull/conciencia-ecologica)
[![GitHub issues](https://img.shields.io/github/issues/NFTSkull/conciencia-ecologica)](https://github.com/NFTSkull/conciencia-ecologica/issues)

</div>
