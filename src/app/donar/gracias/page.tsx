import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Heart, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function GraciasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full border-0 shadow-xl">
        <CardContent className="pt-8">
          <div className="text-center">
            <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
            
            <h1 className="text-2xl font-bold text-slate-900 mb-4">
              ¡Gracias por tu Donación!
            </h1>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              Tu apoyo nos ayuda a continuar con nuestra investigación en ciencias ambientales 
              y proyectos de sustentabilidad urbana. Recibirás un comprobante por email.
            </p>
            
            <div className="space-y-3">
              <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                <Link href="/investigacion">
                  <Leaf className="mr-2 h-4 w-4" />
                  Ver nuestros proyectos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button variant="outline" asChild className="w-full">
                <Link href="/">
                  Volver al inicio
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
