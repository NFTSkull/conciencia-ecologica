"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, Eye, Lock, Users } from 'lucide-react';
import Link from 'next/link';

export default function PoliticaPrivacidadPage() {
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
            Política de Privacidad
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Cómo protegemos y utilizamos su información personal
          </p>
        </div>

        {/* Contenido */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-800 flex items-center">
                <Shield className="mr-3 h-6 w-6" />
                Política de Privacidad
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <div className="space-y-6 text-slate-700">
                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
                    <Eye className="mr-2 h-5 w-5 text-emerald-600" />
                    1. Información que Recopilamos
                  </h2>
                  <p className="leading-relaxed">
                    Recopilamos información que usted nos proporciona directamente, como cuando se registra para un curso, 
                    hace una donación o nos contacta a través de nuestro formulario de contacto.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
                    <Lock className="mr-2 h-5 w-5 text-emerald-600" />
                    2. Cómo Utilizamos su Información
                  </h2>
                  <p className="leading-relaxed">
                    Utilizamos la información recopilada para proporcionar nuestros servicios, procesar pagos, 
                    comunicarnos con usted y mejorar nuestro sitio web.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
                    <Users className="mr-2 h-5 w-5 text-emerald-600" />
                    3. Compartir Información
                  </h2>
                  <p className="leading-relaxed">
                    No vendemos, alquilamos ni compartimos su información personal con terceros, 
                    excepto cuando es necesario para proporcionar nuestros servicios o cuando la ley lo requiera.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    4. Seguridad de Datos
                  </h2>
                  <p className="leading-relaxed">
                    Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger 
                    su información personal contra acceso no autorizado, alteración, divulgación o destrucción.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    5. Sus Derechos
                  </h2>
                  <p className="leading-relaxed">
                    Usted tiene derecho a acceder, corregir, eliminar y oponerse al procesamiento de su información personal. 
                    Para ejercer estos derechos, contáctenos.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    6. Cookies y Tecnologías Similares
                  </h2>
                  <p className="leading-relaxed">
                    Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web, 
                    analizar el tráfico y personalizar el contenido.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    7. Cambios en esta Política
                  </h2>
                  <p className="leading-relaxed">
                    Podemos actualizar esta política de privacidad ocasionalmente. 
                    Le notificaremos cualquier cambio significativo por correo electrónico o mediante un aviso en nuestro sitio.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    8. Contacto
                  </h2>
                  <p className="leading-relaxed">
                    Si tiene preguntas sobre esta política de privacidad, puede contactarnos a través de 
                    <Link href="/contacto" className="text-emerald-600 hover:text-emerald-700 underline ml-1">
                      nuestra página de contacto
                    </Link>.
                  </p>
                </section>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-8">
                  <p className="text-amber-800 text-sm">
                    <strong>Nota:</strong> Este es un contenido placeholder. La política de privacidad real 
                    debe ser proporcionada por el cliente y revisada por un profesional legal.
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
