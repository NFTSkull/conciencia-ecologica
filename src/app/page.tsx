"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Leaf, 
  BookOpen, 
  Users, 
  TrendingUp, 
  FileText, 
  GraduationCap,
  Heart,
  ArrowRight,
  Calendar,
  MapPin,
  Mail,
  ExternalLink,
  Download,
  Award,
  Target,
  Lightbulb,
  Globe,
  Zap
} from 'lucide-react';
import Link from 'next/link';

// Datos de ejemplo para publicaciones destacadas
const publicacionesDestacadas = [
  {
    id: 1,
    titulo: 'Metabolismo urbano y sustentabilidad',
    tipo: 'artículo',
    anio: 2024,
    revista: 'Journal of Urban Sustainability',
    doi: '10.1000/example.2024.001',
    destacado: true
  },
  {
    id: 2,
    titulo: 'Termodinámica aplicada a la planeación urbana',
    tipo: 'capítulo',
    anio: 2023,
    libro: 'Sustentabilidad Urbana: Enfoques Integrados',
    destacado: true
  },
  {
    id: 3,
    titulo: 'Indicadores de sustentabilidad urbana',
    tipo: 'artículo',
    anio: 2023,
    revista: 'Urban Ecology Review',
    doi: '10.1000/example.2023.002',
    destacado: true
  }
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-800 via-teal-700 to-emerald-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mr-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Conciencia Ecológica
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-90">
              Investigación para un futuro urbano sostenible
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Estudio la sustentabilidad y la termodinámica urbana para comprender el metabolismo social y proponer estrategias que mejoren la vida en las ciudades. Mi trabajo integra ciencia, educación y consultoría aplicada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
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

      {/* Sobre Mí Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-slate-900 mb-4">
                Sobre la autora
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                  Soy investigadora especializada en Sustentabilidad, Entropía y Termodinámica urbana, Metabolismo social y urbano, Complejidad de sistemas socio-ambientales y Termodinámica para la planeación urbana. Desarrollo investigación académica, actividades de divulgación y proyectos de consultoría para gobiernos, organizaciones y comunidades. Mi propósito es traducir el conocimiento científico en decisiones informadas que impulsen ciudades más justas, eficientes y resilientes.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Download className="h-5 w-5 text-emerald-600" />
                    <Link href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">
                      Ver CV (PDF)
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <ExternalLink className="h-5 w-5 text-emerald-600" />
                    <Link href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">
                      ORCID
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <ExternalLink className="h-5 w-5 text-emerald-600" />
                    <Link href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">
                      Google Scholar
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-emerald-600" />
                  Formación y Experiencia
                </h3>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Doctorado:</strong> Ciencias Ambientales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Especialización:</strong> Termodinámica Urbana</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Investigación:</strong> Metabolismo Urbano</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Consultoría:</strong> Sustentabilidad Urbana</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Trabajo Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 text-center mb-12">
            Áreas de trabajo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Investigación */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <BookOpen className="h-5 w-5 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">Investigación</CardTitle>
                </div>
                <CardDescription>
                  Publicaciones por año y tipo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/investigacion">
                    Ver investigación
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Divulgación */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-lime-100 rounded-lg">
                    <Users className="h-5 w-5 text-lime-600" />
                  </div>
                  <CardTitle className="text-xl">Divulgación</CardTitle>
                </div>
                <CardDescription>
                  Charlas, talleres y materiales abiertos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/divulgacion">
                    Ver actividades
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Consultoría */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-cyan-100 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-cyan-600" />
                  </div>
                  <CardTitle className="text-xl">Consultoría</CardTitle>
                </div>
                <CardDescription>
                  Diagnósticos y estrategias para ciudades sustentables
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/consultoria">
                    Ver servicios
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Cursos */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-lime-100 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-lime-600" />
                  </div>
                  <CardTitle className="text-xl">Cursos</CardTitle>
                </div>
                <CardDescription>
                  Programas para adolescentes y para profesionales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/cursos">
                    Ver cursos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Blog */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <FileText className="h-5 w-5 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">Blog</CardTitle>
                </div>
                <CardDescription>
                  Ideas y herramientas socio-ambientales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/blog">
                    Ver blog
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Publicaciones Destacadas Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-slate-900 mb-4">
                Publicaciones recientes
              </h2>
              <p className="text-slate-600 text-lg">
                Consulta artículos con DOI/URL y, cuando es posible, acceso a PDF
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              {publicacionesDestacadas.map((publicacion) => (
                <Card key={publicacion.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-slate-900">{publicacion.titulo}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {publicacion.tipo}
                          </Badge>
                          <span className="text-xs text-slate-500">
                            {publicacion.anio}
                          </span>
                          {publicacion.doi && (
                            <span className="text-xs text-slate-500">
                              DOI: {publicacion.doi}
                            </span>
                          )}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href="/investigacion">
                          Ver más
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button asChild>
                <Link href="/investigacion">
                  Ver todas las publicaciones
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">
            Súmate a la Conciencia Ecológica
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Tu participación impulsa investigación abierta, materiales educativos y formación para nuevas generaciones
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/donar">
                <Heart className="mr-2 h-4 w-4" />
                Donar
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contacto">
                Contacto
                <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
