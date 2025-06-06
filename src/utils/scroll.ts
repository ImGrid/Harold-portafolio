// Utilidades para scroll suave entre secciones

export function scrollToSection(elementId: string) {
  const element = document.getElementById(elementId.replace('#', ''))
  if (element) {
    const offset = 80 // Altura del navbar
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// Configurar navegación suave al cargar la página
export function setupSmoothNavigation() {
  // Configurar todos los enlaces de navegación
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('a[href^="#"]')
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const href = link.getAttribute('href')
        if (href) {
          scrollToSection(href)
        }
      })
    })
  })
}

// Detectar qué sección está visible para highlighting del nav
export function setupActiveNavigation() {
  const sections = ['inicio', 'proyectos', 'habilidades']
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          
          // Remover clase activa de todos los enlaces
          document.querySelectorAll('nav a').forEach((link) => {
            link.classList.remove('text-primary-600', 'font-semibold')
            link.classList.add('text-neutral-700')
          })
          
          // Añadir clase activa al enlace correspondiente
          const activeLink = document.querySelector(`nav a[href="#${id}"]`)
          if (activeLink) {
            activeLink.classList.remove('text-neutral-700')
            activeLink.classList.add('text-primary-600', 'font-semibold')
          }
        }
      })
    },
    {
      threshold: 0.3, // 30% visible
      rootMargin: '-80px 0px -50% 0px' // Considerando el navbar
    }
  )

  // Observar todas las secciones
  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      observer.observe(section)
    }
  })
}