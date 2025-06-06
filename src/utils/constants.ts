// Información de contacto y enlaces
export const CONTACT_INFO = {
  EMAIL: 'poncehar0331@gmail.com',
  PHONE: '68507984',
  LINKEDIN: 'https://linkedin.com/in/haroldponce-234897285',
  GITHUB: 'https://github.com/haroldponce', // Actualiza con tu usuario real
  LOCATION: 'Santa Cruz, Bolivia',
  TIMEZONE: 'GMT-4',
  LANGUAGES: ['Español (Nativo)', 'Inglés (Intermedio)']
} as const

// Rutas de navegación
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  SKILLS: '/skills',
  CONTACT: '/contact'
} as const

// Configuraciones de animación
export const ANIMATION_CONFIG = {
  DURATION: {
    FAST: 200,
    NORMAL: 300,
    SLOW: 500,
    SKILL_BAR: 1000
  },
  DELAY: {
    STAGGER: 100,
    CARD: 150,
    SKILL: 200
  },
  EASING: {
    EASE_OUT: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    EASE_IN_OUT: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    BOUNCE: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  }
} as const

// Breakpoints de diseño (matching Tailwind)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536
} as const

// Tipos de proyecto y categorías
export const PROJECT_TYPES = {
  PROFESSIONAL: 'Proyecto Profesional',
  THESIS: 'Proyecto de Tesis',
  EDUCATIONAL: 'Proyecto Educativo',
  PERSONAL: 'Proyecto Personal',
  FREELANCE: 'Proyecto Freelance'
} as const

export const PROJECT_STATUS = {
  IN_PRODUCTION: 'En producción',
  COMPLETED: 'Completado',
  DEVELOPMENT_COMPLETED: 'Desarrollo completado',
  IN_PROGRESS: 'En desarrollo',
  PLANNED: 'Planificado'
} as const

// Niveles de habilidades
export const SKILL_LEVELS = {
  EXPERT: { min: 90, label: 'Experto', color: 'green' },
  ADVANCED: { min: 80, label: 'Avanzado', color: 'blue' },
  INTERMEDIATE_ADVANCED: { min: 70, label: 'Intermedio-Avanzado', color: 'indigo' },
  INTERMEDIATE: { min: 60, label: 'Intermedio', color: 'yellow' },
  BASIC_INTERMEDIATE: { min: 40, label: 'Básico-Intermedio', color: 'orange' },
  BASIC: { min: 0, label: 'Básico', color: 'red' }
} as const

// Categorías de certificaciones
export const CERTIFICATION_CATEGORIES = {
  DEVELOPMENT: 'Desarrollo',
  DATA_SCIENCE: 'Data Science',
  CYBERSECURITY: 'Ciberseguridad',
  AI_ML: 'IA/ML',
  CLOUD: 'Cloud Computing',
  OTHER: 'Otro'
} as const

// Estados de disponibilidad
export const AVAILABILITY_STATUS = {
  AVAILABLE: {
    status: 'Disponible',
    color: 'text-green-600 bg-green-100'
  },
  INTERESTED: {
    status: 'Interesado',
    color: 'text-blue-600 bg-blue-100'
  },
  EVALUATING: {
    status: 'Evaluando',
    color: 'text-purple-600 bg-purple-100'
  },
  BUSY: {
    status: 'Ocupado',
    color: 'text-red-600 bg-red-100'
  }
} as const

// Configuración de SEO
export const SEO_CONFIG = {
  DEFAULT_TITLE: 'Harold Ponce Pérez - Ingeniero de Sistemas',
  DEFAULT_DESCRIPTION: 'Portafolio profesional de Harold Ponce Pérez, Ingeniero de Sistemas especializado en Inteligencia Artificial y Desarrollo de Software',
  KEYWORDS: [
    'Harold Ponce',
    'Ingeniero de Sistemas',
    'Inteligencia Artificial',
    'Desarrollo de Software',
    'React',
    'Python',
    'Machine Learning',
    'Deep Learning',
    'Ciberseguridad',
    'Santa Cruz Bolivia',
    'Programador',
    'Desarrollador'
  ],
  SITE_URL: 'https://haroldponce.dev', // Actualiza con tu dominio real
  AUTHOR: 'Harold Ponce Pérez',
  LOCALE: 'es_BO'
} as const

// Configuración de formularios
export const FORM_CONFIG = {
  CONTACT: {
    MIN_MESSAGE_LENGTH: 10,
    MAX_MESSAGE_LENGTH: 1000,
    REQUIRED_FIELDS: ['name', 'email', 'subject', 'message']
  },
  VALIDATION: {
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE_REGEX: /^[\+]?[1-9][\d]{0,15}$/
  }
} as const

// Iconos y emojis temáticos
export const ICONS = {
  TECHNOLOGIES: {
    REACT: '⚛️',
    PYTHON: '🐍',
    JAVASCRIPT: '🟨',
    AI: '🤖',
    DATABASE: '🗄️',
    SECURITY: '🔒',
    WEB: '🌐',
    MOBILE: '📱'
  },
  STATUS: {
    SUCCESS: '✅',
    ERROR: '❌',
    WARNING: '⚠️',
    INFO: 'ℹ️',
    LOADING: '⏳'
  },
  ACTIONS: {
    EMAIL: '📧',
    PHONE: '📱',
    LINKEDIN: '💼',
    GITHUB: '🐙',
    DOWNLOAD: '⬇️',
    EXTERNAL_LINK: '🔗'
  }
} as const

// Configuración de notificaciones
export const NOTIFICATION_CONFIG = {
  SUCCESS_DURATION: 5000,
  ERROR_DURATION: 7000,
  WARNING_DURATION: 6000,
  INFO_DURATION: 4000
} as const

// Métricas y estadísticas
export const STATS = {
  YEARS_EXPERIENCE: 4,
  PROJECTS_COMPLETED: 10,
  TECHNOLOGIES_USED: 15,
  CERTIFICATIONS: 8,
  RESPONSE_TIME_HOURS: 24
} as const