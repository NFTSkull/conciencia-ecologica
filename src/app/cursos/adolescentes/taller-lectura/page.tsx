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

export default function TallerLecturaPage() {
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
                Taller de lectura
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-90">
              Adolescentes de 12 a 18 años · Virtual · 4 meses · Cupo: 10 personas
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Taller que ayudará a nuestros estudiantes a mejorar la comprensión lectora, expresión oral y fomentar el gusto por la lectura con material didáctico.
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
                  Descripción del taller
                </CardTitle>
                <CardDescription className="text-lg text-slate-600">
                  Este taller está diseñado específicamente para adolescentes de 12 a 18 años, con el objetivo de mejorar sus habilidades de lectura, comprensión y expresión oral a través de material didáctico atractivo y relevante para su edad.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Temario */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 mb-4">
                  Temario
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-100 mt-0.5">
                      <span className="text-sm font-medium text-lime-600">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Lecturas didácticas de interés general</h3>
                      <p className="text-slate-600">Textos seleccionados para capturar el interés de los jóvenes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-100 mt-0.5">
                      <span className="text-sm font-medium text-lime-600">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Lecturas didácticas de interés científico</h3>
                      <p className="text-slate-600">Material científico adaptado para jóvenes</p>
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
                      <h3 className="font-semibold text-slate-900">Lunes, martes y jueves de 5 a 7 PM</h3>
                      <p className="text-slate-600">Sesiones entre semana para jóvenes que prefieren horarios regulares</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-lime-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Viernes de 4 a 6 PM</h3>
                      <p className="text-slate-600">Sesión de fin de semana para mayor flexibilidad</p>
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
                    <CardTitle>Objetivos del taller</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-lime-600 mt-0.5" />
                        <p className="text-slate-600">Mejorar la comprensión lectora de los estudiantes</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-lime-600 mt-0.5" />
                        <p className="text-slate-600">Desarrollar habilidades de expresión oral</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-lime-600 mt-0.5" />
                        <p className="text-slate-600">Fomentar el gusto por la lectura</p>
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
                        <p className="text-slate-600">Material didáctico adaptado a la edad</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-lime-600 mt-0.5" />
                        <p className="text-slate-600">Prácticas de lectura y discusión grupal</p>
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
                        <p className="text-slate-600">Mejora significativa en comprensión lectora</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <BookOpen className="h-5 w-5 text-lime-600 mt-0.5" />
                        <p className="text-slate-600">Desarrollo de habilidades comunicativas</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-lime-600 mt-0.5" />
                        <p className="text-slate-600">Ampliación del vocabulario y conocimiento</p>
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
                  <CardTitle className="text-xl text-slate-900">Información del taller</CardTitle>
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
                      <p className="text-slate-600">4 meses</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-lime-600" />
                    <div>
                      <p className="font-medium text-slate-900">Cupo</p>
                      <p className="text-slate-600">10 personas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-lime-600" />
                    <div>
                      <p className="font-medium text-slate-900">Costo</p>
                      <p className="text-slate-600">$1,000 MXN</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-lime-600" />
                    <div>
                      <p className="font-medium text-slate-900">Periodicidad de pago</p>
                      <p className="text-slate-600">Mensual</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="border-lime-200 bg-gradient-to-br from-lime-50 to-emerald-50">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">¿Te interesa?</CardTitle>
                  <CardDescription className="text-slate-600">
                    Únete a este taller y mejora tus habilidades de lectura
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-lime-600 hover:bg-lime-700" asChild>
                    <Link href="#inscripcion">
                      Inscribirme ahora
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

