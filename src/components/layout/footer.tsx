"use client";

import Link from 'next/link';
import { Leaf, Mail, MapPin, Phone, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Acerca de */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Conciencia Ecológica</h3>
            </div>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Investigación especializada en sustentabilidad, metabolismo urbano y termodinámica aplicada para crear ciudades más justas, eficientes y resilientes.
            </p>
            <div className="space-y-2">
              <Link href="#" className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors">
                <ExternalLink className="h-4 w-4" />
                <span>ORCID</span>
              </Link>
              <Link href="#" className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors">
                <ExternalLink className="h-4 w-4" />
                <span>Google Scholar</span>
              </Link>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/investigacion" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Investigación
                </Link>
              </li>
              <li>
                <Link href="/divulgacion" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Divulgación
                </Link>
              </li>
              <li>
                <Link href="/consultoria" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Consultoría
                </Link>
              </li>
              <li>
                <Link href="/cursos" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Cursos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span className="text-slate-300">contacto@concienciaecologica.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span className="text-slate-300">Estado de México, México</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span className="text-slate-300">+52 (722) XXX-XXXX</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/terminos-y-condiciones" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/legal/politica-de-privacidad" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/legal/aviso-cookies" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Aviso de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 text-sm text-center md:text-left">
              Contenido con fines informativos y educativos. © Conciencia Ecológica.
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-slate-400 text-sm">Hecho con</span>
              <Heart className="h-4 w-4 text-rose-500" />
              <span className="text-slate-400 text-sm">para el planeta</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
