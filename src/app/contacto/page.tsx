"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send,
  CheckCircle,
  ArrowRight,
  Users,
  BookOpen,
  TrendingUp,
  GraduationCap
} from 'lucide-react';
import Link from 'next/link';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
    aceptaTerminos: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.aceptaTerminos) {
      alert('Debes aceptar los términos y la política de privacidad');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        nombre: '',
        correo: '',
        mensaje: '',
        aceptaTerminos: false
      });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const servicios = [
    {
      titulo: 'Charlas y conferencias',
      descripcion: 'Presentaciones sobre sustentabilidad, metabolismo urbano y ciencias ambientales',
      icon: Users,
      color: 'bg-emerald-100 text-emerald-800'
    },
    {
      titulo: 'Diagnósticos de sustentabilidad',
      descripcion: 'Evaluaciones técnicas para instituciones y organizaciones',
      icon: TrendingUp,
      color: 'bg-cyan-100 text-cyan-800'
    },
    {
      titulo: 'Cursos para instituciones',
      descripcion: 'Programas de formación adaptados a necesidades específicas',
      icon: GraduationCap,
      color: 'bg-lime-100 text-lime-800'
    },
    {
      titulo: 'Colaboraciones académicas',
      descripcion: 'Proyectos de investigación y publicaciones conjuntas',
      icon: BookOpen,
      color: 'bg-purple-100 text-purple-800'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center py-20">
        <div className="container mx-auto px-4 max-w-md">
          <Card className="text-center">
            <CardContent className="pt-8">
              <div className="flex items-center justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <CheckCircle className="h-8 w-8 text-emerald-600" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                ¡Mensaje enviado!
              </h2>
              <p className="text-slate-600 mb-6">
                Gracias por contactarme. Te responderé a la brevedad posible.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>
                Enviar otro mensaje
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Banner Section */}
      <section className="bg-gradient-to-br from-emerald-700 via-teal-600 to-emerald-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mr-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Contacto
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-90">
              Construyamos soluciones sostenibles
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              ¿Buscas una charla, un diagnóstico o un curso para tu institución? Escríbeme y te responderé a la brevedad.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Envíame un mensaje
                </CardTitle>
                <CardDescription>
                  Completa el formulario y me pondré en contacto contigo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Correo */}
                  <div>
                    <label htmlFor="correo" className="block text-sm font-medium text-slate-700 mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="correo"
                      name="correo"
                      value={formData.correo}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Cuéntame sobre tu proyecto o consulta..."
                      required
                    />
                  </div>

                  {/* Términos */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="aceptaTerminos"
                      name="aceptaTerminos"
                      checked={formData.aceptaTerminos}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-slate-300 rounded"
                      required
                    />
                    <label htmlFor="aceptaTerminos" className="text-sm text-slate-700">
                      Acepto los <Link href="/legal/terminos-y-condiciones" className="text-emerald-600 hover:text-emerald-700 underline">Términos y Condiciones</Link> y la <Link href="/legal/politica-de-privacidad" className="text-emerald-600 hover:text-emerald-700 underline">Política de Privacidad</Link> *
                    </label>
                  </div>

                  {/* Botón de envío */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Información de Contacto y Servicios */}
          <div className="space-y-8">
            {/* Información de Contacto */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  Información de contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-medium text-slate-900">Correo electrónico</p>
                    <p className="text-slate-600">contacto@concienciaecologica.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-medium text-slate-900">Ubicación</p>
                    <p className="text-slate-600">Estado de México, México</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-medium text-slate-900">Teléfono</p>
                    <p className="text-slate-600">+52 (722) XXX-XXXX</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Servicios */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  Servicios disponibles
                </CardTitle>
                <CardDescription>
                  ¿En qué puedo ayudarte?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {servicios.map((servicio, index) => {
                    const Icon = servicio.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${servicio.color}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 text-sm">
                            {servicio.titulo}
                          </h4>
                          <p className="text-xs text-slate-600">
                            {servicio.descripcion}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    ¿Prefieres explorar primero?
                  </h4>
                  <p className="text-sm text-slate-600 mb-4">
                    Revisa mi trabajo antes de contactarme
                  </p>
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/investigacion">
                        Ver investigación
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/cursos">
                        Explorar cursos
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
