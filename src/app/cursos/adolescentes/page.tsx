"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  BookOpen, 
  Calculator, 
  FlaskConical,
  Users,
  Clock,
  Star,
  ArrowRight,
  Play,
  Target,
  Lightbulb,
  Heart
} from 'lucide-react';
import Link from 'next/link';

// Datos de ejemplo para cursos de adolescentes
const cursosAdolescentes = [
  {
    id: 1,
    slug: 'pensamiento-critico-lectura-mates-ciencia',
    titulo: 'Pensamiento crítico: lectura, mates y ciencia',
    resumen: 'Desarrolla habilidades fundamentales para analizar información, resolver problemas matemáticos y entender el mundo científico que te rodea.',
    descripcion: 'Un curso integral que combina lectura comprensiva, matemáticas esenciales y ciencias prácticas para formar pensadores críticos desde la secundaria.',
    precio_mxn: 800,
    modalidad: 'en_vivo',
    duracion: '8 horas',
    fecha_inicio: '2024-02-15',
    portada_url: null,
    audiencia: 'adolescentes',
    publicado: true,
    destacado: true,
    objetivos: [
      'Distinguir fuentes de información confiables',
      'Interpretar datos y gráficos matemáticos',
      'Aplicar el método científico en situaciones cotidianas',
      'Desarrollar argumentos lógicos y respetuosos',
      'Resolver problemas usando pensamiento crítico'
    ],
    perfil_ingreso: [
      'Estudiantes de secundaria (12-15 años)',
      'Interés en aprender y cuestionar',
      'Disposición para trabajar en equipo',
      'Curiosidad por el mundo que les rodea'
    ],
    requisitos: [
      'Conocimientos básicos de matemáticas de primaria',
      'Capacidad de lectura en español',
      'Acceso a internet para sesiones en vivo',
      'Dispositivo para participar en actividades interactivas'
    ],
    temario: [
      {
        modulo: 'Módulo 1: Lectura Crítica',
        temas: [
          'Identificación de fuentes confiables',
          'Análisis de argumentos',
          'Detección de sesgos y falacias',
          'Lectura entre líneas'
        ]
      },
      {
        modulo: 'Módulo 2: Matemáticas en Acción',
        temas: [
          'Interpretación de datos y gráficos',
          'Proporciones y porcentajes',
          'Geometría básica aplicada',
          'Resolución de problemas paso a paso'
        ]
      },
      {
        modulo: 'Módulo 3: Ciencia Cotidiana',
        temas: [
          'Método científico simplificado',
          'Experimentos caseros seguros',
          'Observación y registro de datos',
          'Conclusiones basadas en evidencia'
        ]
      },
      {
        modulo: 'Módulo 4: Debate y Argumentación',
        temas: [
          'Construcción de argumentos sólidos',
          'Debate respetuoso y constructivo',
          'Evaluación de diferentes perspectivas',
          'Comunicación efectiva de ideas'
        ]
      }
    ],
    metodologia: [
      'Sesiones interactivas en vivo',
      'Actividades prácticas y experimentos',
      'Trabajo en equipo y colaboración',
      'Proyecto final integrador',
      'Seguimiento personalizado del progreso'
    ],
    materiales_incluidos: [
      'Manual digital del curso',
      'Kit de experimentos caseros',
      'Acceso a plataforma de recursos',
      'Certificado de participación',
      'Soporte post-curso por 2 semanas'
    ]
  },
  {
    id: 2,
    slug: 'sustentabilidad-desde-casa',
    titulo: 'Sustentabilidad desde casa: acciones que transforman',
    resumen: 'Aprende cómo tus acciones diarias pueden tener un impacto positivo en el medio ambiente y cómo inspirar a otros a hacer lo mismo.',
    descripcion: 'Descubre prácticas sustentables que puedes implementar en tu hogar y comunidad, desde ahorro de energía hasta reducción de residuos.',
    precio_mxn: 600,
    modalidad: 'grabado',
    duracion: '6 horas',
    fecha_inicio: '2024-02-20',
    portada_url: null,
    audiencia: 'adolescentes',
    publicado: true,
    destacado: false,
    objetivos: [
      'Identificar acciones sustentables aplicables en casa',
      'Calcular la huella ambiental personal',
      'Diseñar un plan de acción sustentable',
      'Comunicar la importancia de la sustentabilidad',
      'Implementar cambios en la rutina diaria'
    ],
    perfil_ingreso: [
      'Jóvenes interesados en el medio ambiente',
      'Deseo de hacer cambios positivos',
      'Disposición para experimentar nuevas prácticas',
      'Interés en influir en familia y amigos'
    ],
    requisitos: [
      'Acceso a internet para contenido grabado',
      'Dispositivo para ver videos y descargar materiales',
      'Apoyo familiar para implementar cambios',
      'Compromiso de completar el curso'
    ],
    temario: [
      {
        modulo: 'Módulo 1: Entendiendo la Sustentabilidad',
        temas: [
          '¿Qué es la sustentabilidad?',
          'Impacto de nuestras acciones diarias',
          'Huella ambiental y cómo calcularla',
          'Casos de éxito a nivel mundial'
        ]
      },
      {
        modulo: 'Módulo 2: Energía y Agua en Casa',
        temas: [
          'Ahorro de energía eléctrica',
          'Consumo responsable de agua',
          'Tecnologías eficientes',
          'Hábitos que marcan la diferencia'
        ]
      },
      {
        modulo: 'Módulo 3: Residuos y Consumo',
        temas: [
          'Reducción de residuos',
          'Separación y reciclaje',
          'Consumo consciente',
          'Alternativas sustentables'
        ]
      },
      {
        modulo: 'Módulo 4: Acción y Comunicación',
        temas: [
          'Plan de acción personal',
          'Cómo influir en familia y amigos',
          'Proyectos comunitarios',
          'Seguimiento y mejora continua'
        ]
      }
    ],
    metodologia: [
      'Videos explicativos grabados',
      'Actividades prácticas semanales',
      'Foro de discusión en línea',
      'Proyecto final de implementación',
      'Evaluación continua del progreso'
    ],
    materiales_incluidos: [
      'Videos del curso (acceso ilimitado)',
      'Guía de actividades prácticas',
      'Calculadora de huella ambiental',
      'Plantillas para planes de acción',
      'Certificado de participación'
    ]
  },
  {
    id: 3,
    slug: 'ciencia-ciudadana-proyectos-reales',
    titulo: 'Ciencia ciudadana: participa en proyectos reales',
    resumen: 'Únete a proyectos científicos reales y contribuye al conocimiento mientras aprendes sobre investigación, metodología y análisis de datos.',
    descripcion: 'Participa en proyectos de ciencia ciudadana que te permitirán contribuir a investigaciones reales sobre biodiversidad, cambio climático y sustentabilidad urbana.',
    precio_mxn: 700,
    modalidad: 'híbrido',
    duracion: '10 horas',
    fecha_inicio: '2024-03-01',
    portada_url: null,
    audiencia: 'adolescentes',
    publicado: true,
    destacado: false,
    objetivos: [
      'Participar en proyectos científicos reales',
      'Aprender metodología de investigación',
      'Recopilar y analizar datos científicos',
      'Contribuir al conocimiento científico',
      'Desarrollar habilidades de observación'
    ],
    perfil_ingreso: [
      'Interés en la ciencia y la investigación',
      'Disposición para trabajo de campo',
      'Capacidad de observación detallada',
      'Compromiso con proyectos a largo plazo'
    ],
    requisitos: [
      'Acceso a espacios naturales o urbanos',
      'Dispositivo móvil con cámara',
      'Tiempo para trabajo de campo',
      'Apoyo familiar para salidas'
    ],
    temario: [
      {
        modulo: 'Módulo 1: Introducción a la Ciencia Ciudadana',
        temas: [
          '¿Qué es la ciencia ciudadana?',
          'Proyectos disponibles para participar',
          'Importancia de la participación ciudadana',
          'Ética en la investigación'
        ]
      },
      {
        modulo: 'Módulo 2: Metodología Científica',
        temas: [
          'Formulación de preguntas',
          'Diseño de experimentos',
          'Recopilación de datos',
          'Control de variables'
        ]
      },
      {
        modulo: 'Módulo 3: Proyectos Prácticos',
        temas: [
          'Monitoreo de biodiversidad urbana',
          'Observación de patrones climáticos',
          'Mapeo de espacios verdes',
          'Análisis de calidad del aire'
        ]
      },
      {
        modulo: 'Módulo 4: Análisis y Comunicación',
        temas: [
          'Interpretación de datos',
          'Visualización de resultados',
          'Comunicación de hallazgos',
          'Participación en publicaciones'
        ]
      }
    ],
    metodologia: [
      'Sesiones teóricas en vivo',
      'Trabajo de campo independiente',
      'Análisis de datos en grupo',
      'Presentación de resultados',
      'Participación en proyectos reales'
    ],
    materiales_incluidos: [
      'Manual de metodología científica',
      'Equipo básico de campo',
      'Acceso a plataformas de ciencia ciudadana',
      'Mentoría de investigadores',
      'Certificado de participación científica'
    ]
  }
];

const beneficios = [
  {
    titulo: 'Aprendizaje Práctico',
    descripcion: 'Aprende haciendo con actividades y experimentos reales que refuerzan el conocimiento.',
    icon: FlaskConical,
    color: 'bg-lime-100 text-lime-800'
  },
  {
    titulo: 'Pensamiento Crítico',
    descripcion: 'Desarrolla habilidades para analizar información y tomar decisiones informadas.',
    icon: Lightbulb,
    color: 'bg-emerald-100 text-emerald-800'
  },
  {
    titulo: 'Trabajo en Equipo',
    descripcion: 'Colabora con otros estudiantes en proyectos y actividades grupales.',
    icon: Users,
    color: 'bg-cyan-100 text-cyan-800'
  },
  {
    titulo: 'Certificación',
    descripcion: 'Recibe un certificado que reconoce tus nuevas habilidades y conocimientos.',
    icon: Star,
    color: 'bg-orange-100 text-orange-800'
  }
];

export default function CursosAdolescentesPage() {
  const [filtroModalidad, setFiltroModalidad] = useState('todos');

  const cursosFiltrados = cursosAdolescentes.filter(curso => {
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
        return 'bg-lime-100 text-lime-800 border-lime-200';
      case 'grabado':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'híbrido':
        return 'bg-cyan-100 text-cyan-800 border-cyan-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div data-theme="theme-cursos-ado">
      {/* Banner Section */}
      <section className="bg-gradient-to-br from-lime-600 via-emerald-500 to-lime-500 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mr-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Cursos para Adolescentes
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-90">
              Pensamiento crítico desde la secundaria
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Capacitaciones para despertar curiosidad científica y habilidades fundamentales 
              que te acompañarán toda la vida. Aprende haciendo y descubre tu potencial.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Beneficios */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
            ¿Por qué elegir nuestros cursos?
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
              className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent"
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
            Mostrando {cursosFiltrados.length} de {cursosAdolescentes.length} cursos
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
                        <Badge variant="default" className="bg-lime-600 text-xs">
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
                      <Target className="h-4 w-4 text-lime-600" />
                      Objetivos del curso
                    </h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {curso.objetivos.map((objetivo, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                          <div className="w-2 h-2 bg-lime-500 rounded-full mt-2 flex-shrink-0"></div>
                          {objetivo}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Temario */}
                  <div>
                    <h5 className="font-medium text-slate-900 mb-3 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-lime-600" />
                      Temario
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {curso.temario.map((modulo, index) => (
                        <div key={index} className="border border-slate-200 rounded-lg p-3">
                          <h6 className="font-medium text-slate-900 mb-2">{modulo.modulo}</h6>
                          <ul className="space-y-1">
                            {modulo.temas.map((tema, idx) => (
                              <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
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
                        <FlaskConical className="h-4 w-4 text-lime-600" />
                        Metodología
                      </h5>
                      <ul className="space-y-2">
                        {curso.metodologia.map((item, index) => (
                          <li key={index} className="text-sm text-slate-700 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-900 mb-3 flex items-center gap-2">
                        <Heart className="h-4 w-4 text-lime-600" />
                        Materiales incluidos
                      </h5>
                      <ul className="space-y-2">
                        {curso.materiales_incluidos.map((material, index) => (
                          <li key={index} className="text-sm text-slate-700 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
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
                        <Users className="h-4 w-4 text-lime-600" />
                        Perfil de ingreso
                      </h5>
                      <ul className="space-y-2">
                        {curso.perfil_ingreso.map((perfil, index) => (
                          <li key={index} className="text-sm text-slate-700 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
                            {perfil}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-900 mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4 text-lime-600" />
                        Requisitos
                      </h5>
                      <ul className="space-y-2">
                        {curso.requisitos.map((requisito, index) => (
                          <li key={index} className="text-sm text-slate-700 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-2 flex-shrink-0"></div>
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
            ¿Tienes dudas sobre los cursos?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Estamos aquí para ayudarte a elegir el curso perfecto. 
            Contáctanos para resolver cualquier duda o solicitar información adicional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contacto">
                Contactar para más información
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
