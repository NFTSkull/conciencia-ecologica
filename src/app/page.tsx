import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Leaf, 
  BookOpen, 
  Users, 
  FileText, 
  Heart,
  ArrowRight,
  Mail,
  ExternalLink,
  Award,
  Target,
  Microscope,
  Brain,
  LeafyGreen,
  Sparkles,
  BarChart3,
  Database,
  Network,
  Atom
} from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
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
    { number: "8+", label: "Ciudades Impactadas", icon: Network },
    { number: "12+", label: "Proyectos Completados", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Scientific Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-emerald-200 rounded-full px-6 py-3 mb-8 shadow-lg">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-emerald-700">Investigación Científica Avanzada</span>
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            </div>

            {/* Main Title */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-2xl mr-6">
                  <Leaf className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="h-3 w-3 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-emerald-800 to-teal-700 bg-clip-text text-transparent">
                IEAPC
              </h1>
            </div>
            
            {/* Subtitle */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-700 max-w-4xl mx-auto leading-relaxed">
              <span className="text-emerald-700 font-bold">Instituto de Estudios Ambientales y Pensamiento Crítico</span> para un futuro urbano sostenible
            </h2>
            
            {/* Description */}
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Somos un instituto dedicado al estudio de la <strong className="text-emerald-700">sustentabilidad</strong> y la <strong className="text-teal-700">termodinámica urbana</strong> para entender 
              el metabolismo social y proponer estrategias públicas y ciudadanas que mejoren la vida en las ciudades.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                <span className="flex items-center">
                  Ver investigación
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>
              
              <Button size="lg" variant="outline" className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-black hover:text-black">
                <span className="flex items-center">
                  Explorar cursos
                  <BookOpen className="ml-2 h-5 w-5" />
                </span>
              </Button>
              
              <Button size="lg" variant="outline" className="border-2 border-teal-600 text-teal-700 hover:bg-teal-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-black hover:text-black">
                <span className="flex items-center">
                  <Heart className="mr-2 h-5 w-5" />
                  Donar
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
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
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 p-1 transform hover:scale-105 transition-all duration-500 cursor-pointer"
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

      {/* Profile Section */}
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
              
              {/* Stats */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-emerald-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <BarChart3 className="h-7 w-7 text-emerald-600" />
                  Impacto Científico
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl">
                      <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                <span className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Contactar para Colaboración
                </span>
              </Button>
              
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300">
                <span className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
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
