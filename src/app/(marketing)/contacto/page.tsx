"use client";

import { useState } from 'react';
import { SectionBanner } from '@/components/sections/section-banner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, MapPin, Phone, Clock, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!aceptaTerminos) {
      toast.error('Debes aceptar los términos y condiciones');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success('Mensaje enviado correctamente');
        setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
        setAceptaTerminos(false);
      } else {
        toast.error('Error al enviar el mensaje');
      }
    } catch (error) {
      toast.error('Error de conexión');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div>
        <SectionBanner
          title="Contacto"
          subtitle="Gracias por tu mensaje"
          theme="theme-consultoria"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="max-w-2xl mx-auto text-center border-0 shadow-lg">
            <CardContent className="pt-12 pb-12">
              <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                ¡Mensaje enviado!
              </h2>
              <p className="text-slate-600 mb-6">
                Hemos recibido tu mensaje y nos pondremos en contacto contigo 
                lo antes posible.
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
      <SectionBanner
        title="Contacto"
        subtitle="¿Tienes preguntas o quieres colaborar? Estamos aquí para ayudarte"
        theme="theme-consultoria"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de contacto */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">
                  Envíanos un mensaje
                </CardTitle>
                <CardDescription>
                  Completa el formulario y nos pondremos en contacto contigo.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nombre" className="text-sm font-medium text-slate-700">
                        Nombre completo *
                      </Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                        Correo electrónico *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="asunto" className="text-sm font-medium text-slate-700">
                      Asunto *
                    </Label>
                    <Input
                      id="asunto"
                      name="asunto"
                      type="text"
                      required
                      value={formData.asunto}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="mensaje" className="text-sm font-medium text-slate-700">
                      Mensaje *
                    </Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={5}
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Describe tu consulta o propuesta..."
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terminos-contacto"
                      checked={aceptaTerminos}
                      onCheckedChange={(checked) => setAceptaTerminos(checked as boolean)}
                    />
                    <Label htmlFor="terminos-contacto" className="text-sm text-slate-600 leading-relaxed">
                      Acepto los{' '}
                      <a href="/legal/terminos-y-condiciones" className="text-emerald-600 hover:underline">
                        términos y condiciones
                      </a>{' '}
                      y la{' '}
                      <a href="/legal/politica-de-privacidad" className="text-emerald-600 hover:underline">
                        política de privacidad
                      </a>
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-cyan-700 hover:bg-cyan-800"
                  >
                    {isLoading ? (
                      'Enviando...'
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

          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Información de contacto
              </h2>
              <p className="text-slate-600 mb-6">
                Estamos disponibles para responder tus consultas sobre investigación, 
                cursos, consultoría o cualquier tema relacionado con las ciencias ambientales.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-3 rounded-lg bg-cyan-100">
                  <Mail className="h-5 w-5 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <p className="text-slate-600">contacto@concienciaecologica.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-3 rounded-lg bg-teal-100">
                  <MapPin className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Ubicación</h3>
                  <p className="text-slate-600">México</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-3 rounded-lg bg-emerald-100">
                  <Clock className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Tiempo de respuesta</h3>
                  <p className="text-slate-600">24-48 horas hábiles</p>
                </div>
              </div>
            </div>

            {/* Áreas de consulta */}
            <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-4">
                ¿Sobre qué podemos ayudarte?
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Consultas sobre investigación en ciencias ambientales</li>
                <li>• Información sobre cursos y programas de formación</li>
                <li>• Servicios de consultoría ambiental</li>
                <li>• Colaboraciones académicas y de investigación</li>
                <li>• Charlas y talleres de divulgación</li>
                <li>• Cualquier otra consulta relacionada</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
