"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Leaf, 
  BookOpen, 
  TrendingUp, 
  FileText, 
  GraduationCap,
  ArrowRight,
  Download,
  ExternalLink,
  Target,
  Lightbulb,
  Globe,
  Zap,
  BarChart3,
  Building2,
  Users,
  MapPin,
  Calendar,
  Mail
} from 'lucide-react';
import Link from 'next/link';

export default function InvestigacionPage() {
  const researchAreas = [
    {
      title: "Sustentabilidad Urbana",
      description: "Análisis de la capacidad de las ciudades para mantener su funcionamiento a largo plazo sin agotar recursos naturales.",
      icon: Leaf,
      color: "bg-emerald-100 text-emerald-800",
      projects: ["Indicadores de sustentabilidad", "Evaluación de políticas públicas", "Planificación urbana sostenible"]
    },
    {
      title: "Termodinámica Urbana",
      description: "Estudio de los flujos de energía y materia en sistemas urbanos, aplicando principios termodinámicos al análisis urbano.",
      icon: Zap,
      color: "bg-blue-100 text-blue-800",
      projects: ["Análisis de flujos energéticos", "Eficiencia termodinámica urbana", "Modelado de sistemas urbanos"]
    },
    {
      title: "Metabolismo Social y Urbano",
      description: "Investigación sobre cómo las ciudades consumen, transforman y excretan recursos materiales y energéticos.",
      icon: Building2,
      color: "bg-purple-100 text-purple-800",
      projects: ["Flujos de materiales urbanos", "Consumo energético residencial", "Gestión de residuos urbanos"]
    },
    {
      title: "Complejidad de Sistemas Socio-ambientales",
      description: "Análisis de la interacción compleja entre sistemas sociales y ambientales en contextos urbanos.",
      icon: Globe,
      color: "bg-orange-100 text-orange-800",
      projects: ["Modelado de sistemas complejos", "Análisis de resiliencia urbana", "Adaptación al cambio climático"]
    }
  ];

  const currentProjects = [
    {
      title: "Análisis Termodinámico de la Zona Metropolitana del Valle de México",
      description: "Evaluación de la eficiencia energética y flujos de materia en la ZMVM",
      status: "En curso",
      duration: "2023-2026",
      collaborators: ["UNAM", "CONACYT"],
      budget: "$2.5M MXN"
    },
    {
      title: "Indicadores de Sustentabilidad para Ciudades Mexicanas",
      description: "Desarrollo de métricas para evaluar la sustentabilidad urbana",
      status: "En curso",
      duration: "2024-2025",
      collaborators: ["SEDATU", "Gobierno de la CDMX"],
      budget: "$1.8M MXN"
    },
    {
      title: "Metabolismo Urbano y Cambio Climático",
      description: "Análisis de la relación entre patrones de consumo urbano y emisiones de GEI",
      status: "Propuesta",
      duration: "2025-2028",
      collaborators: ["IPCC", "Universidades europeas"],
      budget: "$5.0M MXN"
    }
  ];

  const publications = [
    {
      title: "Termodinámica Urbana: Un Enfoque para la Planificación Sostenible",
      journal: "Journal of Urban Sustainability",
      year: 2023,
      doi: "10.1000/urban-sustainability-2023",
      type: "Artículo de investigación"
    },
    {
      title: "Metabolismo Social en Ciudades Mexicanas: Caso de Estudio CDMX",
      journal: "Environmental Research Letters",
      year: 2022,
      doi: "10.1000/env-research-2022",
      type: "Artículo de investigación"
    },
    {
      title: "Sustentabilidad Urbana: Teoría y Práctica",
      journal: "Editorial UNAM",
      year: 2021,
      doi: "ISBN: 978-607-30-1234-5",
      type: "Libro"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-800 via-teal-700 to-emerald-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Líneas de Investigación
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Mi investigación se centra en la <strong>sustentabilidad urbana</strong> y la 
              <strong>termodinámica urbana</strong>, aplicando principios científicos para 
              entender y mejorar el metabolismo de las ciudades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="/publicaciones">
                  Ver publicaciones
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contacto">
                  Colaborar
                  <Users className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Áreas de Investigación
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Mi trabajo abarca cuatro líneas principales que se complementan para 
              entender la complejidad de los sistemas urbanos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl ${area.color}`}>
                      <area.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                  </div>
                  <CardDescription className="text-slate-600 text-base">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-slate-900">Proyectos relacionados:</h4>
                    <ul className="space-y-1">
                      {area.projects.map((project, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Proyectos en Curso
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Investigaciones activas que contribuyen al conocimiento de la sustentabilidad urbana.
            </p>
          </div>
          
          <div className="space-y-6">
            {currentProjects.map((project, index) => (
              <Card key={index} className="border border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant={project.status === "En curso" ? "default" : "secondary"}>
                          {project.status}
                        </Badge>
                        <span className="text-sm text-slate-500">{project.duration}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {project.collaborators.join(", ")}
                        </div>
                        <div className="flex items-center gap-1">
                          <BarChart3 className="h-4 w-4" />
                          {project.budget}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 mr-2" />
                        Detalles
                      </Button>
                      <Button size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Colaborar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Publicaciones Recientes
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Artículos, libros y reportes que documentan los hallazgos de mi investigación.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <Card key={index} className="border border-slate-200 shadow-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{pub.type}</Badge>
                    <span className="text-sm text-slate-500">{pub.year}</span>
                  </div>
                  <CardTitle className="text-lg">{pub.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {pub.journal}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      PDF
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      DOI
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link href="/publicaciones">
                Ver todas las publicaciones
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">
            ¿Te interesa colaborar?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Estoy abierta a colaboraciones con investigadores, instituciones y organizaciones 
            que compartan la visión de ciudades más sustentables.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contacto">
                Contactar para colaboración
                <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/cursos">
                Ver cursos disponibles
                <GraduationCap className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}


