import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'Firma de webhook faltante' },
      { status: 400 }
    );
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error('Error verificando webhook:', error);
    return NextResponse.json(
      { error: 'Firma de webhook inválida' },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        
        // Procesar pago exitoso
        if (paymentIntent.metadata.type === 'donativo') {
          // Registrar donativo
          await supabaseAdmin
            .from('donativos')
            .insert({
              user_email: paymentIntent.metadata.email,
              amount_mxn: parseInt(paymentIntent.metadata.amount_mxn),
              payment_intent_id: paymentIntent.id,
              status: 'completado',
            });
        } else if (paymentIntent.metadata.type === 'curso') {
          // Registrar inscripción al curso
          await supabaseAdmin
            .from('inscripciones')
            .insert({
              curso_id: paymentIntent.metadata.curso_id,
              user_id: paymentIntent.metadata.user_id,
              status: 'pagado',
              amount_mxn: parseInt(paymentIntent.metadata.amount_mxn),
              payment_intent_id: paymentIntent.id,
            });
        }
        break;

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object;
        
        // Marcar inscripción como fallida
        if (failedPayment.metadata.type === 'curso') {
          await supabaseAdmin
            .from('inscripciones')
            .update({ status: 'fallido' })
            .eq('payment_intent_id', failedPayment.id);
        }
        break;

      default:
        console.log(`Evento no manejado: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error procesando webhook:', error);
    return NextResponse.json(
      { error: 'Error procesando webhook' },
      { status: 500 }
    );
  }
}
