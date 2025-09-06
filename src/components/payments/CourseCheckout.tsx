"use client";

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, CheckCircle, XCircle, CreditCard } from 'lucide-react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface CheckoutFormProps {
  amount: number;
  courseName: string;
  courseId: string;
  userEmail: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

function CheckoutForm({ amount, courseName, courseId, userEmail, onSuccess, onError }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      // Crear payment intent
      const response = await fetch('/api/stripe/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount_mxn: amount,
          metadata: {
            type: 'curso',
            curso_id: courseId,
            curso_nombre: courseName,
            email: userEmail,
          },
        }),
      });

      const { clientSecret, error } = await response.json();

      if (error) {
        throw new Error(error);
      }

      // Confirmar pago
      const { error: stripeError } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/cursos/pago-exitoso`,
        },
      });

      if (stripeError) {
        throw new Error(stripeError.message);
      }

      setStatus('success');
      onSuccess?.();
    } catch (error) {
      console.error('Error en el pago:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Error desconocido');
      onError?.(error instanceof Error ? error.message : 'Error desconocido');
    } finally {
      setIsLoading(false);
    }
  };

  if (status === 'success') {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              ¡Pago Exitoso!
            </h3>
            <p className="text-green-700">
              Tu inscripción al curso <strong>{courseName}</strong> ha sido procesada correctamente.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Información de Pago
          </CardTitle>
          <CardDescription>
            Completa los datos para procesar tu inscripción al curso
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-slate-50 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-slate-900">{courseName}</p>
                <p className="text-sm text-slate-600">Curso completo</p>
              </div>
              <p className="text-lg font-semibold text-emerald-600">
                ${amount.toLocaleString()} MXN
              </p>
            </div>
          </div>

          <PaymentElement 
            options={{
              layout: 'tabs',
            }}
          />

          {status === 'error' && (
            <Alert variant="destructive">
              <XCircle className="h-4 w-4" />
              <AlertDescription>
                {errorMessage || 'Hubo un error procesando tu pago. Por favor intenta de nuevo.'}
              </AlertDescription>
            </Alert>
          )}

          <Button 
            type="submit" 
            disabled={!stripe || isLoading}
            className="w-full bg-emerald-600 hover:bg-emerald-700"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Procesando pago...
              </>
            ) : (
              <>
                <CreditCard className="mr-2 h-4 w-4" />
                Pagar ${amount.toLocaleString()} MXN
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}

export default function CourseCheckout({ 
  amount, 
  courseName, 
  courseId, 
  userEmail, 
  onSuccess, 
  onError 
}: CheckoutFormProps) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        amount={amount}
        courseName={courseName}
        courseId={courseId}
        userEmail={userEmail}
        onSuccess={onSuccess}
        onError={onError}
      />
    </Elements>
  );
}
