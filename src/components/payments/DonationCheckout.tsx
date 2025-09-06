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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, CheckCircle, XCircle, Heart, Gift } from 'lucide-react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface DonationFormProps {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

function DonationForm({ onSuccess, onError }: DonationFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState('');

  const predefinedAmounts = [200, 500, 1000, 2000, 5000];

  const handleAmountChange = (value: number) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    const numValue = parseInt(value);
    if (!isNaN(numValue) && numValue > 0) {
      setAmount(numValue);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    if (!email) {
      setErrorMessage('Por favor ingresa tu email');
      setStatus('error');
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
            type: 'donativo',
            email: email,
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
          return_url: `${window.location.origin}/donar/gracias`,
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
              ¡Donación Exitosa!
            </h3>
            <p className="text-green-700">
              Gracias por tu donación de <strong>${amount.toLocaleString()} MXN</strong>. 
              Tu apoyo nos ayuda a continuar con nuestra investigación y proyectos.
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
            <Heart className="h-5 w-5" />
            Apoya Nuestra Investigación
          </CardTitle>
          <CardDescription>
            Tu donación nos ayuda a continuar con proyectos de investigación y divulgación científica
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Monto de donación */}
          <div className="space-y-4">
            <Label className="text-base font-medium">Monto de donación</Label>
            
            {/* Montos predefinidos */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {predefinedAmounts.map((predefinedAmount) => (
                <Button
                  key={predefinedAmount}
                  type="button"
                  variant={amount === predefinedAmount ? "default" : "outline"}
                  onClick={() => handleAmountChange(predefinedAmount)}
                  className="h-12"
                >
                  ${predefinedAmount.toLocaleString()}
                </Button>
              ))}
            </div>

            {/* Monto personalizado */}
            <div className="space-y-2">
              <Label htmlFor="custom-amount">O ingresa un monto personalizado</Label>
              <div className="flex items-center gap-2">
                <span className="text-slate-600">$</span>
                <Input
                  id="custom-amount"
                  type="number"
                  placeholder="0"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  min="50"
                  className="flex-1"
                />
                <span className="text-slate-600">MXN</span>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email (para recibir el comprobante)</Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Resumen */}
          <div className="bg-emerald-50 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-slate-900">Donación</p>
                <p className="text-sm text-slate-600">Apoyo a investigación científica</p>
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
                {errorMessage || 'Hubo un error procesando tu donación. Por favor intenta de nuevo.'}
              </AlertDescription>
            </Alert>
          )}

          <Button 
            type="submit" 
            disabled={!stripe || isLoading || amount < 50}
            className="w-full bg-emerald-600 hover:bg-emerald-700"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Procesando donación...
              </>
            ) : (
              <>
                <Gift className="mr-2 h-4 w-4" />
                Donar ${amount.toLocaleString()} MXN
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}

export default function DonationCheckout({ onSuccess, onError }: DonationFormProps) {
  return (
    <Elements stripe={stripePromise}>
      <DonationForm onSuccess={onSuccess} onError={onError} />
    </Elements>
  );
}
