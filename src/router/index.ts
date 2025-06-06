import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  // CAMBIO CRÍTICO: Usar createWebHistory solo para desarrollo
  // En GitHub Pages puede causar problemas con rutas
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // CAMBIO: App.vue en lugar de import dinámico
      component: () => import('@/App.vue'),
      meta: {
        title: 'Harold Ponce - Ingeniero de Sistemas',
        description: 'Portafolio de Harold Ponce Pérez - Ingeniero de Sistemas'
      }
    }
  ],
  
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80
      }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

// Guard para actualizar metadatos
router.beforeEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  
  if (to.meta.description) {
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', to.meta.description as string)
  }
})

export default router