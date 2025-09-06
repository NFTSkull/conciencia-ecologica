"use client";

import { SectionBanner } from '@/components/sections/section-banner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, FileText, Search, Users, Globe, Award, ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';

export default function PublicacionesPage() {
  return (
    <div>
      <SectionBanner
        title="Publicaciones"
        subtitle="Artículos científicos, tesis y contribuciones académicas en sustentabilidad urbana"
        theme="theme-investigacion"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mensaje de estado */}
        <div className="text-center mb-12">
          <Card className="max-w-2xl mx-auto border-0 shadow-lg bg-gradient-to-br from-slate-50 to-emerald-50">
            <CardContent className="pt-8">
              <div className="flex items-center justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 mr-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-slate-900">
                    Publicaciones en Desarrollo
                  </h2>
                  <p className="text-slate-600">
                    Catálogo de publicaciones científicas
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 mb-6">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Estamos organizando nuestro catálogo completo de publicaciones científicas, 
                  incluyendo artículos arbitrados, tesis doctoral, capítulos de libros y 
                  contribuciones editoriales.
                </p>
                <p className="text-slate-600 text-sm">
                  Próximamente podrás acceder a todas las publicaciones con filtros por tipo, 
                  año, revista y palabras clave.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 mx-auto mb-2">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">Artículos Científicos</h4>
                  <p className="text-sm text-slate-600">Revistas especializadas</p>
                </div>
                <div className="text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 mx-auto mb-2">
                    <BookOpen className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">Tesis Doctoral</h4>
                  <p className="text-sm text-slate-600">Investigación doctoral</p>
                </div>
                <div className="text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 mx-auto mb-2">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">Capítulos de Libros</h4>
                  <p className="text-sm text-slate-600">Contribuciones editoriales</p>
                </div>
              </div>

              <div className="space-y-3">
                <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/investigacion">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Ver Líneas de Investigación
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <Button variant="outline" asChild className="w-full">
                  <Link href="/contacto">
                    <Mail className="mr-2 h-4 w-4" />
                    Solicitar Publicaciones
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Información sobre el proceso de publicación */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900">
                Proceso de Publicación Científica
              </CardTitle>
              <CardDescription>
                Cómo se desarrolla el conocimiento científico en sustentabilidad urbana
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-emerald-100">
                      <Search className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Investigación</h3>
                      <p className="text-sm text-slate-600">
                        Desarrollo de metodologías y análisis de datos sobre metabolismo urbano.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-blue-100">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Escritura</h3>
                      <p className="text-sm text-slate-600">
                        Redacción de artículos científicos con rigor metodológico.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-purple-100">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Revisión</h3>
                      <p className="text-sm text-slate-600">
                        Proceso de revisión por pares en revistas especializadas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-orange-100">
                      <Globe className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Difusión</h3>
                      <p className="text-sm text-slate-600">
                        Publicación y divulgación del conocimiento científico.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
