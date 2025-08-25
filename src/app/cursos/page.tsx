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
  ArrowRight
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
              Solo 3 cursos especializados disponibles
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Programas diseñados para adolescentes y público general interesado en temas ambientales.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Cursos Disponibles */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
            Cursos Disponibles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Taller de Lectura para Jóvenes */}
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
                  Taller de Lectura para Jóvenes
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Taller de lectura para jóvenes de entre 12 y 18 años. Buscamos que aumenten su comprensión lectora, su comprensión y su expresión oral a través de lecturas divertidas y que estamos seguros que les fascinará.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Play className="h-3 w-3" />
                      En vivo
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      4 meses
                    </span>
                  </div>
                  <p className="font-semibold text-lime-700">$1,000 por mes</p>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                    <Link href="/cursos/adolescentes/taller-lectura">
                      Inscribirme ahora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Método PQRST */}
            <Card className="hover:shadow-lg transition-shadow border-lime-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-lime-100 rounded-lg">
                    <Brain className="h-6 w-6 text-lime-600" />
                  </div>
                  <Badge variant="outline" className="bg-lime-100 text-lime-800 border-lime-200">
                    Adolescentes
                  </Badge>
                </div>
                <CardTitle className="text-xl text-slate-900 mb-2">
                  Método PQRST
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Una técnica de estudio que ofrece varias ventajas para mejorar la comprensión y retención de información. Estas ventajas incluyen una mejor comprensión del material, facilitación de la memoria a largo plazo, optimización del tiempo de estudio y una estructura clara para el aprendizaje.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Play className="h-3 w-3" />
                      En vivo
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      10 sesiones
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">
                    En este curso de 10 sesiones aprenderás a manejarlo además de planificar tu tiempo. El cupo es limitado para garantizar la calidad de tu aprendizaje. Este curso incluye una charla con psicólogos para dar una plática a padres de familia sobre los límites sanos a los jóvenes.
                  </p>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                    <Link href="/cursos/adolescentes/metodo-pqrst">
                      Reservar lugar
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Educación Ambiental */}
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
                  Curso de Educación Ambiental
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Este curso está dirigido al público en general que desee aprender otra visión alternativa a las tradicionales. Se analizarán las corrientes del ambientalismo; lo que es metabolismo social y sus impactos en las sociedades actuales y qué alternativas se pueden crear como alternativas al capitalismo.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Play className="h-3 w-3" />
                      En vivo
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      3 meses
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">
                    Se dará constancia de participación. La duración es de 3 meses y el costo por mes es de $1,000.
                  </p>
                  <p className="font-semibold text-teal-700">$1,000 por mes</p>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                    <Link href="/cursos/academica/educacion-ambiental">
                      Inscribirme
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
