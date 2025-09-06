import { NextRequest, NextResponse } from 'next/server';
import { stripe, formatAmountForStripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const { amount_mxn, metadata } = await request.json();

    if (!amount_mxn || amount_mxn < 50) {
      return NextResponse.json(
        { error: 'El monto mínimo es de $50 MXN' },
        { status: 400 }
      );
    }

    // Crear payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: formatAmountForStripe(amount_mxn),
      currency: 'mxn',
      metadata: {
        ...metadata,
        amount_mxn: amount_mxn.toString(),
      },
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
