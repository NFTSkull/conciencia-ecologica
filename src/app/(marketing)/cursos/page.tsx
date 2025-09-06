import Link from 'next/link';
import { SectionBanner } from '@/components/sections/section-banner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  BookOpen, 
  Play, 
  Video,
  ArrowRight,
  Brain,
  Leaf
} from 'lucide-react';

const cursosAdolescentes = [
  {
    id: '1',
    slug: 'pensamiento-critico-lectura-mates-ciencia',
    titulo: 'Pensamiento crítico: lectura, mates y ciencia',
    resumen: 'Desarrolla habilidades de pensamiento crítico a través de la lectura, matemáticas y ciencias.',
    duracion: '8 horas',
    modalidad: 'en_vivo' as const,
    precio_mxn: 800,
    portada_url: null,
    destacado: true
  }
];

const cursosAcademicos = [
  {
    id: '2',
    slug: 'ecologia-ciencias-hibridas-fundamentos',
    titulo: 'Ecología y ciencias híbridas: fundamentos',
    resumen: 'Fundamentos teóricos y prácticos de la ecología y las ciencias híbridas para profesionales.',
    duracion: '6 horas',
    modalidad: 'grabado' as const,
    precio_mxn: 1500,
    portada_url: null,
    destacado: true
  }
];

const modalidades = {
  en_vivo: { label: 'En vivo', icon: Play, color: 'bg-green-100 text-green-800' },
  grabado: { label: 'Grabado', icon: Video, color: 'bg-blue-100 text-blue-800' }
};

export default function CursosPage() {
  return (
    <div>
      <SectionBanner
        title="Cursos"
        subtitle="Formación especializada en ciencias ambientales y pensamiento crítico"
        theme="theme-cursos-acad"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Sección Adolescentes */}
        <div className="mb-16" data-theme="theme-cursos-ado">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-full bg-lime-100 mr-4">
                <Users className="h-8 w-8 text-lime-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Cursos para Adolescentes
              </h2>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Inicia el desarrollo del <strong>pensamiento crítico</strong> a través de 
              capacitaciones en lectura, matemáticas y ciencias. Diseñados para despertar 
              la curiosidad científica y la conciencia ambiental.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cursosAdolescentes.map((curso) => {
              const modalidad = modalidades[curso.modalidad];
              const ModalidadIcon = modalidad.icon;
              
              return (
                <Card key={curso.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-lime-100 to-emerald-100 flex items-center justify-center">
                    {curso.portada_url ? (
                      <img src={curso.portada_url} alt={curso.titulo} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-center">
                        <Brain className="h-16 w-16 text-lime-600 mx-auto mb-2" />
                        <p className="text-lime-700 font-medium">Pensamiento Crítico</p>
                      </div>
                    )}
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={modalidad.color}>
                        <ModalidadIcon className="h-3 w-3 mr-1" />
                        {modalidad.label}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {curso.duracion}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-slate-900 group-hover:text-lime-700 transition-colors">
                      {curso.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 mb-4">
                      {curso.resumen}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-lime-600">
                        ${curso.precio_mxn} MXN
                      </div>
                      <Button asChild className="bg-lime-600 hover:bg-lime-700">
                        <Link href={`/cursos/adolescentes/${curso.slug}`}>
                          Comprar
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link href="/cursos/adolescentes">
                Ver todos los cursos para adolescentes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Sección Académica/Profesionales */}
        <div data-theme="theme-cursos-acad">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-full bg-teal-100 mr-4">
                <BookOpen className="h-8 w-8 text-teal-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Cursos Académicos y Profesionales
              </h2>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Formación especializada para profesionales y adultos interesados en 
              <strong> feminismo, ecología y ciencias híbridas</strong>. 
              Contenido avanzado con enfoque teórico-práctico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cursosAcademicos.map((curso) => {
              const modalidad = modalidades[curso.modalidad];
              const ModalidadIcon = modalidad.icon;
              
              return (
                <Card key={curso.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-teal-100 to-sky-100 flex items-center justify-center">
                    {curso.portada_url ? (
                      <img src={curso.portada_url} alt={curso.titulo} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-center">
                        <Leaf className="h-16 w-16 text-teal-600 mx-auto mb-2" />
                        <p className="text-teal-700 font-medium">Ciencias Híbridas</p>
                      </div>
                    )}
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={modalidad.color}>
                        <ModalidadIcon className="h-3 w-3 mr-1" />
                        {modalidad.label}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {curso.duracion}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-slate-900 group-hover:text-teal-700 transition-colors">
                      {curso.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 mb-4">
                      {curso.resumen}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-teal-600">
                        ${curso.precio_mxn} MXN
                      </div>
                      <Button asChild className="bg-teal-600 hover:bg-teal-700">
                        <Link href={`/cursos/academica/${curso.slug}`}>
                          Comprar
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link href="/cursos/academica">
                Ver todos los cursos académicos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Colaboradores Section */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-slate-900 mb-4">
              Colaboradores en Cursos
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Profesionales especializados que enriquecen nuestros programas con su experiencia y conocimiento.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            ¿Tienes dudas sobre nuestros cursos?
          </h3>
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
            Nuestro equipo está disponible para resolver cualquier pregunta sobre 
            contenido, modalidades o proceso de inscripción.
          </p>
          <Button size="lg" asChild>
            <Link href="/contacto">
              Contactar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
