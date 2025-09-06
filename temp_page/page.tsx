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

// Datos de ejemplo para destacados
const destacadosInvestigacion = [
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
  }
];

const destacadosDivulgacion = [
  {
    id: 1,
    titulo: 'Conferencia: Ciencia para la sustentabilidad urbana',
    tipo: 'conferencia',
    fecha: '2024-01-15',
    lugar: 'Universidad Autónoma del Estado de México',
    destacado: true
  },
  {
    id: 2,
    titulo: 'Taller: Indicadores de sustentabilidad para municipios',
    tipo: 'taller',
    fecha: '2024-01-20',
    lugar: 'Ayuntamiento de Metepec',
    destacado: true
  }
];

const destacadosConsultoria = [
  {
    id: 1,
    titulo: 'Diagnóstico de sustentabilidad - Zona Metropolitana de Toluca',
    cliente: 'Gobierno del Estado de México',
    anio: 2023,
    resultados: '15% ahorro energético, 12% reducción emisiones',
    destacado: true
  },
  {
    id: 2,
    titulo: 'Sistema de indicadores - Metepec',
    cliente: 'Ayuntamiento de Metepec',
    anio: 2023,
    resultados: '25 indicadores implementados, 6 categorías',
    destacado: true
  }
];

const cursosDestacados = [
  {
    id: 1,
    titulo: 'Pensamiento crítico: lectura, mates y ciencia',
    audiencia: 'adolescentes',
    precio: 800,
    duracion: '8 horas',
    modalidad: 'en vivo',
    destacado: true
  },
  {
    id: 2,
    titulo: 'Ecología y ciencias híbridas: fundamentos',
    audiencia: 'académica',
    precio: 1500,
    duracion: '6 horas',
    modalidad: 'grabado',
    destacado: true
  }
];

const postsDestacados = [
  {
    id: 1,
    titulo: 'Bienvenida a Conciencia Ecológica',
    categoria: 'General',
    fecha: '2024-01-15',
    tiempo_lectura: '3 min',
    destacado: true
  },
  {
    id: 2,
    titulo: 'Metabolismo urbano: una herramienta para ciudades sostenibles',
    categoria: 'Investigación',
    fecha: '2024-01-10',
    tiempo_lectura: '8 min',
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
              Estudio la <strong>sustentabilidad</strong> y la <strong>termodinámica urbana</strong> para entender 
              el metabolismo social y proponer estrategias públicas y ciudadanas que mejoren la vida en las ciudades.
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
                  Explorar cursos
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
                Sobre mí
              </h2>
              <p className="text-slate-600 text-lg">
                <strong>Dra. Dainiz Noray Montoya García</strong> — Doctora en Ciencias Ambientales
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Doctora en Ciencias Ambientales con líneas de investigación en: <strong>Sustentabilidad</strong>; 
                  <strong>Entropía y Termodinámica urbana</strong>; <strong>Metabolismo social y urbano</strong>; 
                  <strong>Complejidad de sistemas socio‑ambientales</strong>; <strong>Termodinámica para la planeación urbana</strong>.
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

      {/* Destacados Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-slate-900 text-center mb-12">
            Trabajo Destacado
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                  Artículos, capítulos y tesis clasificados por año y tipo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {destacadosInvestigacion.map((item) => (
                    <div key={item.id} className="border-l-4 border-emerald-500 pl-3">
                      <h4 className="font-medium text-slate-900 text-sm">{item.titulo}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {item.tipo}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {item.anio}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link href="/investigacion">
                    Ver toda la investigación
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
                  Charlas, talleres y participación en medios
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {destacadosDivulgacion.map((item) => (
                    <div key={item.id} className="border-l-4 border-lime-500 pl-3">
                      <h4 className="font-medium text-slate-900 text-sm">{item.titulo}</h4>
                      <div className="flex items-center gap-2 mt-1 text-xs text-slate-600">
                        <Calendar className="h-3 w-3" />
                        {new Date(item.fecha).toLocaleDateString('es-MX')}
                        <MapPin className="h-3 w-3 ml-2" />
                        {item.lugar}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link href="/divulgacion">
                    Ver todas las actividades
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
                  Diagnósticos y estrategias de sustentabilidad aplicadas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {destacadosConsultoria.map((item) => (
                    <div key={item.id} className="border-l-4 border-cyan-500 pl-3">
                      <h4 className="font-medium text-slate-900 text-sm">{item.titulo}</h4>
                      <p className="text-xs text-slate-600 mt-1">{item.cliente}</p>
                      <p className="text-xs text-slate-600">{item.resultados}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link href="/consultoria">
                    Ver todos los casos
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
                  Para adolescentes y para profesionales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {cursosDestacados.map((item) => (
                    <div key={item.id} className="border-l-4 border-lime-500 pl-3">
                      <h4 className="font-medium text-slate-900 text-sm">{item.titulo}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {item.audiencia}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          ${item.precio} MXN
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link href="/cursos">
                    Ver todos los cursos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-slate-900 mb-4">
                Blog
              </h2>
              <p className="text-slate-600 text-lg">
                Análisis y opinión con enfoque socio‑ambiental
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              {postsDestacados.map((post) => (
                <Card key={post.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-slate-900">{post.titulo}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {post.categoria}
                          </Badge>
                          <span className="text-xs text-slate-500">
                            {new Date(post.fecha).toLocaleDateString('es-MX')}
                          </span>
                          <span className="text-xs text-slate-500">
                            {post.tiempo_lectura}
                          </span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href="/blog">
                          Leer más
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
                <Link href="/blog">
                  Ver todos los posts
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
            ¿Te interesa mi trabajo?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Estoy disponible para colaboraciones, consultorías y proyectos de investigación. 
            También puedes apoyar este proyecto con un donativo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contacto">
                Contactar
                <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/donar">
                <Heart className="mr-2 h-4 w-4" />
                Apoyar el Proyecto
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
