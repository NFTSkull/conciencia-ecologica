import { SectionBanner } from '@/components/sections/section-banner';

export default function PoliticaDePrivacidadPage() {
  return (
    <div>
      <SectionBanner
        title="Política de Privacidad"
        subtitle="Protección de datos personales y privacidad de Conciencia Ecológica"
        theme="theme-blog"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
          <h1>Política de Privacidad</h1>
          
          <p><strong>Última actualización:</strong> {new Date().toLocaleDateString('es-MX')}</p>

          <h2>1. Información General</h2>
          <p>
            Conciencia Ecológica se compromete a proteger la privacidad y los datos personales de sus usuarios. 
            Esta política describe cómo recopilamos, utilizamos y protegemos su información.
          </p>

          <h2>2. Información que Recopilamos</h2>
          
          <h3>2.1 Información Personal</h3>
          <ul>
            <li>Nombre completo</li>
            <li>Dirección de correo electrónico</li>
            <li>Información de contacto (cuando se proporciona)</li>
          </ul>

          <h3>2.2 Información de Pago</h3>
          <ul>
            <li>Información de tarjeta de crédito/débito (procesada por Stripe)</li>
            <li>Historial de transacciones</li>
            <li>Montos de donativos y compras</li>
          </ul>

          <h3>2.3 Información de Uso</h3>
          <ul>
            <li>Páginas visitadas</li>
            <li>Tiempo de permanencia en el sitio</li>
            <li>Enlaces clickeados</li>
          </ul>

          <h2>3. Cómo Utilizamos su Información</h2>
          <p>Utilizamos su información para:</p>
          <ul>
            <li>Procesar pagos y donativos</li>
            <li>Enviar confirmaciones de compra</li>
            <li>Proporcionar acceso a cursos</li>
            <li>Responder consultas y solicitudes</li>
            <li>Mejorar nuestros servicios</li>
            <li>Enviar comunicaciones relacionadas con nuestros servicios</li>
          </ul>

          <h2>4. Compartir Información</h2>
          <p>
            No vendemos, alquilamos o compartimos su información personal con terceros, excepto:
          </p>
          <ul>
            <li>Con proveedores de servicios de pago (Stripe)</li>
            <li>Cuando sea requerido por ley</li>
            <li>Con su consentimiento explícito</li>
          </ul>

          <h2>5. Seguridad de Datos</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas para proteger su información 
            personal contra acceso no autorizado, alteración, divulgación o destrucción.
          </p>

          <h2>6. Cookies y Tecnologías Similares</h2>
          <p>Utilizamos cookies para:</p>
          <ul>
            <li>Mejorar la funcionalidad del sitio</li>
            <li>Analizar el tráfico del sitio</li>
            <li>Personalizar la experiencia del usuario</li>
          </ul>

          <h2>7. Sus Derechos</h2>
          <p>Usted tiene derecho a:</p>
          <ul>
            <li>Acceder a su información personal</li>
            <li>Corregir información inexacta</li>
            <li>Solicitar la eliminación de sus datos</li>
            <li>Retirar su consentimiento</li>
            <li>Oponerse al procesamiento de sus datos</li>
          </ul>

          <h2>8. Retención de Datos</h2>
          <p>
            Conservamos su información personal solo durante el tiempo necesario para cumplir con 
            los propósitos descritos en esta política o según lo requiera la ley.
          </p>

          <h2>9. Transferencias Internacionales</h2>
          <p>
            Su información puede ser transferida y procesada en países fuera de México, incluyendo 
            Estados Unidos (Stripe). Aseguramos que estas transferencias cumplan con las leyes de 
            protección de datos aplicables.
          </p>

          <h2>10. Menores de Edad</h2>
          <p>
            Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos 
            intencionalmente información personal de menores.
          </p>

          <h2>11. Cambios en esta Política</h2>
          <p>
            Podemos actualizar esta política de privacidad ocasionalmente. Le notificaremos cualquier 
            cambio significativo por correo electrónico o mediante un aviso en nuestro sitio web.
          </p>

          <h2>12. Contacto</h2>
          <p>
            Para ejercer sus derechos o realizar consultas sobre esta política, contacte a nuestro 
            Oficial de Privacidad:
          </p>
          <ul>
            <li>Email: privacidad@concienciaecologica.com</li>
            <li>Formulario: <a href="/contacto">/contacto</a></li>
          </ul>

          <h2>13. Autoridad de Protección de Datos</h2>
          <p>
            Si tiene alguna queja sobre el manejo de sus datos personales, puede contactar al 
            Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos 
            Personales (INAI).
          </p>
        </div>
      </div>
    </div>
  );
}
