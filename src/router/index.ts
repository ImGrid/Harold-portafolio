import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/App.vue'), // Una sola vista
      meta: {
        title: 'Harold Ponce - Ingeniero de Sistemas',
        description: 'Portafolio de Harold Ponce Pérez - Ingeniero de Sistemas con experiencia en desarrollo web y sistemas educativos'
      }
    },
    
    // Redirigir todas las rutas anteriores a secciones específicas
    {
      path: '/about',
      redirect: '/#sobre-mi'
    },
    {
      path: '/experience',
      redirect: '/#experiencia'
    },
    {
      path: '/projects',
      redirect: '/#proyectos'
    },
    {
      path: '/skills',
      redirect: '/#habilidades'
    },
    {
      path: '/contact',
      redirect: '/#sobre-mi'
    },
    
    // Manejar páginas no encontradas
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
  
  // Scroll automático a secciones con hash
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // Offset para navbar fixed
      }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

// Guard para actualizar metadatos de la página
router.beforeEach((to) => {
  // Actualizar título
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  
  // Actualizar meta description
  if (to.meta.description) {
    let metaDescription = document.querySelector('meta[name="description"]')
    
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    
    metaDescription.setAttribute('content', to.meta.description as string)
  }

  // Actualizar meta viewport para responsive
  let metaViewport = document.querySelector('meta[name="viewport"]')
  if (!metaViewport) {
    metaViewport = document.createElement('meta')
    metaViewport.setAttribute('name', 'viewport')
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0')
    document.head.appendChild(metaViewport)
  }
})

export default router