import { createApp } from 'vue'
import App from './App.vue'

// Estilos principales
import './assets/main.css'

const app = createApp(App)

if (import.meta.env.DEV) {
  app.config.performance = true
}

// Montar la aplicación
app.mount('#app')

// Configuración adicional para SEO
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.lang = 'es'
})