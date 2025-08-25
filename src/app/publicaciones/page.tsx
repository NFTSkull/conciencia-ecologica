"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  BookOpen, 
  FileText, 
  Download, 
  ExternalLink, 
  Search,
  Filter,
  Calendar,
  Users,
  Target,
  Globe,
  Zap,
  Building2,
  Award,
  Star,
  ArrowRight,
  Mail
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function PublicacionesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const publications = [
    {
      id: 1,
      title: "Termodinámica Urbana: Un Enfoque para la Planificación Sostenible",
      authors: ["Montoya García, D.N.", "García López, A.", "Hernández Ruiz, M."],
      journal: "Journal of Urban Sustainability",
      year: 2023,
      volume: "15",
      issue: "3",
      pages: "245-268",
      doi: "10.1000/urban-sustainability-2023",
      type: "Artículo de investigación",
      abstract: "Este artículo presenta una metodología innovadora para aplicar principios termodinámicos en la planificación urbana, analizando flujos energéticos y materiales en sistemas urbanos complejos.",
      keywords: ["termodinámica urbana", "planificación urbana", "sustentabilidad", "flujos energéticos"],
      citations: 12,
      impact: "Q1",
      language: "Español",
      openAccess: true,
      pdfUrl: "#",
      externalUrl: "#"
    },
    {
      id: 2,
      title: "Metabolismo Social en Ciudades Mexicanas: Caso de Estudio CDMX",
      authors: ["Montoya García, D.N.", "Rodríguez Silva, P."],
      journal: "Environmental Research Letters",
      year: 2022,
      volume: "17",
      issue: "8",
      pages: "084012",
      doi: "10.1000/env-research-2022",
      type: "Artículo de investigación",
      abstract: "Análisis del metabolismo social en la Ciudad de México, evaluando patrones de consumo de recursos y su relación con la sustentabilidad urbana.",
      keywords: ["metabolismo urbano", "CDMX", "consumo de recursos", "sustentabilidad urbana"],
      citations: 28,
      impact: "Q1",
      language: "Inglés",
      openAccess: true,
      pdfUrl: "#",
      externalUrl: "#"
    },
    {
      id: 3,
      title: "Sustentabilidad Urbana: Teoría y Práctica",
      authors: ["Montoya García, D.N."],
      journal: "Editorial UNAM",
      year: 2021,
      volume: "",
      issue: "",
      pages: "342",
      doi: "ISBN: 978-607-30-1234-5",
      type: "Libro",
      abstract: "Compendio integral sobre sustentabilidad urbana, desde fundamentos teóricos hasta aplicaciones prácticas en el contexto latinoamericano.",
      keywords: ["sustentabilidad urbana", "teoría urbana", "práctica urbana", "América Latina"],
      citations: 45,
      impact: "Libro académico",
      language: "Español",
      openAccess: false,
      pdfUrl: "#",
      externalUrl: "#"
    },
    {
      id: 4,
      title: "Indicadores de Sustentabilidad para Ciudades Mexicanas",
      authors: ["Montoya García, D.N.", "López Martínez, R.", "González Pérez, S."],
      journal: "Revista Mexicana de Ciencias Políticas y Sociales",
      year: 2023,
      volume: "68",
      issue: "248",
      pages: "89-112",
      doi: "10.1000/rmcps-2023",
      type: "Artículo de investigación",
      abstract: "Desarrollo y validación de indicadores específicos para evaluar la sustentabilidad en ciudades mexicanas, considerando características locales y regionales.",
      keywords: ["indicadores", "sustentabilidad", "ciudades mexicanas", "evaluación"],
      citations: 8,
      impact: "Q2",
      language: "Español",
      openAccess: true,
      pdfUrl: "#",
      externalUrl: "#"
    },
    {
      id: 5,
      title: "Complejidad de Sistemas Socio-ambientales Urbanos",
      authors: ["Montoya García, D.N.", "Fernández Castro, J.", "Morales Vega, L."],
      journal: "Complexity",
      year: 2022,
      volume: "2022",
      issue: "",
      pages: "1-15",
      doi: "10.1000/complexity-2022",
      type: "Artículo de investigación",
      abstract: "Análisis de la complejidad en sistemas socio-ambientales urbanos, aplicando teoría de sistemas complejos para entender la resiliencia urbana.",
      keywords: ["sistemas complejos", "socio-ambiental", "resiliencia urbana", "teoría de sistemas"],
      citations: 15,
      impact: "Q2",
      language: "Inglés",
      openAccess: true,
      pdfUrl: "#",
      externalUrl: "#"
    },
    {
      id: 6,
      title: "Manual de Termodinámica Aplicada a la Planificación Urbana",
      authors: ["Montoya García, D.N.", "Equipo de Investigación Conciencia Ecológica"],
      journal: "Conciencia Ecológica",
      year: 2023,
      volume: "",
      issue: "",
      pages: "156",
      doi: "Manual interno",
      type: "Manual técnico",
      abstract: "Manual práctico para planificadores urbanos sobre la aplicación de principios termodinámicos en el diseño y gestión de ciudades.",
      keywords: ["manual", "termodinámica", "planificación urbana", "diseño urbano"],
      citations: 3,
      impact: "Manual técnico",
      language: "Español",
      openAccess: true,
      pdfUrl: "#",
      externalUrl: "#"
    }
  ];

  const publicationTypes = [
    "Todos los tipos",
    "Artículo de investigación",
    "Libro",
    "Manual técnico",
    "Reporte técnico",
    "Capítulo de libro"
  ];

  const years = [
    "Todos los años",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019"
  ];

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === '' || selectedType === "Todos los tipos" || pub.type === selectedType;
    const matchesYear = selectedYear === '' || selectedYear === "Todos los años" || pub.year.toString() === selectedYear;
    
    return matchesSearch && matchesType && matchesYear;
  });

  const getImpactColor = (impact: string) => {
    if (impact === "Q1") return "bg-green-100 text-green-800";
    if (impact === "Q2") return "bg-blue-100 text-blue-800";
    if (impact === "Q3") return "bg-yellow-100 text-yellow-800";
    if (impact === "Q4") return "bg-red-100 text-red-800";
    return "bg-slate-100 text-slate-800";
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-800 via-teal-700 to-emerald-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Publicaciones
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Artículos científicos, libros, manuales y reportes que documentan 
              los hallazgos de mi investigación en sustentabilidad urbana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild>
                <a href="#publicaciones">
                  Explorar publicaciones
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/investigacion">
                  Ver líneas de investigación
                  <BookOpen className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                Buscar Publicaciones
              </h2>
              <p className="text-slate-600">
                Encuentra publicaciones específicas por título, contenido o palabras clave.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Buscar por título, contenido..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Tipo de publicación" />
                </SelectTrigger>
                <SelectContent>
                  {publicationTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger>
                  <SelectValue placeholder="Año" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section id="publicaciones" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              {filteredPublications.length} Publicaciones Encontradas
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              {searchTerm || selectedType !== '' || selectedYear !== '' 
                ? 'Resultados de tu búsqueda' 
                : 'Todas las publicaciones disponibles'}
            </p>
          </div>
          
          <div className="space-y-6">
            {filteredPublications.map((pub) => (
              <Card key={pub.id} className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">{pub.type}</Badge>
                          <Badge className={getImpactColor(pub.impact)}>
                            {pub.impact}
                          </Badge>
                          {pub.openAccess && (
                            <Badge className="bg-green-100 text-green-800">
                              Acceso Abierto
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{pub.citations} citas</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">
                        {pub.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{pub.authors.join(", ")}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{pub.year}</span>
                        </div>
                        {pub.journal && (
                          <div className="flex items-center gap-1">
                            <BookOpen className="h-4 w-4" />
                            <span>{pub.journal}</span>
                          </div>
                        )}
                      </div>
                      
                      {pub.volume && pub.issue && pub.pages && (
                        <div className="text-sm text-slate-500 mb-3">
                          Vol. {pub.volume}, No. {pub.issue}, pp. {pub.pages}
                        </div>
                      )}
                      
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {pub.abstract}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {pub.keywords.map((keyword, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="text-sm text-slate-500">
                        DOI: {pub.doi}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3 lg:w-48">
                      <Button className="w-full" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Descargar PDF
                      </Button>
                      <Button variant="outline" className="w-full" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver en revista
                      </Button>
                      <Button variant="outline" className="w-full" size="sm">
                        <Mail className="mr-2 h-4 w-4" />
                        Solicitar copia
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                No se encontraron publicaciones
              </h3>
              <p className="text-slate-600 mb-4">
                Intenta ajustar los filtros de búsqueda o contacta para más información.
              </p>
              <Button variant="outline" onClick={() => {
                setSearchTerm('');
                setSelectedType('');
                setSelectedYear('');
              }}>
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Estadísticas de Publicaciones
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Resumen del impacto y alcance de nuestras publicaciones científicas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  {publications.length}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Total de Publicaciones</h3>
                <p className="text-slate-600 text-sm">Artículos, libros y reportes</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  {publications.reduce((sum, pub) => sum + pub.citations, 0)}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Total de Citas</h3>
                <p className="text-slate-600 text-sm">Impacto en la comunidad científica</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  {publications.filter(pub => pub.openAccess).length}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Acceso Abierto</h3>
                <p className="text-slate-600 text-sm">Publicaciones disponibles gratuitamente</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  {publications.filter(pub => pub.impact === "Q1").length}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Revistas Q1</h3>
                <p className="text-slate-600 text-sm">Publicaciones en revistas de alto impacto</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">
            ¿Te interesa colaborar en una publicación?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Estoy abierta a colaboraciones académicas, co-autoría y proyectos 
            de investigación conjuntos en sustentabilidad urbana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contacto">
                <Mail className="mr-2 h-4 w-4" />
                Proponer colaboración
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/investigacion">
                <BookOpen className="mr-2 h-4 w-4" />
                Ver líneas de investigación
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}


