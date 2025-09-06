"use client";

import { useState } from 'react';
import { SectionBanner } from '@/components/sections/section-banner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, FileText, BookOpen, GraduationCap, FileBook } from 'lucide-react';
import { formatDate } from '@/lib/utils';

// Datos de ejemplo - en producción vendrían de Supabase
const publicaciones = [
  {
    id: '1',
    tipo: 'tesis' as const,
    titulo: 'El metabolismo urbano de la Zona Metropolitana de Toluca, México',
    autores: 'Montoya García, Dainiz Noray',
    anio: 2023,
    contenedor: 'Tesis Doctoral - Universidad Autónoma del Estado de México',
    doi: null,
    url: 'http://ri.uaemex.mx/handle/20.500.11799/137771',
    pdf_url: null,
    destacado: true
  },
  {
    id: '2',
    tipo: 'cientifico' as const,
    titulo: 'Impacto del metabolismo socio-urbano en el Estado de México, México 2010–2020',
    autores: 'Montoya García, Dainiz Noray',
    anio: 2024,
    contenedor: 'Letras Verdes - Revista Latinoamericana de Estudios Socioambientales',
    doi: '10.17141/letrasverdes.35.2024.6087',
    url: 'https://doi.org/10.17141/letrasverdes.35.2024.6087',
    pdf_url: null,
    destacado: true
  },
  {
    id: '3',
    tipo: 'cientifico' as const,
    titulo: 'Metabolismo urbano de los municipios de Toluca y Metepec: análisis comparativo de indicadores de sustentabilidad',
    autores: 'Montoya García, Dainiz Noray',
    anio: 2023,
    contenedor: 'Quivera - Revista de Estudios Territoriales',
    doi: '10.36677/qret.v25i2.19063',
    url: 'https://quivera.uaemex.mx/article/view/19063',
    pdf_url: null,
    destacado: false
  },
  {
    id: '4',
    tipo: 'cientifico' as const,
    titulo: 'Metabolismo energético da Zona Metropolitana de Toluca, México',
    autores: 'Montoya García, Dainiz Noray',
    anio: 2023,
    contenedor: 'Revista Iberoamericana de Bioeconomía y Cambio Climático',
    doi: null,
    url: 'https://redibec.org/ojs/index.php/revibec/article/view/vol35-2-7',
    pdf_url: null,
    destacado: false
  },
  {
    id: '5',
    tipo: 'cientifico' as const,
    titulo: 'Índices metabólicos para la evaluación de la sustentabilidad urbana: caso ZMT, México',
    autores: 'Montoya García, Dainiz Noray',
    anio: 2023,
    contenedor: 'Estudios Ambientales',
    doi: '10.33413/eau.2023.230',
    url: 'https://doi.org/10.33413/eau.2023.230',
    pdf_url: null,
    destacado: false
  },
  {
    id: '6',
    tipo: 'capitulo' as const,
    titulo: 'Metabolismo urbano como propuesta alternativa para la planeación sustentable',
    autores: 'Montoya García, Dainiz Noray',
    anio: 2023,
    contenedor: 'Libro: Planeación Urbana y Sustentabilidad',
    doi: null,
    url: 'http://hdl.handle.net/20.500.11799/139900',
    pdf_url: null,
    destacado: false
  },
  {
    id: '7',
    tipo: 'capitulo' as const,
    titulo: 'Pensamiento e instrumentalización de la complejidad en el mundo VUCA',
    autores: 'Montoya García, Dainiz Noray',
    anio: 2023,
    contenedor: 'Libro: Universidad Libre, Bogotá',
    doi: null,
    url: null,
    pdf_url: null,
    destacado: false
  }
];

const tipos = {
  tesis: { label: 'Tesis', icon: GraduationCap, color: 'bg-blue-100 text-blue-800' },
  cientifico: { label: 'Artículo Científico', icon: FileText, color: 'bg-green-100 text-green-800' },
  divulgacion: { label: 'Divulgación', icon: BookOpen, color: 'bg-purple-100 text-purple-800' },
  capitulo: { label: 'Capítulo de Libro', icon: FileBook, color: 'bg-orange-100 text-orange-800' }
};

const anos = [2024, 2023, 2022, 2021, 2020];

export default function InvestigacionPage() {
  const [filtroAno, setFiltroAno] = useState<number | null>(null);
  const [filtroTipo, setFiltroTipo] = useState<string | null>(null);

  const publicacionesFiltradas = publicaciones.filter(pub => {
    if (filtroAno && pub.anio !== filtroAno) return false;
    if (filtroTipo && pub.tipo !== filtroTipo) return false;
    return true;
  });

  const limpiarFiltros = () => {
    setFiltroAno(null);
    setFiltroTipo(null);
  };

  return (
    <div data-theme="theme-investigacion">
      <SectionBanner
        title="Investigación"
        subtitle="Explora publicaciones científicas, tesis y capítulos sobre metabolismo urbano, sustentabilidad y complejidad socio-ambiental"
        theme="theme-investigacion"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filtros */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="text-sm font-medium text-slate-700">Filtros:</span>
            
            {/* Filtro por año */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-600">Año:</span>
              <div className="flex gap-1">
                {anos.map(ano => (
                  <button
                    key={ano}
                    onClick={() => setFiltroAno(filtroAno === ano ? null : ano)}
                    className={`px-3 py-1 text-sm rounded-md transition-colors ${
                      filtroAno === ano 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {ano}
                  </button>
                ))}
              </div>
            </div>

            {/* Filtro por tipo */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-600">Tipo:</span>
              <div className="flex gap-1">
                {Object.entries(tipos).map(([key, tipo]) => (
                  <button
                    key={key}
                    onClick={() => setFiltroTipo(filtroTipo === key ? null : key)}
                    className={`px-3 py-1 text-sm rounded-md transition-colors ${
                      filtroTipo === key 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {tipo.label}
                  </button>
                ))}
              </div>
            </div>

            {(filtroAno || filtroTipo) && (
              <Button variant="outline" size="sm" onClick={limpiarFiltros}>
                Limpiar filtros
              </Button>
            )}
          </div>

          <p className="text-sm text-slate-600">
            Mostrando {publicacionesFiltradas.length} de {publicaciones.length} publicaciones
          </p>
        </div>

        {/* Listado de publicaciones */}
        <div className="space-y-6">
          {publicacionesFiltradas.map((pub) => {
            const tipo = tipos[pub.tipo];
            const TipoIcon = tipo.icon;
            
            return (
              <Card key={pub.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className={tipo.color}>
                          <TipoIcon className="h-3 w-3 mr-1" />
                          {tipo.label}
                        </Badge>
                        <Badge variant="outline">{pub.anio}</Badge>
                        {pub.destacado && (
                          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                            Destacado
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg text-slate-900 mb-2">
                        {pub.titulo}
                      </CardTitle>
                      <CardDescription className="text-slate-600">
                        <strong>Autores:</strong> {pub.autores}
                      </CardDescription>
                      <CardDescription className="text-slate-600">
                        <strong>Publicado en:</strong> {pub.contenedor}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {pub.doi && (
                      <Badge variant="outline" className="text-xs">
                        DOI: {pub.doi}
                      </Badge>
                    )}
                    {pub.url && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={pub.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Ver en {pub.tipo === 'tesis' ? 'repositorio' : 'fuente'}
                        </a>
                      </Button>
                    )}
                    {pub.pdf_url && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={pub.pdf_url} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-3 w-3 mr-1" />
                          Ver PDF
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {publicacionesFiltradas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No se encontraron publicaciones con los filtros seleccionados.</p>
            <Button variant="outline" onClick={limpiarFiltros} className="mt-4">
              Limpiar filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
