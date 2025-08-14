"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  Clock, 
  Users, 
  BookOpen, 
  ArrowRight,
  Calendar,
  MapPin,
  Star,
  Play,
  Download,
  ExternalLink,
  Target,
  Lightbulb,
  Globe,
  Zap,
  Building2,
  Mail
} from 'lucide-react';
import Link from 'next/link';

export default function CursosPage() {
  const courses = [
    {
      title: "Fundamentos de Sustentabilidad Urbana",
      description: "Curso introductorio sobre los principios básicos de la sustentabilidad en contextos urbanos.",
      level: "Básico",
      duration: "8 semanas",
      format: "Online",
      price: "Gratuito",
      rating: 4.8,
      students: 1247,
      instructor: "Dra. Dainiz Noray Montoya García",
      topics: ["Conceptos básicos", "Indicadores urbanos", "Políticas públicas", "Casos de estudio"],
      nextStart: "15 de Enero, 2025",
      status: "Inscripciones abiertas"
    },
    {
      title: "Termodinámica Urbana Avanzada",
      description: "Análisis profundo de los flujos energéticos y materiales en sistemas urbanos complejos.",
      level: "Avanzado",
      duration: "12 semanas",
      format: "Híbrido",
      price: "$2,500 MXN",
      rating: 4.9,
      students: 89,
      instructor: "Dra. Dainiz Noray Montoya García",
      topics: ["Análisis de flujos", "Modelado termodinámico", "Eficiencia energética", "Optimización urbana"],
      nextStart: "20 de Febrero, 2025",
      status: "Próximamente"
    },
    {
      title: "Metabolismo Social y Urbano",
      description: "Estudio de cómo las ciudades consumen y transforman recursos materiales y energéticos.",
      level: "Intermedio",
      duration: "10 semanas",
      format: "Online",
      price: "$1,800 MXN",
      rating: 4.7,
      students: 156,
      instructor: "Dra. Dainiz Noray Montoya García",
      topics: ["Flujos de materiales", "Consumo energético", "Gestión de residuos", "Indicadores de metabolismo"],
      nextStart: "10 de Marzo, 2025",
      status: "Inscripciones abiertas"
    },
    {
      title: "Complejidad de Sistemas Socio-ambientales",
      description: "Análisis de la interacción compleja entre sistemas sociales y ambientales urbanos.",
      level: "Avanzado",
      duration: "14 semanas",
      format: "Presencial",
      price: "$3,200 MXN",
      rating: 4.6,
      students: 67,
      instructor: "Dra. Dainiz Noray Montoya García",
      topics: ["Teoría de sistemas", "Modelado de complejidad", "Resiliencia urbana", "Adaptación climática"],
      nextStart: "5 de Abril, 2025",
      status: "Próximamente"
    }
  ];

  const workshops = [
    {
      title: "Taller: Indicadores de Sustentabilidad Urbana",
      description: "Sesión práctica para desarrollar y aplicar indicadores de sustentabilidad en proyectos urbanos.",
      duration: "1 día",
      format: "Presencial",
      price: "$800 MXN",
      location: "CDMX",
      date: "25 de Enero, 2025",
      capacity: 25,
      status: "Inscripciones abiertas"
    },
    {
      title: "Seminario: Termodinámica para Planificadores Urbanos",
      description: "Seminario intensivo sobre la aplicación de principios termodinámicos en la planificación urbana.",
      duration: "2 días",
      format: "Híbrido",
      price: "$1,200 MXN",
      location: "Online + CDMX",
      date: "15-16 de Febrero, 2025",
      capacity: 40,
      status: "Inscripciones abiertas"
    }
  ];

  const testimonials = [
    {
      name: "María González",
      role: "Arquitecta Urbana",
      organization: "Estudio de Arquitectura Sustentable",
      content: "El curso de Sustentabilidad Urbana transformó mi perspectiva sobre el diseño urbano. Ahora integro principios de sustentabilidad en todos mis proyectos.",
      rating: 5
    },
    {
      name: "Carlos Mendoza",
      role: "Funcionario Público",
      organization: "Secretaría de Desarrollo Urbano",
      content: "La metodología de la Dra. Montoya es excepcional. Los conceptos de termodinámica urbana han sido fundamentales para nuestras políticas públicas.",
      rating: 5
    },
    {
      name: "Ana Rodríguez",
      role: "Investigadora",
      organization: "Universidad Nacional",
      content: "Los cursos son rigurosos académicamente pero muy prácticos. He aplicado directamente los conocimientos en mi investigación sobre metabolismo urbano.",
      rating: 4
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-800 via-teal-700 to-emerald-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cursos y Educación
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Comparto mi conocimiento y experiencia a través de <strong>cursos especializados</strong>, 
              <strong>talleres prácticos</strong> y <strong>programas educativos</strong> para formar 
              profesionales comprometidos con la sustentabilidad urbana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="#cursos">
                  Ver cursos disponibles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contacto">
                  Solicitar curso personalizado
                  <Mail className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Course */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Curso Destacado
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              El curso más popular y fundamental para entender la sustentabilidad urbana.
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-t-lg">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Más Popular
                </Badge>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.8</span>
                  <span className="text-emerald-100">(1,247 estudiantes)</span>
                </div>
              </div>
              <CardTitle className="text-3xl">Fundamentos de Sustentabilidad Urbana</CardTitle>
              <CardDescription className="text-emerald-100 text-lg">
                Curso introductorio sobre los principios básicos de la sustentabilidad en contextos urbanos.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Detalles del curso:</h3>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-emerald-600" />
                      <span>8 semanas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-emerald-600" />
                      <span>Nivel: Básico</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Play className="h-4 w-4 text-emerald-600" />
                      <span>Formato: Online</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-emerald-600" />
                      <span>Próximo inicio: 15 de Enero, 2025</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Temas principales:</h3>
                  <ul className="space-y-1 text-sm text-slate-600">
                    {["Conceptos básicos", "Indicadores urbanos", "Políticas públicas", "Casos de estudio"].map((topic, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Inscribirse al curso
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar programa
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Adolescent Courses Section */}
      <section id="cursos-adolescentes" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Cursos para Adolescentes
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              En esta sección de cursos está enfocado para adolescentes, con el propósito de generar en ellos, 
              el inicio del pensamiento crítico. Se darán capacitaciones en lectura, matemáticas y ciencias en general.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.slice(0, 2).map((course, index) => (
              <Card key={index} className="border-2 border-blue-200 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                      {course.level}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-blue-900">{course.title}</CardTitle>
                  <CardDescription className="text-blue-700">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span>{course.duration}</span>
                      <span>•</span>
                      <span>{course.format}</span>
                      <span>•</span>
                      <span className="font-medium text-blue-600">{course.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span>{course.students} estudiantes</span>
                      <span>•</span>
                      <span>Próximo inicio: {course.nextStart}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mb-4">
                    {course.topics.slice(0, 3).map((topic, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-blue-200 text-blue-700">
                        {topic}
                      </Badge>
                    ))}
                    {course.topics.length > 3 && (
                      <Badge variant="outline" className="text-xs border-blue-200 text-blue-700">
                        +{course.topics.length - 3} más
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 border-blue-300 text-blue-700 hover:bg-blue-50">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Detalles
                    </Button>
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700" disabled={course.status === "Próximamente"}>
                      {course.status === "Próximamente" ? "Próximamente" : "Inscribirse"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Courses Section */}
      <section id="cursos-academicos" className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Cursos Académicos para Profesionales
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              En esta sección académica netamente se dan cursos para profesionales y adultos, 
              que quieran aprender temas relacionados con el feminismo, ecología y ciencias híbridas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.slice(2).map((course, index) => (
              <Card key={index} className="border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">
                      {course.level}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-emerald-900">{course.title}</CardTitle>
                  <CardDescription className="text-emerald-700">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Clock className="h-4 w-4 text-emerald-600" />
                      <span>{course.duration}</span>
                      <span>•</span>
                      <span>{course.format}</span>
                      <span>•</span>
                      <span className="font-medium text-emerald-600">{course.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Users className="h-4 w-4 text-emerald-600" />
                      <span>{course.students} estudiantes</span>
                      <span>•</span>
                      <span>Próximo inicio: {course.nextStart}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mb-4">
                    {course.topics.slice(0, 3).map((topic, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-emerald-200 text-emerald-700">
                        {topic}
                      </Badge>
                    ))}
                    {course.topics.length > 3 && (
                      <Badge variant="outline" className="text-xs border-emerald-200 text-emerald-700">
                        +{course.topics.length - 3} más
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 border-emerald-300 text-emerald-700 hover:bg-emerald-50">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Detalles
                    </Button>
                    <Button size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700" disabled={course.status === "Próximamente"}>
                      {course.status === "Próximamente" ? "Próximamente" : "Inscribirse"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Talleres y Seminarios
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Sesiones intensivas y prácticas para profundizar en temas específicos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {workshops.map((workshop, index) => (
              <Card key={index} className="border border-slate-200 shadow-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{workshop.format}</Badge>
                    <span className="text-sm text-slate-500">{workshop.duration}</span>
                  </div>
                  <CardTitle className="text-lg">{workshop.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {workshop.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="h-4 w-4" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <MapPin className="h-4 w-4" />
                      <span>{workshop.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Users className="h-4 w-4" />
                      <span>Capacidad: {workshop.capacity} personas</span>
                    </div>
                    <div className="text-lg font-semibold text-emerald-600">
                      {workshop.price}
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Inscribirse al taller
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Lo que dicen nuestros estudiantes
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Testimonios de profesionales que han transformado su práctica gracias a nuestros cursos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                    <div className="text-sm text-slate-500">{testimonial.organization}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">
            ¿Necesitas un curso personalizado?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Puedo diseñar programas educativos específicos para tu organización, 
            empresa o grupo de profesionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contacto">
                Solicitar curso personalizado
                <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/investigacion">
                Conocer mi investigación
                <BookOpen className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
