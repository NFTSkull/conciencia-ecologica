"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  Clock, 
  Users, 
  Target, 
  BookOpen, 
  FileText,
  Play,
  Video,
  CheckCircle,
  ArrowLeft,
  Heart,
  CreditCard,
  AlertCircle,
  Calendar
} from 'lucide-react';
import Link from 'next/link';

// Datos de ejemplo para el curso
const curso = {
  slug: 'pensamiento-critico-ciencia',
  titulo: 'Pensamiento crítico con ciencia',
  resumen: 'Aprende a distinguir fuentes confiables, interpretar datos y debatir con respeto.',
  descripcion: 'Un curso fundamental para desarrollar habilidades de pensamiento crítico aplicadas a la ciencia y la vida cotidiana. Aprenderás a evaluar información, identificar sesgos y tomar decisiones informadas.',
  precio_mxn: 800,
  modalidad: 'en_vivo',
  duracion: '8 horas',
  fecha_inicio: '2024-02-15',
  audiencia: 'adolescentes',
  portada_url: null,
  publicado: true,
  destacado: true,
  objetivos: [
    'Distinguir entre fuentes de información confiables y no confiables',
    'Interpretar datos y estadísticas de manera crítica',
    'Identificar sesgos y falacias lógicas en argumentos',
    'Desarrollar habilidades de debate respetuoso y constructivo',
    'Aplicar el pensamiento científico en situaciones cotidianas'
  ],
  perfil_ingreso: [
    'Estudiantes de secundaria y preparatoria',
    'Jóvenes interesados en ciencia y tecnología',
    'Personas que quieren mejorar su capacidad de análisis',
    'Futuros líderes y tomadores de decisiones'
  ],
  requisitos: [
    'Edad mínima: 13 años',
    'Interés en aprender y descubrir',
    'Disposición para trabajar en equipo',
    'Acceso a internet para sesiones en vivo'
  ],
  temario: [
    {
      modulo: 'Módulo 1: Fundamentos del Pensamiento Crítico',
      temas: [
        '¿Qué es el pensamiento crítico?',
        'La importancia de la evidencia',
        'Tipos de razonamiento',
        'Ejercicios prácticos de lógica'
      ]
    },
    {
      modulo: 'Módulo 2: Evaluación de Fuentes',
      temas: [
        'Criterios para evaluar credibilidad',
        'Identificación de sesgos',
        'Verificación de información',
        'Casos de estudio reales'
      ]
    },
    {
      modulo: 'Módulo 3: Análisis de Datos',
      temas: [
        'Interpretación de estadísticas',
        'Gráficos y visualizaciones',
        'Correlación vs. causalidad',
        'Ejercicios con datos reales'
      ]
    },
    {
      modulo: 'Módulo 4: Comunicación y Debate',
      temas: [
        'Técnicas de argumentación',
        'Debate respetuoso',
        'Comunicación de hallazgos',
        'Proyecto final integrador'
      ]
    }
  ],
  metodologia: [
    'Sesiones interactivas en vivo con expertos',
    'Ejercicios prácticos y casos de estudio',
    'Trabajo en equipo y discusiones grupales',
    'Proyecto final aplicando lo aprendido',
    'Material de apoyo descargable',
    'Sesión de preguntas y respuestas'
  ],
  materiales_incluidos: [
    'Manual del curso con ejercicios',
    'Plantillas para análisis crítico',
    'Biblioteca de recursos digitales',
    'Certificado de participación',
    'Acceso a comunidad de estudiantes',
    'Sesión de seguimiento post-curso'
  ],
  beneficios: [
    'Mejora tu capacidad de análisis',
    'Toma decisiones más informadas',
    'Desarrolla habilidades de comunicación',
    'Prepárate para estudios superiores',
    'Construye una base sólida para el futuro'
  ]
};

export default function CursoDetallePage({ params }: { params: { slug: string } }) {
  const [isPurchasing, setIsPurchasing] = useState(false);

  const handlePurchase = async () => {
    setIsPurchasing(true);
    // Aquí se integraría con Stripe
    setTimeout(() => {
      setIsPurchasing(false);
      alert('Redirigiendo al pago...');
    }, 2000);
  };

  const getModalidadLabel = (modalidad: string) => {
    switch (modalidad) {
      case 'en_vivo':
        return 'En vivo';
      case 'grabado':
        return 'Grabado';
      case 'híbrido':
        return 'Híbrido';
      default:
        return modalidad;
    }
  };

  const getModalidadIcon = (modalidad: string) => {
    switch (modalidad) {
      case 'en_vivo':
        return <Play className="h-4 w-4" />;
      case 'grabado':
        return <Video className="h-4 w-4" />;
      case 'híbrido':
        return <GraduationCap className="h-4 w-4" />;
      default:
        return <GraduationCap className="h-4 w-4" />;
    }
  };

  const getModalidadColor = (modalidad: string) => {
    switch (modalidad) {
      case 'en_vivo':
        return 'bg-lime-100 text-lime-800 border-lime-200';
      case 'grabado':
        return 'bg-sky-100 text-sky-800 border-sky-200';
      case 'híbrido':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Header */}
      <div className="bg-white border-b border-emerald-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            href="/cursos" 
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-4 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a cursos
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Información principal */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Badge 
                  variant="outline" 
                  className={`${getModalidadColor(curso.modalidad)} flex items-center gap-1`}
                >
                  {getModalidadIcon(curso.modalidad)}
                  {getModalidadLabel(curso.modalidad)}
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {curso.duracion}
                </Badge>
                <Badge variant="outline">
                  {curso.audiencia}
                </Badge>
                {curso.destacado && (
                  <Badge variant="default" className="bg-emerald-600">
                    Destacado
                  </Badge>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {curso.titulo}
              </h1>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {curso.descripcion}
              </p>

              {/* Beneficios rápidos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {curso.beneficios.slice(0, 4).map((beneficio, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-slate-700">{beneficio}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card de compra */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 shadow-xl border-emerald-200">
                <CardHeader className="bg-emerald-50 border-b border-emerald-200">
                  <CardTitle className="text-2xl text-emerald-800">
                    ${curso.precio_mxn} MXN
                  </CardTitle>
                  <CardDescription className="text-emerald-700">
                    Acceso completo al curso
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Calendar className="h-4 w-4" />
                      <span>Inicia: {new Date(curso.fecha_inicio).toLocaleDateString('es-MX')}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <Users className="h-4 w-4" />
                      <span>Máximo 20 estudiantes</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <FileText className="h-4 w-4" />
                      <span>Material incluido</span>
                    </div>
                    
                    <Button 
                      size="lg" 
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                      onClick={handlePurchase}
                      disabled={isPurchasing}
                    >
                      {isPurchasing ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Procesando...
                        </>
                      ) : (
                        <>
                          <CreditCard className="mr-2 h-4 w-4" />
                          Comprar ahora
                        </>
                      )}
                    </Button>
                    
                    <p className="text-xs text-slate-500 text-center">
                      El acceso se habilita automáticamente tras confirmar tu pago. 
                      Recibirás instrucciones por correo.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido detallado */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Objetivos */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-slate-900 flex items-center">
                  <Target className="mr-2 h-5 w-5 text-emerald-600" />
                  Objetivos del curso
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {curso.objetivos.map((objetivo, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">{objetivo}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Temario */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-slate-900 flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-emerald-600" />
                  Temario
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {curso.temario.map((modulo, index) => (
                    <div key={index} className="border border-slate-200 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-900 mb-3">{modulo.modulo}</h4>
                      <ul className="space-y-2">
                        {modulo.temas.map((tema, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                            {tema}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Metodología */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-slate-900 flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5 text-emerald-600" />
                  Metodología
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {curso.metodologia.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Materiales */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-slate-900 flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-emerald-600" />
                  Materiales incluidos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {curso.materiales_incluidos.map((material, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700">{material}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Perfil de ingreso */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Perfil de ingreso</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {curso.perfil_ingreso.map((perfil, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      {perfil}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Requisitos */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Requisitos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {curso.requisitos.map((requisito, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      {requisito}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-slate-900">Preguntas frecuentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">¿Puedo acceder al contenido después del curso?</h4>
                  <p className="text-sm text-slate-600">
                    Sí, tendrás acceso a los materiales durante 6 meses después de completar el curso.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">¿Se emite certificado?</h4>
                  <p className="text-sm text-slate-600">
                    Sí, recibirás un certificado de participación al completar el curso.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-2">¿Qué pasa si no puedo asistir a una sesión?</h4>
                  <p className="text-sm text-slate-600">
                    Las sesiones se graban y podrás acceder a ellas posteriormente.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            ¿Listo para desarrollar tu pensamiento crítico?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Únete a este curso y transforma tu forma de pensar, analizar y tomar decisiones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" onClick={handlePurchase}>
              <CreditCard className="mr-2 h-4 w-4" />
              Comprar ahora
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contacto">
                Solicitar información
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
