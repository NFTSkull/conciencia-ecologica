"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  BookOpen, 
  Clock,
  Play,
  Users,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

// Datos de ejemplo para cursos académicos/profesionales
const cursosAcademicos = [
  {
    id: 1,
    slug: 'educacion-ambiental',
    titulo: 'Curso de Educación Ambiental',
    resumen: 'Una visión alternativa del ambientalismo, el metabolismo social y los retos actuales.',
    descripcion: 'Este curso está dirigido al público en general interesado en otra visión del ambientalismo. Analizaremos corrientes del ambientalismo, metabolismo social y sus impactos, y alternativas frente al capitalismo tradicional.',
    precio_mxn: 1000,
    modalidad: 'en_vivo',
    duracion: '3 meses',
    fecha_inicio: '2024-03-01',
    portada_url: null,
    audiencia: 'academica',
    publicado: true,
    destacado: true,
    objetivos: [
      'Comprender las diferentes corrientes del ambientalismo',
      'Analizar el metabolismo social y sus impactos ambientales',
      'Explorar alternativas al capitalismo tradicional',
      'Desarrollar pensamiento crítico sobre la sustentabilidad',
      'Aplicar conceptos en análisis de problemas ambientales'
    ],
    perfil_ingreso: [
      'Público general interesado en temas ambientales',
      'Estudiantes de ciencias ambientales y sociales',
      'Activistas y organizaciones ambientalistas',
      'Profesionales del sector público y privado',
      'Personas interesadas en alternativas de desarrollo'
    ],
    requisitos: [
      'Interés en temas ambientales y sociales',
      'Disposición para reflexión crítica',
      'Acceso a internet para sesiones en vivo',
      'Compromiso con el aprendizaje participativo',
      'Disponibilidad para sesiones semanales'
    ],
    temario: [
      {
        modulo: 'Módulo 1: Corrientes del Ambientalismo',
        temas: [
          'Historia del movimiento ambientalista',
          'Ambientalismo conservacionista vs. social',
          'Ecofeminismo y justicia ambiental',
          'Ambientalismo del Sur Global',
          'Críticas al ambientalismo dominante'
        ]
      },
      {
        modulo: 'Módulo 2: Metabolismo Social',
        temas: [
          'Concepto de metabolismo social',
          'Flujos de energía y materiales',
          'Impactos ambientales del desarrollo',
          'Desigualdades en el acceso a recursos',
          'Casos de estudio latinoamericanos'
        ]
      },
      {
        modulo: 'Módulo 3: Alternativas y Futuros',
        temas: [
          'Buen vivir y desarrollo alternativo',
          'Economía circular y regenerativa',
          'Comunidades sustentables',
          'Transición energética justa',
          'Construcción de futuros deseables'
        ]
      }
    ],
    metodologia: [
      'Sesiones interactivas en vivo',
      'Discusiones grupales facilitadas',
      'Análisis de casos reales',
      'Lecturas complementarias',
      'Proyecto final de reflexión',
      'Constancia de participación'
    ],
    materiales_incluidos: [
      'Manual del curso con recursos',
      'Bibliografía comentada',
      'Acceso a plataforma de recursos',
      'Constancia de participación',
      'Recursos digitales complementarios',
      'Soporte post-curso por 1 mes'
    ]
  },
  {
    id: 2,
    slug: 'ecologia-ciencias-hibridas-fundamentos',
    titulo: 'Ecología y ciencias híbridas: fundamentos',
    resumen: 'Explora los fundamentos teóricos y metodológicos de las ciencias híbridas aplicadas a la ecología urbana y la sustentabilidad.',
    descripcion: 'Un curso avanzado que combina ecología urbana con enfoques inter y transdisciplinarios para abordar problemas complejos de sustentabilidad.',
    precio_mxn: 1500,
    modalidad: 'grabado',
    duracion: '6 horas',
    fecha_inicio: '2024-02-20',
    portada_url: null,
    audiencia: 'academica',
    publicado: true,
    destacado: false,
    objetivos: [
      'Comprender los fundamentos de las ciencias híbridas',
      'Aplicar enfoques interdisciplinarios en ecología urbana',
      'Desarrollar marcos metodológicos integrados',
      'Diseñar proyectos de investigación híbridos',
      'Evaluar la efectividad de enfoques transdisciplinarios'
    ],
    perfil_ingreso: [
      'Investigadores en ciencias ambientales',
      'Profesionales de la planeación urbana',
      'Estudiantes de posgrado en áreas afines',
      'Consultores en sustentabilidad urbana',
      'Funcionarios públicos del sector ambiental'
    ],
    requisitos: [
      'Formación en ciencias ambientales o afines',
      'Conocimientos básicos de metodología de investigación',
      'Experiencia en proyectos de sustentabilidad',
      'Disposición para trabajo interdisciplinario',
      'Acceso a internet para contenido grabado'
    ],
    temario: [
      {
        modulo: 'Módulo 1: Fundamentos de Ciencias Híbridas',
        temas: [
          'Epistemología de las ciencias híbridas',
          'Interdisciplinariedad vs. transdisciplinariedad',
          'Marco teórico de la complejidad',
          'Sistemas socio-ecológicos'
        ]
      },
      {
        modulo: 'Módulo 2: Ecología Urbana Integrada',
        temas: [
          'Metabolismo urbano y flujos de energía',
          'Biodiversidad en entornos urbanos',
          'Servicios ecosistémicos urbanos',
          'Resiliencia urbana y cambio climático'
        ]
      },
      {
        modulo: 'Módulo 3: Metodologías Integradas',
        temas: [
          'Diseño de investigación híbrida',
          'Integración de métodos cuantitativos y cualitativos',
          'Participación de actores sociales',
          'Análisis de sistemas complejos'
        ]
      },
      {
        modulo: 'Módulo 4: Aplicación Práctica',
        temas: [
          'Casos de estudio exitosos',
          'Diseño de proyectos integrados',
          'Evaluación de impactos',
          'Comunicación de resultados'
        ]
      }
    ],
    metodologia: [
      'Contenido teórico grabado de alta calidad',
      'Casos de estudio analizados en detalle',
      'Ejercicios prácticos de aplicación',
      'Foro de discusión especializado',
      'Proyecto final integrador',
      'Mentoría personalizada opcional'
    ],
    materiales_incluidos: [
      'Videos del curso (acceso ilimitado por 6 meses)',
      'Lecturas complementarias seleccionadas',
      'Plantillas para diseño de proyectos',
      'Base de datos de casos de estudio',
      'Certificado de participación profesional',
      'Acceso a red de profesionales del sector'
    ]
  },
  {
    id: 3,
    slug: 'feminismo-ciencia-perspectivas-criticas',
    titulo: 'Feminismo y ciencia: perspectivas críticas',
    resumen: 'Analiza la intersección entre feminismo y ciencias ambientales para desarrollar enfoques más inclusivos y equitativos.',
    descripcion: 'Explora cómo las perspectivas feministas pueden transformar la investigación y práctica en ciencias ambientales.',
    precio_mxn: 1200,
    modalidad: 'en_vivo',
    duracion: '8 horas',
    fecha_inicio: '2024-03-01',
    portada_url: null,
    audiencia: 'academica',
    publicado: true,
    destacado: false,
    objetivos: [
      'Comprender las bases del feminismo en la ciencia',
      'Identificar sesgos de género en investigación ambiental',
      'Desarrollar metodologías inclusivas',
      'Aplicar perspectivas feministas en proyectos',
      'Promover equidad en ciencias ambientales'
    ],
    perfil_ingreso: [
      'Investigadoras/es en ciencias ambientales',
      'Activistas ambientales y de género',
      'Estudiantes de posgrado en ciencias sociales',
      'Profesionales de organizaciones no gubernamentales',
      'Funcionarios públicos con enfoque de género'
    ],
    requisitos: [
      'Interés en temas de género y sustentabilidad',
      'Formación básica en ciencias ambientales',
      'Disposición para reflexión crítica',
      'Compromiso con la equidad de género',
      'Disponibilidad para sesiones en vivo'
    ],
    temario: [
      {
        modulo: 'Módulo 1: Fundamentos del Feminismo en la Ciencia',
        temas: [
          'Historia del feminismo en la ciencia',
          'Epistemología feminista',
          'Crítica a la objetividad científica',
          'Metodologías feministas'
        ]
      },
      {
        modulo: 'Módulo 2: Género y Medio Ambiente',
        temas: [
          'Impactos diferenciados por género',
          'Roles de género en sustentabilidad',
          'Mujeres en liderazgo ambiental',
          'Justicia ambiental y género'
        ]
      },
      {
        modulo: 'Módulo 3: Metodologías Inclusivas',
        temas: [
          'Diseño de investigación sensible al género',
          'Participación equitativa en proyectos',
          'Análisis de datos con perspectiva de género',
          'Comunicación inclusiva'
        ]
      },
      {
        modulo: 'Módulo 4: Aplicación y Acción',
        temas: [
          'Políticas públicas con enfoque de género',
          'Organizaciones ambientalistas inclusivas',
          'Educación ambiental feminista',
          'Activismo ambiental feminista'
        ]
      }
    ],
    metodologia: [
      'Sesiones interactivas en vivo',
      'Discusiones grupales facilitadas',
      'Análisis de casos reales',
      'Reflexión personal y grupal',
      'Proyecto de aplicación práctica',
      'Red de apoyo y colaboración'
    ],
    materiales_incluidos: [
      'Manual del curso con recursos adicionales',
      'Bibliografía comentada especializada',
      'Plantillas para análisis de género',
      'Directorio de organizaciones feministas',
      'Certificado de participación',
      'Acceso a comunidad de práctica'
    ]
  },
  {
    id: 4,
    slug: 'indicadores-sustentabilidad-urbanos-avanzado',
    titulo: 'Indicadores de sustentabilidad urbana: nivel avanzado',
    resumen: 'Desarrolla sistemas integrales de indicadores para evaluar y monitorear la sustentabilidad urbana con enfoque científico.',
    descripcion: 'Aprende a diseñar, implementar y evaluar sistemas de indicadores que informen la toma de decisiones en políticas urbanas.',
    precio_mxn: 1800,
    modalidad: 'híbrido',
    duracion: '12 horas',
    fecha_inicio: '2024-03-15',
    portada_url: null,
    audiencia: 'academica',
    publicado: true,
    destacado: false,
    objetivos: [
      'Diseñar sistemas de indicadores integrales',
      'Implementar metodologías de monitoreo',
      'Desarrollar tableros de control efectivos',
      'Integrar indicadores en políticas públicas',
      'Evaluar la efectividad de sistemas existentes'
    ],
    perfil_ingreso: [
      'Especialistas en planeación urbana',
      'Funcionarios públicos del sector ambiental',
      'Consultores en sustentabilidad urbana',
      'Investigadores en indicadores ambientales',
      'Profesionales de organizaciones internacionales'
    ],
    requisitos: [
      'Experiencia en análisis de datos',
      'Conocimientos de planeación urbana',
      'Familiaridad con conceptos de sustentabilidad',
      'Acceso a software de análisis estadístico',
      'Disponibilidad para trabajo de campo'
    ],
    temario: [
      {
        modulo: 'Módulo 1: Teoría de Indicadores',
        temas: [
          'Fundamentos teóricos de indicadores',
          'Tipologías y clasificaciones',
          'Criterios de selección',
          'Marco conceptual de sustentabilidad'
        ]
      },
      {
        modulo: 'Módulo 2: Diseño Metodológico',
        temas: [
          'Selección de indicadores clave',
          'Normalización y estandarización',
          'Agregación y ponderación',
          'Validación y calibración'
        ]
      },
      {
        modulo: 'Módulo 3: Implementación Práctica',
        temas: [
          'Recopilación de datos',
          'Sistemas de monitoreo',
          'Control de calidad',
          'Gestión de bases de datos'
        ]
      },
      {
        modulo: 'Módulo 4: Comunicación y Uso',
        temas: [
          'Diseño de tableros de control',
          'Reportes ejecutivos',
          'Comunicación a stakeholders',
          'Integración en políticas'
        ]
      }
    ],
    metodologia: [
      'Sesiones teóricas en vivo',
      'Trabajo práctico con datos reales',
      'Desarrollo de proyectos individuales',
      'Revisión por pares',
      'Presentación final de proyectos',
      'Seguimiento post-curso'
    ],
    materiales_incluidos: [
      'Software de análisis de indicadores',
      'Base de datos de indicadores urbanos',
      'Plantillas para diseño de sistemas',
      'Manual de implementación',
      'Certificado de especialización',
      'Acceso a red de expertos'
    ]
  }
];

export default function CursosAcademicosPage() {
  return (
    <div>
      {/* Banner Section */}
      <section className="bg-gradient-to-br from-teal-700 via-sky-600 to-teal-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mr-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Cursos Académicos
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-90">
              Para profesionales y adultos
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              En esta sección académica netamente se dan cursos para profesionales y adultos, que quieran aprender temas relacionados con el feminismo, ecología y ciencias híbridas.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Lista de Cursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cursosAcademicos.map((curso) => (
            <Card key={curso.id} className="hover:shadow-lg transition-shadow border-orange-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <BookOpen className="h-6 w-6 text-orange-600" />
                  </div>
                  <Badge variant="outline" className="bg-orange-100 text-orange-800 border-orange-200">
                    {curso.audiencia === 'academica' ? 'Académico' : 'Profesional'}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-slate-900 mb-2">
                  {curso.titulo}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  {curso.resumen}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Play className="h-3 w-3" />
                      {curso.modalidad === 'en_vivo' ? 'En vivo' : curso.modalidad === 'grabado' ? 'Grabado' : 'Híbrido'}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {curso.duracion}
                    </span>
                  </div>
                  {curso.precio_mxn > 0 ? (
                    <p className="font-semibold text-orange-700">${curso.precio_mxn.toLocaleString()} MXN</p>
                  ) : (
                    <p className="text-sm text-slate-600">Gratuito</p>
                  )}
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                    <Link href={`/cursos/academica/${curso.slug}`}>
                      Ver detalles
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}