"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Leaf, 
  BookOpen, 
  Users, 
  TrendingUp, 
  FileText, 
  GraduationCap,
  Heart,
  ArrowRight,
  Calendar,
  MapPin,
  Mail,
  ExternalLink,
  Download,
  Award,
  Target,
  Lightbulb,
  Globe,
  Zap,
  Building2,
  Microscope,
  FlaskConical,
  Brain,
  LeafyGreen,
  Sparkles,
  BarChart3,
  Database,
  Network,
  Atom
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const researchHighlights = [
    {
      icon: Microscope,
      title: "Metabolismo Urbano",
      description: "Análisis termodinámico de flujos energéticos y materiales en sistemas urbanos complejos",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: Brain,
      title: "Sistemas Complejos",
      description: "Modelado de interacciones socio-ambientales para la resiliencia urbana",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: LeafyGreen,
      title: "Sustentabilidad",
      description: "Indicadores y métricas para ciudades del futuro",
      color: "from-green-500 to-emerald-600"
    }
  ];

  const stats = [
    { number: "15+", label: "Años de Investigación", icon: Microscope },
    { number: "25+", label: "Publicaciones Científicas", icon: FileText },
    { number: "8+", label: "Ciudades Impactadas", icon: Globe },
    { number: "12+", label: "Proyectos Completados", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
      {/* Hero Section - Scientific & Ecological */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Scientific Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-emerald-200 rounded-full px-6 py-3 mb-8 shadow-lg">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-emerald-700">Investigación Científica Avanzada</span>
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            </div>

            {/* Main Title with Ecological Elements */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-2xl mr-6 transform hover:scale-110 transition-transform duration-300">
                  <Leaf className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="h-3 w-3 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-emerald-800 to-teal-700 bg-clip-text text-transparent">
                Conciencia Ecológica
              </h1>
            </div>
            
            {/* Subtitle with Scientific Precision */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-700 max-w-4xl mx-auto leading-relaxed">
              <span className="text-emerald-700 font-bold">Investigación de vanguardia</span> para un futuro urbano sostenible
            </h2>
            
            {/* Scientific Description */}
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Estudio la <strong className="text-emerald-700">sustentabilidad</strong> y la <strong className="text-teal-700">termodinámica urbana</strong> para entender 
              el metabolismo social y proponer estrategias públicas y ciudadanas que mejoren la vida en las ciudades.
            </p>
            
            {/* Action Buttons with Hover Effects */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  Ver investigación
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button size="lg" variant="outline" className="group border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-black hover:text-black">
                <span className="flex items-center">
                  Explorar cursos
                  <GraduationCap className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button size="lg" variant="outline" className="group border-2 border-teal-600 text-teal-700 hover:bg-teal-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-black hover:text-black">
                <span className="flex items-center">
                  <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Donar
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Research Highlights - Interactive Cards */}
      <section className="py-24 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Líneas de Investigación
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explorando la frontera del conocimiento en sustentabilidad urbana y metabolismo social
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {researchHighlights.map((highlight, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${highlight.color} p-1 transform hover:scale-105 transition-all duration-500 cursor-pointer`}
              >
                <div className="bg-white rounded-3xl p-8 h-full transform group-hover:translate-y-[-8px] transition-transform duration-500">
                  <div className="text-center">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${highlight.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <highlight.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{highlight.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Profile Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-full px-6 py-3 mb-6 shadow-lg">
                <Atom className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700">Perfil Científico</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Dra. Dainiz Noray Montoya García
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Doctora en Ciencias Ambientales especializada en termodinámica urbana y metabolismo social
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Profile Information */}
              <div className="space-y-8">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-emerald-100">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Award className="h-7 w-7 text-emerald-600" />
                    Formación Académica
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-slate-900">Doctorado en Ciencias Ambientales</p>
                        <p className="text-slate-600 text-sm">Especialización en Termodinámica Urbana</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-slate-900">Investigación Avanzada</p>
                        <p className="text-slate-600 text-sm">Metabolismo Urbano y Sistemas Complejos</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-slate-900">Consultoría Especializada</p>
                        <p className="text-slate-600 text-sm">Sustentabilidad Urbana y Planificación</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Thesis Information */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-emerald-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <BookOpen className="h-7 w-7 text-emerald-600" />
                  Tesis Doctoral
                </h3>
                <div className="space-y-4">
                  <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border-l-4 border-emerald-500">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="px-3 py-1 bg-emerald-600 text-white text-sm font-semibold rounded-full">
                        2023
                      </div>
                      <span className="text-sm text-emerald-600 font-medium">Universidad Autónoma del Estado de México</span>
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      El metabolismo urbano de la Zona Metropolitana de Toluca, México
                    </h4>
                    <a 
                      href="http://ri.uaemex.mx/handle/20.500.11799/137771" 
                      className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Ver tesis completa
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Publications - Timeline Style */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-full px-6 py-3 mb-6">
                <FileText className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700">Producción Científica</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Artículos Científicos
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Publicaciones en revistas indexadas y arbitradas de alto impacto
              </p>
            </div>
            
            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-200 to-teal-200"></div>
              
              {/* 2024 Publications */}
              <div className="relative mb-16">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-emerald-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                    2024
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="ml-8">
                      <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 bg-emerald-100 rounded-xl">
                              <BarChart3 className="h-6 w-6 text-emerald-600" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-slate-900 mb-2">
                                Impacto del metabolismo socio-urbano en el Estado de México
                              </h3>
                              <p className="text-slate-600 text-sm mb-3">
                                <em>Letras Verdes. Revista Latinoamericana De Estudios Socioambientales</em>
                              </p>
                              <a 
                                href="https://doi.org/10.17141/letrasverdes.35.2024.6087" 
                                className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors duration-200"
                              >
                                Ver publicación →
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2023 Publications */}
              <div className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-teal-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                    2023
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Metabolismo urbano de los municipios de Toluca y Metepec",
                      journal: "Quivera Revista De Estudios Territoriales",
                      doi: "10.36677/qret.v25i2.19063",
                      url: "https://quivera.uaemex.mx/article/view/19063",
                      icon: Building2
                    },
                    {
                      title: "Metabolismo energético da Zona Metropolitana de Toluca",
                      journal: "REVIBEC - Revista Iberoamericana de Economía Ecológica",
                      doi: "https://redibec.org/ojs/index.php/revibec/article/view/vol35-2-7",
                      url: "https://redibec.org/ojs/index.php/revibec/article/view/vol35-2-7",
                      icon: Zap
                    },
                    {
                      title: "Índices metabólicos como propuesta para el estudio del metabolismo urbano",
                      journal: "Entrópico Arquitectura Y Urbanismo",
                      doi: "10.33413/eau.2023.230",
                      url: "https://doi.org/10.33413/eau.2023.230",
                      icon: Database
                    }
                  ].map((pub, index) => (
                    <div key={index} className="relative">
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-600 rounded-full border-4 border-white shadow-lg"></div>
                      <div className="ml-8">
                        <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="p-3 bg-teal-100 rounded-xl">
                                <pub.icon className="h-6 w-6 text-teal-600" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-slate-900 mb-2 text-sm">
                                  {pub.title}
                                </h3>
                                <p className="text-slate-600 text-xs mb-3">
                                  <em>{pub.journal}</em>
                                </p>
                                <a 
                                  href={pub.url} 
                                  className="text-teal-600 hover:text-teal-700 text-xs font-medium transition-colors duration-200"
                                >
                                  Ver publicación →
                                </a>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Chapters Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-full px-6 py-3 mb-6">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Contribuciones Editoriales</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Capítulos de Libros y Antologías
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Contribuciones en compilaciones científicas y libros académicos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Metabolismo urbano como propuesta alternativa a la problemática ecológica de las ciudades",
                  book: "La esfera de la vida: De la epistemología ambiental a la inter y transdiciplinariedad",
                  publisher: "UAEMEX, México",
                  url: "http://hdl.handle.net/20.500.11799/139900",
                  color: "from-emerald-500 to-teal-600"
                },
                {
                  title: "Pensamiento e instrumentalización de la complejidad en el mundo VUCA",
                  book: "La Gestión Organizacional para la sustentabilidad bajo el paradigma de la complejidad",
                  publisher: "Universidad Libre, Bogotá",
                  color: "from-blue-500 to-indigo-600"
                }
              ].map((chapter, index) => (
                <Card key={index} className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${chapter.color}`}></div>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                      {chapter.title}
                    </h3>
                    <div className="space-y-3 text-slate-600">
                      <p><strong>Libro:</strong> {chapter.book}</p>
                      <p><strong>Editorial:</strong> {chapter.publisher}</p>
                      {chapter.url && (
                        <a 
                          href={chapter.url} 
                          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Ver capítulo completo
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Activities Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-purple-50 border border-purple-200 rounded-full px-6 py-3 mb-6">
                <Network className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">Actividades Profesionales</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Divulgación y Consultoría
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Participación activa en la comunidad científica y asesoría especializada
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Divulgación */}
              <div className="group">
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                  <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-emerald-100 to-teal-100 mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Users className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Actividades de Divulgación</h3>
                    <p className="text-slate-600 mb-6">
                      Conferencias, seminarios y colaboración con medios para la difusión de la ciencia ambiental
                    </p>
                    <div className="space-y-2 text-sm text-slate-500">
                      <p>• Eventos académicos nacionales e internacionales</p>
                      <p>• Colaboración con medios de comunicación</p>
                      <p>• Plataformas digitales de divulgación</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Consultoría */}
              <div className="group">
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-100 to-indigo-100 mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Target className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Trabajos de Consultoría</h3>
                    <p className="text-slate-600 mb-6">
                      Asesoría especializada en sustentabilidad urbana y planificación territorial
                    </p>
                    <div className="space-y-2 text-sm text-slate-500">
                      <p>• Gobiernos municipales</p>
                      <p>• Organizaciones no gubernamentales</p>
                      <p>• Sector privado</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Estadísticas */}
              <div className="group">
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                  <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-600"></div>
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 mb-6 group-hover:scale-110 transition-transform duration-500">
                      <BarChart3 className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Impacto Científico</h3>
                    <p className="text-slate-600 mb-6">
                      Métricas que reflejan la contribución a la comunidad científica
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl font-bold text-emerald-600">{stat.number}</div>
                          <div className="text-xs text-slate-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section - Enhanced */}
      <section id="blog" className="py-24 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-full px-6 py-3 mb-6">
                <Lightbulb className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700">Reflexiones Críticas</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Blog - Conciencia Humana
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Análisis profundo sobre la historia, la humanidad y la justicia social
              </p>
            </div>
            
            <Card className="border-0 shadow-2xl overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500"></div>
              <CardContent className="p-0">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full">
                      Análisis Crítico
                    </div>
                    <div className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full">
                      Historia Contemporánea
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-slate-900 mb-8 leading-tight">
                    La Lección de la Segunda Guerra Mundial y el Genocidio Palestino
                  </h3>
                  
                  <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6 text-lg">
                    <p className="text-xl text-slate-600 font-medium border-l-4 border-emerald-500 pl-6">
                      La lección de la Segunda Guerra Mundial fue principalmente, el respeto a la condición humana no importando su religión, historia, cultura. Pero parece que esto no se aprendió, ni siquiera se meditó.
                    </p>
                    
                    <p>
                      En este punto histórico estamos presenciando el <strong className="text-red-600">Genocidio del pueblo palestino</strong>, pero lo más curioso es que es ejecutado por haber sido las víctimas de los nazis. Dichas víctimas y sus descendientes, los judíos, propagan hoy en día a través del sionismo una ideología y una propaganda más peligrosa que el propio nazismo.
                    </p>
                    
                    <p>
                      El sionismo se sustenta en la <strong className="text-orange-600">supremacía racial a través de la religión</strong>, pues sostiene que los judíos son el pueblo elegido de Dios por tanto, tienen el derecho de ocupar Palestina, "el lugar sagrado prometido por Dios"; promueve una enorme victimización, sustentada en discursos desquiciantes que tratan de tergiversar la materialidad de los hechos y cualquier sionista reacciona de manera muy violenta llamando "antisemita" a quien los cuestione; gastan millones de dólares alrededor del mundo para financiar gobiernos, medios de comunicación para sostener su discurso.
                    </p>
                    
                    <p>
                      Es por ello que es enloquecedor ver al gobierno alemán, francés, inglés y norteamericano principalmente apoyando de manera delirante a Israel; mientras los ciudadanos de a pie, vemos el sufrimiento indescriptible de los palestinos.
                    </p>
                    
                    <p>
                      Entre las propagandas más sonadas de los sionistas es que Hamas es un grupo terrorista, pero si lo pensamos un poco, ¿no será acaso un <strong className="text-emerald-600">movimiento de resistencia, un movimiento de liberación</strong>?, ¿acaso es no están en su derecho de defenderse? Ha cometido actos violentos, si, eso es innegable, pero pareciera que los palestinos no tienen derecho a decir "basta".
                    </p>
                    
                    <p>
                      Se les responsabiliza de su tragedia como si ellos lo hubieran provocado cuando se les castiga de manera brutal, para no cuestionar el actuar de los sionistas. Y se ha tergiversado tanto este tema en el sentido de "argumentar" que es un conflicto de origen bíblico, cuando el sionismo tiene poco más de 100 años de existencia y el estado de Israel se formó por una votación cuestionada en la ONU en 1947; y se dice "que es sin fin" por la cuestión religiosa cuando en realidad si se puede terminar, en el momento en que Israel deje de ser financiado y patrocinado por los países del norte global.
                    </p>
                    
                    <p>
                      ¿Cómo resistir ante la propaganda sionista? Para mí, en primer lugar, es comprender la historia, empaparse de la verdad de conflicto para también entender las justificaciones absurdas de los sionistas. En segundo lugar, el entendimiento del discurso sionista, observar detenidamente su odio, sus mensajes virulentos y su victimización enfermiza; tercero, manifestar el rechazo al genocidio palestino; cuarto, dejar de apoyar o seguir a actores, cantantantes y famosos que apoyan a Israel; y en definitiva, el boicot a productos que los patrocinan.
                    </p>
                    
                    <p className="text-xl text-slate-600 font-medium border-l-4 border-teal-500 pl-6">
                      Estamos en un momento clave de la historia y considero que la movilización social es crucial para presionar a los gobernantes a cambiar sus políticas con respecto a los sionistas.
                    </p>
                  </div>
                  
                  <div className="border-t border-slate-200 pt-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="text-sm text-slate-500">
                          <div className="font-medium text-slate-700">Publicado el 15 de Diciembre, 2024</div>
                          <div className="text-xs">Por Dra. Dainiz Noray Montoya García</div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <Button variant="outline" size="lg" className="group border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-6 py-3 font-semibold transition-all duration-300 text-black hover:text-black">
                          <span className="flex items-center gap-2">
                            <FileText className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                            Leer más artículos
                          </span>
                        </Button>
                        <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                          <span className="flex items-center gap-2">
                            <Heart className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                            Suscribirse
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <Sparkles className="h-5 w-5 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-200">Colaboración Científica</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Te interesa mi trabajo?
            </h2>
            <p className="text-xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Estoy disponible para colaboraciones académicas, consultorías especializadas y proyectos de investigación 
              que contribuyan a la sustentabilidad urbana y la conciencia ecológica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                <span className="flex items-center gap-2">
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Contactar para Colaboración
                </span>
              </Button>
              
              <Button size="lg" variant="outline" className="group border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300">
                <span className="flex items-center gap-2">
                  <Heart className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Apoyar el Proyecto
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
