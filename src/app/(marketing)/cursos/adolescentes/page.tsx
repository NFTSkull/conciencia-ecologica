import { SectionBanner } from '@/components/sections/section-banner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Users, 
  Brain, 
  Target, 
  Clock, 
  Play, 
  Video,
  ArrowRight,
  BookOpen,
  Lightbulb,
  Zap,
  Heart
} from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

// Datos de ejemplo - en producción vendrían de Supabase
const cursosAdolescentes = [
  {
    id: '1',
    slug: 'pensamiento-critico-lectura-mates-ciencia',
    titulo: 'Pensamiento Crítico: Lectura, Matemáticas y Ciencias',
    resumen: 'Desarrolla habilidades fundamentales de pensamiento crítico a través de la lectura, matemáticas y ciencias.',
    descripcion_md: 'Contenido detallado del curso...',
    precio_mxn: 800,
    modalidad: 'en_vivo' as const,
    duracion: '8 horas',
    fecha_inicio: '2024-04-15',
    portada_url: null,
    destacado: true
  },
  {
    id: '2',
    slug: 'introduccion-sustentabilidad-urbana',
    titulo: 'Introducción a la Sustentabilidad Urbana',
    resumen: 'Aprende los conceptos básicos de sustentabilidad urbana y cómo aplicarlos en tu comunidad.',
    descripcion_md: 'Contenido detallado del curso...',
    precio_mxn: 600,
    modalidad: 'grabado' as const,
    duracion: '6 horas',
    fecha_inicio: null,
    portada_url: null,
    destacado: false
  },
  {
    id: '3',
    slug: 'ciencias-ambientales-divertidas',
    titulo: 'Ciencias Ambientales Divertidas',
    resumen: 'Explora las ciencias ambientales de manera entretenida y práctica.',
    descripcion_md: 'Contenido detallado del curso...',
    precio_mxn: 700,
    modalidad: 'en_vivo' as const,
    duracion: '5 horas',
    fecha_inicio: '2024-04-20',
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
    icon: Brain,
    titulo: 'Pensamiento Crítico',
    descripcion: 'Desarrolla habilidades analíticas y de razonamiento lógico.'
  },
  {
    icon: Target,
    titulo: 'Objetivos Claros',
    descripcion: 'Cada curso tiene metas específicas y medibles de aprendizaje.'
  },
  {
    icon: Users,
    titulo: 'Aprendizaje Colaborativo',
    descripcion: 'Interactúa con otros estudiantes y comparte experiencias.'
  },
  {
    icon: Lightbulb,
    titulo: 'Creatividad',
    descripcion: 'Fomenta la innovación y el pensamiento creativo.'
  }
];

export default function CursosAdolescentesPage() {
  return (
    <div data-theme="theme-cursos-ado">
      <SectionBanner
        title="Cursos para Adolescentes"
        subtitle="Desarrolla pensamiento crítico y conciencia ambiental desde temprana edad"
        theme="theme-cursos-ado"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introducción */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 rounded-full bg-lime-100 mr-4">
              <Users className="h-10 w-10 text-lime-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Formación para el Futuro
            </h2>
          </div>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Nuestros cursos están diseñados específicamente para adolescentes, enfocándose en el desarrollo 
            del <strong>pensamiento crítico</strong> a través de la lectura, matemáticas y ciencias. 
            Creemos que la educación ambiental debe comenzar temprano para formar ciudadanos conscientes 
            y responsables con su entorno.
          </p>
        </div>

        {/* Beneficios */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            ¿Por qué elegir nuestros cursos?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon;
              
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-lime-600" />
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cursosAdolescentes.map((curso) => {
              const modalidad = modalidades[curso.modalidad];
              const ModalidadIcon = modalidad.icon;
              
              return (
                <Card key={curso.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-lime-100 to-emerald-100 flex items-center justify-center">
                    {curso.portada_url ? (
                      <img src={curso.portada_url} alt={curso.titulo} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-center">
                        <Brain className="h-16 w-16 text-lime-600 mx-auto mb-2" />
                        <p className="text-lime-700 font-medium">Pensamiento Crítico</p>
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
                    
                    <CardTitle className="text-xl text-slate-900 group-hover:text-lime-700 transition-colors">
                      {curso.titulo}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-slate-600 mb-4">
                      {curso.resumen}
                    </CardDescription>
                    
                    {curso.fecha_inicio && (
                      <div className="mb-4 p-3 bg-lime-50 rounded-lg">
                        <div className="flex items-center space-x-2 text-sm text-lime-700">
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
                      <div className="text-2xl font-bold text-lime-600">
                        {formatCurrency(curso.precio_mxn)}
                      </div>
                      {curso.destacado && (
                        <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                          ¡Destacado!
                        </Badge>
                      )}
                    </div>
                    
                    <Button asChild className="w-full bg-lime-600 hover:bg-lime-700">
                      <a href={`/cursos/adolescentes/${curso.slug}`}>
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

        {/* Metodología */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Nuestra Metodología
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-lime-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">1. Aprendizaje Activo</h4>
              <p className="text-slate-600 text-sm">
                Participación constante a través de ejercicios prácticos y discusiones grupales.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">2. Contenido Interactivo</h4>
              <p className="text-slate-600 text-sm">
                Uso de tecnología y recursos multimedia para hacer el aprendizaje más atractivo.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-teal-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">3. Proyectos Prácticos</h4>
              <p className="text-slate-600 text-sm">
                Aplicación de conocimientos en proyectos reales de su comunidad.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-lime-50 to-emerald-50 rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            ¿Listo para desarrollar tu pensamiento crítico?
          </h3>
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
            Únete a nuestros cursos y comienza tu viaje hacia una mayor conciencia ambiental 
            y habilidades de pensamiento crítico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-lime-600 hover:bg-lime-700">
              <a href="/contacto">
                Solicitar información
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/cursos">
                Ver todos los cursos
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
