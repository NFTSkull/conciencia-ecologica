"use client";

import { SectionBanner } from '@/components/sections/section-banner';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Target, Leaf } from 'lucide-react';
import DonationCheckout from '@/components/payments/DonationCheckout';

export default function DonarPage() {
  return (
    <div>
      <SectionBanner
        title="Donar"
        subtitle="Apoya la investigación en ciencias ambientales y la divulgación del conocimiento"
        theme="theme-blog"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de donación */}
          <div>
            <DonationCheckout />
          </div>

          {/* Información sobre el uso de donativos */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                ¿Cómo se utilizan los donativos?
              </h2>
              <p className="text-slate-600 mb-6">
                Tu contribución nos permite continuar investigando y divulgando conocimiento 
                sobre sustentabilidad, metabolismo urbano y complejidad socio-ambiental.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-emerald-100">
                  <BookOpen className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Investigación</h3>
                  <p className="text-sm text-slate-600">
                    Financiar estudios sobre metabolismo urbano y sustentabilidad.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-lime-100">
                  <Users className="h-5 w-5 text-lime-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Divulgación</h3>
                  <p className="text-sm text-slate-600">
                    Crear contenido educativo y talleres abiertos al público.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-teal-100">
                  <Target className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Cursos</h3>
                  <p className="text-sm text-slate-600">
                    Desarrollar programas de formación accesibles para todos.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-cyan-100">
                  <Leaf className="h-5 w-5 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Sustentabilidad</h3>
                  <p className="text-sm text-slate-600">
                    Promover prácticas ambientales responsables.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA adicional */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-2">
                ¿Prefieres otra forma de apoyo?
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                También puedes compartir nuestro contenido, participar en nuestros cursos 
                o contactarnos para colaboraciones.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="/contacto">
                  Contactar
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
