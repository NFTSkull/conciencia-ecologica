-- Script para insertar los nuevos cursos en Supabase
-- Tabla: cursos

-- 1. Taller de Lectura para Jóvenes
INSERT INTO cursos (
  id,
  slug,
  titulo,
  resumen,
  descripcion_md,
  precio_mxn,
  modalidad,
  duracion,
  fecha_inicio,
  portada_url,
  audiencia,
  publicado,
  stripe_price_id,
  creado_en,
  actualizado_en
) VALUES (
  gen_random_uuid(),
  'taller-lectura',
  'Taller de Lectura para Jóvenes',
  'Aumenta tu comprensión lectora, expresión oral y gusto por la lectura con textos divertidos y dinámicos.',
  'En este taller buscamos que los jóvenes fortalezcan su comprensión lectora, su capacidad de análisis y su expresión oral a través de lecturas que despertarán su interés y creatividad.

## Objetivos del taller
- Mejorar la comprensión lectora
- Desarrollar la expresión oral
- Fomentar el gusto por la lectura
- Analizar textos de manera crítica
- Comunicar ideas de forma efectiva

## Metodología
- Sesiones interactivas en vivo
- Lecturas guiadas y comentadas
- Actividades de comprensión
- Prácticas de expresión oral
- Seguimiento personalizado del progreso

## Temario
### Módulo 1: Fundamentos de la Lectura
- Técnicas de lectura rápida
- Comprensión de textos narrativos
- Identificación de ideas principales
- Análisis de personajes y tramas

### Módulo 2: Lectura Crítica
- Evaluación de fuentes
- Detección de sesgos
- Análisis de argumentos
- Lectura entre líneas

### Módulo 3: Expresión Oral
- Técnicas de presentación
- Debate y discusión
- Comunicación efectiva
- Expresión de opiniones

### Módulo 4: Proyecto Final
- Selección de texto para análisis
- Presentación oral del análisis
- Reflexión sobre el aprendizaje
- Plan de mejora continua

## Materiales incluidos
- Selección de textos literarios
- Guía de técnicas de lectura
- Material para ejercicios prácticos
- Certificado de participación
- Recursos digitales complementarios',
  1000,
  'en_vivo',
  '4 meses',
  '2024-02-15',
  NULL,
  'adolescentes',
  true,
  NULL,
  NOW(),
  NOW()
);

-- 2. Método PQRST
INSERT INTO cursos (
  id,
  slug,
  titulo,
  resumen,
  descripcion_md,
  precio_mxn,
  modalidad,
  duracion,
  fecha_inicio,
  portada_url,
  audiencia,
  publicado,
  stripe_price_id,
  creado_en,
  actualizado_en
) VALUES (
  gen_random_uuid(),
  'metodo-pqrst',
  'Método PQRST: Comprensión y retención efectiva',
  'Aprende una técnica probada para estudiar mejor, planificar tu tiempo y retener información.',
  'El método PQRST es una técnica de estudio que mejora la comprensión y retención a largo plazo, optimiza el tiempo y ofrece estructura clara para el aprendizaje.

## Objetivos del curso
- Dominar el método PQRST completo
- Mejorar la retención de información
- Optimizar el tiempo de estudio
- Aplicar técnicas en distintas materias
- Desarrollar hábitos de estudio efectivos

## Metodología
- Sesiones prácticas en vivo
- Demostración de técnicas
- Ejercicios de aplicación
- Seguimiento del progreso
- Charla especializada con psicólogos

## Temario
### Módulo 1: Introducción al PQRST
- ¿Qué es el método PQRST?
- Fundamentos científicos
- Preparación del ambiente de estudio
- Planificación del tiempo

### Módulo 2: Preview y Question
- Técnica de previsualización
- Formulación de preguntas efectivas
- Activación de conocimientos previos
- Establecimiento de objetivos

### Módulo 3: Read y Recite
- Lectura activa y comprensiva
- Técnicas de subrayado
- Resumen y síntesis
- Repetición y memorización

### Módulo 4: Test y Aplicación
- Autoevaluación del aprendizaje
- Aplicación en diferentes materias
- Técnicas de repaso
- Plan de estudio personalizado

### Módulo 5: Charla con Psicólogos
- Límites sanos en el estudio
- Manejo del estrés académico
- Acompañamiento familiar
- Desarrollo de hábitos saludables

## Características especiales
- Charla con psicólogos especializados
- Planificación del tiempo de estudio
- Dinámicas para aplicar PQRST en distintas materias
- Seguimiento personalizado

## Materiales incluidos
- Manual del método PQRST
- Plantillas de planificación
- Ejercicios prácticos
- Acceso a recursos digitales
- Certificado de participación
- Sesión con psicólogos especializados',
  2500,
  'en_vivo',
  '10 sesiones',
  '2024-03-01',
  NULL,
  'adolescentes',
  true,
  NULL,
  NOW(),
  NOW()
);

-- 3. Curso de Educación Ambiental
INSERT INTO cursos (
  id,
  slug,
  titulo,
  resumen,
  descripcion_md,
  precio_mxn,
  modalidad,
  duracion,
  fecha_inicio,
  portada_url,
  audiencia,
  publicado,
  stripe_price_id,
  creado_en,
  actualizado_en
) VALUES (
  gen_random_uuid(),
  'educacion-ambiental',
  'Curso de Educación Ambiental',
  'Una visión alternativa del ambientalismo, el metabolismo social y los retos actuales.',
  'Este curso está dirigido al público en general interesado en otra visión del ambientalismo. Analizaremos corrientes del ambientalismo, metabolismo social y sus impactos, y alternativas frente al capitalismo tradicional.

## Objetivos del curso
- Comprender las diferentes corrientes del ambientalismo
- Analizar el metabolismo social y sus impactos ambientales
- Explorar alternativas al capitalismo tradicional
- Desarrollar pensamiento crítico sobre la sustentabilidad
- Aplicar conceptos en análisis de problemas ambientales

## Metodología
- Sesiones interactivas en vivo
- Discusiones grupales facilitadas
- Análisis de casos reales
- Lecturas complementarias
- Proyecto final de reflexión
- Constancia de participación

## Temario
### Módulo 1: Corrientes del Ambientalismo
- Historia del movimiento ambientalista
- Ambientalismo conservacionista vs. social
- Ecofeminismo y justicia ambiental
- Ambientalismo del Sur Global
- Críticas al ambientalismo dominante

### Módulo 2: Metabolismo Social
- Concepto de metabolismo social
- Flujos de energía y materiales
- Impactos ambientales del desarrollo
- Desigualdades en el acceso a recursos
- Casos de estudio latinoamericanos

### Módulo 3: Alternativas y Futuros
- Buen vivir y desarrollo alternativo
- Economía circular y regenerativa
- Comunidades sustentables
- Transición energética justa
- Construcción de futuros deseables

## Enfoque innovador
- Perspectiva crítica del ambientalismo dominante
- Enfoque en justicia ambiental y desigualdades
- Exploración de alternativas prácticas al desarrollo convencional
- Metodología participativa que fomenta la reflexión

## Materiales incluidos
- Manual del curso con recursos
- Bibliografía comentada
- Acceso a plataforma de recursos
- Constancia de participación
- Recursos digitales complementarios
- Soporte post-curso por 1 mes',
  1000,
  'en_vivo',
  '3 meses',
  '2024-03-01',
  NULL,
  'academica',
  true,
  NULL,
  NOW(),
  NOW()
);

-- Verificar la inserción
SELECT 
  slug,
  titulo,
  audiencia,
  precio_mxn,
  modalidad,
  duracion,
  publicado
FROM cursos 
WHERE slug IN ('taller-lectura', 'metodo-pqrst', 'educacion-ambiental')
ORDER BY audiencia, titulo;
