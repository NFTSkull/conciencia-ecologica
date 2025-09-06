import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function PagoExitosoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full border-0 shadow-xl">
        <CardContent className="pt-8">
          <div className="text-center">
            <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
            
            <h1 className="text-2xl font-bold text-slate-900 mb-4">
              ¡Pago Exitoso!
            </h1>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              Tu inscripción al curso ha sido procesada correctamente. 
              Recibirás un email de confirmación con todos los detalles.
            </p>
            
            <div className="space-y-3">
              <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                <Link href="/cursos">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Ver mis cursos
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
