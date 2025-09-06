"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  MapPin, 
  Users,
  Calendar,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Target,
  Clock,
  Award
} from 'lucide-react';
import Link from 'next/link';

// Datos de ejemplo para consultorías
const consultorias = [
  {
    id: 1,
    slug: 'metabolismo-urbano-toluca',
    titulo: 'Diagnóstico de sustentabilidad - Zona Metropolitana de Toluca',
    cliente: 'Gobierno del Estado de México',
    anio: 2023,
    reto: 'Evaluar la sustentabilidad de la ZMT y proponer estrategias de mejora',
    resumen: 'Análisis completo del flujo de energía y materiales en la ZMT para identificar oportunidades de mejora en la sustentabilidad urbana.',
    hallazgos: [
      'Ineficiencia en el uso de energía del 25%',
      'Pérdida de agua potable del 30%',
      'Generación de residuos superior al promedio nacional',
      'Falta de conectividad entre sistemas de transporte'
    ],
    recomendaciones: [
      'Implementar sistema de monitoreo energético',
      'Rehabilitar infraestructura hidráulica',
      'Desarrollar programa de economía circular',
      'Integrar sistemas de movilidad sustentable'
    ],
    impacto: '15% ahorro energético, 12% reducción emisiones, 8 recomendaciones implementadas',
    url: 'https://ejemplo.com/consultoria-toluca',
    pdf_url: 'https://ejemplo.com/pdf-toluca',
    destacado: true
  },
  {
    id: 2,
    slug: 'indicadores-sustentabilidad-metepec',
    titulo: 'Sistema de indicadores de sustentabilidad para Metepec',
    cliente: 'Ayuntamiento de Metepec',
    anio: 2023,
    reto: 'Desarrollar un sistema de monitoreo para evaluar la sustentabilidad municipal',
    resumen: 'Diseño e implementación de un tablero de indicadores para monitorear el progreso hacia la sustentabilidad municipal.',
    hallazgos: [
      'Falta de indicadores estandarizados',
      'Dispersión de información entre dependencias',
      'Ausencia de metas cuantificables',
      'Limitada participación ciudadana'
    ],
    recomendaciones: [
      'Establecer 25 indicadores clave',
      'Crear plataforma de monitoreo en tiempo real',
      'Definir metas para 2025 y 2030',
      'Implementar consulta ciudadana trimestral'
    ],
    impacto: '25 indicadores implementados, 6 categorías, 100% implementación, seguimiento mensual',
    url: 'https://ejemplo.com/indicadores-metepec',
    pdf_url: null,
    destacado: false
  },
  {
    id: 3,
    slug: 'huella-material-valle-bravo',
    titulo: 'Evaluación de huella material y energética del Valle de Bravo',
    cliente: 'Comisión de Cuenca del Valle de Bravo',
    anio: 2022,
    reto: 'Analizar la presión ambiental del turismo y desarrollo urbano',
    resumen: 'Análisis de la presión ambiental del turismo y desarrollo urbano en la región del Valle de Bravo.',
    hallazgos: [
      'Presión turística superior a la capacidad de carga',
      'Vulnerabilidad hídrica alta',
      'Fragmentación de ecosistemas',
      'Contaminación por actividades recreativas'
    ],
    recomendaciones: [
      'Establecer límites de visitantes por temporada',
      'Implementar sistema de monitoreo hídrico',
      'Crear corredores ecológicos',
      'Regular actividades acuáticas'
    ],
    impacto: 'Presión turística: Alta, Vulnerabilidad: Media, 12 recomendaciones, Prioridad: Alta',
    url: null,
    pdf_url: 'https://ejemplo.com/pdf-valle-bravo',
    destacado: false
  },
  {
    id: 4,
    slug: 'planeacion-termica-iztapaluca',
    titulo: 'Planeación urbana con enfoque termodinámico para Iztapaluca',
    cliente: 'Ayuntamiento de Iztapaluca',
    anio: 2022,
    reto: 'Optimizar el diseño urbano para reducir el consumo energético',
    resumen: 'Aplicación de principios termodinámicos para optimizar el diseño urbano y reducir el consumo energético.',
    hallazgos: [
      'Orientación inadecuada de edificios',
      'Falta de espacios verdes estratégicos',
      'Materiales con baja eficiencia térmica',
      'Sistemas de ventilación natural limitados'
    ],
    recomendaciones: [
      'Reorientar desarrollo urbano hacia el sur',
      'Implementar corredores verdes',
      'Establecer estándares de eficiencia térmica',
      'Diseñar sistemas de ventilación pasiva'
    ],
    impacto: '22% eficiencia energética, confort térmico mejorado, 18% reducción costos operación, 85% satisfacción',
    url: 'https://ejemplo.com/iztapaluca-termica',
    pdf_url: null,
    destacado: true
  },
  {
    id: 5,
    slug: 'politicas-sustentabilidad-estado-mexico',
    titulo: 'Diseño de políticas públicas para la sustentabilidad del Estado de México',
    cliente: 'Secretaría de Medio Ambiente del Estado de México',
    anio: 2021,
    reto: 'Desarrollar marco de políticas para promover la sustentabilidad en los 125 municipios',
    resumen: 'Desarrollo de un marco de políticas públicas para promover la sustentabilidad en los 125 municipios del estado.',
    hallazgos: [
      'Falta de coordinación entre municipios',
      'Políticas fragmentadas y contradictorias',
      'Ausencia de mecanismos de seguimiento',
      'Limitada participación ciudadana'
    ],
    recomendaciones: [
      'Crear consejo intermunicipal de sustentabilidad',
      'Establecer marco normativo unificado',
      'Implementar sistema de evaluación continua',
      'Fomentar participación ciudadana'
    ],
    impacto: '15 políticas, 125 municipios beneficiados, implementación en progreso, impacto esperado: Alto',
    url: 'https://ejemplo.com/politicas-edomex',
    pdf_url: 'https://ejemplo.com/pdf-politicas-edomex',
    destacado: false
  }
];

const servicios = [
  {
    titulo: 'Metabolismo urbano',
    descripcion: 'Análisis de flujos de materia y energía en territorios urbanos para identificar ineficiencias y oportunidades de mejora.',
    icon: TrendingUp,
    color: 'bg-cyan-100 text-cyan-800'
  },
  {
    titulo: 'Indicadores y tableros de sustentabilidad',
    descripcion: 'Desarrollo de sistemas de monitoreo para evaluar el progreso hacia la sustentabilidad urbana.',
    icon: BarChart3,
    color: 'bg-emerald-100 text-emerald-800'
  },
  {
    titulo: 'Evaluación de huella material y energética',
    descripcion: 'Cálculo y análisis de la presión ambiental de actividades urbanas y turísticas.',
    icon: Target,
    color: 'bg-orange-100 text-orange-800'
  },
  {
    titulo: 'Termodinámica para la planeación urbana',
    descripcion: 'Aplicación de principios físicos para optimizar el diseño urbano y mejorar la eficiencia energética.',
    icon: Zap,
    color: 'bg-purple-100 text-purple-800'
  },
  {
    titulo: 'Diseño de políticas y planes de mejora',
    descripcion: 'Desarrollo de marcos normativos y estratégicos para promover la sustentabilidad urbana.',
    icon: FileText,
    color: 'bg-blue-100 text-blue-800'
  }
];

const metodologia = [
  {
    fase: 'Análisis inicial',
    descripcion: 'Revisión documental, diagnóstico de situación actual y identificación de retos principales.',
    icon: FileText,
    duracion: '1-2 semanas'
  },
  {
    fase: 'Datos y modelado',
    descripcion: 'Recopilación de datos, análisis cuantitativo y desarrollo de modelos predictivos.',
    icon: BarChart3,
    duracion: '2-4 semanas'
  },
  {
    fase: 'Recomendaciones',
    descripcion: 'Elaboración de propuestas técnicas, evaluación de alternativas y priorización de acciones.',
    icon: Lightbulb,
    duracion: '1-2 semanas'
  },
  {
    fase: 'Implementación y seguimiento',
    descripcion: 'Acompañamiento en la ejecución, monitoreo de resultados y ajustes necesarios.',
    icon: Users,
    duracion: '3-6 meses'
  }
];

export default function ConsultoriaPage() {
  const [filtroAnio, setFiltroAnio] = useState('todos');

  const consultoriasFiltradas = consultorias.filter(consultoria => {
    return filtroAnio === 'todos' || consultoria.anio.toString() === filtroAnio;
  });

  const años = [
    { value: 'todos', label: 'Todos los años' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' }
  ];

  return (
    <div data-theme="theme-consultoria">
      {/* Banner Section */}
      <section className="bg-gradient-to-br from-cyan-700 via-teal-600 to-cyan-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mr-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Consultoría
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-90">
              Diagnóstico y estrategia para ciudades sostenibles
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Acompaño a instituciones y organizaciones en el diseño e implementación de soluciones basadas en evidencia.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Servicios */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
            Servicios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((servicio, index) => {
              const Icon = servicio.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className={`p-3 rounded-lg ${servicio.color} w-fit mb-3`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg text-slate-900">
                      {servicio.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600">
                      {servicio.descripcion}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Metodología */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
            Metodología
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metodologia.map((fase, index) => {
              const Icon = fase.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">{fase.fase}</h4>
                  <p className="text-sm text-slate-600 mb-3">{fase.descripcion}</p>
                  <Badge variant="outline" className="text-xs">
                    {fase.duracion}
                  </Badge>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Casos y Resultados */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold text-slate-900">
              Resultados
            </h3>
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-slate-700">
                Filtrar por año:
              </label>
              <select 
                value={filtroAnio} 
                onChange={(e) => setFiltroAnio(e.target.value)}
                className="border border-slate-300 rounded-md px-3 py-1 text-sm"
              >
                {años.map((año) => (
                  <option key={año.value} value={año.value}>
                    {año.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {consultoriasFiltradas.map((consultoria) => (
              <Card key={consultoria.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {consultoria.anio}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {consultoria.cliente}
                        </Badge>
                        {consultoria.destacado && (
                          <Badge variant="default" className="bg-cyan-600 text-xs">
                            Destacado
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl text-slate-900 mb-2">
                        {consultoria.titulo}
                      </CardTitle>
                      <CardDescription className="text-slate-600">
                        {consultoria.resumen}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Reto */}
                    <div>
                      <h5 className="font-medium text-slate-900 mb-2 flex items-center gap-2">
                        <Target className="h-4 w-4 text-cyan-600" />
                        Reto
                      </h5>
                      <p className="text-sm text-slate-700">{consultoria.reto}</p>
                    </div>

                    {/* Hallazgos */}
                    <div>
                      <h5 className="font-medium text-slate-900 mb-2 flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-cyan-600" />
                        Hallazgos principales
                      </h5>
                      <ul className="space-y-1">
                        {consultoria.hallazgos.map((hallazgo, index) => (
                          <li key={index} className="text-sm text-slate-700 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            {hallazgo}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Recomendaciones */}
                    <div>
                      <h5 className="font-medium text-slate-900 mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-cyan-600" />
                        Recomendaciones
                      </h5>
                      <ul className="space-y-1">
                        {consultoria.recomendaciones.map((recomendacion, index) => (
                          <li key={index} className="text-sm text-slate-700 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            {recomendacion}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impacto */}
                    <div>
                      <h5 className="font-medium text-slate-900 mb-2 flex items-center gap-2">
                        <Award className="h-4 w-4 text-cyan-600" />
                        Impacto
                      </h5>
                      <p className="text-sm text-slate-700">{consultoria.impacto}</p>
                    </div>
                    
                    {/* Enlaces */}
                    <div className="flex flex-wrap gap-2">
                      {consultoria.url && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={consultoria.url} target="_blank" rel="noopener noreferrer">
                            Ver más información
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {consultoria.pdf_url && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={consultoria.pdf_url} target="_blank" rel="noopener noreferrer">
                            <FileText className="mr-2 h-4 w-4" />
                            Descargar PDF
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {consultoriasFiltradas.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">
                No se encontraron consultorías para el año seleccionado.
              </p>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            ¿Necesitas un diagnóstico de sustentabilidad?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Estoy disponible para realizar diagnósticos, desarrollar estrategias y 
            acompañar la implementación de soluciones sustentables para tu ciudad o proyecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contacto">
                Solicitar diagnóstico
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contacto">
                Agenda una llamada
                <Calendar className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
