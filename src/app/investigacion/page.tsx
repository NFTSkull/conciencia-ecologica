"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Calendar, 
  FileText, 
  ExternalLink,
  Download,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';
import Link from 'next/link';

// Datos de ejemplo para publicaciones
const publicaciones = [
  {
    id: 1,
    titulo: 'Impacto del metabolismo socio-urbano en el Estado de México, México 2010–2020',
    tipo: 'cientifico',
    autores: 'Montoya García, D. N.',
    anio: 2024,
    contenedor: 'Letras Verdes. Revista Latinoamericana de Estudios Socioambientales',
    doi: '10.17141/letrasverdes.35.2024.6087',
    url: 'https://revistas.flacsoandes.edu.ec/letrasverdes/article/view/6087',
    pdf_url: null,
    destacado: true
  },
  {
    id: 2,
    titulo: 'El metabolismo urbano de la Zona Metropolitana de Toluca, México',
    tipo: 'tesis',
    autores: 'Montoya García, D. N.',
    anio: 2023,
    contenedor: 'Tesis Doctoral, Universidad Autónoma del Estado de México',
    doi: null,
    url: null,
    pdf_url: 'https://ri.uaemex.mx/handle/20.500.11799/123456',
    destacado: true
  },
  {
    id: 3,
    titulo: 'Metabolismo urbano de los municipios de Toluca y Metepec: análisis comparativo',
    tipo: 'cientifico',
    autores: 'Montoya García, D. N., Pérez García, A.',
    anio: 2023,
    contenedor: 'Quivera. Revista de Estudios Territoriales',
    doi: '10.36677/qret.v25i2.19063',
    url: 'https://qret.uaemex.mx/article/view/19063',
    pdf_url: null,
    destacado: false
  },
  {
    id: 4,
    titulo: 'Sustentabilidad urbana desde la perspectiva termodinámica',
    tipo: 'capitulo',
    autores: 'Montoya García, D. N.',
    anio: 2023,
    contenedor: 'Sustentabilidad Urbana: Enfoques Integrados',
    doi: null,
    url: 'https://editorial.uaemex.mx/libro/sustentabilidad-urbana',
    pdf_url: null,
    destacado: false
  },
  {
    id: 5,
    titulo: 'Indicadores de sustentabilidad para ciudades mexiquenses',
    tipo: 'divulgacion',
    autores: 'Montoya García, D. N.',
    anio: 2022,
    contenedor: 'Revista Ambiental del Estado de México',
    doi: null,
    url: 'https://revista.ambiente.gob.mx/indicadores-sustentabilidad',
    pdf_url: null,
    destacado: false
  },
  {
    id: 6,
    titulo: 'Metabolismo urbano y cambio climático: caso de estudio Toluca',
    tipo: 'cientifico',
    autores: 'Montoya García, D. N., López Martínez, R.',
    anio: 2022,
    contenedor: 'Journal of Urban Climate',
    doi: '10.1000/juc.2022.001',
    url: 'https://journal.urbanclimate.org/article/2022.001',
    pdf_url: null,
    destacado: false
  }
];

const tipos = [
  { value: 'todos', label: 'Todos los tipos' },
  { value: 'cientifico', label: 'Científico' },
  { value: 'divulgacion', label: 'Divulgación' },
  { value: 'capitulo', label: 'Capítulo' },
  { value: 'tesis', label: 'Tesis' }
];

const años = [
  { value: 'todos', label: 'Todos los años' },
  { value: '2024', label: '2024' },
  { value: '2023', label: '2023' },
  { value: '2022', label: '2022' }
];

export default function InvestigacionPage() {
  const [filtroTipo, setFiltroTipo] = useState('todos');
  const [filtroAnio, setFiltroAnio] = useState('todos');

  const publicacionesFiltradas = publicaciones.filter(publicacion => {
    const cumpleTipo = filtroTipo === 'todos' || publicacion.tipo === filtroTipo;
    const cumpleAnio = filtroAnio === 'todos' || publicacion.anio.toString() === filtroAnio;
    return cumpleTipo && cumpleAnio;
  });

  const getTipoLabel = (tipo: string) => {
    switch (tipo) {
      case 'cientifico':
        return 'Científico';
      case 'divulgacion':
        return 'Divulgación';
      case 'capitulo':
        return 'Capítulo';
      case 'tesis':
        return 'Tesis';
      default:
        return tipo;
    }
  };

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'cientifico':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'divulgacion':
        return 'bg-lime-100 text-lime-800 border-lime-200';
      case 'capitulo':
        return 'bg-cyan-100 text-cyan-800 border-cyan-200';
      case 'tesis':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div data-theme="theme-investigacion">
      {/* Banner Section */}
      <section className="bg-gradient-to-br from-emerald-700 via-teal-600 to-emerald-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mr-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Investigación
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-90">
              Conocimiento revisado y abierto
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Explora mis publicaciones agrupadas por año y por tipo: artículos científicos, divulgación, capítulos y tesis. Cada ficha incluye autores, revista/libro, DOI o enlace y, cuando es posible, acceso a PDF.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filtros */}
        <section className="mb-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Filtro por tipo */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Tipo de publicación
                </label>
                <select
                  value={filtroTipo}
                  onChange={(e) => setFiltroTipo(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  {tipos.map((tipo) => (
                    <option key={tipo.value} value={tipo.value}>
                      {tipo.label}
                    </option>
                  ))}
                </select>
              </div>
              {/* Filtro por año */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Año
                </label>
                <select
                  value={filtroAnio}
                  onChange={(e) => setFiltroAnio(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  {años.map((año) => (
                    <option key={año.value} value={año.value}>
                      {año.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados */}
        <div className="mb-6">
          <p className="text-slate-600">
            Mostrando {publicacionesFiltradas.length} de {publicaciones.length} publicaciones
          </p>
        </div>

        {/* Lista de Publicaciones */}
        <div className="space-y-6">
          {publicacionesFiltradas.map((publicacion) => (
            <Card key={publicacion.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge 
                        variant="outline" 
                        className={`${getTipoColor(publicacion.tipo)} flex items-center gap-1`}
                      >
                        {getTipoLabel(publicacion.tipo)}
                      </Badge>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {publicacion.anio}
                      </Badge>
                      {publicacion.destacado && (
                        <Badge variant="default" className="bg-emerald-600 text-xs">
                          Destacado
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl text-slate-900 mb-3">
                      {publicacion.titulo}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      <strong>Autores:</strong> {publicacion.autores}
                    </CardDescription>
                    <CardDescription className="text-slate-600">
                      <strong>Publicado en:</strong> {publicacion.contenedor}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* DOI y Enlaces */}
                  <div className="flex flex-wrap gap-2">
                    {publicacion.doi && (
                      <div className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="font-medium">DOI:</span>
                        <span className="font-mono bg-slate-100 px-2 py-1 rounded">
                          {publicacion.doi}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Enlaces */}
                  <div className="flex flex-wrap gap-2">
                    {publicacion.url && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={publicacion.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Ver publicación
                        </a>
                      </Button>
                    )}
                    {publicacion.pdf_url && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={publicacion.pdf_url} target="_blank" rel="noopener noreferrer">
                          <Download className="mr-2 h-4 w-4" />
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

        {publicacionesFiltradas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">
              Aún no hay publicaciones con estos filtros. Prueba cambiarlos.
            </p>
          </div>
        )}

        {/* Nota Legal */}
        <div className="mt-12 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-800">
            <strong>Nota:</strong> Los enlaces a editoriales o repositorios externos pueden requerir acceso institucional.
          </p>
        </div>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            ¿Necesitas más información?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Si necesitas acceso a alguna publicación o tienes preguntas sobre mi investigación, 
            no dudes en contactarme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contacto">
                Contactar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/divulgacion">
                Ver actividades de divulgación
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
