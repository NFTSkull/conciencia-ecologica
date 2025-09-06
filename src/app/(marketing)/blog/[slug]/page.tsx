"use client";

import { useState, useEffect } from 'react';
import { SectionBanner } from '@/components/sections/section-banner';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Heart, ArrowLeft, ArrowRight, Leaf } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';

// Datos de ejemplo - en producción vendrían de Supabase
const posts = [
  {
    id: '1',
    slug: 'caso-cazzu-sistema-patriarcal',
    titulo: 'Caso Cazzu: Una reflexión sobre el sistema patriarcal y la justicia',
    excerpt: 'El caso de Cazzu no es único ni particular, es la situación de muchas mujeres en la actualidad. Una reflexión sobre el sistema judicial patriarcal y las violencias que enfrentan las mujeres.',
    contenido_md: `# Caso Cazzu: Una reflexión sobre el sistema patriarcal y la justicia

El caso de Cazzu no es único ni particular, es la situación de muchas mujeres en la actualidad. Como bien ella dijo, es sólo una hormiguita dentro de un sistema patriarcal y tiene toda la razón. En la actualidad el sistema judicial al menos en México (con la leve sospecha de que en América Latina sean semejantes puesto que están regidos por las mismas leyes internacionales) sigue siendo patriarcal y muy machista.

## El sistema judicial patriarcal

¿Esto qué significa? Que las leyes no abogan por los derechos de las mujeres y en muchas ocasiones el interés superior es trasgredido por los huecos legales que hay y que son aprovechados por los progenitores en su mayoría masculinos para evadir responsabilidades.

Es entonces que las mujeres atraviesan por muchos problemas, empezando por conseguir un abogado que realmente les crea y cobre unos honorarios justos; puesto que es muy común que los litigantes abusen de las mujeres debido a su necesidad de ser protegidas y defendidas. Después por los costos que conlleva llevar un caso legal en donde por negligencia y abuso por parte de los representantes legales se hace caro y tedioso; y finalmente por el desgaste emocional que conlleva, puesto que no es sólo el litigio en sí, sino las violencias de los propios juzgadores, la presión social y en muchos casos hostigamientos por parte del progenitor y sus representantes, además de un temor permanente de perder la custodia de los hijos.

## La violencia económica y vicaria

Además, una de las cosas que más les duele a los masculinos es el pago de pensión alimenticia, y en muchos casos, cambian de trabajo, ponen a nombre de otra persona sus propiedades y tratan de evadirla de cualquier forma, hasta llegar a la violencia vicaria o el asesinato de la madre y los hijos.

El costo de sostener una demanda, los cuidados de los hijos y el de ellas mismas es muy alto, razón por la cual, muchas mujeres suben de peso, tienen colapsos emocionales y finalmente su salud mental se deteriora, y a esto habría que añadirle que, si no tienen un trabajo estable o no lo tienen, la presión emocional es mayor. Mientras que los progenitores no tienen que hacerse cargo de dichas cuestiones, como lo está haciendo Nodal.

## La importancia de la autonomía económica

Quizá como Cazzu menciona, no vale la pena luchar en demandas (no en todos los casos, siempre hay circunstancias), pero una cosa que olvidan las mujeres, es priorizarse y nunca depender económicamente de alguien más, eso las pone en situaciones de muy alta vulnerabilidad.

## El feminismo como herramienta de transformación

El sistema patriarcal es cambiante, se adapta a las circunstancias, moldea sus violencias, pero el feminismo ha ayudado a muchas mujeres a tener consciencia de su condición, les permite tener conocimiento de sí mismas y abre las puertas a construir opciones como el construir redes de apoyo entre las propias mujeres y aunque no se erradique el machismo, puede hacerle un frente importante. Es por ello que la situación de Cazzu puede ser un gran ejemplo de resiliencia y amor a la vida.

## Reflexiones finales

Este caso nos invita a reflexionar sobre:

- La necesidad de reformas estructurales en el sistema judicial
- La importancia de la educación con perspectiva de género
- El valor de las redes de apoyo entre mujeres
- La urgencia de políticas públicas que protejan realmente a las mujeres y sus hijos
- La necesidad de una justicia que realmente sea justa para todas las personas

La lucha por la igualdad y la justicia es un proceso largo y complejo, pero cada caso como el de Cazzu nos recuerda la importancia de seguir trabajando por un mundo más justo y equitativo para todas las mujeres.`,
    portada_url: null,
    publicado: true,
    solo_suscriptores: false,
    creado_en: '2024-01-20',
    destacado: true,
    categoria: 'Reflexión Social',
    tags: ['feminismo', 'justicia', 'sistema patriarcal', 'violencia de género'],
    tiempo_lectura: '6 min'
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

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [post, setPost] = useState<typeof posts[0] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundPost = posts.find(p => p.slug === params.slug);
    setPost(foundPost || null);
    setLoading(false);
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Leaf className="h-16 w-16 text-emerald-600 mx-auto mb-4 animate-pulse" />
          <p className="text-slate-600">Cargando artículo...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Leaf className="h-16 w-16 text-slate-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Artículo no encontrado</h1>
          <p className="text-slate-600 mb-6">El artículo que buscas no existe o ha sido eliminado.</p>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const currentIndex = posts.findIndex(p => p.slug === params.slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <div data-theme="theme-blog">
      <SectionBanner
        title={post.titulo}
        subtitle={post.excerpt}
        theme="theme-blog"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Metadatos del post */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Badge variant="outline" className="text-sm">
                {post.solo_suscriptores ? 'Suscriptores' : 'Público'}
              </Badge>
              {post.destacado && (
                <Badge className="bg-yellow-100 text-yellow-800 text-sm">
                  Destacado
                </Badge>
              )}
              {post.categoria && (
                <Badge variant="secondary" className="text-sm">
                  {post.categoria}
                </Badge>
              )}
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.creado_en)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Dr. Montoya García</span>
              </div>
              {post.tiempo_lectura && (
                <div className="flex items-center space-x-2">
                  <Leaf className="h-4 w-4" />
                  <span>{post.tiempo_lectura} de lectura</span>
                </div>
              )}
            </div>

            {post.tags && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Contenido del post */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="prose prose-slate max-w-none">
                <div 
                  className="whitespace-pre-wrap text-slate-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: post.contenido_md
                      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-slate-900 mb-6 mt-8">$1</h1>')
                      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-slate-900 mb-4 mt-6">$1</h2>')
                      .replace(/^## (.*$)/gim, '<h3 class="text-xl font-bold text-slate-900 mb-3 mt-5">$1</h3>')
                      .replace(/^- (.*$)/gim, '<li class="ml-4 mb-2">$1</li>')
                      .replace(/\n\n/g, '</p><p class="mb-4">')
                      .replace(/^(?!<[h|l])/gm, '<p class="mb-4">')
                      .replace(/<li class="ml-4 mb-2">(.*?)<\/li>/g, '<ul class="list-disc list-inside mb-4"><li class="mb-2">$1</li></ul>')
                  }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Navegación entre posts */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between">
            {prevPost ? (
              <Button variant="outline" asChild className="flex-1">
                <Link href={`/blog/${prevPost.slug}`}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {prevPost.titulo}
                </Link>
              </Button>
            ) : (
              <div className="flex-1"></div>
            )}
            
            {nextPost ? (
              <Button variant="outline" asChild className="flex-1">
                <Link href={`/blog/${nextPost.slug}`}>
                  {nextPost.titulo}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <div className="flex-1"></div>
            )}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              ¿Te gustó este artículo?
            </h3>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              Tu donativo nos ayuda a continuar creando contenido educativo y de investigación 
              sobre temas sociales y ambientales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/donar">
                  <Heart className="mr-2 h-4 w-4" />
                  Apoyar proyecto
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contacto">
                  Contactar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
