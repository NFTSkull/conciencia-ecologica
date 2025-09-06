"use client";

import { useState } from 'react';
import { SectionBanner } from '@/components/sections/section-banner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Calendar, User, Heart, ArrowRight, Leaf } from 'lucide-react';
import { formatDate } from '@/lib/utils';

// Datos de ejemplo - en producción vendrían de Supabase
const posts = [
  {
    id: '1',
    slug: 'caso-cazzu-sistema-patriarcal',
    titulo: 'Caso Cazzu: Una reflexión sobre el sistema patriarcal y la justicia',
    excerpt: 'El caso de Cazzu no es único ni particular, es la situación de muchas mujeres en la actualidad. Una reflexión sobre el sistema judicial patriarcal y las violencias que enfrentan las mujeres.',
    contenido_md: 'Contenido del post...',
    portada_url: null,
    publicado: true,
    solo_suscriptores: false,
    creado_en: '2024-01-20',
    destacado: true
  },
  {
    id: '2',
    slug: 'bienvenida-conciencia-ecologica',
    titulo: 'Bienvenida a Conciencia Ecológica',
    excerpt: 'Una introducción a nuestro proyecto de investigación, divulgación y consultoría en ciencias ambientales.',
    contenido_md: 'Contenido del post...',
    portada_url: null,
    publicado: true,
    solo_suscriptores: false,
    creado_en: '2024-01-15',
    destacado: true
  },
  {
    id: '3',
    slug: 'metabolismo-urbano-sustentabilidad',
    titulo: 'Metabolismo Urbano: Una Perspectiva de Sustentabilidad',
    excerpt: 'Explorando cómo el análisis del metabolismo urbano puede guiar la planeación sustentable de nuestras ciudades.',
    contenido_md: 'Contenido del post...',
    portada_url: null,
    publicado: true,
    solo_suscriptores: false,
    creado_en: '2024-01-10',
    destacado: false
  },
  {
    id: '4',
    slug: 'pensamiento-critico-ambiental',
    titulo: 'Desarrollando Pensamiento Crítico en Temas Ambientales',
    excerpt: 'La importancia de fomentar el pensamiento crítico en adolescentes para abordar los desafíos ambientales.',
    contenido_md: 'Contenido del post...',
    portada_url: null,
    publicado: true,
    solo_suscriptores: false,
    creado_en: '2024-01-05',
    destacado: false
  }
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || post.solo_suscriptores === (selectedCategory === 'suscriptores');
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { key: 'todos', label: 'Todos los posts', count: posts.length },
    { key: 'publicos', label: 'Posts públicos', count: posts.filter(p => !p.solo_suscriptores).length },
    { key: 'suscriptores', label: 'Posts para suscriptores', count: posts.filter(p => p.solo_suscriptores).length }
  ];

  return (
    <div data-theme="theme-blog">
      <SectionBanner
        title="Blog"
        subtitle="Artículos y reflexiones sobre ecología, sustentabilidad y pensamiento crítico"
        theme="theme-blog"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filtros y búsqueda */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Búsqueda */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Buscar en el blog..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categorías */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key === 'todos' ? null : category.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    (selectedCategory === category.key) || 
                    (!selectedCategory && category.key === 'todos')
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Listado de posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                {post.portada_url ? (
                  <img src={post.portada_url} alt={post.titulo} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center">
                    <Leaf className="h-16 w-16 text-emerald-600 mx-auto mb-2" />
                    <p className="text-emerald-700 font-medium">Conciencia Ecológica</p>
                  </div>
                )}
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {post.solo_suscriptores ? 'Suscriptores' : 'Público'}
                  </Badge>
                  {post.destacado && (
                    <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                      Destacado
                    </Badge>
                  )}
                </div>
                
                <CardTitle className="text-lg text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                  {post.titulo}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-slate-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
                
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(post.creado_en)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>Dr. Montoya García</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Button variant="ghost" asChild className="p-0 h-auto font-medium text-emerald-600 hover:text-emerald-700 group-hover:translate-x-1 transition-transform">
                    <a href={`/blog/${post.slug}`}>
                      Leer más
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  
                  <Button variant="outline" size="sm" asChild>
                    <a href="/donar">
                      <Heart className="mr-2 h-3 w-3" />
                      Donar
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <Leaf className="h-16 w-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 text-lg">
              No se encontraron posts con los filtros seleccionados.
            </p>
            <Button variant="outline" onClick={() => {
              setSearchTerm('');
              setSelectedCategory(null);
            }} className="mt-4">
              Limpiar filtros
            </Button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            ¿Te gusta nuestro contenido?
          </h3>
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
            Tu donativo nos ayuda a continuar creando contenido educativo y de investigación 
            sobre ciencias ambientales y sustentabilidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/donar">
                <Heart className="mr-2 h-4 w-4" />
                Apoyar proyecto
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contacto">
                Contactar
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
