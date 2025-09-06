"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Clock,
  Star,
  ArrowRight,
  Play,
  Target,
  Lightbulb,
  Heart,
  FileText,
  TrendingUp,
  Globe,
  Shield,
  Award
} from 'lucide-react';
import Link from 'next/link';

// Datos de ejemplo para cursos académicos/profesionales
const cursosAcademicos = [
  {
    id: 1,
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
    destacado: true,
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
    id: 2,
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
    id: 3,
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

const beneficios = [
  {
    titulo: 'Formación Avanzada',
    descripcion: 'Contenido especializado para profesionales e investigadores con experiencia en el campo.',
    icon: Award,
    color: 'bg-teal-100 text-teal-800'
  },
  {
    titulo: 'Redes Profesionales',
    descripcion: 'Conecta con otros profesionales del sector y construye colaboraciones duraderas.',
    icon: Users,
    color: 'bg-sky-100 text-sky-800'
  },
  {
    titulo: 'Aplicación Práctica',
    descripcion: 'Aprende metodologías que puedes aplicar inmediatamente en tus proyectos profesionales.',
    icon: Target,
    color: 'bg-blue-100 text-blue-800'
  },
  {
    titulo: 'Certificación Reconocida',
    descripcion: 'Recibe un certificado que valida tus competencias especializadas en el sector.',
    icon: Shield,
    color: 'bg-indigo-100 text-indigo-800'
  }
];

export default function CursosAcademicosPage() {
  const [filtroModalidad, setFiltroModalidad] = useState('todos');

  const cursosFiltrados = cursosAcademicos.filter(curso => {
    return filtroModalidad === 'todos' || curso.modalidad === filtroModalidad;
  });

  const modalidades = [
    { value: 'todos', label: 'Todas las modalidades' },
    { value: 'en_vivo', label: 'En vivo' },
    { value: 'grabado', label: 'Grabado' },
    { value: 'híbrido', label: 'Híbrido' }
  ];

  const getModalidadLabel = (modalidad: string) => {
    switch (modalidad) {
      case 'en_vivo':
        return 'En vivo';
      case 'grabado':
        return 'Grabado';
      case 'híbrido':
        return 'Híbrido';
      default:
        return modalidad;
    }
  };

  const getModalidadIcon = (modalidad: string) => {
    switch (modalidad) {
      case 'en_vivo':
        return <Play className="h-4 w-4" />;
      case 'grabado':
        return <BookOpen className="h-4 w-4" />;
      case 'híbrido':
        return <GraduationCap className="h-4 w-4" />;
      default:
        return <GraduationCap className="h-4 w-4" />;
    }
  };

  const getModalidadColor = (modalidad: string) => {
    switch (modalidad) {
      case 'en_vivo':
        return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'grabado':
        return 'bg-sky-100 text-sky-800 border-sky-200';
      case 'híbrido':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div data-theme="theme-cursos-acad">
      {/* Banner Section */}
      <section className="bg-gradient-to-br from-teal-700 via-sky-600 to-teal-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mr-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Cursos Académicos y Profesionales
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-90">
              Formación continua para investigación y gestión
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Programas especializados para investigadores, consultores y profesionales 
              que buscan profundizar en metodologías avanzadas y enfoques innovadores.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Beneficios */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
            ¿Por qué elegir nuestros cursos profesionales?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className={`p-3 rounded-lg ${beneficio.color} w-fit mx-auto mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">{beneficio.titulo}</h4>
                  <p className="text-sm text-slate-600">{beneficio.descripcion}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Filtros */}
        <section className="mb-8">
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-slate-700">
              Filtrar por modalidad:
            </label>
            <select 
              value={filtroModalidad} 
              onChange={(e) => setFiltroModalidad(e.target.value)}
              className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              {modalidades.map((modalidad) => (
                <option key={modalidad.value} value={modalidad.value}>
                  {modalidad.label}
                </option>
              ))}
            </select>
          </div>
        </section>

        {/* Resultados */}
        <div className="mb-6">
          <p className="text-slate-600">
            Mostrando {cursosFiltrados.length} de {cursosAcademicos.length} cursos
          </p>
        </div>

        {/* Lista de Cursos */}
        <div className="space-y-8">
          {cursosFiltrados.map((curso) => (
            <Card key={curso.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge 
                        variant="outline" 
                        className={`${getModalidadColor(curso.modalidad)} flex items-center gap-1`}
                      >
                        {getModalidadIcon(curso.modalidad)}
                        {getModalidadLabel(curso.modalidad)}
                      </Badge>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {curso.duracion}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        ${curso.precio_mxn} MXN
                      </Badge>
                      {curso.destacado && (
                        <Badge variant="default" className="bg-teal-600 text-xs">
                          Destacado
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl text-slate-900 mb-3">
                      {curso.titulo}
                    </CardTitle>
                    <CardDescription className="text-slate-600 text-base leading-relaxed">
                      {curso.descripcion}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  {/* Objetivos */}
                  <div>
                    <h5 className="font-medium text-slate-900 mb-3 flex items-center gap-2">
                      <Target className="h-4 w-4 text-teal-600" />
                      Objetivos del curso
                    </h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {curso.objetivos.map((objetivo, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          {objetivo}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Temario */}
                  <div>
                    <h5 className="font-medium text-slate-900 mb-3 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-teal-600" />
                      Temario
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {curso.temario.map((modulo, index) => (
                        <div key={index} className="border border-slate-200 rounded-lg p-3">
                          <h6 className="font-medium text-slate-900 mb-2">{modulo.modulo}</h6>
                          <ul className="space-y-1">
                            {modulo.temas.map((tema, idx) => (
                              <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                                {tema}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metodología y Materiales */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-slate-900 mb-3 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-teal-600" />
                        Metodología
                      </h5>
                      <ul className="space-y-2">
                        {curso.metodologia.map((item, index) => (
                          <li key={index} className="text-sm text-slate-700 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-900 mb-3 flex items-center gap-2">
                        <FileText className="h-4 w-4 text-teal-600" />
                        Materiales incluidos
                      </h5>
                      <ul className="space-y-2">
                        {curso.materiales_incluidos.map((material, index) => (
                          <li key={index} className="text-sm text-slate-700 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                            {material}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Perfil y Requisitos */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-slate-900 mb-3 flex items-center gap-2">
                        <Users className="h-4 w-4 text-teal-600" />
                        Perfil de ingreso
                      </h5>
                      <ul className="space-y-2">
                        {curso.perfil_ingreso.map((perfil, index) => (
                          <li key={index} className="text-sm text-slate-700 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                            {perfil}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-900 mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4 text-teal-600" />
                        Requisitos
                      </h5>
                      <ul className="space-y-2">
                        {curso.requisitos.map((requisito, index) => (
                          <li key={index} className="text-sm text-slate-700 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                            {requisito}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 border-t border-slate-200">
                    <Button size="lg" asChild>
                      <Link href={`/cursos/${curso.slug}`}>
                        Ver detalles del curso
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/contacto">
                        Solicitar información
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {cursosFiltrados.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">
              No se encontraron cursos con los filtros seleccionados.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            ¿Necesitas formación especializada?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Nuestros cursos están diseñados para profesionales que buscan 
            actualizar sus conocimientos y desarrollar nuevas competencias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contacto">
                Solicitar información personalizada
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/cursos">
                Ver todos los cursos
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
