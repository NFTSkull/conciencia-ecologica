"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  CreditCard, 
  Mail, 
  CheckCircle,
  ArrowRight,
  Gift,
  Users,
  BookOpen
} from 'lucide-react';
import Link from 'next/link';

export default function DonarPage() {
  const [monto, setMonto] = useState('');
  const [email, setEmail] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const montosSugeridos = [100, 200, 500, 1000, 2000];

  const handleDonacion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aceptaTerminos) {
      alert('Debes aceptar los términos y condiciones');
      return;
    }
    
    setIsProcessing(true);
    
    // Simulación de procesamiento de pago
    setTimeout(() => {
      setIsProcessing(false);
      alert('¡Gracias por tu donativo! Recibirás un correo de confirmación.');
      setMonto('');
      setEmail('');
      setAceptaTerminos(false);
    }, 2000);
  };

  return (
    <div>
      {/* Banner Section */}
      <section className="bg-gradient-to-br from-rose-600 via-pink-600 to-rose-700 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mr-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Donar
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-90">
              Apoya la divulgación y la formación
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Tu contribución impulsa investigación abierta, materiales educativos y becas para estudiantes. Gracias por sumar a una Conciencia Ecológica.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Formulario de Donación */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Realiza tu donativo
              </CardTitle>
              <CardDescription className="text-center">
                Elige el monto que deseas donar y completa la información
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleDonacion} className="space-y-6">
                {/* Monto */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Monto (MXN)
                  </label>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {montosSugeridos.map((montoSugerido) => (
                      <button
                        key={montoSugerido}
                        type="button"
                        onClick={() => setMonto(montoSugerido.toString())}
                        className={`p-3 rounded-lg border-2 transition-colors ${
                          monto === montoSugerido.toString()
                            ? 'border-rose-500 bg-rose-50 text-rose-700'
                            : 'border-slate-200 hover:border-rose-300'
                        }`}
                      >
                        ${montoSugerido}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500">
                      $
                    </span>
                    <input
                      type="number"
                      placeholder="Otro monto"
                      value={monto}
                      onChange={(e) => setMonto(e.target.value)}
                      className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      min="1"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Recibirás un recibo por correo electrónico
                  </p>
                </div>

                {/* Términos */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terminos"
                    checked={aceptaTerminos}
                    onChange={(e) => setAceptaTerminos(e.target.checked)}
                    className="mt-1 h-4 w-4 text-rose-600 focus:ring-rose-500 border-slate-300 rounded"
                    required
                  />
                  <label htmlFor="terminos" className="text-sm text-slate-700">
                    Acepto los <Link href="/legal/terminos-y-condiciones" className="text-rose-600 hover:text-rose-700 underline">Términos y Condiciones</Link> y la <Link href="/legal/politica-de-privacidad" className="text-rose-600 hover:text-rose-700 underline">Política de Privacidad</Link>
                  </label>
                </div>

                {/* Botón de Donación */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-rose-600 hover:bg-rose-700"
                  disabled={isProcessing || !monto || !email || !aceptaTerminos}
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Procesando...
                    </>
                  ) : (
                    <>
                      <Heart className="mr-2 h-4 w-4" />
                      Donar ahora
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Información sobre el uso de donativos */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-center">
                ¿Cómo se utilizan los donativos?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="p-3 bg-emerald-100 rounded-lg w-fit mx-auto mb-3">
                    <BookOpen className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Investigación</h4>
                  <p className="text-sm text-slate-600">
                    Financiar proyectos de investigación abierta y accesible
                  </p>
                </div>
                <div className="text-center">
                  <div className="p-3 bg-blue-100 rounded-lg w-fit mx-auto mb-3">
                    <Gift className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Materiales</h4>
                  <p className="text-sm text-slate-600">
                    Crear y distribuir materiales educativos gratuitos
                  </p>
                </div>
                <div className="text-center">
                  <div className="p-3 bg-purple-100 rounded-lg w-fit mx-auto mb-3">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Becas</h4>
                  <p className="text-sm text-slate-600">
                    Otorgar becas para estudiantes en ciencias ambientales
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <section className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Otras formas de apoyar
            </h3>
            <p className="text-slate-600 mb-6">
              Además de donativos, puedes apoyar compartiendo nuestro contenido 
              o participando en nuestros cursos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="/cursos">
                  Ver cursos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contacto">
                  Contactar
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
