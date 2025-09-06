import Link from 'next/link';
import { SectionBanner } from '@/components/sections/section-banner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Users, Video, BookOpen } from 'lucide-react';

// Datos de ejemplo - en producción vendrían de Supabase
const actividadesDivulgacion = [
  {
    id: '1',
    titulo: 'Taller: Introducción al Pensamiento Crítico Ambiental',
    descripcion: 'Taller interactivo para adolescentes sobre cómo desarrollar pensamiento crítico en temas ambientales.',
    tipo: 'Taller',
    fecha: '2024-03-15',
    url: null,
    destacado: true
  },
  {
    id: '2',
    titulo: 'Charla: Metabolismo Urbano y Sustentabilidad',
    descripcion: 'Presentación sobre los conceptos básicos del metabolismo urbano y su relación con la sustentabilidad.',
    tipo: 'Charla',
    fecha: '2024-02-20',
    url: 'https://youtube.com/watch?v=ejemplo',
    destacado: false
  },
  {
    id: '3',
    titulo: 'Entrevista: Radio Universidad sobre Ciencias Ambientales',
    descripcion: 'Participación en programa de radio universitario discutiendo la importancia de las ciencias ambientales.',
    tipo: 'Medios',
    fecha: '2024-01-10',
    url: 'https://radio.universidad.edu/ejemplo',
    destacado: false
  },
  {
    id: '4',
    titulo: 'Webinar: Complejidad Socio-ambiental en el Siglo XXI',
    descripcion: 'Sesión virtual sobre la complejidad de los sistemas socio-ambientales y su análisis.',
    tipo: 'Webinar',
    fecha: '2023-12-05',
    url: null,
    destacado: false
  }
];

const tipos = {
  'Taller': { icon: Users, color: 'bg-lime-100 text-lime-800' },
  'Charla': { icon: BookOpen, color: 'bg-emerald-100 text-emerald-800' },
  'Medios': { icon: Video, color: 'bg-purple-100 text-purple-800' },
  'Webinar': { icon: Video, color: 'bg-blue-100 text-blue-800' }
};

export default function DivulgacionPage() {
  return (
    <div data-theme="theme-divulgacion">
      <SectionBanner
        title="Divulgación"
        subtitle="Actividades de difusión del conocimiento ambiental para todos los públicos"
        theme="theme-divulgacion"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introducción */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Compartiendo Conocimiento Ambiental
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            La divulgación científica es fundamental para crear conciencia ambiental. A través de talleres, 
            charlas, entrevistas y webinars, llevamos la investigación en ciencias ambientales a todos los públicos, 
            desde adolescentes hasta profesionales, promoviendo el pensamiento crítico y la sustentabilidad.
          </p>
        </div>

        {/* Actividades destacadas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Actividades Recientes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {actividadesDivulgacion.map((actividad) => {
              const tipo = tipos[actividad.tipo as keyof typeof tipos];
              const TipoIcon = tipo.icon;
              const fecha = new Date(actividad.fecha);
              
              return (
                <Card key={actividad.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={tipo.color}>
                        <TipoIcon className="h-3 w-3 mr-1" />
                        {actividad.tipo}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {fecha.toLocaleDateString('es-MX', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-slate-900 group-hover:text-lime-700 transition-colors">
                      {actividad.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 mb-4">
                      {actividad.descripcion}
                    </CardDescription>
                    
                    {actividad.url && (
                      <Button variant="outline" size="sm" asChild className="w-full">
                        <a href={actividad.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Ver actividad
                        </a>
                      </Button>
                    )}
                    
                    {!actividad.url && (
                      <div className="text-sm text-slate-500 text-center py-2">
                        Actividad presencial
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Áreas de divulgación */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Áreas de Divulgación
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-lg bg-lime-100">
                    <Users className="h-6 w-6 text-lime-600" />
                  </div>
                  <CardTitle className="text-xl">Talleres Interactivos</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Talleres prácticos diseñados para diferentes grupos de edad, desde adolescentes 
                  hasta adultos, enfocados en desarrollar pensamiento crítico y conciencia ambiental.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Pensamiento crítico ambiental</li>
                  <li>• Metabolismo urbano básico</li>
                  <li>• Sustentabilidad cotidiana</li>
                  <li>• Análisis de sistemas complejos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-lg bg-emerald-100">
                    <BookOpen className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">Charlas y Conferencias</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Presentaciones académicas y divulgativas sobre investigación en ciencias ambientales, 
                  accesibles para diferentes niveles de conocimiento.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Metabolismo urbano y sustentabilidad</li>
                  <li>• Complejidad socio-ambiental</li>
                  <li>• Termodinámica urbana</li>
                  <li>• Indicadores de sustentabilidad</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-lime-50 to-emerald-50 rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            ¿Te interesa participar en nuestras actividades?
          </h3>
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
            Únete a nuestros talleres, charlas y webinars para aprender más sobre 
            ciencias ambientales y sustentabilidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/contacto">
                Solicitar actividad
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/cursos">
                Ver cursos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
