"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Calendar, 
  MapPin, 
  ArrowRight,
  Download,
  ExternalLink,
  FileText,
  Mic,
  GraduationCap,
  Globe
} from 'lucide-react';
import Link from 'next/link';

// Datos de ejemplo para actividades de divulgación
const actividades = [
  {
    id: 1,
    titulo: 'Conferencia: Ciencia para la sustentabilidad urbana',
    descripcion: 'Presentación sobre cómo la investigación en metabolismo urbano puede transformar la planeación de nuestras ciudades.',
    tipo: 'conferencia',
    fecha: '2024-01-15',
    lugar: 'Universidad Autónoma del Estado de México',
    url: 'https://uaemex.mx/eventos/sustentabilidad-urbana',
    materiales: ['Presentación PDF', 'Video grabado'],
    destacado: true
  },
  {
    id: 2,
    titulo: 'Taller: Indicadores de sustentabilidad para municipios',
    descripcion: 'Sesión práctica para funcionarios municipales sobre cómo implementar y monitorear indicadores de sustentabilidad.',
    tipo: 'taller',
    fecha: '2024-01-20',
    lugar: 'Ayuntamiento de Metepec',
    url: null,
    materiales: ['Manual de indicadores', 'Plantillas de evaluación', 'Casos de estudio'],
    destacado: true
  },
  {
    id: 3,
    titulo: 'Entrevista: Metabolismo urbano en Toluca',
    descripcion: 'Conversación sobre los hallazgos de mi investigación doctoral y sus implicaciones para la ciudad.',
    tipo: 'medios',
    fecha: '2023-12-10',
    lugar: 'Radio UAEMex',
    url: 'https://radio.uaemex.mx/entrevistas/metabolismo-urbano',
    materiales: ['Audio completo', 'Transcripción'],
    destacado: false
  },
  {
    id: 4,
    titulo: 'Cápsula informativa: ¿Qué es el metabolismo urbano?',
    descripcion: 'Explicación sencilla del concepto de metabolismo urbano y por qué es importante para la sustentabilidad.',
    tipo: 'medios',
    fecha: '2023-11-25',
    lugar: 'Canal de YouTube Conciencia Ecológica',
    url: 'https://youtube.com/watch?v=metabolismo-urbano',
    materiales: ['Video', 'Guión', 'Recursos adicionales'],
    destacado: false
  },
  {
    id: 5,
    titulo: 'Taller: Ciencia ciudadana para adolescentes',
    descripcion: 'Actividad para estudiantes de secundaria sobre cómo participar en proyectos científicos reales.',
    tipo: 'taller',
    fecha: '2023-11-15',
    lugar: 'Escuela Secundaria Técnica No. 1, Toluca',
    url: null,
    materiales: ['Guía de actividades', 'Kit de experimentos', 'Certificados'],
    destacado: false
  },
  {
    id: 6,
    titulo: 'Colaboración: Serie de podcasts sobre sustentabilidad',
    descripcion: 'Participación en serie de podcasts sobre temas ambientales y sustentabilidad urbana.',
    tipo: 'medios',
    fecha: '2023-10-30',
    lugar: 'Podcast "Tierra y Ciudad"',
    url: 'https://spotify.com/podcast/tierra-y-ciudad',
    materiales: ['Episodio completo', 'Notas del episodio'],
    destacado: false
  }
];

const tipos = [
  { value: 'todos', label: 'Todas las actividades' },
  { value: 'conferencia', label: 'Conferencias y charlas' },
  { value: 'taller', label: 'Talleres y capacitaciones' },
  { value: 'medios', label: 'Medios y colaboraciones' }
];

export default function DivulgacionPage() {
  const [filtroTipo, setFiltroTipo] = useState('todos');

  const actividadesFiltradas = actividades.filter(actividad => {
    return filtroTipo === 'todos' || actividad.tipo === filtroTipo;
  });

  const getTipoLabel = (tipo: string) => {
    switch (tipo) {
      case 'conferencia':
        return 'Conferencias y charlas';
      case 'taller':
        return 'Talleres y capacitaciones';
      case 'medios':
        return 'Medios y colaboraciones';
      default:
        return tipo;
    }
  };

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'conferencia':
        return 'bg-lime-100 text-lime-800 border-lime-200';
      case 'taller':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'medios':
        return 'bg-cyan-100 text-cyan-800 border-cyan-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case 'conferencia':
        return <Mic className="h-4 w-4" />;
      case 'taller':
        return <GraduationCap className="h-4 w-4" />;
      case 'medios':
        return <Globe className="h-4 w-4" />;
      default:
        return <Users className="h-4 w-4" />;
    }
  };

  return (
    <div data-theme="theme-divulgacion">
      {/* Banner Section */}
      <section className="bg-gradient-to-br from-lime-600 via-emerald-500 to-lime-500 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mr-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Divulgación
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-90">
              Ciencia para todas y todos
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Actividades para acercar el conocimiento ambiental a escuelas, comunidades y medios.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filtros */}
        <section className="mb-8">
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-slate-700">
              Filtrar por tipo:
            </label>
            <select 
              value={filtroTipo} 
              onChange={(e) => setFiltroTipo(e.target.value)}
              className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent"
            >
              {tipos.map((tipo) => (
                <option key={tipo.value} value={tipo.value}>
                  {tipo.label}
                </option>
              ))}
            </select>
          </div>
        </section>

        {/* Resultados */}
        <div className="mb-6">
          <p className="text-slate-600">
            Mostrando {actividadesFiltradas.length} de {actividades.length} actividades
          </p>
        </div>

        {/* Lista de Actividades */}
        <div className="space-y-8">
          {actividadesFiltradas.map((actividad) => (
            <Card key={actividad.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge 
                        variant="outline" 
                        className={`${getTipoColor(actividad.tipo)} flex items-center gap-1`}
                      >
                        {getTipoIcon(actividad.tipo)}
                        {getTipoLabel(actividad.tipo)}
                      </Badge>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(actividad.fecha).toLocaleDateString('es-MX')}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <MapPin className="h-3 w-3 mr-1" />
                        {actividad.lugar}
                      </Badge>
                      {actividad.destacado && (
                        <Badge variant="default" className="bg-lime-600 text-xs">
                          Destacado
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl text-slate-900 mb-3">
                      {actividad.titulo}
                    </CardTitle>
                    <CardDescription className="text-slate-600 text-base leading-relaxed">
                      {actividad.descripcion}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Materiales */}
                  <div>
                    <h5 className="font-medium text-slate-900 mb-2 flex items-center gap-2">
                      <FileText className="h-4 w-4 text-lime-600" />
                      Materiales disponibles
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {actividad.materiales.map((material, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Enlaces */}
                  <div className="flex flex-wrap gap-2">
                    {actividad.url && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={actividad.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Ver más información
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/contacto">
                        Solicitar materiales
                        <Download className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {actividadesFiltradas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">
              No se encontraron actividades con los filtros seleccionados.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            ¿Te interesa una actividad de divulgación?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Estoy disponible para realizar conferencias, talleres y colaboraciones 
            con instituciones educativas, gobiernos y organizaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contacto">
                Invitar a tu institución
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contacto">
                <Download className="mr-2 h-4 w-4" />
                Descargar dossier (PDF)
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
