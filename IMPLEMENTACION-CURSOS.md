# Implementación de Nuevos Cursos

Este documento describe la implementación de tres nuevos cursos en la plataforma de Consciencia Ecológica.

## Cursos Implementados

### 1. Taller de Lectura para Jóvenes
- **Ruta**: `/cursos/adolescentes/taller-lectura`
- **Audiencia**: Adolescentes (12 a 18 años)
- **Tema visual**: `theme-cursos-ado` (lime/emerald, juvenil y fresco)
- **Precio**: $1,000 MXN por mes
- **Duración**: 4 meses
- **Modalidad**: En vivo
- **CTA**: "Inscribirme ahora"

### 2. Método PQRST: Comprensión y retención efectiva
- **Ruta**: `/cursos/adolescentes/metodo-pqrst`
- **Audiencia**: Adolescentes y padres
- **Tema visual**: `theme-cursos-ado`
- **Precio**: $2,500 MXN (curso completo)
- **Duración**: 10 sesiones
- **Modalidad**: En vivo
- **CTA**: "Reservar lugar"

### 3. Curso de Educación Ambiental
- **Ruta**: `/cursos/academica/educacion-ambiental`
- **Audiencia**: Público general
- **Tema visual**: `theme-cursos-acad` (teal/sky, sobrio y académico)
- **Precio**: $1,000 MXN por mes
- **Duración**: 3 meses
- **Modalidad**: En vivo
- **CTA**: "Inscribirme"

## Archivos Modificados

### Frontend (React/Next.js)

1. **Página principal de cursos**: `src/app/cursos/page.tsx`
   - Agregada sección de "Cursos Destacados"
   - Incluidos los tres nuevos cursos con cards informativos
   - Actualizadas las descripciones de las líneas de formación

2. **Página de cursos para adolescentes**: `src/app/cursos/adolescentes/page.tsx`
   - Agregados los cursos "Taller de Lectura" y "Método PQRST"
   - Mantenidos los cursos existentes
   - Actualizada la estructura de datos

3. **Página de cursos académicos**: `src/app/cursos/academica/page.tsx`
   - Agregado el curso "Educación Ambiental"
   - Mantenidos los cursos existentes
   - Actualizada la estructura de datos

4. **Páginas individuales de cursos**:
   - `src/app/cursos/adolescentes/taller-lectura/page.tsx`
   - `src/app/cursos/adolescentes/metodo-pqrst/page.tsx`
   - `src/app/cursos/academica/educacion-ambiental/page.tsx`

### Base de Datos (Supabase)

1. **Script SQL**: `supabase-cursos.sql`
   - Comandos INSERT para los tres nuevos cursos
   - Estructura completa con descripciones en MDX
   - Verificación de la inserción

## Estructura de la Base de Datos

Los cursos se insertan en la tabla `cursos` con la siguiente estructura:

```sql
- id: UUID generado automáticamente
- slug: Identificador único para la URL
- titulo: Título del curso
- resumen: Descripción corta
- descripcion_md: Descripción completa en formato MDX
- precio_mxn: Precio en pesos mexicanos
- modalidad: 'en_vivo' o 'grabado'
- duracion: Duración del curso
- fecha_inicio: Fecha de inicio
- portada_url: URL de la imagen de portada (NULL por defecto)
- audiencia: 'adolescentes' o 'academica'
- publicado: true/false
- stripe_price_id: ID de Stripe para pagos (NULL por defecto)
- creado_en: Timestamp de creación
- actualizado_en: Timestamp de actualización
```

## Temas Visuales Implementados

### theme-cursos-ado (Adolescentes)
- **Colores principales**: Lime (#65a30d) y Emerald (#10b981)
- **Estilo**: Juvenil, fresco y dinámico
- **Gradientes**: from-lime-600 via-emerald-500 to-lime-500

### theme-cursos-acad (Académica)
- **Colores principales**: Teal (#0f766e) y Sky (#0284c7)
- **Estilo**: Sobrio, académico y profesional
- **Gradientes**: from-teal-700 via-sky-600 to-teal-600

## Características de las Páginas Individuales

Cada curso incluye:

1. **Banner principal** con gradiente temático
2. **Información del curso** con badges informativos
3. **Objetivos y metodología** detallados
4. **Temario completo** organizado por módulos
5. **Sidebar con información práctica**:
   - Duración, modalidad, audiencia
   - Precio y botón de CTA
   - Materiales incluidos
6. **Tabs con información detallada**:
   - Perfil de ingreso
   - Requisitos
   - Beneficios
   - FAQ
7. **Sección CTA final** con botones de acción

## Integración con Stripe

Los cursos están preparados para integración con Stripe:

- Campo `stripe_price_id` disponible en la base de datos
- Botones de CTA configurados para redirigir a pagos
- Precios claramente especificados en MXN

## Próximos Pasos

1. **Ejecutar el script SQL** en Supabase para insertar los cursos
2. **Configurar productos en Stripe** y actualizar los `stripe_price_id`
3. **Agregar imágenes de portada** para cada curso
4. **Configurar webhooks** para procesar pagos
5. **Implementar sistema de inscripciones** y gestión de estudiantes

## Notas de Estilo

- **Botones principales**: Verde esmeralda (bg-emerald-600 hover:bg-emerald-700)
- **Sin gradientes** dentro de elementos individuales
- **Sombras sutiles** solo en blanco o gris
- **Máximo tres colores** por vista para mantener seriedad y profesionalismo
- **Paleta ecológica** respetada en todos los elementos

## Verificación

Para verificar que todo esté funcionando correctamente:

1. Navegar a `/cursos` y verificar que aparezcan los tres cursos destacados
2. Verificar que las rutas individuales funcionen correctamente
3. Comprobar que los temas visuales se apliquen correctamente
4. Verificar que la información de la base de datos se muestre correctamente

## Contacto

Para dudas o problemas con la implementación, contactar al equipo de desarrollo.
