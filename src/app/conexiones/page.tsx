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
  Leaf
} from 'lucide-react';
import Link from 'next/link';

export default function ConexionesPage() {
  return (
    <div>
      {/* Banner Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-500 to-sky-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mr-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Conexiones
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-90">
              Nuestras redes y colaboraciones
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Conecta con nuestras diferentes iniciativas y proyectos a través de sus redes sociales oficiales.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Blog - Pluma Ecosocial */}
          <Card className="hover:shadow-lg transition-shadow border-green-200">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-green-100 rounded-full">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-2xl text-slate-900 mb-2">
                Pluma Ecosocial
              </CardTitle>
              <CardDescription className="text-slate-600">
                Nuestro blog principal con reflexiones sobre ecología, justicia social y pensamiento crítico.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                  <Link href="https://www.instagram.com/pluma.ecosocial20?igsh=MXQwbjV5M3l1OTl6dQ==" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4 mr-2" />
                    Seguir en Instagram
                  </Link>
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="https://www.facebook.com/profile.php?id=61579210782776" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4 mr-2" />
                    Seguir en Facebook
                  </Link>
                </Button>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                  Blog Principal
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Sede Curiosa */}
          <Card className="hover:shadow-lg transition-shadow border-purple-200">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-purple-100 rounded-full">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <CardTitle className="text-2xl text-slate-900 mb-2">
                La Sede Curiosa
              </CardTitle>
              <CardDescription className="text-slate-600">
                Espacio de encuentro y colaboración para proyectos innovadores y pensamiento creativo.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="https://www.facebook.com/share/19PnofUbDh/" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4 mr-2" />
                    Seguir en Facebook
                  </Link>
                </Button>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">
                  Espacio Colaborativo
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Instituto de Estudios Ambientales */}
          <Card className="hover:shadow-lg transition-shadow border-teal-200">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-teal-100 rounded-full">
                  <Leaf className="h-8 w-8 text-teal-600" />
                </div>
              </div>
              <CardTitle className="text-2xl text-slate-900 mb-2">
                Instituto de Estudios Ambientales y Pensamiento Crítico
              </CardTitle>
              <CardDescription className="text-slate-600">
                Centro de investigación y formación en temas ambientales, sustentabilidad y análisis crítico.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="https://www.facebook.com/share/1Bw4Z8bvw3/" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4 mr-2" />
                    Seguir en Facebook
                  </Link>
                </Button>
                <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/contacto">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contactar por WhatsApp
                  </Link>
                </Button>
              </div>
              <div className="text-center">
                <Badge variant="outline" className="bg-teal-100 text-teal-800 border-teal-200">
                  Instituto Académico
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Información Adicional */}
        <section className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            ¿Por qué estas conexiones?
          </h3>
          <p className="text-slate-600 mb-6 max-w-3xl mx-auto">
            Cada una de estas entidades representa un aspecto fundamental de nuestro trabajo: 
            la divulgación a través del blog, la colaboración en espacios creativos, y la formación académica especializada. 
            Juntas forman un ecosistema integral para el cambio social y ambiental.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4">
              <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Divulgación</h4>
              <p className="text-sm text-slate-600">Compartimos conocimiento y reflexiones críticas</p>
            </div>
            <div className="text-center p-4">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Colaboración</h4>
              <p className="text-sm text-slate-600">Construimos redes y espacios de encuentro</p>
            </div>
            <div className="text-center p-4">
              <Leaf className="h-12 w-12 text-teal-600 mx-auto mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Formación</h4>
              <p className="text-sm text-slate-600">Desarrollamos capacidades y pensamiento crítico</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
