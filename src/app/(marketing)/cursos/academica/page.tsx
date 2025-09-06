import Link from 'next/link';
import { SectionBanner } from '@/components/sections/section-banner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Target, 
  Clock, 
  Play, 
  Video,
  ArrowRight,
  Users,
  Lightbulb,
  Zap,
  Leaf,
  BarChart3,
  TrendingUp
} from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

// Datos de ejemplo - en producción vendrían de Supabase
const cursosAcademicos = [
  {
    id: '1',
    slug: 'ecologia-ciencias-hibridas-fundamentos',
    titulo: 'Ecología y Ciencias Híbridas: Fundamentos',
    resumen: 'Fundamentos teóricos y prácticos de la ecología y las ciencias híbridas para profesionales.',
    descripcion_md: 'Contenido detallado del curso...',
    precio_mxn: 1500,
    modalidad: 'grabado' as const,
    duracion: '6 horas',
    fecha_inicio: null,
    portada_url: null,
    destacado: true
  },
  {
    id: '2',
    slug: 'metabolismo-urbano-avanzado',
    titulo: 'Metabolismo Urbano: Análisis Avanzado',
    resumen: 'Metodologías avanzadas para el análisis del metabolismo urbano y su aplicación en planeación.',
    descripcion_md: 'Contenido detallado del curso...',
    precio_mxn: 2000,
    modalidad: 'en_vivo' as const,
    duracion: '10 horas',
    fecha_inicio: '2024-04-20',
    portada_url: null,
    destacado: false
  },
  {
    id: '3',
    slug: 'feminismo-ecologia-interseccional',
    titulo: 'Feminismo y Ecología: Perspectiva Interseccional',
    resumen: 'Exploración de las intersecciones entre feminismo, ecología y justicia ambiental.',
    descripcion_md: 'Contenido detallado del curso...',
    precio_mxn: 1800,
    modalidad: 'grabado' as const,
    duracion: '8 horas',
    fecha_inicio: null,
    portada_url: null,
    destacado: false
  },
  {
    id: '4',
    slug: 'sistemas-complejos-ambientales',
    titulo: 'Sistemas Complejos en Ciencias Ambientales',
    resumen: 'Aplicación de la teoría de sistemas complejos al análisis de problemas ambientales.',
    descripcion_md: 'Contenido detallado del curso...',
    precio_mxn: 2200,
    modalidad: 'en_vivo' as const,
    duracion: '12 horas',
    fecha_inicio: '2024-05-01',
    portada_url: null,
    destacado: false
  }
];

const modalidades = {
  en_vivo: { label: 'En vivo', icon: Play, color: 'bg-green-100 text-green-800' },
  grabado: { label: 'Grabado', icon: Video, color: 'bg-blue-100 text-blue-800' }
};

const beneficios = [
  {
    icon: BookOpen,
    titulo: 'Contenido Avanzado',
    descripcion: 'Material actualizado y basado en investigación científica rigurosa.'
  },
  {
    icon: Users,
    titulo: 'Red Profesional',
    descripcion: 'Conecta con otros profesionales del sector ambiental.'
  },
  {
    icon: Target,
    titulo: 'Aplicación Práctica',
    descripcion: 'Metodologías que puedes aplicar inmediatamente en tu trabajo.'
  },
  {
    icon: Lightbulb,
    titulo: 'Innovación',
    descripcion: 'Acceso a las últimas tendencias en ciencias ambientales.'
  }
];

const areasEspecializacion = [
  {
    icon: Leaf,
    titulo: 'Ecología Aplicada',
    descripcion: 'Principios ecológicos aplicados a la conservación y restauración.'
  },
  {
    icon: BarChart3,
    titulo: 'Análisis de Datos',
    descripcion: 'Metodologías cuantitativas para la investigación ambiental.'
  },
  {
    icon: TrendingUp,
    titulo: 'Sustentabilidad',
    descripcion: 'Estrategias para el desarrollo sustentable y la resiliencia.'
  }
];

export default function CursosAcademicosPage() {
  return (
    <div data-theme="theme-cursos-acad">
      <SectionBanner
        title="Cursos Académicos y Profesionales"
        subtitle="Formación especializada en feminismo, ecología y ciencias híbridas para profesionales"
        theme="theme-cursos-acad"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introducción */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 rounded-full bg-teal-100 mr-4">
              <BookOpen className="h-10 w-10 text-teal-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Formación Profesional Avanzada
            </h2>
          </div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Nuestros cursos académicos están diseñados para profesionales y adultos interesados en 
            <strong> feminismo, ecología y ciencias híbridas</strong>. Combinamos rigor científico 
            con enfoques innovadores para abordar los desafíos ambientales del siglo XXI.
          </p>
        </div>

        {/* Beneficios */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            ¿Por qué elegir nuestros cursos académicos?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon;
              
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-teal-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">{beneficio.titulo}</h4>
                  <p className="text-sm text-slate-600">{beneficio.descripcion}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Listado de cursos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Cursos Disponibles
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cursosAcademicos.map((curso) => {
              const modalidad = modalidades[curso.modalidad];
              const ModalidadIcon = modalidad.icon;
              
              return (
                <Card key={curso.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-teal-100 to-sky-100 flex items-center justify-center">
                    {curso.portada_url ? (
                      <img src={curso.portada_url} alt={curso.titulo} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-center">
                        <Leaf className="h-16 w-16 text-teal-600 mx-auto mb-2" />
                        <p className="text-teal-700 font-medium">Ciencias Híbridas</p>
                      </div>
                    )}
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={modalidad.color}>
                        <ModalidadIcon className="h-3 w-3 mr-1" />
                        {modalidad.label}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {curso.duracion}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-xl text-slate-900 group-hover:text-teal-700 transition-colors">
                      {curso.titulo}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-slate-600 mb-4">
                      {curso.resumen}
                    </CardDescription>
                    
                    {curso.fecha_inicio && (
                      <div className="mb-4 p-3 bg-teal-50 rounded-lg">
                        <div className="flex items-center space-x-2 text-sm text-teal-700">
                          <Clock className="h-4 w-4" />
                          <span>
                            Inicia: {new Date(curso.fecha_inicio).toLocaleDateString('es-MX', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-teal-600">
                        {formatCurrency(curso.precio_mxn)}
                      </div>
                      {curso.destacado && (
                        <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                          ¡Destacado!
                        </Badge>
                      )}
                    </div>
                    
                    <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                      <a href={`/cursos/academica/${curso.slug}`}>
                        Ver detalles
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Áreas de especialización */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Áreas de Especialización
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {areasEspecializacion.map((area, index) => {
              const Icon = area.icon;
              
              return (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-lg bg-teal-100">
                        <Icon className="h-6 w-6 text-teal-600" />
                      </div>
                      <CardTitle className="text-xl">{area.titulo}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{area.descripcion}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Metodología */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Nuestra Metodología
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-teal-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">1. Fundamentos Teóricos</h4>
              <p className="text-slate-600 text-sm">
                Base sólida en conceptos y teorías fundamentales de las ciencias ambientales.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-sky-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">2. Aplicación Práctica</h4>
              <p className="text-slate-600 text-sm">
                Casos de estudio reales y ejercicios prácticos para aplicar el conocimiento.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">3. Proyectos Finales</h4>
              <p className="text-slate-600 text-sm">
                Desarrollo de proyectos que integren todos los conocimientos adquiridos.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-teal-50 to-sky-50 rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            ¿Listo para avanzar en tu carrera profesional?
          </h3>
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
            Nuestros cursos te proporcionarán las herramientas y conocimientos necesarios 
            para destacar en el campo de las ciencias ambientales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-teal-600 hover:bg-teal-700">
              <a href="/contacto">
                Solicitar información
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/cursos">
                Ver todos los cursos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
