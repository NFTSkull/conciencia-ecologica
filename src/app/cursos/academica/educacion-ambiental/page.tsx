"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Leaf, 
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
  Globe,
  BookOpen,
  TrendingUp,
  Shield
} from 'lucide-react';
import Link from 'next/link';

export default function EducacionAmbientalPage() {
  return (
    <div data-theme="theme-cursos-acad">
      {/* Banner Section */}
      <section className="bg-gradient-to-br from-teal-700 via-sky-600 to-teal-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mr-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Curso de Educación Ambiental
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-90">
              Una visión alternativa del ambientalismo
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Este curso está dirigido al público en general interesado en otra visión del ambientalismo. 
              Analizaremos corrientes del ambientalismo, metabolismo social y sus impactos, 
              y alternativas frente al capitalismo tradicional.
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
                  <Badge variant="outline" className="bg-teal-100 text-teal-800 border-teal-200">
                    <Play className="h-3 w-3 mr-1" />
                    En vivo
                  </Badge>
                  <Badge variant="outline" className="bg-sky-100 text-sky-800 border-sky-200">
                    <Clock className="h-3 w-3 mr-1" />
                    3 meses
                  </Badge>
                  <Badge variant="outline" className="bg-teal-100 text-teal-800 border-teal-200">
                    <Users className="h-3 w-3 mr-1" />
                    Público general
                  </Badge>
                </div>
                <CardTitle className="text-3xl text-slate-900 mb-4">
                  Curso de Educación Ambiental
                </CardTitle>
                <CardDescription className="text-lg text-slate-600 leading-relaxed">
                  Un curso innovador que va más allá de los enfoques tradicionales del ambientalismo. 
                  Exploraremos el metabolismo social, analizaremos las diferentes corrientes del pensamiento 
                  ambiental y descubriremos alternativas al desarrollo convencional.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Objetivos */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5 text-teal-600" />
                      Objetivos del curso
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        'Comprender las diferentes corrientes del ambientalismo',
                        'Analizar el metabolismo social y sus impactos ambientales',
                        'Explorar alternativas al capitalismo tradicional',
                        'Desarrollar pensamiento crítico sobre la sustentabilidad',
                        'Aplicar conceptos en análisis de problemas ambientales'
                      ].map((objetivo, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{objetivo}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metodología */}
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-teal-600" />
                      Metodología
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        'Sesiones interactivas en vivo',
                        'Discusiones grupales facilitadas',
                        'Análisis de casos reales',
                        'Lecturas complementarias',
                        'Proyecto final de reflexión',
                        'Constancia de participación'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
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
                  <BookOpen className="h-6 w-6 text-teal-600" />
                  Temario del curso
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      modulo: 'Módulo 1: Corrientes del Ambientalismo',
                      temas: [
                        'Historia del movimiento ambientalista',
                        'Ambientalismo conservacionista vs. social',
                        'Ecofeminismo y justicia ambiental',
                        'Ambientalismo del Sur Global',
                        'Críticas al ambientalismo dominante'
                      ]
                    },
                    {
                      modulo: 'Módulo 2: Metabolismo Social',
                      temas: [
                        'Concepto de metabolismo social',
                        'Flujos de energía y materiales',
                        'Impactos ambientales del desarrollo',
                        'Desigualdades en el acceso a recursos',
                        'Casos de estudio latinoamericanos'
                      ]
                    },
                    {
                      modulo: 'Módulo 3: Alternativas y Futuros',
                      temas: [
                        'Buen vivir y desarrollo alternativo',
                        'Economía circular y regenerativa',
                        'Comunidades sustentables',
                        'Transición energética justa',
                        'Construcción de futuros deseables'
                      ]
                    }
                  ].map((modulo, index) => (
                    <div key={index} className="border border-teal-200 rounded-lg p-4 bg-teal-50">
                      <h4 className="font-semibold text-slate-900 mb-3 text-lg">{modulo.modulo}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {modulo.temas.map((tema, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-700 text-sm">{tema}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Enfoque Innovador */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-teal-600" />
                  ¿Por qué este enfoque es diferente?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-center p-4 border border-teal-200 rounded-lg bg-teal-50">
                      <Globe className="h-12 w-12 text-teal-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-slate-900 mb-2">Perspectiva Crítica</h4>
                      <p className="text-sm text-slate-600">
                        Analizamos críticamente los enfoques dominantes del ambientalismo
                      </p>
                    </div>
                    <div className="text-center p-4 border border-teal-200 rounded-lg bg-teal-50">
                      <Shield className="h-12 w-12 text-teal-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-slate-900 mb-2">Justicia Ambiental</h4>
                      <p className="text-sm text-slate-600">
                        Enfoque en las desigualdades y la justicia social ambiental
                      </p>
                    </div>
                    <div className="text-center p-4 border border-teal-200 rounded-lg bg-teal-50">
                      <Leaf className="h-12 w-12 text-teal-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-slate-900 mb-2">Alternativas Prácticas</h4>
                      <p className="text-sm text-slate-600">
                        Exploramos modelos alternativos de desarrollo y sustentabilidad
                      </p>
                    </div>
                    <div className="text-center p-4 border border-teal-200 rounded-lg bg-teal-50">
                      <Users className="h-12 w-12 text-teal-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-slate-900 mb-2">Enfoque Participativo</h4>
                      <p className="text-sm text-slate-600">
                        Metodología que fomenta la reflexión y participación activa
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
                  <Clock className="h-5 w-5 text-teal-600" />
                  <div>
                    <p className="font-medium text-slate-900">Duración</p>
                    <p className="text-sm text-slate-600">3 meses</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Play className="h-5 w-5 text-teal-600" />
                  <div>
                    <p className="font-medium text-slate-900">Modalidad</p>
                    <p className="text-sm text-slate-600">En vivo</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-teal-600" />
                  <div>
                    <p className="font-medium text-slate-900">Audiencia</p>
                    <p className="text-sm text-slate-600">Público general</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-teal-600" />
                  <div>
                    <p className="font-medium text-slate-900">Cupo</p>
                    <p className="text-sm text-slate-600">Limitado</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <div className="text-2xl font-bold text-teal-700 mb-2">$1,000 MXN</div>
                  <p className="text-sm text-slate-600 mb-4">por mes</p>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg">
                    Inscribirme
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Materiales Incluidos */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg text-slate-900 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-teal-600" />
                  Materiales incluidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    'Manual del curso con recursos',
                    'Bibliografía comentada',
                    'Acceso a plataforma de recursos',
                    'Constancia de participación',
                    'Recursos digitales complementarios',
                    'Soporte post-curso por 1 mes'
                  ].map((material, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
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
                      'Público general interesado en temas ambientales',
                      'Estudiantes de ciencias ambientales y sociales',
                      'Activistas y organizaciones ambientalistas',
                      'Profesionales del sector público y privado',
                      'Personas interesadas en alternativas de desarrollo'
                    ].map((perfil, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
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
                      'Interés en temas ambientales y sociales',
                      'Disposición para reflexión crítica',
                      'Acceso a internet para sesiones en vivo',
                      'Compromiso con el aprendizaje participativo',
                      'Disponibilidad para sesiones semanales'
                    ].map((requisito, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
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
                      'Comprensión profunda del ambientalismo crítico',
                      'Herramientas para análisis socio-ambiental',
                      'Perspectivas alternativas de desarrollo',
                      'Pensamiento crítico sobre sustentabilidad',
                      'Red de contactos con personas afines',
                      'Constancia de participación reconocida'
                    ].map((beneficio, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Heart className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
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
                      <h4 className="font-medium text-slate-900 mb-2">¿Necesito conocimientos previos en ecología?</h4>
                      <p className="text-slate-600">No, el curso está diseñado para personas con diferentes niveles de conocimiento. Partimos de conceptos básicos.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">¿Qué significa &quot;metabolismo social&quot;?</h4>
                      <p className="text-slate-600">Es el estudio de cómo las sociedades consumen y transforman recursos materiales y energéticos.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">¿El curso es solo teórico?</h4>
                      <p className="text-slate-600">No, combinamos teoría con análisis de casos reales y discusiones prácticas sobre alternativas.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">¿Puedo aplicar lo aprendido en mi trabajo?</h4>
                      <p className="text-slate-600">Sí, los conceptos son aplicables en diversos campos profesionales y organizacionales.</p>
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
            ¿Listo para una nueva perspectiva del ambientalismo?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Únete a este curso innovador y descubre enfoques alternativos que van más allá 
            de las soluciones convencionales. Una oportunidad para repensar la sustentabilidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Inscribirme
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

