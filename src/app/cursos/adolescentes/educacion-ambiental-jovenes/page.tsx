"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Clock, 
  Play, 
  Users, 
  DollarSign,
  ArrowRight,
  MessageCircle,
  CheckCircle,
  Target,
  Lightbulb,
  Globe,
  Calendar,
  MapPin
} from 'lucide-react';
import Link from 'next/link';

export default function EducacionAmbientalJovenesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lime-600 via-emerald-500 to-lime-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mr-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Curso de Educación Ambiental para jóvenes
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-90">
              A partir de 12 años · Virtual · 2 meses · Cupo 20 · $700 MXN por mes
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              A partir de 12 años en adelante: aprenderán una visión sólida y actual sobre el ambiente y nuestra relación con él.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Overview */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 mb-4">
                  Descripción del curso
                </CardTitle>
                <CardDescription className="text-lg text-slate-600">
                  Este curso está diseñado específicamente para jóvenes a partir de 12 años, proporcionándoles una comprensión sólida y actual sobre el ambiente y nuestra relación con él, a través de metodologías adaptadas a su edad y nivel de desarrollo.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Aprenderán */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 mb-4">
                  Aprenderán
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-100 mt-0.5">
                      <span className="text-sm font-medium text-lime-600">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Ética ambiental</h3>
                      <p className="text-slate-600">Principios éticos para la conservación y protección del medio ambiente</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-100 mt-0.5">
                      <span className="text-sm font-medium text-lime-600">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Conflictos socioambientales en México</h3>
                      <p className="text-slate-600">Análisis de los principales conflictos ambientales en nuestro país</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-100 mt-0.5">
                      <span className="text-sm font-medium text-lime-600">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Impactos humanos en el medio ambiente</h3>
                      <p className="text-slate-600">Cómo nuestras acciones afectan al planeta y sus consecuencias</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-100 mt-0.5">
                      <span className="text-sm font-medium text-lime-600">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Sustentabilidad</h3>
                      <p className="text-slate-600">Conceptos y prácticas para un desarrollo sostenible</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-100 mt-0.5">
                      <span className="text-sm font-medium text-lime-600">5</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Alternativas de solución</h3>
                      <p className="text-slate-600">Propuestas prácticas para resolver problemas ambientales</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Horarios */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 mb-4">
                  Horarios disponibles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-lime-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Sábados de 12 a 2 PM</h3>
                      <p className="text-slate-600">Sesiones matutinas para jóvenes que prefieren el horario de fin de semana</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-lime-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Martes de 7 a 9 PM</h3>
                      <p className="text-slate-600">Sesiones vespertinas para jóvenes que estudian o trabajan</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs Section */}
            <Tabs defaultValue="objetivos" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="objetivos">Objetivos</TabsTrigger>
                <TabsTrigger value="metodologia">Metodología</TabsTrigger>
                <TabsTrigger value="beneficios">Beneficios</TabsTrigger>
              </TabsList>
              
              <TabsContent value="objetivos" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Objetivos del curso</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-lime-600 mt-0.5" />
                        <p className="text-slate-600">Desarrollar conciencia ambiental en los jóvenes</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-lime-600 mt-0.5" />
                        <p className="text-slate-600">Comprender los problemas ambientales actuales</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-lime-600 mt-0.5" />
                        <p className="text-slate-600">Identificar soluciones prácticas y sostenibles</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="metodologia" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Metodología</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <BookOpen className="h-5 w-5 text-lime-600 mt-0.5" />
                        <p className="text-slate-600">Sesiones virtuales interactivas y dinámicas</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-lime-600 mt-0.5" />
                        <p className="text-slate-600">Actividades prácticas y proyectos grupales</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-lime-600 mt-0.5" />
                        <p className="text-slate-600">Discusiones abiertas y participación activa</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="beneficios" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Beneficios</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-lime-600 mt-0.5" />
                        <p className="text-slate-600">Desarrollo de pensamiento crítico ambiental</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <BookOpen className="h-5 w-5 text-lime-600 mt-0.5" />
                        <p className="text-slate-600">Conocimientos aplicables en la vida cotidiana</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-lime-600 mt-0.5" />
                        <p className="text-slate-600">Formación como agentes de cambio ambiental</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Course Info Card */}
              <Card className="border-lime-200">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">Información del curso</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Play className="h-5 w-5 text-lime-600" />
                    <div>
                      <p className="font-medium text-slate-900">Modalidad</p>
                      <p className="text-slate-600">Virtual</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-lime-600" />
                    <div>
                      <p className="font-medium text-slate-900">Duración</p>
                      <p className="text-slate-600">2 meses</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-lime-600" />
                    <div>
                      <p className="font-medium text-slate-900">Cupo</p>
                      <p className="text-slate-600">20 personas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-lime-600" />
                    <div>
                      <p className="font-medium text-slate-900">Costo</p>
                      <p className="text-slate-600">$700 MXN por mes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="border-lime-200 bg-gradient-to-br from-lime-50 to-emerald-50">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">¿Te interesa?</CardTitle>
                  <CardDescription className="text-slate-600">
                    Únete a este curso y desarrolla tu conciencia ambiental
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-lime-600 hover:bg-lime-700" asChild>
                    <Link href="#inscripcion">
                      Regístrate ahora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://wa.me/527221568869" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
