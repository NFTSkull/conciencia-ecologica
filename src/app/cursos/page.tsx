"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  BookOpen, 
  Brain,
  Leaf,
  Clock,
  Play,
  ArrowRight,
  Facebook,
  Instagram
} from 'lucide-react';
import Link from 'next/link';

export default function CursosPage() {
  return (
    <div>
      {/* Banner Section */}
      <section className="bg-gradient-to-br from-lime-600 via-emerald-500 to-teal-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mr-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Cursos
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-90">
              La Sede Curiosa
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Un espacio vibrante donde la creatividad se encuentra con la innovación social. Aquí facilitamos colaboraciones entre activistas, artistas, investigadores y emprendedores que comparten la visión de un mundo más justo y sustentable.
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
            {/* Curso de Educación Ambiental para jóvenes */}
            <Card className="hover:shadow-lg transition-shadow border-lime-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-lime-100 rounded-lg">
                    <BookOpen className="h-6 w-6 text-lime-600" />
                  </div>
                  <Badge variant="outline" className="bg-lime-100 text-lime-800 border-lime-200">
                    Adolescentes
                  </Badge>
                </div>
                <CardTitle className="text-xl text-slate-900 mb-2">
                  Curso de Educación Ambiental para jóvenes
                </CardTitle>
                <CardDescription className="text-slate-600">
                  A partir de 12 años · Virtual · Duración 2 meses · Cupo 20.
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
                    A partir de 12 años · Virtual · 2 meses · Cupo 20
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Metabolismo social y urbano */}
            <Card className="hover:shadow-lg transition-shadow border-teal-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-teal-100 rounded-lg">
                    <Leaf className="h-6 w-6 text-teal-600" />
                  </div>
                  <Badge variant="outline" className="bg-teal-100 text-teal-800 border-teal-200">
                    Público General
                  </Badge>
                </div>
                <CardTitle className="text-xl text-slate-900 mb-2">
                  Metabolismo social y urbano
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Curso virtual dirigido al público en general. Duración 1.5 meses. Cupo limitado a 20 personas.
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
                    Público en general · Virtual · 1.5 meses · Cupo 20
                  </p>
                  <p className="font-semibold text-teal-700">$600 MXN (curso completo)</p>
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

            {/* Curso de Educación Ambiental para jóvenes */}
            <Card className="hover:shadow-lg transition-shadow border-lime-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-lime-100 rounded-lg">
                    <BookOpen className="h-6 w-6 text-lime-600" />
                  </div>
                  <Badge variant="outline" className="bg-lime-100 text-lime-800 border-lime-200">
                    Adolescentes
                  </Badge>
                </div>
                <CardTitle className="text-xl text-slate-900 mb-2">
                  Curso de Educación Ambiental para jóvenes
                </CardTitle>
                <CardDescription className="text-slate-600">
                  A partir de 12 años · Virtual · Duración 2 meses · Cupo 20.
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
                    A partir de 12 años · Virtual · 2 meses · Cupo 20
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

        {/* Redes Sociales */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-lime-50 to-emerald-50 border-lime-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-lime-800 mb-4">
                Conecta con La Sede Curiosa
              </CardTitle>
              <CardDescription className="text-lime-700">
                Síguenos en nuestras redes sociales para conocer más sobre nuestros proyectos y colaboraciones
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                <a href="https://www.instagram.com/sede.curiosa?igsh=MTFtd3o5NXV1dnpqbA==" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4 mr-2" />
                  Seguir en Instagram
                </a>
              </Button>
              <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                <a href="https://www.facebook.com/share/19PnofUbDh/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4 mr-2" />
                  Seguir en Facebook
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
