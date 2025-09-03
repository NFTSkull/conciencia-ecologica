"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Leaf, 
  Clock, 
  Play, 
  Users, 
  DollarSign,
  ArrowRight,
  MessageCircle,
  CheckCircle,
  BookOpen,
  Target,
  Lightbulb,
  Globe
} from 'lucide-react';
import Link from 'next/link';

export default function MetabolismoSocialUrbanoPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-emerald-500 to-teal-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mr-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Metabolismo social y urbano
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-90">
              Público en general · Virtual · 1.5 meses · Cupo: 20 personas
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Curso orientado al entendimiento del metabolismo social y urbano y su relación con ecología, capital y propuestas alternativas.
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
                  Este curso te proporcionará una comprensión profunda de los principios termodinámicos aplicados al análisis urbano y social, explorando cómo las ciudades consumen, transforman y excretan recursos materiales y energéticos.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Temario */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 mb-4">
                  ¿Cuál es el temario?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 mt-0.5">
                      <span className="text-sm font-medium text-teal-600">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Principios termodinámicos</h3>
                      <p className="text-slate-600">Fundamentos de la termodinámica aplicados a sistemas urbanos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 mt-0.5">
                      <span className="text-sm font-medium text-teal-600">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Ecología y sociedad</h3>
                      <p className="text-slate-600">Relación entre sistemas ecológicos y sociales</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 mt-0.5">
                      <span className="text-sm font-medium text-teal-600">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Problema del metabolismo urbano</h3>
                      <p className="text-slate-600">Análisis de los flujos de energía y materia en las ciudades</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 mt-0.5">
                      <span className="text-sm font-medium text-teal-600">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Problema del capital</h3>
                      <p className="text-slate-600">Relación entre capitalismo y metabolismo urbano</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 mt-0.5">
                      <span className="text-sm font-medium text-teal-600">5</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Estudio de caso</h3>
                      <p className="text-slate-600">Análisis de casos específicos de metabolismo urbano</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 mt-0.5">
                      <span className="text-sm font-medium text-teal-600">6</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Propuestas alternativas</h3>
                      <p className="text-slate-600">Soluciones y alternativas para un metabolismo urbano sostenible</p>
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
                <TabsTrigger value="evaluacion">Evaluación</TabsTrigger>
              </TabsList>
              
              <TabsContent value="objetivos" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Objetivos del curso</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                        <p className="text-slate-600">Comprender los principios termodinámicos aplicados a sistemas urbanos</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                        <p className="text-slate-600">Analizar el metabolismo urbano y sus impactos sociales</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                        <p className="text-slate-600">Identificar problemas y proponer alternativas sostenibles</p>
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
                        <BookOpen className="h-5 w-5 text-teal-600 mt-0.5" />
                        <p className="text-slate-600">Sesiones virtuales interactivas con expertos</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-teal-600 mt-0.5" />
                        <p className="text-slate-600">Análisis de casos prácticos y estudios reales</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-teal-600 mt-0.5" />
                        <p className="text-slate-600">Discusiones grupales y trabajo colaborativo</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="evaluacion" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Evaluación</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-teal-600 mt-0.5" />
                        <p className="text-slate-600">Participación activa en las sesiones</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <BookOpen className="h-5 w-5 text-teal-600 mt-0.5" />
                        <p className="text-slate-600">Análisis de un caso de estudio</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Target className="h-5 w-5 text-teal-600 mt-0.5" />
                        <p className="text-slate-600">Propuesta de solución para un problema urbano</p>
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
              <Card className="border-teal-200">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">Información del curso</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Play className="h-5 w-5 text-teal-600" />
                    <div>
                      <p className="font-medium text-slate-900">Modalidad</p>
                      <p className="text-slate-600">Virtual</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-teal-600" />
                    <div>
                      <p className="font-medium text-slate-900">Duración</p>
                      <p className="text-slate-600">1.5 meses</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-teal-600" />
                    <div>
                      <p className="font-medium text-slate-900">Cupo</p>
                      <p className="text-slate-600">Limitado a 20 personas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-teal-600" />
                    <div>
                      <p className="font-medium text-slate-900">Costo</p>
                      <p className="text-slate-600">$600 MXN (curso completo)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="border-teal-200 bg-gradient-to-br from-teal-50 to-emerald-50">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">¿Te interesa?</CardTitle>
                  <CardDescription className="text-slate-600">
                    Únete a este curso y transforma tu comprensión del metabolismo urbano
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700" asChild>
                    <Link href="#inscripcion">
                      Inscribirme
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
