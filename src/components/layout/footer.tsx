import Link from 'next/link';
import { Leaf, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Conciencia Ecológica</span>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Investigación para un futuro urbano sostenible. Estudio la sustentabilidad 
              y la termodinámica urbana para entender el metabolismo social.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <ExternalLink className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/investigacion" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Investigación
                </Link>
              </li>
              <li>
                <Link href="/cursos" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Cursos
                </Link>
              </li>
              <li>
                <Link href="/publicaciones" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Publicaciones
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-slate-300">contacto@concienciaecologica.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span className="text-slate-300">México</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-slate-300">+52 (55) 1234-5678</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Conciencia Ecológica. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacidad" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


