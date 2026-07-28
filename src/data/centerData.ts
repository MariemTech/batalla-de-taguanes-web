import {
  EducationalLevel,
  MethodologyPillar,
  RecrearteWorkshop,
  Specialist,
  Testimonial,
  FAQItem,
  NavItem,
} from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nuestro proyecto', href: '#proyecto' },
  { label: 'RECREARTE', href: '#recrearte' },
  { label: 'Horarios', href: '#horarios' },
  { label: 'Contacto', href: '#contacto' },
];

export const CENTER_STATS = [
  {
    value: 'Maternal y Preescolar',
    label: 'Niveles I, II y III',
    subtext: 'Espacios adaptados y estimulación cálida',
    color: 'bg-sky-50 text-sky-800 border-sky-200',
  },
  {
    value: '30 Años',
    label: 'De sólida trayectoria educativa',
    subtext: 'Tres décadas formando a cientos de familias',
    color: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  },
  {
    value: '100% Especializados',
    label: 'Equipo educativo y terapéutico',
    subtext: 'Licenciados y graduados en educación inicial',
    color: 'bg-amber-50 text-amber-800 border-amber-200',
  },
  {
    value: 'Personalizado',
    label: 'Ratios reducidos por aula',
    subtext: 'Acompañamiento cercano a cada ritmo',
    color: 'bg-rose-50 text-rose-800 border-rose-200',
  },
];

export const METHODOLOGY_PILLARS: MethodologyPillar[] = [
  {
    title: 'Afecto y Seguridad Emocional',
    subtitle: 'La base de todo aprendizaje sólido',
    description:
      'Creamos un vínculo seguro de confianza antes de cualquier reto cognitivo. Cuando un niño se siente querido y protegido, explora libremente el mundo.',
    icon: 'Heart',
    highlights: ['Adaptación respetuosa sin prisas', 'Validación emocional activa', 'Clima de serenidad y escucha'],
    bgAccent: 'bg-sky-50/80 border-sky-100 text-sky-900',
  },
  {
    title: 'Inspiración Montessori y Constructivismo',
    subtitle: 'Niños protagonistas de sus descubrimientos',
    description:
      'Aulas preparadas con materiales nobles y manipulativos donde los pequeños eligen, experimentan y aprenden a través del ensayo, el error y el logro propio.',
    icon: 'Compass',
    highlights: ['Materiales de madera y texturas reales', 'Autonomía en rutinas cotidianas', 'Ambiente ordenado y estimulante'],
    bgAccent: 'bg-emerald-50/80 border-emerald-100 text-emerald-900',
  },
  {
    title: 'Áreas de Desarrollo Integral y Lectoescritura',
    subtitle: 'Estimulación sensorial y expresión vivencial',
    description:
      'Desarrollo armónico del movimiento, la iniciación fonológica a la lectoescritura vivencial, el razonamiento matemático con bloques y el cuidado de la naturaleza.',
    icon: 'Sprout',
    highlights: ['Iniciación a la lectoescritura fonológica', 'Huerto escolar orgánico', 'Aulas de exploración sensorial'],
    bgAccent: 'bg-amber-50/80 border-amber-100 text-amber-900',
  },
  {
    title: 'Inglés e Inmersión Bilingüe Natural',
    subtitle: 'Aprendizaje orgánico mediante rutinas',
    description:
      'Integración del idioma inglés de forma cotidiana a través de canciones, cuentos, juegos y expresiones diarias, facilitando la neuroplasticidad infantil.',
    icon: 'Languages',
    highlights: ['Docentes bilingües dedicados', 'Canciones y ritmos diarios', 'Comprensión auditiva intuitiva'],
    bgAccent: 'bg-indigo-50/80 border-indigo-100 text-indigo-900',
  },
];

export const EDUCATIONAL_LEVELS: EducationalLevel[] = [
  {
    id: 'maternal-1',
    name: 'Maternal I',
    ageRange: 'Edad por confirmar',
    badge: 'Atención Temprana y Nido',
    description:
      'Un entorno ultra protegido, cálido y sereno donde respetamos de forma absoluta los ritmos de sueño, alimentación y estimulación afectiva de cada bebé.',
    ratio: 'Ratio muy reducido por aula',
    objectives: [
      'Desarrollo del tono muscular y sostén cefálico mediante movimiento libre',
      'Estimulación visual, auditiva y táctil suave',
      'Construcción del apego seguro con educadoras referentes',
    ],
    keyActivities: ['Masaje infantil y relajación', 'Cestos de tesoros con materiales naturales', 'Música suave y melodías de cuna'],
    color: {
      bg: 'bg-sky-50/60',
      border: 'border-sky-200',
      text: 'text-sky-900',
      pill: 'bg-sky-100 text-sky-800',
    },
    iconName: 'Baby',
  },
  {
    id: 'maternal-2',
    name: 'Maternal II',
    ageRange: 'Edad por confirmar',
    badge: 'Primeros Pasos y Autonomía',
    description:
      'Con la conquista de la marcha, los niños exploran activamente. Fomentamos la coordinación motora, el desarrollo del lenguaje inicial y el juego libre guiado.',
    ratio: 'Ratio reducido por aula',
    objectives: [
      'Adquisición de la marcha segura y equilibrio corporal',
      'Exploración de texturas, trasvases y psicomotricidad blanda',
      'Inicio del lenguaje expresivo e identificación de emociones básicas',
    ],
    keyActivities: ['Circuitos de psicomotricidad blanda', 'Juegos de clasificación y trasvases', 'Canciones con gestos y vocabulario'],
    color: {
      bg: 'bg-emerald-50/60',
      border: 'border-emerald-200',
      text: 'text-emerald-900',
      pill: 'bg-emerald-100 text-emerald-800',
    },
    iconName: 'Footprints',
  },
  {
    id: 'preescolar-1',
    name: 'Preescolar I',
    ageRange: 'Edad por confirmar',
    badge: 'Socialización y Expresión',
    description:
      'Etapa de gran eclosión del lenguaje, socialización con iguales y desarrollo de hábitos. Acompañamos con empatía la autonomía y la autorregulación.',
    ratio: 'Ratio controlado por aula',
    objectives: [
      'Desarrollo de la comunicación verbal y estructuración de frases',
      'Acompañamiento respetuoso en el proceso de autonomía',
      'Primeras interacciones cooperativas y resolución guiada de conflictos',
    ],
    keyActivities: ['Rincón de juego simbólico (cocinita, profesiones)', 'Talleres de iniciación a la pintura y arcilla', 'Cuentacuentos interactivos e inglés inicial'],
    color: {
      bg: 'bg-amber-50/60',
      border: 'border-amber-200',
      text: 'text-amber-900',
      pill: 'bg-amber-100 text-amber-800',
    },
    iconName: 'Sparkles',
  },
  {
    id: 'preescolar-2',
    name: 'Preescolar II',
    ageRange: 'Edad por confirmar',
    badge: 'Pensamiento y Creatividad',
    description:
      'Desarrollo del pensamiento lógico, experimentos vivenciales, inicio de trazos fonológicos e inmersión en inglés cotidiano.',
    ratio: 'Ratio optimizado por aula',
    objectives: [
      'Razonamiento lógico-matemático con materiales clasificatorios',
      'Iniciación fonológica a la lectoescritura',
      'Coordinación visomotora y proyectos temáticos de ciencias',
    ],
    keyActivities: ['Proyectos de investigación sobre la naturaleza', 'Juegos de patrones y lógica', 'Aulas de inmersión en inglés'],
    color: {
      bg: 'bg-indigo-50/60',
      border: 'border-indigo-200',
      text: 'text-indigo-900',
      pill: 'bg-indigo-100 text-indigo-800',
    },
    iconName: 'Sparkles',
  },
  {
    id: 'preescolar-3',
    name: 'Preescolar III',
    ageRange: 'Edad por confirmar',
    badge: 'Consolidación y Preparación',
    description:
      'Preparación integral para la transición a la educación primaria mediante proyectos de investigación, lectoescritura, razonamiento lógico y autonomía personal.',
    ratio: 'Ratio optimizado por aula',
    objectives: [
      'Consolidación de la lectoescritura y expresión escrita inicial',
      'Habilidades matemáticas avanzadas y resolución de retos',
      'Trabajo cooperativo en equipo y autonomía personal madura',
    ],
    keyActivities: ['Talleres de lectoescritura creativa', 'Experimentos de ciencias aplicadas', 'Dramatización y proyectos bilingües'],
    color: {
      bg: 'bg-rose-50/60',
      border: 'border-rose-200',
      text: 'text-rose-900',
      pill: 'bg-rose-100 text-rose-800',
    },
    iconName: 'GraduationCap',
  },
];

export const RECREARTE_WORKSHOPS: RecrearteWorkshop[] = [
  {
    id: 'pintura-plastica',
    title: 'Expresión Plástica y Pintura Libre',
    subtitle: 'El lienzo como canal de libertad sin juicio',
    age: 'Maternal y Preescolar',
    description:
      'Los pequeños experimentan con lienzos en caballetes de su altura, pinceles gruesos, esponjas, rodillos y pinturas lavables no tóxicas, expresando su mundo interior.',
    tags: ['Color', 'Motricidad Fina', 'Autoestima'],
    colorTheme: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      accent: 'text-amber-700',
    },
    icon: 'Palette',
  },
  {
    id: 'texturas-arcilla',
    title: 'Texturas, Arcilla y Escultura Infantil',
    subtitle: 'Manipulación tridimensional e investigación táctil',
    age: 'Maternal y Preescolar',
    description:
      'Modelado con harina, masa salada, pastas sensoriales y arcilla natural. Fortalece los músculos de la mano imprescindibles para la futura escritura.',
    tags: ['Fuerza Palmar', 'Concentración', 'Relajación'],
    colorTheme: {
      bg: 'bg-rose-50',
      border: 'border-rose-200',
      accent: 'text-rose-700',
    },
    icon: 'HandMetal',
  },
  {
    id: 'musica-movimiento',
    title: 'Música, Ritmo y Canto Vivo',
    subtitle: 'Discriminación auditiva y ritmo corporal',
    age: 'Maternal y Preescolar',
    description:
      'Exploración con instrumentos Orff de madera (maracas, xilófonos, panderetas) acompañados de danza libre y ejercicios de respiración rítmica.',
    tags: ['Oído Musical', 'Coordinación', 'Expresión'],
    colorTheme: {
      bg: 'bg-sky-50',
      border: 'border-sky-200',
      accent: 'text-sky-700',
    },
    icon: 'Music',
  },
  {
    id: 'psicomotricidad-teatro',
    title: 'Juego Dramático y Psicomotricidad',
    subtitle: 'Poner el cuerpo en acción e imaginar historias',
    age: 'Maternal y Preescolar',
    description:
      'Módulos de gomaespuma gigantes, disfraces, telas de colores y sombras chinas. El espacio idóneo para descargar energía y desarrollar la empatía.',
    tags: ['Equilibrio', 'Juego En Equipo', 'Imaginación'],
    colorTheme: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      accent: 'text-emerald-700',
    },
    icon: 'Smile',
  },
  {
    id: 'huerto-ecologia',
    title: 'Pequeños Botánicos y Huerto',
    subtitle: 'Sembrar, regar y cuidar la tierra',
    age: 'Maternal y Preescolar',
    description:
      'Siembra de hortalizas, plantas aromáticas y cuidado del compost. Los niños aprenden de dónde provienen los alimentos y el respeto a la biodiversidad.',
    tags: ['Sostenibilidad', 'Responsabilidad', 'Biología Infantil'],
    colorTheme: {
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      accent: 'text-teal-700',
    },
    icon: 'Trees',
  },
];

export const SPECIALISTS: Specialist[] = [
  {
    role: 'Orientadora Educativa y Familiar',
    title: 'Coordinación Pedagógica y Familia',
    description:
      'Ofrece asesoramiento continuo a los padres en pautas de crianza, adaptación escolar, rutinas del hogar y transiciones clave durante la primera infancia.',
    focusArea: 'Orientación a padres y seguimiento integral del aula',
    icon: 'UserCheck',
  },
  {
    role: 'Psicopedagogía Clínica',
    title: 'Evaluación y Acompañamiento del Aprendizaje',
    description:
      'Detecta de forma temprana estilos individuales de aprendizaje, fortalezas y necesidades específicas para diseñar adaptaciones metodológicas en el aula.',
    focusArea: 'Detección precoz y apoyo psicopedagógico personalizado',
    icon: 'Brain',
  },
  {
    role: 'Terapia del Lenguaje / Logopedia',
    title: 'Estimulación de la Comunicación',
    description:
      'Trabaja la articulación, fluidez, comprensión y producción verbal a través de juegos de soplo, cuentos interactivos y ejercitación bucofacial divertida.',
    focusArea: 'Desarrollo fonológico y habilidades comunicativas',
    icon: 'MessageSquareHeart',
  },
  {
    role: 'Terapia Ocupacional Infantil',
    title: 'Integración Sensorial y Autonomía',
    description:
      'Acompaña a los niños en el procesamiento sensorial, la planificación motora fina y la destreza funcional en las actividades cotidianas (vestido, cuchara).',
    focusArea: 'Autorregulación sensorial y motricidad fina',
    icon: 'Sparkles',
  },
  {
    role: 'Fisioterapia Pediátrica',
    title: 'Desarrollo Motor e Hitos de Movimiento',
    description:
      'Evalúa y favorece el tono muscular, la postura, el volteo, gateo y marcha armónica, garantizando una evolución física saludable y sin dolor.',
    focusArea: 'Prevención e intervención motriz temprana',
    icon: 'Activity',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Espacio reservado para testimonio real de familias del centro.',
    author: 'Testimonio real pendiente de incorporar',
    role: 'Familia del centro',
    yearsInCenter: 'Pendiente de incorporación',
    highlight: 'Testimonio real pendiente de incorporar',
  },
  {
    quote: 'Espacio reservado para testimonio real de familias del centro.',
    author: 'Testimonio real pendiente de incorporar',
    role: 'Familia del centro',
    yearsInCenter: 'Pendiente de incorporación',
    highlight: 'Testimonio real pendiente de incorporar',
  },
  {
    quote: 'Espacio reservado para testimonio real de familias del centro.',
    author: 'Testimonio real pendiente de incorporar',
    role: 'Familia del centro',
    yearsInCenter: 'Pendiente de incorporación',
    highlight: 'Testimonio real pendiente de incorporar',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: '¿Cómo acompañan el periodo de adaptación?',
    answer:
      'El proceso se realiza de manera cercana y respetuosa, teniendo en cuenta el ritmo y las necesidades de cada niño. El equipo mantiene una comunicación constante con la familia para favorecer una adaptación progresiva y segura.',
    category: 'pedagogia',
  },
  {
    question: '¿Puedo conocer el centro antes de inscribir a mi hijo?',
    answer:
      'Sí. Las familias pueden conocer nuestras instalaciones solicitando previamente una visita a través del WhatsApp institucional.',
    category: 'admision',
  },
  {
    question: '¿Cómo puedo conocer la disponibilidad de plazas y las tarifas?',
    answer:
      'La disponibilidad de plazas, las tarifas y las condiciones se informan personalmente por WhatsApp, ya que pueden variar según el nivel, el horario y las necesidades de cada familia.',
    category: 'admision',
  },
  {
    question: '¿Cómo se mantiene informada a la familia?',
    answer:
      'Mantenemos un trato directo, cercano y personalizado con cada familia. Compartimos información sobre el día a día, los avances y las necesidades de cada niño, favoreciendo una comunicación constante entre la familia y el centro.',
    category: 'pedagogia',
  },
  {
    question: '¿Qué sucede si mi hijo necesita un acompañamiento particular?',
    answer:
      'Cada niño recibe un acompañamiento directo y personalizado, respetando su ritmo y sus necesidades. Cuando el caso lo requiere, contamos con el apoyo de orientadora, psicopedagoga, terapeuta de lenguaje, terapeuta ocupacional y fisioterapeuta, trabajando en colaboración con la familia.',
    category: 'pedagogia',
  },
];

export const SCHEDULE_OPTIONS = [
  {
    title: 'Entrada al Centro',
    time: '7:30 a. m.',
    badge: 'Inicio de Jornada',
    description: 'Apertura de instalaciones y recepción de niños.',
    items: ['Entrada desde las 7:30 a. m.'],
    accent: 'border-sky-300 bg-sky-50/50',
  },
  {
    title: 'Media Jornada',
    time: '11:45 a. m.',
    badge: 'Salida Mediodía',
    description: 'Modalidad de media jornada sin almuerzo en el centro.',
    items: ['Salida a las 11:45 a. m.'],
    accent: 'border-emerald-300 bg-emerald-50/50',
  },
  {
    title: 'Media Jornada con Almuerzo',
    time: '2:30 p. m.',
    badge: 'Salida Almuerzo',
    description: 'Modalidad de media jornada que incluye el espacio para el almuerzo enviado por la familia.',
    items: ['Salida a las 2:30 p. m.'],
    accent: 'border-amber-300 bg-amber-50/50',
  },
  {
    title: 'Jornada Completa',
    time: '4:30 p. m.',
    badge: 'Jornada Regular',
    description: 'Permanencia hasta final de la tarde.',
    items: ['Salida a las 4:30 p. m.'],
    accent: 'border-purple-300 bg-purple-50/50',
  },
  {
    title: 'Horario Extendido',
    time: 'Hasta las 5:30 p. m.',
    badge: 'Previa Coordinación',
    description: 'Sujeto a disponibilidad y previa coordinación con el centro.',
    items: ['Salida hasta las 5:30 p. m.'],
    accent: 'border-rose-300 bg-rose-50/50',
  },
];
