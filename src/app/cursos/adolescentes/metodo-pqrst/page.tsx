"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
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
  UserCheck,
  BookOpen,
  Timer
} from 'lucide-react';
import Link from 'next/link';

export default function MetodoPQRSTPage() {
  return (
    <div data-theme="theme-cursos-ado">
      {/* Banner Section */}
      <section className="bg-gradient-to-br from-lime-600 via-emerald-500 to-lime-500 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mr-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Método PQRST
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-90">
              Comprensión y retención efectiva
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Aprende una técnica probada para estudiar mejor, planificar tu tiempo y retener información. 
              El método PQRST es una herramienta poderosa que transformará tu forma de aprender.
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
                    10 sesiones
                  </Badge>
                  <Badge variant="outline" className="bg-lime-100 text-lime-800 border-lime-200">
                    <Users className="h-3 w-3 mr-1" />
                    Adolescentes
                  </Badge>
                </div>
                <CardTitle className="text-3xl text-slate-900 mb-4">
                  Método PQRST: Comprensión y retención efectiva
                </CardTitle>
                <CardDescription className="text-lg text-slate-600 leading-relaxed">
                  El método PQRST es una técnica de estudio que mejora la comprensión y retención a largo plazo, 
                  optimiza el tiempo y ofrece estructura clara para el aprendizaje. Este curso incluye 10 sesiones 
                  prácticas y una charla especializada con psicólogos para padres.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Objetivos */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5 text-lime-600" />
                      Objetivos del curso
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        'Dominar el método PQRST completo',
                        'Mejorar la retención de información',
                        'Optimizar el tiempo de estudio',
                        'Aplicar técnicas en distintas materias',
                        'Desarrollar hábitos de estudio efectivos'
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
                        'Sesiones prácticas en vivo',
                        'Demostración de técnicas',
                        'Ejercicios de aplicación',
                        'Seguimiento del progreso',
                        'Charla especializada con psicólogos'
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
                  Temario del curso
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      modulo: 'Módulo 1: Introducción al PQRST',
                      temas: [
                        '¿Qué es el método PQRST?',
                        'Fundamentos científicos',
                        'Preparación del ambiente de estudio',
                        'Planificación del tiempo'
                      ]
                    },
                    {
                      modulo: 'Módulo 2: Preview y Question',
                      temas: [
                        'Técnica de previsualización',
                        'Formulación de preguntas efectivas',
                        'Activación de conocimientos previos',
                        'Establecimiento de objetivos'
                      ]
                    },
                    {
                      modulo: 'Módulo 3: Read y Recite',
                      temas: [
                        'Lectura activa y comprensiva',
                        'Técnicas de subrayado',
                        'Resumen y síntesis',
                        'Repetición y memorización'
                      ]
                    },
                    {
                      modulo: 'Módulo 4: Test y Aplicación',
                      temas: [
                        'Autoevaluación del aprendizaje',
                        'Aplicación en diferentes materias',
                        'Técnicas de repaso',
                        'Plan de estudio personalizado'
                      ]
                    },
                    {
                      modulo: 'Módulo 5: Charla con Psicólogos',
                      temas: [
                        'Límites sanos en el estudio',
                        'Manejo del estrés académico',
                        'Acompañamiento familiar',
                        'Desarrollo de hábitos saludables'
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

            {/* Características Especiales */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 mb-4 flex items-center gap-2">
                  <UserCheck className="h-6 w-6 text-lime-600" />
                  Características especiales del curso
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-center p-4 border border-lime-200 rounded-lg bg-lime-50">
                      <UserCheck className="h-12 w-12 text-lime-600 mx-auto mb-3" />
                      <h4 className="text-slate-900 mb-2">Charla con Psicólogos</h4>
                      <p className="text-sm text-slate-600">
                        Sesión especializada para padres sobre límites sanos y acompañamiento académico
                      </p>
                    </div>
                    <div className="text-center p-4 border border-lime-200 rounded-lg bg-lime-50">
                      <Timer className="h-12 w-12 text-lime-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-slate-900 mb-2">Planificación del Tiempo</h4>
                      <p className="text-sm text-slate-600">
                        Aprende a organizar tu tiempo de estudio de manera eficiente
                      </p>
                    </div>
                    <div className="text-center p-4 border border-lime-200 rounded-lg bg-lime-50">
                      <BookOpen className="h-12 w-12 text-lime-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-slate-900 mb-2">Aplicación Práctica</h4>
                      <p className="text-sm text-slate-600">
                        Practica el método PQRST en distintas materias y contextos
                      </p>
                    </div>
                    <div className="text-center p-4 border border-lime-200 rounded-lg bg-lime-50">
                      <Users className="h-12 w-12 text-lime-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-slate-900 mb-2">Seguimiento Personalizado</h4>
                      <p className="text-sm text-slate-600">
                        Acompañamiento individual para maximizar tu aprendizaje
                      </p>
                    </div>
                  </div>
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
                    <p className="text-sm text-slate-600">10 sesiones</p>
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
                  <div className="text-2xl font-bold text-lime-700 mb-2">$2,500 MXN</div>
                  <p className="text-sm text-slate-600 mb-4">curso completo</p>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg">
                    Reservar lugar
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
                    'Manual del método PQRST',
                    'Plantillas de planificación',
                    'Ejercicios prácticos',
                    'Acceso a recursos digitales',
                    'Certificado de participación',
                    'Sesión con psicólogos especializados'
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
                  <h3 className="text-lg font-semibold text-slate-900">¿Para quién es este curso?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Adolescentes de 12 a 18 años',
                      'Estudiantes que quieren mejorar su rendimiento',
                      'Interés en técnicas de estudio',
                      'Compromiso con el aprendizaje'
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
                      'Acceso a internet para sesiones en vivo',
                      'Dispositivo para participar',
                      'Materiales de estudio básicos',
                      'Disposición para practicar técnicas'
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
                  <h3 className="text-lg font-semibold text-slate-900">¿Qué obtendrás con este curso?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Dominio completo del método PQRST',
                      'Mejor retención de información',
                      'Tiempo de estudio optimizado',
                      'Hábitos de estudio efectivos',
                      'Técnicas aplicables a todas las materias',
                      'Sesión con psicólogos especializados'
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
                      <h4 className="font-medium text-slate-900 mb-2">¿Qué significa PQRST?</h4>
                      <p className="text-slate-600">PQRST son las siglas de Preview, Question, Read, Recite, Test. Es un método sistemático de estudio.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">¿Cuánto tiempo debo dedicar a la práctica?</h4>
                      <p className="text-slate-600">Se recomienda practicar 30-45 minutos diarios para consolidar las técnicas aprendidas.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">¿La charla con psicólogos es obligatoria?</h4>
                      <p className="text-slate-600">Es parte del curso y está incluida en el precio. Es muy recomendable para padres y adolescentes.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">¿Puedo aplicar el método en todas las materias?</h4>
                      <p className="text-slate-600">Sí, el método PQRST es universal y se adapta a cualquier tipo de contenido académico.</p>
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
            ¿Listo para transformar tu forma de estudiar?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            El método PQRST cambiará para siempre tu forma de aprender. 
            Reserva tu lugar ahora y comienza a ver resultados desde la primera sesión.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Reservar lugar
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
