"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Users, 
  Clock, 
  Play,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Heart,
  Lightbulb,
  GraduationCap,
  FileText,
  Globe
} from 'lucide-react';
import Link from 'next/link';

export default function TallerLecturaPage() {
  return (
    <div data-theme="theme-cursos-ado">
      {/* Banner Section */}
      <section className="bg-gradient-to-br from-lime-600 via-emerald-500 to-lime-500 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mr-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Taller de Lectura para Jóvenes
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-90">
              Aumenta tu comprensión lectora, expresión oral y gusto por la lectura
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              En este taller buscamos que los jóvenes fortalezcan su comprensión lectora, 
              su capacidad de análisis y su expresión oral a través de lecturas que despertarán su interés y creatividad.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Información del Curso */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Columna Principal */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="outline" className="bg-lime-100 text-lime-800 border-lime-200">
                    <Play className="h-3 w-3 mr-1" />
                    En vivo
                  </Badge>
                  <Badge variant="outline" className="bg-emerald-100 text-emerald-800 border-emerald-200">
                    <Clock className="h-3 w-3 mr-1" />
                    4 meses
                  </Badge>
                  <Badge variant="outline" className="bg-lime-100 text-lime-800 border-lime-200">
                    <Users className="h-3 w-3 mr-1" />
                    Adolescentes
                  </Badge>
                </div>
                <CardTitle className="text-3xl text-slate-900 mb-4">
                  Taller de Lectura para Jóvenes
                </CardTitle>
                <CardDescription className="text-lg text-slate-600 leading-relaxed">
                  Un taller diseñado específicamente para jóvenes de entre 12 y 18 años que quieren 
                  mejorar sus habilidades de lectura, desarrollar su pensamiento crítico y expresarse 
                  mejor oralmente. A través de textos divertidos y dinámicos, aprenderás técnicas 
                  que te acompañarán toda la vida.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Objetivos */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5 text-lime-600" />
                      Objetivos del taller
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        'Mejorar la comprensión lectora',
                        'Desarrollar la expresión oral',
                        'Fomentar el gusto por la lectura',
                        'Analizar textos de manera crítica',
                        'Comunicar ideas de forma efectiva'
                      ].map((objetivo, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-lime-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{objetivo}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metodología */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-lime-600" />
                      Metodología
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        'Sesiones interactivas en vivo',
                        'Lecturas guiadas y comentadas',
                        'Actividades de comprensión',
                        'Prácticas de expresión oral',
                        'Seguimiento personalizado del progreso'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-lime-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Temario Detallado */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 mb-4 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-lime-600" />
                  Temario del taller
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      modulo: 'Módulo 1: Fundamentos de la Lectura',
                      temas: [
                        'Técnicas de lectura rápida',
                        'Comprensión de textos narrativos',
                        'Identificación de ideas principales',
                        'Análisis de personajes y tramas'
                      ]
                    },
                    {
                      modulo: 'Módulo 2: Lectura Crítica',
                      temas: [
                        'Evaluación de fuentes',
                        'Detección de sesgos',
                        'Análisis de argumentos',
                        'Lectura entre líneas'
                      ]
                    },
                    {
                      modulo: 'Módulo 3: Expresión Oral',
                      temas: [
                        'Técnicas de presentación',
                        'Debate y discusión',
                        'Comunicación efectiva',
                        'Expresión de opiniones'
                      ]
                    },
                    {
                      modulo: 'Módulo 4: Proyecto Final',
                      temas: [
                        'Selección de texto para análisis',
                        'Presentación oral del análisis',
                        'Reflexión sobre el aprendizaje',
                        'Plan de mejora continua'
                      ]
                    }
                  ].map((modulo, index) => (
                    <div key={index} className="border border-lime-200 rounded-lg p-4 bg-lime-50">
                      <h4 className="font-semibold text-slate-900 mb-3 text-lg">{modulo.modulo}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {modulo.temas.map((tema, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-lime-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-700 text-sm">{tema}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Información del Curso */}
            <Card className="mb-6 sticky top-6">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">Información del curso</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-lime-600" />
                  <div>
                    <p className="font-medium text-slate-900">Duración</p>
                    <p className="text-sm text-slate-600">4 meses</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Play className="h-5 w-5 text-lime-600" />
                  <div>
                    <p className="font-medium text-slate-900">Modalidad</p>
                    <p className="text-sm text-slate-600">En vivo</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-lime-600" />
                  <div>
                    <p className="font-medium text-slate-900">Audiencia</p>
                    <p className="text-sm text-slate-600">12 a 18 años</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-lime-600" />
                  <div>
                    <p className="font-medium text-slate-900">Cupo</p>
                    <p className="text-sm text-slate-600">Limitado</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <div className="text-2xl font-bold text-lime-700 mb-2">$1,000 MXN</div>
                  <p className="text-sm text-slate-600 mb-4">por mes</p>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg">
                    Inscribirme ahora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Materiales Incluidos */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-lime-600" />
                  Materiales incluidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    'Selección de textos literarios',
                    'Guía de técnicas de lectura',
                    'Material para ejercicios prácticos',
                    'Certificado de participación',
                    'Recursos digitales complementarios'
                  ].map((material, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-lime-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{material}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tabs con Información Detallada */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900">Información detallada</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="perfil" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="perfil">Perfil de ingreso</TabsTrigger>
                <TabsTrigger value="requisitos">Requisitos</TabsTrigger>
                <TabsTrigger value="beneficios">Beneficios</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>
              
              <TabsContent value="perfil" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">¿Para quién es este taller?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Jóvenes de 12 a 18 años',
                      'Interés en mejorar sus habilidades de lectura',
                      'Disposición para participar en actividades grupales',
                      'Compromiso con el aprendizaje continuo'
                    ].map((perfil, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-lime-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{perfil}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="requisitos" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">¿Qué necesito para participar?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Conocimientos básicos de español',
                      'Acceso a internet para sesiones en vivo',
                      'Dispositivo para participar en actividades',
                      'Tiempo disponible para lectura y tareas'
                    ].map((requisito, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-lime-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{requisito}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="beneficios" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">¿Qué obtendrás con este taller?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Habilidades de lectura que duran toda la vida',
                      'Mejor rendimiento académico',
                      'Confianza para expresarte oralmente',
                      'Pensamiento crítico desarrollado',
                      'Gusto por la lectura recreativa',
                      'Certificado de participación'
                    ].map((beneficio, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Heart className="h-4 w-4 text-lime-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{beneficio}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="faq" className="mt-6">
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-slate-900">Preguntas frecuentes</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">¿Cuándo inician las clases?</h4>
                      <p className="text-slate-600">Las clases inician el 15 de febrero de 2024. Las sesiones son semanales.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">¿Qué pasa si falto a una clase?</h4>
                      <p className="text-slate-600">Todas las sesiones se graban y tendrás acceso a ellas para repasar el contenido.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">¿Necesito comprar libros?</h4>
                      <p className="text-slate-600">No, todos los materiales de lectura están incluidos en el curso.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">¿Cómo se evalúa mi progreso?</h4>
                      <p className="text-slate-600">A través de actividades prácticas, participación en clase y un proyecto final.</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <section className="text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            ¿Listo para mejorar tus habilidades de lectura?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Únete a nuestro taller y descubre el poder de la lectura crítica y la expresión oral. 
            Un espacio diseñado especialmente para jóvenes como tú.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Inscribirme ahora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contacto">
                Solicitar información adicional
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

