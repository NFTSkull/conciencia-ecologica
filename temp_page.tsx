import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Users, 
  FileText, 
  GraduationCap, 
  Leaf, 
  Heart,
  ArrowRight,
  Download,
  ExternalLink,
  Calendar,
  Clock
} from 'lucide-react';

export default function HomePage() {
  const lineasInvestigacion = [
    'Sustentabilidad',
    'Entropía y Termodinámica urbana',
    'Metabolismo social y urbano',
    'Complejidad de sistemas socio-ambientales',
    'Termodinámica para la planeación urbana'
  ];

  const seccionesDestacadas = [
    {
      title: 'Investigación',
      description: 'Artículos, capítulos y tesis clasificados por año y tipo.',
      href: '/investigacion',
      icon: BookOpen,
      color: 'bg-emerald-600',
      badge: 'Científico',
      count: '7 publicaciones'
    },
    {
      title: 'Divulgación',
      description: 'Charlas, talleres y participación en medios.',
      href: '/divulgacion',
      icon: Users,
      color: 'bg-lime-600',
      badge: 'Educativo',
      count: '12 actividades'
    },
    {
      title: 'Consultoría',
      description: 'Diagnósticos y estrategias de sustentabilidad aplicadas.',
      href: '/consultoria',
      icon: FileText,
      color: 'bg-cyan-700',
      badge: 'Profesional',
      count: '5 casos'
    },
    {
      title: 'Cursos',
      description: 'Para adolescentes y para profesionales.',
      href: '/cursos',
      icon: GraduationCap,
      color: 'bg-teal-600',
      badge: 'Formación',
      count: '4 cursos'
    },
    {
      title: 'Blog',
      description: 'Análisis y opinión con enfoque socio-ambiental.',
      href: '/blog',
      icon: Leaf,
      color: 'bg-emerald-800',
      badge: 'Reflexión',
      count: '3 posts'
    }
  ];

  const ultimasPublicaciones = [
    {
      id: 1,
      titulo: 'Impacto del metabolismo socio-urbano en el Estado de México, México 2010–2020',
      tipo: 'Artículo Científico',
      anio: 2024,
      doi: '10.17141/letrasverdes.35.2024.6087',
      destacado: true
    },
    {
      id: 2,
      titulo: 'El metabolismo urbano de la Zona Metropolitana de Toluca, México',
      tipo: 'Tesis Doctoral',
      anio: 2023,
      destacado: true
    },
    {
      id: 3,
      titulo: 'Metabolismo urbano de los municipios de Toluca y Metepec: análisis comparativo',
      tipo: 'Artículo Científico',
      anio: 2023,
      doi: '10.36677/qret.v25i2.19063'
    }
  ];

  const ultimosPosts = [
    {
      id: 1,
      titulo: 'Bienvenida a Conciencia Ecológica',
      excerpt: 'Iniciamos este espacio para compartir conocimiento y construir soluciones sustentables juntos.',
      fecha: '2024-01-15',
      categoria: 'General'
    },
    {
      id: 2,
      titulo: 'Metabolismo urbano: una herramienta para ciudades sostenibles',
      excerpt: 'Cómo entender el flujo de energía y materiales en las ciudades puede transformar la planeación urbana.',
      fecha: '2024-01-10',
      categoria: 'Investigación'
    },
    {
      id: 3,
      titulo: 'Pensamiento crítico en la era de la información',
      excerpt: 'La importancia de desarrollar habilidades de análisis en un mundo lleno de datos y opiniones.',
      fecha: '2024-01-05',
      categoria: 'Educación'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-800 via-emerald-600 to-teal-500 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mr-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Conciencia Ecológica
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 opacity-90">
              Investigación para un futuro urbano sostenible
            </h2>
            <p className="text-lg opacity-80 mb-8">
              Dra. Dainiz Noray Montoya García — Ciencias Ambientales
            </p>

            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Estudio la <strong>sustentabilidad</strong> y la <strong>termodinámica urbana</strong> para entender el metabolismo social y proponer estrategias públicas y ciudadanas que mejoren la vida en las ciudades.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/investigacion">
                  Ver investigación
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/cursos">
                  Cursos
                  <GraduationCap className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/donar">
                  <Heart className="mr-2 h-4 w-4" />
                  Donar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mí Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-8">
              Sobre mí
            </h2>
            <p className="text-lg text-slate-600 mb-6 text-center">
              Doctora en Ciencias Ambientales. Líneas de investigación: <strong>Sustentabilidad</strong>; <strong>Entropía y Termodinámica urbana</strong>; <strong>Metabolismo social y urbano</strong>; <strong>Complejidad de sistemas socio-ambientales</strong>; <strong>Termodinámica para la planeación urbana</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="#">
                  <Download className="mr-2 h-4 w-4" />
                  Ver CV (PDF)
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  ORCID
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Google Scholar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Secciones Destacadas */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Áreas de Trabajo
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Descubre cómo la investigación en ciencias ambientales puede transformar 
              nuestra comprensión de la sustentabilidad urbana y social.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seccionesDestacadas.map((seccion, index) => {
              const Icon = seccion.icon;
              return (
                <Card key={index} className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-3 rounded-lg ${seccion.color}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {seccion.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {seccion.title}
                    </CardTitle>
                    <p className="text-sm text-emerald-600 font-medium">
                      {seccion.count}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 mb-4">
                      {seccion.description}
                    </CardDescription>
                    <Button variant="ghost" asChild className="p-0 h-auto font-medium text-emerald-600 hover:text-emerald-700 group-hover:translate-x-1 transition-transform">
                      <Link href={seccion.href}>
                        Explorar
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Últimas Publicaciones y Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Últimas Publicaciones */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Últimas Publicaciones
              </h3>
              <div className="space-y-4">
                {ultimasPublicaciones.map((publicacion) => (
                  <Card key={publicacion.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {publicacion.tipo}
                        </Badge>
                        <span className="text-sm text-slate-500">
                          {publicacion.anio}
                        </span>
                      </div>
                      <h4 className="font-medium text-slate-900 mb-2 line-clamp-2">
                        {publicacion.titulo}
                      </h4>
                      {publicacion.doi && (
                        <p className="text-sm text-emerald-600 mb-2">
                          DOI: {publicacion.doi}
                        </p>
                      )}
                      {publicacion.destacado && (
                        <Badge variant="default" className="bg-emerald-600 text-xs">
                          Destacado
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="outline" asChild>
                  <Link href="/investigacion">
                    Ver todas las publicaciones
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Últimos Posts del Blog */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Últimos Posts del Blog
              </h3>
              <div className="space-y-4">
                {ultimosPosts.map((post) => (
                  <Card key={post.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {post.categoria}
                        </Badge>
                        <span className="text-sm text-slate-500">
                          {new Date(post.fecha).toLocaleDateString('es-MX')}
                        </span>
                      </div>
                      <h4 className="font-medium text-slate-900 mb-2">
                        {post.titulo}
                      </h4>
                      <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/blog/${post.id}`}>
                            Leer más
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/donar">
                            <Heart className="mr-1 h-3 w-3" />
                            Donar
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="outline" asChild>
                  <Link href="/blog">
                    Ver todos los posts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Te interesa la sustentabilidad?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad y accede a contenido exclusivo, cursos especializados 
            y contribuye a la investigación en ciencias ambientales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/cursos">
                Ver Cursos
                <GraduationCap className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/donar">
                <Heart className="mr-2 h-4 w-4" />
                Apoyar Proyecto
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
