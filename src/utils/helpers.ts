// Utilidades adicionales para el portafolio

// Scroll suave a elemento específico
export function scrollToElement(elementId: string, offset: number = 80) {
  const element = document.getElementById(elementId)
  if (!element) return

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
  const offsetPosition = elementPosition - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  })
}

// Detectar si un elemento está visible en el viewport
export function isElementInViewport(element: HTMLElement, threshold: number = 0.5): boolean {
  const rect = element.getBoundingClientRect()
  const windowHeight = window.innerHeight || document.documentElement.clientHeight

  return rect.top <= windowHeight * (1 - threshold) && rect.bottom >= windowHeight * threshold
}

// Formatear fecha para mostrar
export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long'
  }
  return new Date(dateString).toLocaleDateString('es-ES', options)
}

// Calcular años de experiencia
export function calculateExperience(startDate: string): number {
  const start = new Date(startDate)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - start.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return Math.floor(diffDays / 365)
}

// Throttle para scroll events
export function throttle<T extends (...args: any[]) => void>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Generar ID único para elementos
export function generateId(prefix: string = 'id'): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

// Validar email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Copiar texto al portapapeles
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    } else {
      // Fallback para navegadores sin soporte
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'absolute'
      textArea.style.left = '-999999px'
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      return true
    }
  } catch (error) {
    console.error('Error al copiar al portapapeles:', error)
    return false
  }
}

// Detectar dispositivo móvil
export function isMobile(): boolean {
  return window.innerWidth < 768
}

// Precargar imagen
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

// Lazy loading para imágenes
export function setupLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          img.src = img.dataset.src || ''
          img.classList.remove('opacity-0')
          img.classList.add('opacity-100')
          observer.unobserve(img)
        }
      })
    })

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img)
    })
  }
}

// Analytics simples (para futuro)
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  if (import.meta.env.PROD) {
    // Aquí podrías integrar Google Analytics, Mixpanel, etc.
    console.log('Event tracked:', eventName, properties)
  }
}

// Gestionar preferencias del usuario
export class UserPreferences {
  private static readonly STORAGE_KEY = 'portfolio-preferences'

  static get(): Record<string, any> {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY)
      return stored ? JSON.parse(stored) : {}
    } catch {
      return {}
    }
  }

  static set(key: string, value: any): void {
    try {
      const preferences = this.get()
      preferences[key] = value
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(preferences))
    } catch (error) {
      console.error('Error saving preferences:', error)
    }
  }

  static remove(key: string): void {
    try {
      const preferences = this.get()
      delete preferences[key]
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(preferences))
    } catch (error) {
      console.error('Error removing preference:', error)
    }
  }
}