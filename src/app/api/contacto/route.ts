import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { nombre, email, asunto, mensaje } = await request.json();

    // Validaciones básicas
    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // En producción, aquí se enviaría un email real
    // Por ahora, solo registramos en la base de datos
    
    // Registrar en base de datos (opcional)
    try {
      await supabaseAdmin
        .from('consents')
        .insert({
          user_email: email,
          consent_type: 'contacto',
          policy_version: '1.0',
          ip: request.ip || 'unknown',
          user_agent: request.headers.get('user-agent') || 'unknown',
        });
    } catch (dbError) {
      console.error('Error guardando consentimiento:', dbError);
      // No fallamos si hay error en la BD
    }

    // Simular envío de email
    console.log('Email de contacto recibido:', {
      nombre,
      email,
      asunto,
      mensaje,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Mensaje enviado correctamente',
    });
  } catch (error) {
    console.error('Error en API de contacto:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
