import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

// Estilos principales optimizados
import './assets/main.css'

const app = createApp(App)

// Configurar router
app.use(router)

// Configuración global para desarrollo
if (import.meta.env.DEV) {
  app.config.performance = true
}

// Manejo de errores global
app.config.errorHandler = (err, instance, info) => {
  console.error('Error global capturado:', err)
  console.error('Información del componente:', info)
}

// Montar la aplicación
app.mount('#app')

// Configuración adicional para SEO y accesibilidad
document.addEventListener('DOMContentLoaded', () => {
  // Configurar idioma
  document.documentElement.lang = 'es'
  
  // Mejorar accesibilidad con skip link
  const skipLink = document.createElement('a')
  skipLink.href = '#sobre-mi'
  skipLink.textContent = 'Ir al contenido principal'
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded z-50'
  document.body.insertBefore(skipLink, document.body.firstChild)
})

// Service Worker para PWA (opcional para el futuro)
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration)
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}