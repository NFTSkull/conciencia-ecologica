"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Target,
  ArrowRight,
  Clock,
  Play,
  Video,
  Leaf,
  Brain
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
              Formación para pensar y transformar
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Dos líneas complementarias de formación: para adolescentes (habilidades base y pensamiento crítico) y académica/profesional (temas especializados).
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Cursos Destacados */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
            Cursos Destacados
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
                  Aumenta tu comprensión lectora, expresión oral y gusto por la lectura con textos divertidos y dinámicos.
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
                  <p className="font-semibold text-lime-700">$1,000 MXN por mes</p>
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
                  Método PQRST: Comprensión y retención efectiva
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Aprende una técnica probada para estudiar mejor, planificar tu tiempo y retener información.
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
                  <p className="font-semibold text-lime-700">$2,500 MXN (curso completo)</p>
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
                    Académica
                  </Badge>
                </div>
                <CardTitle className="text-xl text-slate-900 mb-2">
                  Curso de Educación Ambiental
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Una visión alternativa del ambientalismo, el metabolismo social y los retos actuales.
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
                  <p className="font-semibold text-teal-700">$1,000 MXN por mes</p>
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

        {/* Bloques de Cursos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cursos para Adolescentes */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-lime-100 rounded-lg">
                  <Users className="h-6 w-6 text-lime-600" />
                </div>
                <CardTitle className="text-2xl">Adolescentes</CardTitle>
              </div>
              <CardDescription className="text-lg">
                Capacitaciones para despertar curiosidad científica y fortalecer habilidades fundamentales.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Líneas de formación:</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-lime-600" />
                      Lectura comprensiva y expresión oral
                    </li>
                    <li className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-lime-600" />
                      Técnicas de estudio y PQRST
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-lime-600" />
                      Pensamiento crítico y ciencias
                    </li>
                  </ul>
                </div>

                <Button className="w-full" asChild>
                  <Link href="/cursos/adolescentes">
                    Ver cursos para adolescentes
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Cursos Académica/Profesionales */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-teal-100 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-2xl">Académica/Profesionales</CardTitle>
              </div>
              <CardDescription className="text-lg">
                Programas para profesionales y estudiantes avanzados interesados en feminismo, ecología y ciencias híbridas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Temas especializados:</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-center gap-2">
                      <Leaf className="h-4 w-4 text-teal-600" />
                      Educación ambiental y metabolismo social
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-teal-600" />
                      Feminismo y ciencia
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-teal-600" />
                      Ciencias híbridas (inter/transdisciplinarias)
                    </li>
                  </ul>
                </div>

                <Button className="w-full" asChild>
                  <Link href="/cursos/academica">
                    Ver cursos académicos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            ¿Tienes dudas sobre los cursos?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Estamos aquí para ayudarte a elegir el curso perfecto. 
            Contáctanos para resolver cualquier duda o solicitar información adicional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contacto">
                Contactar para más información
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contacto">
                Solicitar programa personalizado
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
