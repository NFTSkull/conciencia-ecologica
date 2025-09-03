"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, Instagram, Facebook } from 'lucide-react';

export default function BlogPage() {
  return (
    <div>
      {/* Banner Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-500 to-sky-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pluma Ecosocial
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Nuestro blog principal que combina el rigor académico con la accesibilidad del lenguaje cotidiano. Aquí compartimos análisis profundos sobre ecología, justicia social y pensamiento crítico, conectando teoría y práctica para inspirar acción.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Artículo Principal */}
        <article className="max-w-4xl mx-auto mb-12">
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Diciembre 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  8 min de lectura
                </span>
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  Equipo Editorial
                </span>
              </div>
              
              <div className="space-y-3">
                <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">
                  Justicia Social
                </Badge>
                <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                  Análisis Político
                </Badge>
                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                  Conciencia Global
                </Badge>
              </div>

              <CardTitle className="text-3xl md:text-4xl text-slate-900 leading-tight">
                La lección no aprendida: Del Holocausto al Genocidio Palestino
              </CardTitle>
              
              <CardDescription className="text-lg text-slate-600 leading-relaxed">
                Una reflexión crítica sobre cómo la historia se repite y la importancia de la resistencia ante la propaganda sionista.
              </CardDescription>
            </CardHeader>

            <CardContent className="prose prose-slate max-w-none">
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-lg">
                  La lección de la Segunda Guerra Mundial fue principalmente, el respeto a la condición humana no importando su religión, historia, cultura. Pero parece que esto no se aprendió, ni siquiera se meditó. En este punto histórico estamos presenciando el Genocidio del pueblo palestino, pero lo más curioso es que es ejecutado por haber sido las víctimas de los nazis.
                </p>

                <p>
                  Dichas víctimas y sus descendientes, los judíos, propagan hoy en día a través del sionismo una ideología y una propaganda más peligrosa que el propio nazismo.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                  El sionismo y su fundamento ideológico
                </h2>

                <p>
                  El sionismo se sustenta en la supremacía racial a través de la religión, pues sostiene que los judíos son el pueblo elegido de Dios por tanto, tienen el derecho de ocupar Palestina, &quot;el lugar sagrado prometido por Dios&quot;; promueve una enorme victimización, sustentada en discursos desquiciantes que tratan de tergiversar la materialidad de los hechos y cualquier sionista reacciona de manera muy violenta llamando &quot;antisemita&quot; a quien los cuestione; gastan millones de dólares alrededor del mundo para financiar gobiernos, medios de comunicación para sostener su discurso.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                  La complicidad de los gobiernos occidentales
                </h2>

                <p>
                  Es por ello que es enloquecedor ver al gobierno alemán, francés, inglés y norteamericano principalmente apoyando de manera delirante a Israel; mientras los ciudadanos de a pie, vemos el sufrimiento indescriptible de los palestinos.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                  Hamas: ¿Terrorismo o resistencia legítima?
                </h2>

                <p>
                  Entre las propagandas más sonadas de los sionistas es que Hamas es un grupo terrorista, pero si lo pensamos un poco, ¿no será acaso un movimiento de resistencia, un movimiento de liberación?, ¿acaso es no están en su derecho de defenderse? Ha cometido actos violentos, si, eso es innegable, pero pareciera que los palestinos no tienen derecho a decir &quot;basta&quot;. Se les responsabiliza de su tragedia como si ellos lo hubieran provocado cuando se les castiga de manera brutal, para no cuestionar el actuar de los sionistas.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                  La tergiversación del conflicto
                </h2>

                <p>
                  Y se ha tergiversado tanto este tema en el sentido de &quot;argumentar&quot; que es un conflicto de origen bíblico, cuando el sionismo tiene poco más de 100 años de existencia y el estado de Israel se formó por una votación cuestionada en la ONU en 1947; y se dice &quot;que es sin fin&quot; por la cuestión religiosa cuando en realidad si se puede terminar, en el momento en que Israel deje de ser financiado y patrocinado por los países del norte global.
                </p>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                  ¿Cómo resistir ante la propaganda sionista?
                </h2>

                <p>
                  Para mí, en primer lugar, es comprender la historia, empaparse de la verdad de conflicto para también entender las justificaciones absurdas de los sionistas. En segundo lugar, el entendimiento del discurso sionista, observar detenidamente su odio, sus mensajes virulentos y su victimización enfermiza; tercero, manifestar el rechazo al genocidio palestino; cuarto, dejar de apoyar o seguir a actores, cantantantes y famosos que apoyan a Israel; y en definitiva, el boicot a productos que los patrocinan.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
                  <p className="text-blue-800 font-medium">
                    Estamos en un momento clave de la historia y considero que la movilización social es crucial para presionar a los gobernantes a cambiar sus políticas con respecto a los sionistas.
                  </p>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
                  Conclusión
                </h2>

                <p>
                  La historia nos enseña que el silencio ante la injusticia es complicidad. Como ciudadanos del mundo, tenemos la responsabilidad de informarnos, cuestionar las narrativas dominantes y actuar en consecuencia. El pueblo palestino merece justicia, y nosotros, como humanidad, merecemos aprender de los errores del pasado para no repetirlos.
                </p>
              </div>
            </CardContent>
          </Card>
        </article>

        {/* Redes Sociales */}
        <section className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-emerald-800 mb-4">
                Síguenos en nuestras redes sociales
              </CardTitle>
              <CardDescription className="text-emerald-700">
                Mantente conectado con Pluma Ecosocial para más análisis y reflexiones
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                <a href="https://www.instagram.com/pluma.ecosocial20?igsh=MXQwbjV5M3l1OTl6dQ==" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4 mr-2" />
                  Seguir en Instagram
                </a>
              </Button>
              <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                <a href="https://www.facebook.com/profile.php?id=61579210782776" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4 mr-2" />
                  Seguir en Facebook
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Artículos Relacionados */}
        <section className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-slate-900 mb-6">
            Artículos Relacionados
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                    Ecología
                  </Badge>
                </div>
                <CardTitle className="text-lg text-slate-900">
                  La crisis climática y la justicia ambiental
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Cómo el cambio climático afecta desproporcionadamente a las comunidades más vulnerables.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Noviembre 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    5 min
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">
                    Feminismo
                  </Badge>
                </div>
                <CardTitle className="text-lg text-slate-900">
                  Ecofeminismo: La conexión entre género y medio ambiente
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Explorando las intersecciones entre la lucha feminista y la justicia ambiental.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Octubre 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    6 min
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
