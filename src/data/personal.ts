export const personalInfo = {
  name: "Harold Ponce Pérez",
  title: "Ingeniero de Sistemas",
  bio: "Me especializo en desarrollo web con un enfoque particular en inteligencia artificial y ciberseguridad. Disfruto creando soluciones tecnológicas que resuelvan problemas reales.",
  description: "Actualmente trabajo desarrollando sistemas educativos y explorando las posibilidades de la IA en aplicaciones prácticas.",
  
  email: "poncehar0331@gmail.com",
  linkedin: "https://www.linkedin.com/in/harold-ponce-234897285/",
  github: "https://github.com/ImGrid",
  
  mainSkills: [
    "JavaScript",
    "Python", 
    "HTML/CSS",
    "Desarrollo Web",
    "Sistemas Educativos"
  ]
}

export const experience = {
  current: {
    title: "Desarrollador Junior de Sistemas",
    company: "Escuela Militar de Ingeniería (EMI)",
    period: "2025",
    description: "Desarrollé desde cero el Sistema de Evaluación por Rúbricas para Proyectos Finales (SERP), actualmente utilizado por múltiples carreras. Programé el código completo para el proyecto RobotFútbol destinado a demostraciones educativas y brindé apoyo académico a estudiantes de la carrera de Ingeniería de Sistemas.",
    achievements: [
      "Sistema SERP implementado exitosamente en producción",
      "Capacité al plantel docente para implementación del sistema",
      "Programación completa del proyecto RobotFútbol para demostraciones educativas"
    ]
  }
}

export const projects = [
  {
    id: 1,
    title: "Sistema SERP - EMI",
    description: "Sistema de Evaluación por Rúbricas para Proyectos Finales desarrollado para la Escuela Militar de Ingeniería. Actualmente en uso por múltiples carreras (Por temas de confidencialidad no puedo mostrar el codigo).",
    longDescription: "Plataforma digital para gestión y aplicación de evaluaciones académicas por rúbricas. Diseñé interfaz de calificación para docentes con reportes de resultados y estadísticas.",
    technologies: ["React", "JavaScript", "HTML/CSS", "PostgreSQL"],
    year: "2025",
    type: "Profesional",
    impact: "Sistema actualmente implementado en la Escuela Militar de Ingeniería",
    image: "/images/projects/serp-system.png",
    repositoryUrl: null // No disponible por confidencialidad
  },
  {
    id: 2,
    title: "Aplicación Web de Entrenamiento con IA",
    description: "Sistema de reconocimiento de postura corporal para supervisión de ejercicios desarrollado como proyecto de tesis utilizando deep learning.",
    longDescription: "Desarrollé aplicación web de guía y supervisión de ejercicios para el gimnasio 'Inferno Gym'. Implementé sistema de reconocimiento de postura utilizando aprendizaje profundo con modelos diseñados desde cero.",
    technologies: ["Python", "JavaScript", "Flask", "React"],
    year: "2024",
    type: "Proyecto de Tesis",
    impact: "Proyecto de tesis aprobado - Demostró viabilidad de IA en fitness",
    image: "/images/projects/ai-fitness.png",
    repositoryUrl: "https://github.com/ImGrid/InfernoGym.git"
  }
]

export const skills = {
  intermedio: [
    "JavaScript",
    "Python", 
    "HTML/CSS",
    "PHP",
    "React",     
    "Flask",       
    "PostgreSQL"    
  ],  
  basico: [
    "C++",
    "C#",
    "Django",
    "Vite"
  ]
}