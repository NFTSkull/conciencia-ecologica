"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Send,
  MessageSquare,
  Users,
  BookOpen,
  Globe,
  Building2
} from 'lucide-react';
import { useState } from 'react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
    contactType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Gracias por tu mensaje. Te responderé pronto.');
    setFormData({
      name: '',
      email: '',
      organization: '',
      subject: '',
      message: '',
      contactType: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contacto@concienciaecologica.com",
      description: "Responde en 24-48 horas"
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+52 (55) 1234-5678",
      description: "Lun-Vie 9:00-18:00"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Ciudad de México, México",
      description: "Disponible para reuniones presenciales"
    },
    {
      icon: Clock,
      title: "Horario de Atención",
      content: "Lunes a Viernes",
      description: "9:00 AM - 6:00 PM (GMT-6)"
    }
  ];

  const collaborationAreas = [
    {
      icon: Users,
      title: "Colaboraciones Académicas",
      description: "Proyectos de investigación conjuntos, publicaciones colaborativas, intercambios académicos."
    },
    {
      icon: Building2,
      title: "Consultoría Urbana",
      description: "Asesoría en políticas públicas, evaluación de proyectos urbanos, desarrollo de indicadores."
    },
    {
      icon: BookOpen,
      title: "Programas Educativos",
      description: "Cursos personalizados, talleres para organizaciones, capacitación de equipos."
    },
    {
      icon: Globe,
      title: "Proyectos Internacionales",
      description: "Colaboraciones con instituciones extranjeras, proyectos de cooperación internacional."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-800 via-teal-700 to-emerald-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contacto
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              ¿Te interesa mi trabajo? ¿Quieres colaborar en un proyecto? ¿Necesitas 
              asesoría en sustentabilidad urbana? Estoy aquí para ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild>
                <a href="#formulario">
                  Enviar mensaje
                  <Send className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#colaboraciones">
                  Ver áreas de colaboración
                  <Users className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Información de Contacto
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Múltiples formas de ponerte en contacto conmigo para cualquier consulta o colaboración.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-emerald-100">
                      <info.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{info.title}</h3>
                  <p className="text-slate-600 font-medium mb-1">{info.content}</p>
                  <p className="text-sm text-slate-500">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="formulario" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-slate-900 mb-4">
                Envíame un Mensaje
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Completa el formulario y te responderé lo antes posible. 
                Todos los campos marcados con * son obligatorios.
              </p>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organización</Label>
                      <Input
                        id="organization"
                        value={formData.organization}
                        onChange={(e) => handleChange('organization', e.target.value)}
                        placeholder="Tu empresa o institución"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactType">Tipo de contacto *</Label>
                      <Select value={formData.contactType} onValueChange={(value) => handleChange('contactType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consulta">Consulta general</SelectItem>
                          <SelectItem value="colaboracion">Colaboración académica</SelectItem>
                          <SelectItem value="consultoria">Consultoría urbana</SelectItem>
                          <SelectItem value="curso">Curso personalizado</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      placeholder="Resumen de tu consulta"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Describe tu consulta, proyecto o propuesta de colaboración..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <div className="flex justify-center">
                    <Button type="submit" size="lg" className="px-8">
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensaje
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Collaboration Areas */}
      <section id="colaboraciones" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Áreas de Colaboración
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Estoy abierta a diferentes tipos de colaboraciones y proyectos. 
              Aquí te explico las principales áreas en las que puedo contribuir.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collaborationAreas.map((area, index) => (
              <Card key={index} className="border border-slate-200 shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-emerald-100">
                      <area.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                  </div>
                  <CardDescription className="text-slate-600 text-base">
                    {area.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Si tu proyecto no encaja exactamente en estas categorías, no dudes en contactarme. 
              Estoy abierta a explorar nuevas oportunidades y enfoques innovadores.
            </p>
            <Button size="lg" asChild>
              <a href="#formulario">
                <MessageSquare className="mr-2 h-4 w-4" />
                Iniciar conversación
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Respuestas a las consultas más comunes sobre colaboraciones y contacto.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">¿Cuánto tiempo tardas en responder?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Normalmente respondo en 24-48 horas durante días laborables. 
                  Para consultas urgentes, puedes usar el teléfono.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">¿Ofreces consultoría para empresas privadas?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Sí, trabajo con empresas privadas, organizaciones gubernamentales y ONGs. 
                  Cada proyecto se evalúa individualmente según su impacto en la sustentabilidad urbana.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">¿Puedes viajar para proyectos internacionales?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Sí, estoy disponible para viajar y participar en proyectos internacionales. 
                  También puedo trabajar de forma remota para muchos tipos de colaboraciones.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">¿Cómo se estructura una colaboración académica?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Las colaboraciones académicas pueden incluir co-autoría en publicaciones, 
                  dirección de tesis, participación en comités, o proyectos de investigación conjuntos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            No dudes en contactarme para cualquier consulta, propuesta de colaboración 
            o simplemente para conocer más sobre mi trabajo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#formulario">
                <MessageSquare className="mr-2 h-4 w-4" />
                Enviar mensaje ahora
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:contacto@concienciaecologica.com">
                <Mail className="mr-2 h-4 w-4" />
                Email directo
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}


