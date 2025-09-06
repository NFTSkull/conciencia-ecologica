import { SectionBanner } from '@/components/sections/section-banner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Target, 
  BarChart3, 
  TrendingUp, 
  Leaf, 
  Building2, 
  Users, 
  Globe,
  ExternalLink,
  Download
} from 'lucide-react';

// Datos de ejemplo - en producción vendrían de Supabase
const servicios = [
  {
    id: '1',
    titulo: 'Diagnósticos de Metabolismo Urbano',
    descripcion: 'Análisis integral del flujo de materiales y energía en sistemas urbanos para identificar oportunidades de mejora en sustentabilidad.',
    icon: Building2,
    color: 'bg-cyan-100 text-cyan-800',
    caracteristicas: [
      'Evaluación de flujos de materiales',
      'Análisis de consumo energético',
      'Identificación de ineficiencias',
      'Recomendaciones de optimización'
    ]
  },
  {
    id: '2',
    titulo: 'Huella Energética y Material',
    descripcion: 'Cálculo y análisis de la huella ambiental de organizaciones, proyectos o territorios específicos.',
    icon: Leaf,
    color: 'bg-teal-100 text-teal-800',
    caracteristicas: [
      'Inventario de emisiones',
      'Análisis de ciclo de vida',
      'Indicadores de impacto',
      'Estrategias de reducción'
    ]
  },
  {
    id: '3',
    titulo: 'Análisis Termodinámico',
    descripcion: 'Aplicación de principios termodinámicos para evaluar la eficiencia de sistemas urbanos y ambientales.',
    icon: TrendingUp,
    color: 'bg-emerald-100 text-emerald-800',
    caracteristicas: [
      'Balance energético',
      'Análisis de entropía',
      'Eficiencia termodinámica',
      'Optimización de procesos'
    ]
  },
  {
    id: '4',
    titulo: 'Indicadores de Sustentabilidad',
    descripcion: 'Desarrollo y aplicación de métricas para evaluar el desempeño ambiental y social de proyectos urbanos.',
    icon: BarChart3,
    color: 'bg-lime-100 text-lime-800',
    caracteristicas: [
      'Diseño de indicadores',
      'Sistemas de monitoreo',
      'Análisis de tendencias',
      'Reportes de sustentabilidad'
    ]
  },
  {
    id: '5',
    titulo: 'Planes de Sustentabilidad',
    descripcion: 'Elaboración de estrategias integrales para la transición hacia modelos de desarrollo más sustentables.',
    icon: Target,
    color: 'bg-purple-100 text-purple-800',
    caracteristicas: [
      'Visión de sustentabilidad',
      'Objetivos y metas',
      'Plan de implementación',
      'Seguimiento y evaluación'
    ]
  },
  {
    id: '6',
    titulo: 'Capacitación y Formación',
    descripcion: 'Programas de formación especializada en metodologías de análisis ambiental y sustentabilidad.',
    icon: Users,
    color: 'bg-orange-100 text-orange-800',
    caracteristicas: [
      'Talleres especializados',
      'Capacitación en metodologías',
      'Transferencia de conocimiento',
      'Soporte técnico continuo'
    ]
  }
];

const casosEstudio = [
  {
    id: '1',
    titulo: 'Análisis de Metabolismo Urbano - Zona Metropolitana de Toluca',
    cliente: 'Gobierno del Estado de México',
    anio: 2023,
    resumen: 'Evaluación integral del metabolismo urbano de la ZMT para identificar oportunidades de mejora en sustentabilidad.',
    resultados: {
      'Eficiencia energética': 'Mejora del 15%',
      'Reducción de residuos': '25% menos generación',
      'Optimización de recursos': 'Ahorro del 20% en costos'
    },
    url: null,
    pdf_url: null
  },
  {
    id: '2',
    titulo: 'Plan de Sustentabilidad - Municipio de Metepec',
    cliente: 'Ayuntamiento de Metepec',
    anio: 2023,
    resumen: 'Desarrollo de plan integral de sustentabilidad con enfoque en metabolismo urbano y participación ciudadana.',
    resultados: {
      'Participación ciudadana': '80% de aprobación',
      'Metas de sustentabilidad': '15 objetivos definidos',
      'Implementación': 'Plan de 5 años aprobado'
    },
    url: 'https://metepec.gob.mx/sustentabilidad',
    pdf_url: null
  }
];

export default function ConsultoriaPage() {
  return (
    <div data-theme="theme-consultoria">
      <SectionBanner
        title="Consultoría"
        subtitle="Servicios especializados en análisis ambiental, metabolismo urbano y planeación sustentable"
        theme="theme-consultoria"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introducción */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Consultoría Especializada en Ciencias Ambientales
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Ofrecemos servicios de consultoría basados en investigación científica rigurosa, 
            aplicando metodologías innovadoras como el metabolismo urbano, análisis termodinámico 
            y sistemas complejos para resolver desafíos ambientales y de sustentabilidad.
          </p>
        </div>

        {/* Servicios */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">
            Nuestros Servicios
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio) => {
              const Icon = servicio.icon;
              
              return (
                <Card key={servicio.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-3 rounded-lg ${servicio.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg text-slate-900 group-hover:text-cyan-700 transition-colors">
                        {servicio.titulo}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 mb-4">
                      {servicio.descripcion}
                    </CardDescription>
                    
                    <div className="space-y-2">
                      {servicio.caracteristicas.map((caracteristica, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                          <span>{caracteristica}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Casos de Estudio */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">
            Casos de Estudio y Resultados
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {casosEstudio.map((caso) => (
              <Card key={caso.id} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline">{caso.anio}</Badge>
                    <Badge className="bg-cyan-100 text-cyan-800">
                      {caso.cliente}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-slate-900">
                    {caso.titulo}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 mb-4">
                    {caso.resumen}
                  </CardDescription>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Resultados Principales:</h4>
                    <div className="space-y-2">
                      {Object.entries(caso.resultados).map(([indicador, valor]) => (
                        <div key={indicador} className="flex justify-between text-sm">
                          <span className="text-slate-600">{indicador}:</span>
                          <span className="font-medium text-cyan-700">{valor}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {caso.url && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={caso.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Ver proyecto
                        </a>
                      </Button>
                    )}
                    {caso.pdf_url && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={caso.pdf_url} target="_blank" rel="noopener noreferrer">
                          <Download className="h-3 w-3 mr-1" />
                          Descargar PDF
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Metodología */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Nuestra Metodología
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-cyan-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">1. Diagnóstico</h4>
              <p className="text-slate-600 text-sm">
                Análisis integral del sistema o proyecto utilizando metodologías científicas validadas.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-teal-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">2. Análisis</h4>
              <p className="text-slate-600 text-sm">
                Evaluación de datos y generación de indicadores para identificar oportunidades de mejora.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">3. Implementación</h4>
              <p className="text-slate-600 text-sm">
                Desarrollo de estrategias y acompañamiento en la implementación de soluciones.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            ¿Necesitas consultoría especializada?
          </h3>
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte a resolver desafíos 
            ambientales y de sustentabilidad con metodologías científicas innovadoras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-cyan-700 hover:bg-cyan-800">
              <a href="/contacto">
                Solicitar consultoría
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/investigacion">
                Ver investigación
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
