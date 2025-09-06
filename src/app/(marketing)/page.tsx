import Link from 'next/link';
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
  Award,
  Globe,
  Zap,
  Target,
  Lightbulb
} from 'lucide-react';

export default function HomePage() {
  const lineasInvestigacion = [
    'Sustentabilidad',
    'Entropía y Termodinámica urbana',
    'Metabolismo social y urbano',
    'Complejidad de sistemas socio-ambientales',
    'Termodinámica para la planeación urbana',
    'Conflictos socioambientales'
  ];

  const seccionesDestacadas = [
    {
      title: 'Investigación',
      description: 'Explora publicaciones científicas, tesis y capítulos sobre metabolismo urbano y sustentabilidad.',
      href: '/investigacion',
      icon: BookOpen,
      color: 'bg-emerald-600',
      badge: 'Científico'
    },
    {
      title: 'Divulgación',
      description: 'Actividades de difusión del conocimiento ambiental para todos los públicos.',
      href: '/divulgacion',
      icon: Users,
      color: 'bg-lime-600',
      badge: 'Educativo'
    },
    {
      title: 'Consultoría',
      description: 'Servicios especializados en análisis ambiental y planeación sustentable.',
      href: '/consultoria',
      icon: FileText,
      color: 'bg-cyan-700',
      badge: 'Profesional'
    },
    {
      title: 'Cursos',
      description: 'Formación especializada para adolescentes y profesionales en ciencias ambientales.',
      href: '/cursos',
      icon: GraduationCap,
      color: 'bg-teal-600',
      badge: 'Formación'
    },
    {
      title: 'Blog',
      description: 'Artículos y reflexiones sobre ecología, sustentabilidad y pensamiento crítico.',
      href: '/blog',
      icon: Leaf,
      color: 'bg-emerald-800',
      badge: 'Reflexión'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 mr-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-emerald-800">
                Conciencia Ecológica
              </h1>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-2">
                Dr. Dainiz Noray Montoya García
              </h2>
              <p className="text-lg text-slate-600">
                Doctora en Ciencias Ambientales
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-700 mb-4">
                Líneas de Investigación:
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {lineasInvestigacion.map((linea, index) => (
                  <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                    {linea}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/investigacion">
                  Ver Investigación
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/cursos">
                  Explorar Cursos
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

      {/* Secciones Destacadas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Áreas de Trabajo
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Descubre cómo la investigación en ciencias ambientales puede transformar 
              nuestra comprensión de la sustentabilidad urbana y social.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seccionesDestacadas.map((seccion, index) => {
              const Icon = seccion.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
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
            <Button size="lg" variant="outline" asChild>
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
