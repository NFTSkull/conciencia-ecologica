"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Leaf, 
  Calendar, 
  Tag, 
  Heart, 
  ArrowRight,
  Search,
  Filter,
  BookOpen,
  Lightbulb,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';
import Link from 'next/link';

// Datos de ejemplo para posts del blog
const posts = [
  {
    id: 1,
    slug: 'bienvenida-conciencia-ecologica',
    titulo: 'Bienvenida a Conciencia Ecológica',
    excerpt: 'Iniciamos este espacio para compartir conocimiento y construir soluciones sustentables juntos. Un lugar donde la ciencia se encuentra con la acción para transformar nuestra relación con el medio ambiente.',
    contenido_md: 'Contenido completo del post...',
    portada_url: null,
    publicado: true,
    solo_suscriptores: false,
    fecha: '2024-01-15',
    categoria: 'General',
    tags: ['bienvenida', 'sustentabilidad', 'ciencia'],
    tiempo_lectura: '3 min',
    destacado: true
  },
  {
    id: 2,
    slug: 'metabolismo-urbano-ciudades-sostenibles',
    titulo: 'Metabolismo urbano: una herramienta para ciudades sostenibles',
    excerpt: 'Cómo entender el flujo de energía y materiales en las ciudades puede transformar la planeación urbana y crear espacios más habitables y sustentables.',
    contenido_md: 'Contenido completo del post...',
    portada_url: null,
    publicado: true,
    solo_suscriptores: false,
    fecha: '2024-01-10',
    categoria: 'Investigación',
    tags: ['metabolismo urbano', 'sustentabilidad', 'planeación urbana'],
    tiempo_lectura: '8 min',
    destacado: true
  },
  {
    id: 3,
    slug: 'pensamiento-critico-era-informacion',
    titulo: 'Pensamiento crítico en la era de la información',
    excerpt: 'La importancia de desarrollar habilidades de análisis en un mundo lleno de datos y opiniones. Cómo la ciencia nos ayuda a distinguir entre evidencia y especulación.',
    contenido_md: 'Contenido completo del post...',
    portada_url: null,
    publicado: true,
    solo_suscriptores: false,
    fecha: '2024-01-05',
    categoria: 'Educación',
    tags: ['pensamiento crítico', 'ciencia', 'educación'],
    tiempo_lectura: '6 min',
    destacado: false
  },
  {
    id: 4,
    slug: 'indicadores-sustentabilidad-urbanos',
    titulo: 'Indicadores de sustentabilidad urbana: más allá de los números',
    excerpt: 'Los indicadores ambientales son herramientas poderosas, pero su verdadero valor está en cómo los interpretamos y utilizamos para tomar decisiones informadas.',
    contenido_md: 'Contenido completo del post...',
    portada_url: null,
    publicado: true,
    solo_suscriptores: false,
    fecha: '2023-12-20',
    categoria: 'Investigación',
    tags: ['indicadores', 'sustentabilidad urbana', 'análisis'],
    tiempo_lectura: '7 min',
    destacado: false
  },
  {
    id: 5,
    slug: 'comunidades-sustentables-mexico',
    titulo: 'Comunidades sustentables en México: casos de éxito',
    excerpt: 'Exploramos ejemplos reales de comunidades mexicanas que han implementado prácticas sustentables y los resultados que han obtenido.',
    contenido_md: 'Contenido completo del post...',
    portada_url: null,
    publicado: true,
    solo_suscriptores: false,
    fecha: '2023-12-15',
    categoria: 'Casos de Estudio',
    tags: ['comunidades', 'México', 'casos de éxito'],
    tiempo_lectura: '10 min',
    destacado: false
  },
  {
    id: 6,
    slug: 'cambio-climatico-accion-local',
    titulo: 'Cambio climático y acción local: lo que puedes hacer desde tu comunidad',
    excerpt: 'Aunque el cambio climático es un problema global, las soluciones más efectivas suelen comenzar a nivel local. Descubre cómo tu comunidad puede marcar la diferencia.',
    contenido_md: 'Contenido completo del post...',
    portada_url: null,
    publicado: true,
    solo_suscriptores: false,
    fecha: '2023-12-10',
    categoria: 'Acción Ciudadana',
    tags: ['cambio climático', 'acción local', 'comunidad'],
    tiempo_lectura: '9 min',
    destacado: false
  },
  {
    id: 7,
    slug: 'leccion-segunda-guerra-mundial-respeto-humano',
    titulo: 'La lección de la Segunda Guerra Mundial: respeto a la condición humana',
    excerpt: 'Reflexión sobre cómo la historia nos enseña sobre el respeto a la dignidad humana, independientemente de religión, historia o cultura.',
    contenido_md: `La lección de la Segunda Guerra Mundial fue principalmente, el respeto a la condición humana no importando su religión, historia, cultura. Pero parece que esto no se aprendió, ni siquiera se meditó. En este punto histórico estamos presenciando el Genocidio del pueblo palestino, pero lo más curioso es que es ejecutado por haber sido las víctimas de los nazis. Dichas víctimas y sus descendientes, los judíos, propagan hoy en día a través del sionismo una ideología y una propaganda más peligrosa que el propio nazismo. El sionismo se sustenta en la supremacía racial a través de la religión, pues sostiene que los judíos son el pueblo elegido de Dios por tanto, tienen el derecho de ocupar Palestina, "el lugar sagrado prometido por Dios"; promueve una enorme victimización, sustentada en discursos desquiciantes que tratan de tergiversar la materialidad de los hechos y cualquier sionista reacciona de manera muy violenta llamando "antisemita" a quien los cuestione; gastan millones de dólares alrededor del mundo para financiar gobiernos, medios de comunicación para sostener su discurso.

Es por ello que es enloquecedor ver al gobierno alemán, francés, inglés y norteamericano principalmente apoyando de manera delirante a Israel; mientras los ciudadanos de a pie, vemos el sufrimiento indescriptible de los palestinos. Entre las propagandas más sonadas de los sionistas es que Hamas es un grupo terrorista, pero si lo pensamos un poco, ¿no será acaso un movimiento de resistencia, un movimiento de liberación?, ¿acaso es no están en su derecho de defenderse? Ha cometido actos violentos, si, eso es innegable, pero pareciera que los palestinos no tienen derecho a decir "basta". Se les responsabiliza de su tragedia como si ellos lo hubieran provocado cuando se les castiga de manera brutal, para no cuestionar el actuar de los sionistas. Y se ha tergiversado tanto este tema en el sentido de "argumentar" que es un conflicto de origen bíblico, cuando el sionismo tiene poco más de 100 años de existencia y el estado de Israel se formó por una votación cuestionada en la ONU en 1947; y se dice "que es sin fin" por la cuestión religiosa cuando en realidad si se puede terminar, en el momento en que Israel deje de ser financiado y patrocinado por los países del norte global.

¿Cómo resistir ante la propaganda sionista? Para mí, en primer lugar, es comprender la historia, empaparse de la verdad de conflicto para también entender las justificaciones absurdas de los sionistas. En segundo lugar, el entendimiento del discurso sionista, observar detenidamente su odio, sus mensajes virulentos y su victimización enfermiza; tercero, manifestar el rechazo al genocidio palestino; cuarto, dejar de apoyar o seguir a actores, cantantantes y famosos que apoyan a Israel; y en definitiva, el boicot a productos que los patrocinan. Estamos en un momento clave de la historia y considero que la movilización social es crucial para presionar a los gobernantes a cambiar sus políticas con respecto a los sionistas.`,
    portada_url: null,
    publicado: true,
    solo_suscriptores: false,
    fecha: '2023-12-05',
    categoria: 'Reflexión',
    tags: ['historia', 'derechos humanos', 'paz', 'reflexión'],
    tiempo_lectura: '12 min',
    destacado: true
  }
];

const categorias = [
  { value: 'todos', label: 'Todas las categorías' },
  { value: 'General', label: 'General' },
  { value: 'Investigación', label: 'Investigación' },
  { value: 'Educación', label: 'Educación' },
  { value: 'Casos de Estudio', label: 'Casos de Estudio' },
  { value: 'Acción Ciudadana', label: 'Acción Ciudadana' },
  { value: 'Reflexión', label: 'Reflexión' }
];

const tags = [
  'sustentabilidad',
  'metabolismo urbano',
  'ciencia',
  'educación',
  'comunidades',
  'México',
  'cambio climático',
  'acción local',
  'historia',
  'derechos humanos',
  'paz',
  'reflexión'
];

export default function BlogPage() {
  const [filtroCategoria, setFiltroCategoria] = useState('todos');
  const [filtroTags, setFiltroTags] = useState<string[]>([]);
  const [busqueda, setBusqueda] = useState('');

  const postsFiltrados = posts.filter(post => {
    const cumpleCategoria = filtroCategoria === 'todos' || post.categoria === filtroCategoria;
    const cumpleTags = filtroTags.length === 0 || filtroTags.some(tag => post.tags.includes(tag));
    const cumpleBusqueda = busqueda === '' || 
      post.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(busqueda.toLowerCase());
    
    return cumpleCategoria && cumpleTags && cumpleBusqueda;
  });

  const toggleTag = (tag: string) => {
    setFiltroTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case 'Investigación':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Educación':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Casos de Estudio':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Acción Ciudadana':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Reflexión':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoriaIcon = (categoria: string) => {
    switch (categoria) {
      case 'Investigación':
        return <BookOpen className="h-4 w-4" />;
      case 'Educación':
        return <Lightbulb className="h-4 w-4" />;
      case 'Casos de Estudio':
        return <TrendingUp className="h-4 w-4" />;
      case 'Acción Ciudadana':
        return <Heart className="h-4 w-4" />;
      case 'Reflexión':
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <Leaf className="h-4 w-4" />;
    }
  };

  return (
    <div data-theme="theme-blog">
      {/* Banner Section */}
      <section className="bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mr-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Blog
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-90">
              Ideas y análisis socio-ambiental
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Un espacio para compartir hallazgos, reflexiones y herramientas prácticas 
              que fomenten un debate informado sobre sustentabilidad y ciencias ambientales.
            </p>
            
            <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <p className="text-sm opacity-90">
                <strong>Nota editorial:</strong> Mantener un diálogo respetuoso y basado en evidencia. Para textos sensibles, publicar como borrador y someter a revisión editorial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filtros y Búsqueda */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Búsqueda */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar posts..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              {/* Filtro por categoría */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Categoría
                </label>
                <select
                  value={filtroCategoria}
                  onChange={(e) => setFiltroCategoria(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  {categorias.map((categoria) => (
                    <option key={categoria.value} value={categoria.value}>
                      {categoria.label}
                    </option>
                  ))}
                </select>
              </div>
              {/* Filtro por tags */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                        filtroTags.includes(tag)
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-white text-slate-600 border-slate-300 hover:border-emerald-300'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados */}
        <div className="mb-6">
          <p className="text-slate-600">
            Mostrando {postsFiltrados.length} de {posts.length} posts
          </p>
        </div>

        {/* Lista de Posts */}
        <div className="space-y-8">
          {postsFiltrados.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge 
                        variant="outline" 
                        className={`${getCategoriaColor(post.categoria)} flex items-center gap-1`}
                      >
                        {getCategoriaIcon(post.categoria)}
                        {post.categoria}
                      </Badge>
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.fecha).toLocaleDateString('es-MX')}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {post.tiempo_lectura}
                      </Badge>
                      {post.destacado && (
                        <Badge variant="default" className="bg-emerald-600 text-xs">
                          Destacado
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl text-slate-900 mb-3">
                      {post.titulo}
                    </CardTitle>
                    <CardDescription className="text-slate-600 text-base leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Acciones */}
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Leer más
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/donar">
                        <Heart className="mr-2 h-4 w-4" />
                        Donar
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {postsFiltrados.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">
              No se encontraron posts con los filtros seleccionados.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            ¿Te fue útil?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Apoya con un donativo para seguir creando contenido abierto y accesible 
            sobre sustentabilidad y ciencias ambientales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/donar">
                <Heart className="mr-2 h-4 w-4" />
                Apoyar el Proyecto
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contacto">
                Sugerir un tema
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
