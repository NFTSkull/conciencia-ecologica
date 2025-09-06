"use client";

import { SectionBanner } from '@/components/sections/section-banner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Users, 
  Target, 
  BarChart3, 
  Clock, 
  ExternalLink,
  Leaf,
  Building2,
  Zap,
  Globe
} from 'lucide-react';

export default function InvestigacionPage() {
  const researchAreas = [
    {
      title: 'Metabolismo Urbano',
      description: 'Análisis termodinámico de flujos energéticos y materiales en sistemas urbanos complejos',
      icon: Building2,
      color: 'emerald'
    },
    {
      title: 'Sistemas Complejos',
      description: 'Modelado de interacciones socio-ambientales para la resiliencia urbana',
      icon: Zap,
      color: 'blue'
    },
    {
      title: 'Sustentabilidad',
      description: 'Indicadores y métricas para ciudades del futuro',
      icon: Leaf,
      color: 'teal'
    },
    {
      title: 'Conflictos Socioambientales',
      description: 'Análisis de tensiones entre desarrollo urbano y conservación ambiental',
      icon: Target,
      color: 'orange'
    }
  ];

  return (
    <div>
      <SectionBanner
        title="Investigación"
        subtitle="Explorando la frontera del conocimiento en sustentabilidad urbana y metabolismo social"
        theme="theme-investigacion"
      />

      {/* Líneas de Investigación */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Líneas de Investigación
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explorando la frontera del conocimiento en sustentabilidad urbana y metabolismo social
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-${area.color}-100 mx-auto mb-4`}>
                    <area.icon className={`h-8 w-8 text-${area.color}-600`} />
                  </div>
                  <CardTitle className="text-xl text-slate-900">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Encuesta de Investigación */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Participa en nuestra Investigación
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Tu participación es fundamental para entender mejor el metabolismo urbano del Estado de México.
              Esta encuesta nos ayuda a analizar patrones de consumo y sustentabilidad en nuestra región.
            </p>
          </div>
          <Card className="max-w-4xl mx-auto border-0 shadow-xl bg-white">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 mr-4">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Cuestionario sobre Consumo Diario
                    </h3>
                    <p className="text-slate-600">
                      Estado de México - Metabolismo Urbano
                    </p>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-xl p-6 mb-6">
                  <p className="text-slate-700 leading-relaxed">
                    Este cuestionario ayuda a entender el perfil de consumo de personas del Estado de México,
                    para un estudio de metabolismo urbano de dicha entidad. Te pedimos que tus respuestas sean
                    verídicas y no pediremos nombres.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 mx-auto mb-2">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-1">Confidencial</h4>
                    <p className="text-sm text-slate-600">No se solicitan nombres</p>
                  </div>
                  <div className="text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 mx-auto mb-2">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-1">Rápido</h4>
                    <p className="text-sm text-slate-600">Solo 10-15 minutos</p>
                  </div>
                  <div className="text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 mx-auto mb-2">
                      <Target className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-1">Importante</h4>
                    <p className="text-sm text-slate-600">Para investigación científica</p>
                  </div>
                </div>
                <Button size="lg" asChild className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                  <a href="https://forms.gle/q8YbCrpZV5EtV9PC6" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Participar en la Encuesta
                  </a>
                </Button>
                <p className="text-sm text-slate-500 mt-4">
                  Al hacer clic, serás dirigido a un formulario seguro de Google Forms
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Redes Sociales */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Síguenos en Redes Sociales
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Mantente al día con nuestras investigaciones, publicaciones y actividades de divulgación
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 mx-auto mb-4">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">LinkedIn</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Artículos profesionales y networking académico
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Seguir
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">ResearchGate</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Publicaciones científicas y colaboraciones
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Seguir
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 mx-auto mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Academia.edu</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Red académica y divulgación científica
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Seguir
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Te interesa colaborar en investigación?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Estoy disponible para colaboraciones académicas, consultorías especializadas y proyectos de investigación que contribuyan a la sustentabilidad urbana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="/contacto">
                Contactar para Colaboración
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600" asChild>
              <a href="/donar">
                Apoyar el Proyecto
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}