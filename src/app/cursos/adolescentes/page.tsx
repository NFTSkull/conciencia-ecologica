// Datos de ejemplo para cursos de adolescentes
const cursosAdolescentes = [
  {
    id: 1,
    slug: 'taller-lectura',
    titulo: 'Taller de Lectura para Jóvenes',
    resumen: 'Aumenta tu comprensión lectora, expresión oral y gusto por la lectura con textos divertidos y dinámicos.',
    descripcion: 'En este taller buscamos que los jóvenes fortalezcan su comprensión lectora, su capacidad de análisis y su expresión oral a través de lecturas que despertarán su interés y creatividad.',
    precio_mxn: 1000,
    modalidad: 'en_vivo',
    duracion: '4 meses',
    fecha_inicio: '2024-02-15',
    portada_url: null,
    audiencia: 'adolescentes',
    publicado: true,
    destacado: true,
    objetivos: [
      'Mejorar la comprensión lectora',
      'Desarrollar la expresión oral',
      'Fomentar el gusto por la lectura',
      'Analizar textos de manera crítica',
      'Comunicar ideas de forma efectiva'
    ],
    perfil_ingreso: [
      'Jóvenes de 12 a 18 años',
      'Interés en mejorar sus habilidades de lectura',
      'Disposición para participar en actividades grupales',
      'Compromiso con el aprendizaje continuo'
    ],
    requisitos: [
      'Conocimientos básicos de español',
      'Acceso a internet para sesiones en vivo',
      'Dispositivo para participar en actividades',
      'Tiempo disponible para lectura y tareas'
    ],
    temario: [
      {
        modulo: 'Módulo 1: Fundamentos de la Lectura',
        temas: [
          'Técnicas de lectura rápida',
          'Comprensión de textos narrativos',
          'Identificación de ideas principales',
          'Análisis de personajes y tramas'
        ]
      },
      {
        modulo: 'Módulo 2: Lectura Crítica',
        temas: [
          'Evaluación de fuentes',
          'Detección de sesgos',
          'Análisis de argumentos',
          'Lectura entre líneas'
        ]
      },
      {
        modulo: 'Módulo 3: Expresión Oral',
        temas: [
          'Técnicas de presentación',
          'Debate y discusión',
          'Comunicación efectiva',
          'Expresión de opiniones'
        ]
      },
      {
        modulo: 'Módulo 4: Proyecto Final',
        temas: [
          'Selección de texto para análisis',
          'Presentación oral del análisis',
          'Reflexión sobre el aprendizaje',
          'Plan de mejora continua'
        ]
      }
    ],
    metodologia: [
      'Sesiones interactivas en vivo',
      'Lecturas guiadas y comentadas',
      'Actividades de comprensión',
      'Prácticas de expresión oral',
      'Seguimiento personalizado del progreso'
    ],
    materiales_incluidos: [
      'Selección de textos literarios',
      'Guía de técnicas de lectura',
      'Material para ejercicios prácticos',
      'Certificado de participación',
      'Recursos digitales complementarios'
    ]
  },
  {
    id: 2,
    slug: 'metodo-pqrst',
    titulo: 'Método PQRST: Comprensión y retención efectiva',
    resumen: 'Aprende una técnica probada para estudiar mejor, planificar tu tiempo y retener información.',
    descripcion: 'El método PQRST es una técnica de estudio que mejora la comprensión y retención a largo plazo, optimiza el tiempo y ofrece estructura clara para el aprendizaje.',
    precio_mxn: 2500,
    modalidad: 'en_vivo',
    duracion: '10 sesiones',
    fecha_inicio: '2024-03-01',
    portada_url: null,
    audiencia: 'adolescentes',
    publicado: true,
    destacado: true,
    objetivos: [
      'Dominar el método PQRST completo',
      'Mejorar la retención de información',
      'Optimizar el tiempo de estudio',
      'Aplicar técnicas en distintas materias',
      'Desarrollar hábitos de estudio efectivos'
    ],
    perfil_ingreso: [
      'Adolescentes de 12 a 18 años',
      'Estudiantes que quieren mejorar su rendimiento',
      'Interés en técnicas de estudio',
      'Compromiso con el aprendizaje'
    ],
    requisitos: [
      'Acceso a internet para sesiones en vivo',
      'Dispositivo para participar',
      'Materiales de estudio básicos',
      'Disposición para practicar técnicas'
    ],
    temario: [
      {
        modulo: 'Módulo 1: Introducción al PQRST',
        temas: [
          '¿Qué es el método PQRST?',
          'Fundamentos científicos',
          'Preparación del ambiente de estudio',
          'Planificación del tiempo'
        ]
      },
      {
        modulo: 'Módulo 2: Preview y Question',
        temas: [
          'Técnica de previsualización',
          'Formulación de preguntas efectivas',
          'Activación de conocimientos previos',
          'Establecimiento de objetivos'
        ]
      },
      {
        modulo: 'Módulo 3: Read y Recite',
        temas: [
          'Lectura activa y comprensiva',
          'Técnicas de subrayado',
          'Resumen y síntesis',
          'Repetición y memorización'
        ]
      },
      {
        modulo: 'Módulo 4: Test y Aplicación',
        temas: [
          'Autoevaluación del aprendizaje',
          'Aplicación en diferentes materias',
          'Técnicas de repaso',
          'Plan de estudio personalizado'
        ]
      },
      {
        modulo: 'Módulo 5: Charla con Psicólogos',
        temas: [
          'Límites sanos en el estudio',
          'Manejo del estrés académico',
          'Acompañamiento familiar',
          'Desarrollo de hábitos saludables'
        ]
      }
    ],
    metodologia: [
      'Sesiones prácticas en vivo',
      'Demostración de técnicas',
      'Ejercicios de aplicación',
      'Seguimiento del progreso',
      'Charla especializada con psicólogos'
    ],
    materiales_incluidos: [
      'Manual del método PQRST',
      'Plantillas de planificación',
      'Ejercicios prácticos',
      'Acceso a recursos digitales',
      'Certificado de participación',
      'Sesión con psicólogos especializados'
    ]
  },
  {
    id: 3,
    slug: 'pensamiento-critico-lectura-mates-ciencia',
    titulo: 'Pensamiento crítico: lectura, mates y ciencia',
    resumen: 'Desarrolla habilidades fundamentales para analizar información, resolver problemas matemáticos y entender el mundo científico que te rodea.',
    descripcion: 'Un curso integral que combina lectura comprensiva, matemáticas esenciales y ciencias prácticas para formar pensadores críticos desde la secundaria.',
    precio_mxn: 800,
    modalidad: 'en_vivo',
    duracion: '8 horas',
    fecha_inicio: '2024-02-15',
    portada_url: null,
    audiencia: 'adolescentes',
    publicado: true,
    destacado: false,
    objetivos: [
      'Distinguir fuentes de información confiables',
      'Interpretar datos y gráficos matemáticos',
      'Aplicar el método científico en situaciones cotidianas',
      'Desarrollar argumentos lógicos y respetuosos',
      'Resolver problemas usando pensamiento crítico'
    ],
    perfil_ingreso: [
      'Estudiantes de secundaria (12-15 años)',
      'Interés en aprender y cuestionar',
      'Disposición para trabajar en equipo',
      'Curiosidad por el mundo que les rodea'
    ],
    requisitos: [
      'Conocimientos básicos de matemáticas de primaria',
      'Capacidad de lectura en español',
      'Acceso a internet para sesiones en vivo',
      'Dispositivo para participar en actividades interactivas'
    ],
    temario: [
      {
        modulo: 'Módulo 1: Lectura Crítica',
        temas: [
          'Identificación de fuentes confiables',
          'Análisis de argumentos',
          'Detección de sesgos y falacias',
          'Lectura entre líneas'
        ]
      },
      {
        modulo: 'Módulo 2: Matemáticas en Acción',
        temas: [
          'Interpretación de datos y gráficos',
          'Proporciones y porcentajes',
          'Geometría básica aplicada',
          'Resolución de problemas paso a paso'
        ]
      },
      {
        modulo: 'Módulo 3: Ciencia Cotidiana',
        temas: [
          'Método científico simplificado',
          'Experimentos caseros seguros',
          'Observación y registro de datos',
          'Conclusiones basadas en evidencia'
        ]
      },
      {
        modulo: 'Módulo 4: Debate y Argumentación',
        temas: [
          'Construcción de argumentos sólidos',
          'Debate respetuoso y constructivo',
          'Evaluación de diferentes perspectivas',
          'Comunicación efectiva de ideas'
        ]
      }
    ],
    metodologia: [
      'Sesiones interactivas en vivo',
      'Actividades prácticas y experimentos',
      'Trabajo en equipo y colaboración',
      'Proyecto final integrador',
      'Seguimiento personalizado del progreso'
    ],
    materiales_incluidos: [
      'Manual digital del curso',
      'Kit de experimentos caseros',
      'Acceso a plataforma de recursos',
      'Certificado de participación',
      'Soporte post-curso por 2 semanas'
    ]
  },
  {
    id: 4,
    slug: 'sustentabilidad-desde-casa',
    titulo: 'Sustentabilidad desde casa: acciones que transforman',
    resumen: 'Aprende cómo tus acciones diarias pueden tener un impacto positivo en el medio ambiente y cómo inspirar a otros a hacer lo mismo.',
    descripcion: 'Descubre prácticas sustentables que puedes implementar en tu hogar y comunidad, desde ahorro de energía hasta reducción de residuos.',
    precio_mxn: 600,
    modalidad: 'grabado',
    duracion: '6 horas',
    fecha_inicio: '2024-02-20',
    portada_url: null,
    audiencia: 'adolescentes',
    publicado: true,
    destacado: false,
    objetivos: [
      'Identificar acciones sustentables aplicables en casa',
      'Calcular la huella ambiental personal',
      'Diseñar un plan de acción sustentable',
      'Comunicar la importancia de la sustentabilidad',
      'Implementar cambios en la rutina diaria'
    ],
    perfil_ingreso: [
      'Jóvenes interesados en el medio ambiente',
      'Deseo de hacer cambios positivos',
      'Disposición para experimentar nuevas prácticas',
      'Interés en influir en familia y amigos'
    ],
    requisitos: [
      'Acceso a internet para contenido grabado',
      'Dispositivo para ver videos y descargar materiales',
      'Apoyo familiar para implementar cambios',
      'Compromiso de completar el curso'
    ],
    temario: [
      {
        modulo: 'Módulo 1: Entendiendo la Sustentabilidad',
        temas: [
          '¿Qué es la sustentabilidad?',
          'Impacto de nuestras acciones diarias',
          'Huella ambiental y cómo calcularla',
          'Casos de éxito a nivel mundial'
        ]
      },
      {
        modulo: 'Módulo 2: Energía y Agua en Casa',
        temas: [
          'Ahorro de energía eléctrica',
          'Consumo responsable de agua',
          'Tecnologías eficientes',
          'Hábitos que marcan la diferencia'
        ]
      },
      {
        modulo: 'Módulo 3: Residuos y Consumo',
        temas: [
          'Reducción de residuos',
          'Separación y reciclaje',
          'Consumo consciente',
          'Alternativas sustentables'
        ]
      },
      {
        modulo: 'Módulo 4: Acción y Comunicación',
        temas: [
          'Plan de acción personal',
          'Cómo influir en familia y amigos',
          'Proyectos comunitarios',
          'Seguimiento y mejora continua'
        ]
      }
    ],
    metodologia: [
      'Videos explicativos grabados',
      'Actividades prácticas semanales',
      'Foro de discusión en línea',
      'Proyecto final de implementación',
      'Evaluación continua del progreso'
    ],
    materiales_incluidos: [
      'Videos del curso (acceso ilimitado)',
      'Guía de actividades prácticas',
      'Calculadora de huella ambiental',
      'Plantillas para planes de acción',
      'Certificado de participación'
    ]
  },
  {
    id: 5,
    slug: 'ciencia-ciudadana-proyectos-reales',
    titulo: 'Ciencia ciudadana: participa en proyectos reales',
    resumen: 'Únete a proyectos científicos reales y contribuye al conocimiento mientras aprendes sobre investigación, metodología y análisis de datos.',
    descripcion: 'Participa en proyectos de ciencia ciudadana que te permitirán contribuir a investigaciones reales sobre biodiversidad, cambio climático y sustentabilidad urbana.',
    precio_mxn: 700,
    modalidad: 'híbrido',
    duracion: '10 horas',
    fecha_inicio: '2024-03-01',
    portada_url: null,
    audiencia: 'adolescentes',
    publicado: true,
    destacado: false,
    objetivos: [
      'Participar en proyectos científicos reales',
      'Aprender metodología de investigación',
      'Recopilar y analizar datos científicos',
      'Contribuir al conocimiento científico',
      'Desarrollar habilidades de observación'
    ],
    perfil_ingreso: [
      'Interés en la ciencia y la investigación',
      'Disposición para trabajo de campo',
      'Capacidad de observación detallada',
      'Compromiso con proyectos a largo plazo'
    ],
    requisitos: [
      'Acceso a espacios naturales o urbanos',
      'Dispositivo móvil con cámara',
      'Tiempo para trabajo de campo',
      'Apoyo familiar para salidas'
    ],
    temario: [
      {
        modulo: 'Módulo 1: Introducción a la Ciencia Ciudadana',
        temas: [
          '¿Qué es la ciencia ciudadana?',
          'Proyectos disponibles para participar',
          'Importancia de la participación ciudadana',
          'Ética en la investigación'
        ]
      },
      {
        modulo: 'Módulo 2: Metodología Científica',
        temas: [
          'Formulación de preguntas',
          'Diseño de experimentos',
          'Recopilación de datos',
          'Control de variables'
        ]
      },
      {
        modulo: 'Módulo 3: Proyectos Prácticos',
        temas: [
          'Monitoreo de biodiversidad urbana',
          'Observación de patrones climáticos',
          'Mapeo de espacios verdes',
          'Análisis de calidad del aire'
        ]
      },
      {
        modulo: 'Módulo 4: Análisis y Comunicación',
        temas: [
          'Interpretación de datos',
          'Visualización de resultados',
          'Comunicación de hallazgos',
          'Participación en publicaciones'
        ]
      }
    ],
    metodologia: [
      'Sesiones teóricas en vivo',
      'Trabajo de campo independiente',
      'Análisis de datos en grupo',
      'Presentación de resultados',
      'Participación en proyectos reales'
    ],
    materiales_incluidos: [
      'Manual de metodología científica',
      'Equipo básico de campo',
      'Acceso a plataformas de ciencia ciudadana',
      'Mentoría de investigadores',
      'Certificado de participación científica'
    ]
  }
];
