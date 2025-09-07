"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Clock, 
  Play, 
  Users, 
  ArrowRight,
  Instagram,
  Facebook,
  MessageCircle,
  Leaf,
  Brain
} from 'lucide-react';
import Link from 'next/link';

export default function CursosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-500 to-emerald-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nuestros Cursos
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Programas especializados diseñados para diferentes audiencias, enfocados en el desarrollo de habilidades y pensamiento crítico.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Cursos para Adolescentes */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-slate-900 mb-4">
              Cursos para Adolescentes
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Programas especializados diseñados para jóvenes de entre 12 y 18 años, enfocados en el desarrollo de habilidades de lectura, estudio y pensamiento crítico.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Taller de Lectura */}
            <Card className="hover:shadow-lg transition-shadow border-lime-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-lime-100 rounded-lg">
                    <BookOpen className="h-6 w-6 text-lime-600" />
                  </div>
                  <Badge variant="outline" className="bg-lime-100 text-lime-800 border-lime-200">
                    La Sede Curiosa
                  </Badge>
                </div>
                <CardTitle className="text-xl text-slate-900 mb-2">
                  Taller de lectura
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Taller que ayudará a nuestros estudiantes a mejorar la comprensión lectora, expresión oral y fomentar el gusto por la lectura con material didáctico.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Play className="h-3 w-3" />
                      Virtual
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      4 meses
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">
                    Adolescentes de 12 a 18 años · Cupo: 10 personas
                  </p>
                  <p className="font-semibold text-lime-700">$1,000 MXN</p>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700" asChild>
                      <Link href="/cursos/adolescentes/taller-lectura">
                        Inscribirme ahora
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <a href="https://wa.me/527221568869" target="_blank" rel="noopener noreferrer">
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Educación Ambiental para jóvenes */}
            <Card className="hover:shadow-lg transition-shadow border-lime-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-lime-100 rounded-lg">
                    <Leaf className="h-6 w-6 text-lime-600" />
                  </div>
                  <Badge variant="outline" className="bg-lime-100 text-lime-800 border-lime-200">
                    La Sede Curiosa
                  </Badge>
                </div>
                <CardTitle className="text-xl text-slate-900 mb-2">
                  Educación ambiental
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Curso destinado a jóvenes para que adquieran conocimientos básicos de educación ambiental.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Play className="h-3 w-3" />
                      Virtual
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      2 meses
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">
                    Adolescentes de 12 a 18 años · Cupo: 20 personas
                  </p>
                  <p className="font-semibold text-lime-700">$700 MXN por mes</p>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700" asChild>
                      <Link href="/cursos/adolescentes/educacion-ambiental-jovenes">
                        Regístrate ahora
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <a href="https://wa.me/527221568869" target="_blank" rel="noopener noreferrer">
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cursos para Público General */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-slate-900 mb-4">
              Cursos para Público General
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Programas dirigidos a adultos, profesionales y público en general interesado en temas ambientales, sustentabilidad y pensamiento crítico.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Metabolismo social y urbano */}
            <Card className="hover:shadow-lg transition-shadow border-teal-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-teal-100 rounded-lg">
                    <Leaf className="h-6 w-6 text-teal-600" />
                  </div>
                  <Badge variant="outline" className="bg-teal-100 text-teal-800 border-teal-200">
                    La Sede Curiosa
                  </Badge>
                </div>
                <CardTitle className="text-xl text-slate-900 mb-2">
                  Metabolismo social y urbano
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Curso orientado al entendimiento del metabolismo social y urbano y su relación con ecología, capital y propuestas alternativas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Play className="h-3 w-3" />
                      Virtual
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      1.5 meses
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">
                    Público en general · Cupo: 20 personas
                  </p>
                  <p className="font-semibold text-teal-700">$600 MXN</p>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700" asChild>
                      <Link href="/cursos/academica/metabolismo-social-urbano">
                        Inscribirme
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <a href="https://wa.me/527221568869" target="_blank" rel="noopener noreferrer">
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Educación Ambiental para público general */}
            <Card className="hover:shadow-lg transition-shadow border-teal-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-teal-100 rounded-lg">
                    <BookOpen className="h-6 w-6 text-teal-600" />
                  </div>
                  <Badge variant="outline" className="bg-teal-100 text-teal-800 border-teal-200">
                    La Sede Curiosa
                  </Badge>
                </div>
                <CardTitle className="text-xl text-slate-900 mb-2">
                  Educación ambiental
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Curso destinado al público en general que busca comprender conceptos básicos de educación ambiental, sustentabilidad e impactos socioambientales.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Play className="h-3 w-3" />
                      Virtual
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      2 meses
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">
                    Público en general · Cupo: 15 personas
                  </p>
                  <p className="font-semibold text-teal-700">$500 MXN por mes</p>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700" asChild>
                      <Link href="/cursos/academica/educacion-ambiental">
                        Inscribirme
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <a href="https://wa.me/527221568869" target="_blank" rel="noopener noreferrer">
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* La Sede Curiosa Social Media */}
        <section className="bg-gradient-to-br from-lime-50 to-emerald-50 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              La Sede Curiosa
            </h3>
            <p className="text-slate-600 mb-6">
              Un espacio vibrante donde la creatividad se encuentra con la innovación social. Aquí facilitamos colaboraciones entre activistas, artistas, investigadores y emprendedores que comparten la visión de un mundo más justo y sustentable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="bg-white hover:bg-gray-50" asChild>
                <a href="https://www.facebook.com/share/19PnofUbDh/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="mr-2 h-4 w-4" />
                  Facebook
                </a>
              </Button>
              <Button variant="outline" className="bg-white hover:bg-gray-50" asChild>
                <a href="https://www.instagram.com/sede.curiosa?igsh=MTFtd3o5NXV1dnpqbA==" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-4 w-4" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
