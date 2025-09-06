"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TerminosCondicionesPage() {
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
            Términos y Condiciones
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Condiciones de uso del sitio web Conciencia Ecológica
          </p>
        </div>

        {/* Contenido */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-800">
                Términos y Condiciones de Uso
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <div className="space-y-6 text-slate-700">
                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    1. Aceptación de los Términos
                  </h2>
                  <p className="leading-relaxed">
                    Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos y condiciones de uso. 
                    Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    2. Uso del Sitio
                  </h2>
                  <p className="leading-relaxed">
                    Este sitio web está destinado únicamente para fines informativos y educativos. 
                    Usted se compromete a utilizar el sitio de manera responsable y de acuerdo con todas las leyes aplicables.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    3. Propiedad Intelectual
                  </h2>
                  <p className="leading-relaxed">
                    Todo el contenido de este sitio web, incluyendo textos, imágenes, gráficos y software, 
                    está protegido por derechos de autor y otras leyes de propiedad intelectual.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    4. Limitación de Responsabilidad
                  </h2>
                  <p className="leading-relaxed">
                    Conciencia Ecológica no se hace responsable por daños directos, indirectos, incidentales o consecuentes 
                    que puedan resultar del uso de este sitio web.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    5. Modificaciones
                  </h2>
                  <p className="leading-relaxed">
                    Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                    Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    6. Contacto
                  </h2>
                  <p className="leading-relaxed">
                    Si tiene preguntas sobre estos términos y condiciones, puede contactarnos a través de 
                    <Link href="/contacto" className="text-emerald-600 hover:text-emerald-700 underline ml-1">
                      nuestra página de contacto
                    </Link>.
                  </p>
                </section>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-8">
                  <p className="text-amber-800 text-sm">
                    <strong>Nota:</strong> Este es un contenido placeholder. Los términos y condiciones reales 
                    deben ser proporcionados por el cliente y revisados por un profesional legal.
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
