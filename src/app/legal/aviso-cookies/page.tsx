"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Cookie, Settings, Info } from 'lucide-react';
import Link from 'next/link';

export default function AvisoCookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Aviso de Cookies
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Información sobre el uso de cookies en nuestro sitio web
          </p>
        </div>

        {/* Contenido */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-800 flex items-center">
                <Cookie className="mr-3 h-6 w-6" />
                Aviso de Cookies
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <div className="space-y-6 text-slate-700">
                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
                    <Info className="mr-2 h-5 w-5 text-emerald-600" />
                    ¿Qué son las Cookies?
                  </h2>
                  <p className="leading-relaxed">
                    Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web. 
                    Nos ayudan a mejorar su experiencia y a analizar cómo utiliza nuestro sitio.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    Tipos de Cookies que Utilizamos
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-slate-900 mb-2">Cookies Esenciales</h3>
                      <p className="text-sm text-slate-600">
                        Necesarias para el funcionamiento básico del sitio web. No se pueden desactivar.
                      </p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-slate-900 mb-2">Cookies de Funcionalidad</h3>
                      <p className="text-sm text-slate-600">
                        Mejoran su experiencia recordando sus preferencias y configuraciones.
                      </p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-slate-900 mb-2">Cookies de Análisis</h3>
                      <p className="text-sm text-slate-600">
                        Nos ayudan a entender cómo se utiliza el sitio para mejorarlo.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    Gestión de Cookies
                  </h2>
                  <p className="leading-relaxed">
                    Puede controlar y gestionar las cookies a través de la configuración de su navegador. 
                    Tenga en cuenta que desactivar ciertas cookies puede afectar la funcionalidad del sitio.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    Cookies de Terceros
                  </h2>
                  <p className="leading-relaxed">
                    Algunos servicios de terceros, como Google Analytics, pueden colocar cookies en su dispositivo. 
                    Estos servicios tienen sus propias políticas de privacidad.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    Actualizaciones de este Aviso
                  </h2>
                  <p className="leading-relaxed">
                    Podemos actualizar este aviso de cookies ocasionalmente. 
                    Le recomendamos revisarlo periódicamente.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    Contacto
                  </h2>
                  <p className="leading-relaxed">
                    Si tiene preguntas sobre nuestro uso de cookies, puede contactarnos a través de 
                    <Link href="/contacto" className="text-emerald-600 hover:text-emerald-700 underline ml-1">
                      nuestra página de contacto
                    </Link>.
                  </p>
                </section>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-8">
                  <p className="text-blue-800 text-sm">
                    <strong>Información:</strong> Este aviso de cookies es informativo. 
                    Para más detalles sobre cookies específicas, revise la configuración de su navegador.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
