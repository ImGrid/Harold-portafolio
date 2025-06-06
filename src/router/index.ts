import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/App.vue'),
      meta: {
        title: 'Harold Ponce - Ingeniero de Sistemas',
        description: 'Portafolio de Harold Ponce Pérez - Ingeniero de Sistemas'
      }
    },
    
    {
      path: '/about',
      redirect: '/#sobre-mi'
    },
    {
      path: '/projects',
      redirect: '/#proyectos'
    },
    {
      path: '/skills',
      redirect: '/#habilidades'
    },
    
    // 404 redirect
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
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

export default router