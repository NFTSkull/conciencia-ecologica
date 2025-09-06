import { SectionBanner } from '@/components/sections/section-banner';

export default function TerminosYCondicionesPage() {
  return (
    <div>
      <SectionBanner
        title="Términos y Condiciones"
        subtitle="Términos de uso del sitio web Conciencia Ecológica"
        theme="theme-blog"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
          <h1>Términos y Condiciones</h1>
          
          <p><strong>Última actualización:</strong> {new Date().toLocaleDateString('es-MX')}</p>

          <h2>1. Aceptación de los Términos</h2>
          <p>
            Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos y condiciones de uso. 
            Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio.
          </p>

          <h2>2. Descripción del Servicio</h2>
          <p>Conciencia Ecológica es un sitio web que ofrece:</p>
          <ul>
            <li>Información sobre investigación en ciencias ambientales</li>
            <li>Cursos de formación especializada</li>
            <li>Servicios de consultoría ambiental</li>
            <li>Blog con contenido educativo</li>
            <li>Sistema de donativos para apoyar proyectos</li>
          </ul>

          <h2>3. Uso Aceptable</h2>
          <p>
            Usted se compromete a utilizar este sitio web únicamente para fines legales y de manera que no 
            infrinja los derechos de otros usuarios o terceros.
          </p>

          <h2>4. Propiedad Intelectual</h2>
          <p>
            Todo el contenido de este sitio web, incluyendo textos, imágenes, gráficos y software, 
            está protegido por derechos de autor y otras leyes de propiedad intelectual.
          </p>

          <h2>5. Cursos y Formación</h2>
          <ul>
            <li>Los cursos se ofrecen según disponibilidad</li>
            <li>Los precios están en pesos mexicanos (MXN)</li>
            <li>El acceso a los cursos se otorga tras el pago exitoso</li>
            <li>No se ofrecen reembolsos excepto en casos excepcionales</li>
          </ul>

          <h2>6. Donativos</h2>
          <ul>
            <li>Los donativos son voluntarios</li>
            <li>Se procesan de forma segura a través de Stripe</li>
            <li>Los montos mínimos están establecidos en $50 MXN</li>
            <li>Se emite recibo fiscal por cada donativo</li>
          </ul>

          <h2>7. Limitación de Responsabilidad</h2>
          <p>
            Conciencia Ecológica no se hace responsable por daños directos, indirectos, incidentales o 
            consecuentes que puedan resultar del uso de este sitio web.
          </p>

          <h2>8. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios 
            entrarán en vigor inmediatamente después de su publicación en el sitio.
          </p>

          <h2>9. Contacto</h2>
          <p>Para cualquier consulta sobre estos términos, puede contactarnos en:</p>
          <ul>
            <li>Email: contacto@concienciaecologica.com</li>
            <li>Formulario de contacto: <a href="/contacto">/contacto</a></li>
          </ul>

          <h2>10. Ley Aplicable</h2>
          <p>
            Estos términos se rigen por las leyes de México y cualquier disputa será resuelta 
            en los tribunales competentes de este país.
          </p>
        </div>
      </div>
    </div>
  );
}
