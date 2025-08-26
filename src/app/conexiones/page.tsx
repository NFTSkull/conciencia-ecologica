"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Facebook, 
  Instagram, 
  MessageCircle,
  Globe,
  Users,
  BookOpen,
  Leaf,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function ConexionesPage() {
  return (
    <div>
      {/* Hero Section con mejor impacto visual */}
      <section className="relative bg-gradient-to-br from-emerald-700 via-teal-600 to-sky-700 py-24 text-white overflow-hidden">
        {/* Elementos de fondo decorativos */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-sm mr-6 shadow-2xl">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                Conexiones
              </h1>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 opacity-95 leading-tight">
              IEAPC: Construyendo Redes para el Cambio Social
            </h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Como Instituto de Estudios Ambientales y Pensamiento Crítico, conectamos iniciativas, compartimos conocimiento y formamos alianzas estratégicas para transformar la realidad ambiental y social de nuestro tiempo.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introducción contextual */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              IEAPC: Un Ecosistema de Transformación
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Como Instituto de Estudios Ambientales y Pensamiento Crítico, nuestras tres entidades trabajan de manera sinérgica para crear un impacto integral: 
              desde la divulgación crítica hasta la formación académica, pasando por la colaboración creativa. 
              Cada conexión representa un pilar fundamental en nuestra misión de construir un futuro más justo y sustentable.
            </p>
          </div>
        </section>

        {/* Tarjetas principales con mejor diseño */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Blog - Pluma Ecosocial */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-green-50 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600"></div>
            <CardHeader className="text-center pb-6 pt-8">
              <div className="flex items-center justify-center mb-6">
                <div className="p-5 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl text-slate-900 mb-3 font-bold">
                Pluma Ecosocial
              </CardTitle>
              <CardDescription className="text-slate-600 text-base leading-relaxed">
                Nuestro blog principal que combina el rigor académico con la accesibilidad del lenguaje cotidiano. 
                Aquí compartimos análisis profundos sobre ecología, justicia social y pensamiento crítico, 
                conectando teoría y práctica para inspirar acción.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pb-8">
              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                  <Link href="https://www.instagram.com/pluma.ecosocial20?igsh=MXQwbjV5M3l1OTl6dQ==" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5 mr-2" />
                    Seguir en Instagram
                  </Link>
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                  <Link href="https://www.facebook.com/profile.php?id=61579210782776" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-5 w-5 mr-2" />
                    Seguir en Facebook
                  </Link>
                </Button>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300 px-4 py-2 text-sm font-medium">
                  🚀 Blog Principal
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Sede Curiosa */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600"></div>
            <CardHeader className="text-center pb-6 pt-8">
              <div className="flex items-center justify-center mb-6">
                <div className="p-5 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl text-slate-900 mb-3 font-bold">
                La Sede Curiosa
              </CardTitle>
              <CardDescription className="text-slate-600 text-base leading-relaxed">
                Un espacio vibrante donde la creatividad se encuentra con la innovación social. 
                Aquí facilitamos colaboraciones entre activistas, artistas, investigadores y emprendedores 
                que comparten la visión de un mundo más justo y sustentable.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pb-8">
              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                  <Link href="https://www.facebook.com/share/19PnofUbDh/" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-5 w-5 mr-2" />
                    Seguir en Facebook
                  </Link>
                </Button>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-300 px-4 py-2 text-sm font-medium">
                  🌟 Espacio Colaborativo
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Instituto de Estudios Ambientales */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-teal-50 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-br from-teal-500 to-cyan-600"></div>
            <CardHeader className="text-center pb-6 pt-8">
              <div className="flex items-center justify-center mb-6">
                <div className="p-5 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="h-10 w-10 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl text-slate-900 mb-3 font-bold">
                Instituto de Estudios Ambientales y Pensamiento Crítico
              </CardTitle>
              <CardDescription className="text-slate-600 text-base leading-relaxed">
                Centro de excelencia académica que combina investigación rigurosa con formación práctica. 
                Desarrollamos capacidades críticas y herramientas analíticas para comprender y transformar 
                los desafíos ambientales y sociales de nuestro tiempo.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pb-8">
              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                  <Link href="https://www.facebook.com/share/1Bw4Z8bvw3/" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-5 w-5 mr-2" />
                    Seguir en Facebook
                  </Link>
                </Button>
                <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                  <Link href="/contacto">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Contactar por WhatsApp
                  </Link>
                </Button>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="bg-teal-100 text-teal-800 border-teal-300 px-4 py-2 text-sm font-medium">
                  🎓 Instituto Académico
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sección de impacto y propósito */}
        <section className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-12 text-center mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-8">
            El Poder de la Conexión
          </h3>
          <p className="text-lg text-slate-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            Estas tres entidades no trabajan de manera aislada, sino que forman un ecosistema interconectado 
            donde cada conexión fortalece y amplifica el impacto de las demás. Juntas, creamos una red de 
            transformación social que va más allá de la suma de sus partes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Divulgación Crítica</h4>
              <p className="text-slate-600 leading-relaxed">
                Democratizamos el conocimiento académico, haciéndolo accesible y relevante para la acción social.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Colaboración Creativa</h4>
              <p className="text-slate-600 leading-relaxed">
                Facilitamos encuentros que generan sinergias inesperadas y proyectos innovadores.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Formación Especializada</h4>
              <p className="text-slate-600 leading-relaxed">
                Desarrollamos capacidades técnicas y pensamiento crítico para la transformación social.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              ¿Listo para Conectarte?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Únete a nuestra red de cambio social. Cada conexión, cada seguimiento, cada interacción 
              fortalece este ecosistema de transformación.
            </p>
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300" asChild>
              <Link href="/contacto">
                Comenzar a Conectar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
