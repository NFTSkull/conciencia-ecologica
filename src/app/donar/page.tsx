"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Leaf, 
  Target, 
  Users, 
  BookOpen, 
  Globe,
  ArrowRight,
  CheckCircle,
  Gift,
  TrendingUp,
  Award,
  Lightbulb,
  Zap,
  Building2,
  Mail
} from 'lucide-react';
import Link from 'next/link';

export default function DonarPage() {
  const donationTiers = [
    {
      name: "Sembrador",
      amount: "$100 MXN",
      description: "Apoya la investigación básica en sustentabilidad urbana",
      benefits: [
        "Acceso a reportes trimestrales",
        "Mención en publicaciones",
        "Newsletter mensual"
      ],
      icon: Leaf,
      color: "bg-emerald-100 text-emerald-800",
      popular: false
    },
    {
      name: "Investigador",
      amount: "$500 MXN",
      description: "Contribuye al desarrollo de indicadores urbanos",
      benefits: [
        "Todo de Sembrador",
        "Acceso a webinars exclusivos",
        "Reporte personalizado anual",
        "Participación en encuestas"
      ],
      icon: Target,
      color: "bg-blue-100 text-blue-800",
      popular: true
    },
    {
      name: "Sustentador",
      amount: "$1,000 MXN",
      description: "Impulsa proyectos de investigación avanzada",
      benefits: [
        "Todo de Investigador",
        "Sesión de consultoría (1 hora)",
        "Acceso a base de datos",
        "Reconocimiento especial"
      ],
      icon: TrendingUp,
      color: "bg-purple-100 text-purple-800",
      popular: false
    },
    {
      name: "Visionario",
      amount: "$2,500 MXN",
      description: "Lidera el cambio hacia ciudades sustentables",
      benefits: [
        "Todo de Sustentador",
        "Sesión de consultoría (3 horas)",
        "Participación en proyectos",
        "Reconocimiento como patrocinador"
      ],
      icon: Award,
      color: "bg-orange-100 text-orange-800",
      popular: false
    }
  ];

  const researchAreas = [
    {
      title: "Desarrollo de Indicadores",
      description: "Creación de métricas para evaluar la sustentabilidad urbana en ciudades mexicanas",
      icon: Target,
      cost: "$50,000 MXN",
      progress: 75,
      donors: 47
    },
    {
      title: "Análisis Termodinámico",
      description: "Estudio de flujos energéticos en la Zona Metropolitana del Valle de México",
      icon: Zap,
      cost: "$120,000 MXN",
      progress: 45,
      donors: 23
    },
    {
      title: "Metabolismo Urbano",
      description: "Investigación sobre consumo de recursos en sistemas urbanos complejos",
      icon: Building2,
      cost: "$80,000 MXN",
      progress: 30,
      donors: 34
    },
    {
      title: "Educación y Capacitación",
      description: "Programas educativos para profesionales y funcionarios públicos",
      icon: BookOpen,
      cost: "$40,000 MXN",
      progress: 90,
      donors: 89
    }
  ];

  const impactMetrics = [
    {
      metric: "Investigadores formados",
      value: "15+",
      description: "Profesionales que han completado programas de investigación"
    },
    {
      metric: "Publicaciones científicas",
      value: "25+",
      description: "Artículos en revistas indexadas y libros publicados"
    },
    {
      metric: "Proyectos completados",
      value: "12+",
      description: "Investigaciones en sustentabilidad urbana"
    },
    {
      metric: "Ciudades impactadas",
      value: "8+",
      description: "Municipios que han implementado nuestras recomendaciones"
    }
  ];

  const transparencyInfo = [
    {
      title: "Reportes Financieros",
      description: "Publicamos reportes trimestrales detallando el uso de cada donativo",
      icon: TrendingUp
    },
    {
      title: "Auditorías Independientes",
      description: "Nuestras cuentas son auditadas anualmente por firmas externas",
      icon: CheckCircle
    },
    {
      title: "Comunicación Directa",
      description: "Los donantes reciben actualizaciones regulares sobre el progreso",
      icon: Mail
    },
    {
      title: "Impacto Medible",
      description: "Cada proyecto tiene indicadores claros de éxito y resultados",
      icon: Target
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-800 via-teal-700 to-emerald-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mr-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Apoya la Investigación
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-90">
              Tu donativo impulsa la sustentabilidad urbana
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Cada contribución nos permite continuar investigando, educando y 
              proponiendo soluciones para ciudades más sustentables y habitables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild>
                <a href="#donaciones">
                  Ver opciones de donación
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#impacto">
                  Conocer nuestro impacto
                  <Target className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              ¿Por qué donar?
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Tu apoyo es fundamental para continuar investigando y promoviendo 
              la sustentabilidad urbana en México y América Latina.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-emerald-100">
                    <Lightbulb className="h-6 w-6 text-emerald-600" />
                  </div>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Investigación Innovadora</h3>
                <p className="text-slate-600">
                  Desarrollamos metodologías pioneras en termodinámica urbana y 
                  sustentabilidad que no se investigan en otros lugares.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-blue-100">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Impacto Local y Global</h3>
                <p className="text-slate-600">
                  Nuestras investigaciones benefician directamente a ciudades mexicanas 
                  y sirven como modelo para otras regiones del mundo.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-purple-100">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Formación de Profesionales</h3>
                <p className="text-slate-600">
                  Capacitamos a la próxima generación de investigadores y 
                  profesionales en sustentabilidad urbana.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section id="donaciones" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Niveles de Donación
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Elige el nivel que mejor se adapte a tu capacidad de contribución. 
              Cada donativo tiene beneficios únicos y reconocimientos especiales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationTiers.map((tier, index) => (
              <Card key={index} className={`border-2 ${tier.popular ? 'border-emerald-500 shadow-lg' : 'border-slate-200'} relative`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-emerald-500 text-white px-3 py-1">
                      Más Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-xl ${tier.color}`}>
                      <tier.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-emerald-600">{tier.amount}</div>
                  <CardDescription className="text-slate-600">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" size="lg">
                    <Heart className="mr-2 h-4 w-4" />
                    Donar {tier.amount}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-slate-600 mb-4">
              ¿Prefieres hacer una donación personalizada?
            </p>
            <Button variant="outline" size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Contactar para donación personalizada
            </Button>
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Proyectos de Investigación
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Conoce los proyectos específicos que tu donativo puede apoyar 
              y el progreso actual de cada uno.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="border border-slate-200 shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-emerald-100">
                      <area.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                      <CardDescription className="text-slate-600">
                        {area.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Meta de financiamiento:</span>
                      <span className="font-semibold">{area.cost}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Donantes actuales:</span>
                      <span className="font-semibold">{area.donors} personas</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Progreso:</span>
                        <span className="font-semibold">{area.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${area.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <Button className="w-full" size="sm">
                      <Heart className="mr-2 h-4 w-4" />
                      Apoyar este proyecto
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section id="impacto" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Nuestro Impacto
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Gracias al apoyo de donantes como tú, hemos logrado resultados 
              significativos en la investigación de sustentabilidad urbana.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">
                    {metric.value}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{metric.metric}</h3>
                  <p className="text-slate-600 text-sm">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Transparencia y Rendición de Cuentas
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Creemos en la transparencia total sobre cómo se utilizan los donativos 
              y el impacto que generan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transparencyInfo.map((info, index) => (
              <Card key={index} className="border border-slate-200 shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-emerald-100">
                      <info.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl">{info.title}</CardTitle>
                  </div>
                  <CardDescription className="text-slate-600 text-base">
                    {info.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">
            ¿Listo para hacer la diferencia?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Tu donativo, sin importar el monto, contribuye directamente a la 
            investigación y promoción de ciudades más sustentables.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#donaciones">
                <Heart className="mr-2 h-4 w-4" />
                Hacer donación ahora
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contacto">
                <Mail className="mr-2 h-4 w-4" />
                Preguntas sobre donaciones
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}


