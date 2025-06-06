<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { personalInfo, projects, skills} from '@/data/personal'
import { useDarkMode } from '@/composables/useDarkMode'

// Modo oscuro
const { isDark, toggleDarkMode } = useDarkMode()

// Navegación móvil
const isMobileMenuOpen = ref(false)

// Scroll suave a secciones
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
  isMobileMenuOpen.value = false
}

onMounted(() => {
  const sections = ['sobre-mi', 'experiencia', 'proyectos', 'habilidades']
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          
          document.querySelectorAll('[data-nav-link]').forEach((link) => {
            link.classList.remove('text-primary-600', 'dark:text-cyan-400', 'font-semibold')
            link.classList.add('text-neutral-700', 'dark:text-neutral-300')
          })
          
          const activeLink = document.querySelector(`[data-nav-link="${id}"]`)
          if (activeLink) {
            activeLink.classList.remove('text-neutral-700', 'dark:text-neutral-300')
            activeLink.classList.add('text-primary-600', 'dark:text-cyan-400', 'font-semibold')
          }
        }
      })
    },
    { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
  )

  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) observer.observe(section)
  })
})
</script>

<template>
  <div :class="{ 'dark': isDark }" class="min-h-screen bg-gradient-to-br from-primary-50 via-neutral-50 to-primary-100 dark:bg-gradient-to-br dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 transition-all duration-500">
    
    <nav class="fixed top-0 left-0 right-0 z-50 bg-primary-50/80 dark:bg-neutral-900/90 backdrop-blur-xl border-b border-primary-200/50 dark:border-neutral-700/50 transition-all duration-300 shadow-lg shadow-primary-100/20 dark:shadow-neutral-900/50">
      <div class="max-w-6xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          
          <div class="hidden md:block">
            <span class="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 dark:from-cyan-400 dark:to-white bg-clip-text text-transparent">
              Harold Ponce
            </span>
          </div>          
          <div class="hidden md:flex items-center justify-center flex-1 space-x-8">
            <button
              @click="scrollToSection('sobre-mi')"
              data-nav-link="sobre-mi"
              class="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-cyan-400 hover:bg-primary-100/50 dark:hover:bg-cyan-900/20 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              Sobre mí
            </button>
            <button
              @click="scrollToSection('experiencia')"
              data-nav-link="experiencia"
              class="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-cyan-400 hover:bg-primary-100/50 dark:hover:bg-cyan-900/20 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
              Experiencia
            </button>
            <button
              @click="scrollToSection('proyectos')"
              data-nav-link="proyectos"
              class="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-cyan-400 hover:bg-primary-100/50 dark:hover:bg-cyan-900/20 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
              Proyectos
            </button>
            <button
              @click="scrollToSection('habilidades')"
              data-nav-link="habilidades"
              class="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-cyan-400 hover:bg-primary-100/50 dark:hover:bg-cyan-900/20 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Habilidades
            </button>
          </div>

          <!--modo oscuro -->
          <button
            @click="toggleDarkMode"
            class="p-3 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-cyan-400 hover:bg-primary-100/50 dark:hover:bg-cyan-900/20 transition-all duration-200 hover:scale-110"
            aria-label="Cambiar tema"
          >
            <svg v-if="!isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
          </button>

          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden p-2 rounded-lg text-neutral-700 dark:text-neutral-300"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

        <div v-if="isMobileMenuOpen" class="md:hidden mt-4 py-4 border-t border-primary-200/50 dark:border-neutral-700/50 bg-primary-50/30 dark:bg-neutral-800/30 rounded-lg backdrop-blur-sm">
          <div class="flex flex-col space-y-3">
            <button @click="scrollToSection('sobre-mi')" class="flex items-center gap-3 text-left text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-cyan-400 py-2 px-4 rounded-lg hover:bg-primary-100/50 dark:hover:bg-cyan-900/20">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              Sobre mí
            </button>
            <button @click="scrollToSection('experiencia')" class="flex items-center gap-3 text-left text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-cyan-400 py-2 px-4 rounded-lg hover:bg-primary-100/50 dark:hover:bg-cyan-900/20">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
              Experiencia
            </button>
            <button @click="scrollToSection('proyectos')" class="flex items-center gap-3 text-left text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-cyan-400 py-2 px-4 rounded-lg hover:bg-primary-100/50 dark:hover:bg-cyan-900/20">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
              Proyectos
            </button>
            <button @click="scrollToSection('habilidades')" class="flex items-center gap-3 text-left text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-cyan-400 py-2 px-4 rounded-lg hover:bg-primary-100/50 dark:hover:bg-cyan-900/20">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Habilidades
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- CONTENIDO PRINCIPAL -->
    <main>
      <section id="sobre-mi" class="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-primary-100 via-primary-50 to-neutral-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 relative overflow-hidden">
        <div class="max-w-5xl mx-auto relative z-10">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            
            <div class="text-center lg:text-left">
              
              <div class="mb-8">
                <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-4 mt-8 md:mt-0">
                  👋 ¡Hola! Soy Harold Ponce
                </p>
                
                <h1 class="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  <span class="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-cyan-400 dark:via-white dark:to-cyan-200 bg-clip-text text-transparent">
                    Ingeniero de Sistemas
                  </span>
                  <br>
                </h1>
                
                <!-- Descripción -->
                <div class="space-y-4 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  <p>{{ personalInfo.bio }}</p>
                </div>
              </div>

              <div class="space-y-8">
                <div class="flex items-center justify-center lg:justify-start gap-3 bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm border border-primary-200/30 dark:border-cyan-500/20 rounded-2xl px-6 py-4 shadow-lg">
                  <img 
                    src="/Gmail.png" 
                    alt="Gmail" 
                    class="w-7 h-7 object-contain"
                    loading="lazy"
                  >
                  <span class="text-lg font-medium text-neutral-700 dark:text-neutral-200">
                    {{ personalInfo.email }}
                  </span>
                </div>

                <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <a 
                    :href="personalInfo.linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 dark:from-cyan-500 dark:to-cyan-600 dark:hover:from-cyan-400 dark:hover:to-cyan-500 text-white px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-primary-600/30 dark:shadow-cyan-500/30"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                  
                  <a 
                    :href="personalInfo.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-2 bg-gradient-to-r from-neutral-800 to-neutral-900 hover:from-neutral-900 hover:to-black dark:from-neutral-700 dark:to-neutral-800 dark:hover:from-neutral-600 dark:hover:to-neutral-700 text-white px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-neutral-800/30"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  
                  <a 
                    href="/harold-ponce-cv.pdf"
                    download
                    class="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 dark:from-emerald-500 dark:to-emerald-600 dark:hover:from-emerald-400 dark:hover:to-emerald-500 text-white px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-green-600/30 dark:shadow-emerald-500/30"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    Descargar CV
                  </a>
                </div>
              </div>
            </div>

            <div class="flex justify-center">
              <div class="relative">
                <img
                  src="/profile.webp"
                  alt="Harold Ponce Pérez"
                  class="w-80 h-80 object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                  fetchpriority="high"
                  decoding="async"
                >
                <div class="w-80 h-80 bg-gradient-to-br from-primary-300 via-primary-500 to-primary-700 dark:from-cyan-600 dark:via-cyan-500 dark:to-cyan-400 rounded-3xl flex items-center justify-center text-white text-8xl font-bold shadow-2xl hidden">
                  HP
                </div>
                
                <div class="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 dark:from-cyan-400 dark:to-cyan-600 rounded-full opacity-30 blur-sm"></div>
                <div class="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-primary-300 to-primary-500 dark:from-yellow-400 dark:to-orange-400 rounded-full opacity-40"></div>
                <div class="absolute top-1/2 -right-12 w-3 h-3 bg-primary-500 dark:bg-cyan-400 rounded-full"></div>
                <div class="absolute bottom-1/4 -left-4 w-2 h-2 bg-primary-400 dark:bg-yellow-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" class="py-20 px-6 bg-white dark:bg-neutral-800 transition-colors duration-300">
        <div class="max-w-4xl mx-auto">
          
          <h2 class="text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 dark:from-cyan-400 dark:to-white bg-clip-text text-transparent text-center mb-16">
            Experiencia
          </h2>

          <div class="relative">
            <div class="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-primary-500 to-primary-700 dark:from-cyan-400 dark:via-cyan-500 dark:to-cyan-600 rounded-full shadow-lg shadow-primary-500/30 dark:shadow-cyan-500/20"></div>
            
            <div class="relative pl-20 pb-12">
              <div class="absolute left-6 top-0 w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-700 dark:from-cyan-400 dark:to-cyan-600 rounded-full border-4 border-white dark:border-neutral-800 shadow-lg shadow-primary-500/50 dark:shadow-cyan-400/30 animate-pulse-soft"></div>
              
              <div class="bg-gradient-to-br from-primary-50/50 to-white dark:from-neutral-700 dark:to-neutral-700 backdrop-blur-sm border border-primary-200/30 dark:border-neutral-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-primary-100/20 dark:hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-[1.02]">
                <div class="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                  <div>
                    <h3 class="text-xl font-bold text-neutral-900 dark:text-white">
                      Desarrollador Junior de Sistemas
                    </h3>
                    <div class="text-primary-600 dark:text-cyan-400 font-semibold text-lg">
                      Escuela Militar de Ingeniería (EMI)
                    </div>
                  </div>
                  <div class="bg-primary-100 dark:bg-cyan-900/50 text-primary-700 dark:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium mt-2 lg:mt-0">
                    2025
                  </div>
                </div>
                
                <p class="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Desarrollé desde cero el Sistema de Evaluación por Rúbricas para Proyectos Finales (SERP), actualmente utilizado por múltiples carreras. Programé el código completo para el proyecto RobotFútbol destinado a demostraciones educativas y brindé apoyo académico a estudiantes de la carrera de Ingeniería de Sistemas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proyectos" class="py-20 px-6 bg-gradient-to-br from-primary-50 via-neutral-50 to-primary-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 transition-colors duration-300">
        <div class="max-w-5xl mx-auto">
          
          <h2 class="text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 dark:from-cyan-400 dark:to-white bg-clip-text text-transparent text-center mb-16">
            Proyectos
          </h2>
          <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            <article 
              v-for="project in projects" 
              :key="project.id"
              class="bg-white/70 dark:bg-neutral-700/70 backdrop-blur-sm border border-primary-200/30 dark:border-neutral-600/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary-200/20 dark:hover:shadow-cyan-500/10 hover:scale-105 transition-all duration-300 group h-full flex flex-col"
            >
              <div class="aspect-video bg-gradient-to-br from-primary-200 to-primary-300 dark:from-neutral-800 dark:to-neutral-700 relative overflow-hidden">
                <img 
                  v-if="project.id === 1"
                  src="/Serp_system.webp" 
                  :alt="project.title"
                  class="w-full h-full object-cover"
                  loading="lazy"
                >
                <img 
                  v-else-if="project.id === 2"
                  src="/IA_posturas.webp" 
                  :alt="project.title"
                  class="w-full h-full object-cover"
                  loading="lazy"
                >
                <div 
                  v-else
                  class="flex items-center justify-center h-full"
                >
                  <div class="text-center">
                    <div class="text-4xl mb-2">🤖</div>
                    <div class="text-primary-700 dark:text-cyan-300 font-medium">
                      {{ project.title.split(' - ')[0] }}
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="p-6 flex flex-col flex-1">
                <div class="flex-1">
                  <h3 class="font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-cyan-400 transition-colors text-lg">
                    {{ project.title }}
                  </h3>
                  <p class="text-neutral-600 dark:text-neutral-300 text-sm mb-4 leading-relaxed">
                    {{ project.description }}
                  </p>
                </div>
                
                <div class="flex flex-wrap gap-2 mb-6">
                  <template v-if="project.id === 1">
                    <span class="bg-primary-500 dark:bg-cyan-500 text-white dark:text-black px-3 py-1 rounded-lg text-xs font-medium">React</span>
                    <span class="bg-primary-500 dark:bg-cyan-500 text-white dark:text-black px-3 py-1 rounded-lg text-xs font-medium">JavaScript</span>
                    <span class="bg-primary-500 dark:bg-cyan-500 text-white dark:text-black px-3 py-1 rounded-lg text-xs font-medium">HTML/CSS</span>
                    <span class="bg-primary-500 dark:bg-cyan-500 text-white dark:text-black px-3 py-1 rounded-lg text-xs font-medium">PostgreSQL</span>
                  </template>
                  <template v-else-if="project.id === 2">
                    <span class="bg-primary-500 dark:bg-cyan-500 text-white dark:text-black px-3 py-1 rounded-lg text-xs font-medium">Python</span>
                    <span class="bg-primary-500 dark:bg-cyan-500 text-white dark:text-black px-3 py-1 rounded-lg text-xs font-medium">JavaScript</span>
                    <span class="bg-primary-500 dark:bg-cyan-500 text-white dark:text-black px-3 py-1 rounded-lg text-xs font-medium">Flask</span>
                    <span class="bg-primary-500 dark:bg-cyan-500 text-white dark:text-black px-3 py-1 rounded-lg text-xs font-medium">React</span>
                  </template>
                  <template v-else>
                    <span 
                      v-for="tech in project.technologies" 
                      :key="tech"
                      class="bg-neutral-500 dark:bg-neutral-500 text-white px-3 py-1 rounded-lg text-xs font-medium"
                    >
                      {{ tech }}
                    </span>
                  </template>
                </div>
                
                <div class="flex items-center justify-between mt-auto">
                  <span class="text-neutral-500 dark:text-neutral-400 text-sm font-medium bg-neutral-100/60 dark:bg-neutral-600/60 px-3 py-1 rounded-lg">{{ project.year }}</span>
                  
                  <a 
                    v-if="project.repositoryUrl"
                    :href="project.repositoryUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-2 bg-gradient-to-r from-neutral-800 to-neutral-900 hover:from-cyan-600 hover:to-cyan-700 dark:from-neutral-600 dark:to-neutral-700 dark:hover:from-cyan-500 dark:hover:to-cyan-600 text-white px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 text-sm font-medium shadow-lg hover:shadow-cyan-500/30"
                  >
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>                  
                  <div 
                    v-else 
                    class="flex items-center gap-2 px-4 py-2 text-sm font-medium opacity-0"
                  >
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>
      <section id="habilidades" class="py-20 px-6 bg-white dark:bg-neutral-800 transition-colors duration-300">
        <div class="max-w-4xl mx-auto">
          
          <h2 class="text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 dark:from-cyan-400 dark:to-white bg-clip-text text-transparent text-center mb-16">
            Habilidades Técnicas
          </h2>

          <div class="space-y-16">  
            <div class="text-center">
              <h3 class="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 dark:from-cyan-400 dark:to-cyan-300 bg-clip-text text-transparent mb-8">Intermedio</h3>
              <div class="flex flex-wrap justify-center gap-6">
                <div 
                  v-for="skill in skills.intermedio" 
                  :key="skill"
                  class="bg-primary-500 dark:bg-cyan-500 text-white dark:text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300"
                >
                  {{ skill }}
                </div>
              </div>
            </div>
            <div class="text-center">
              <h3 class="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent mb-8">Básico</h3>
              <div class="flex flex-wrap justify-center gap-4">
                <div 
                  v-for="skill in skills.basico" 
                  :key="skill"
                  class="bg-orange-500 dark:bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
                >
                  {{ skill }}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>

    <!-- FOOTER -->
    <footer class="bg-gradient-to-r from-neutral-900 to-neutral-800 dark:from-neutral-950 dark:to-neutral-900 text-white py-8 transition-colors duration-300 relative overflow-hidden">
      <div class="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div class="flex justify-center items-center space-x-6 mb-6">
          <a 
            :href="personalInfo.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="text-neutral-400 hover:text-primary-400 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-110 transform p-2 rounded-full bg-neutral-800/30 hover:bg-primary-900/30 dark:hover:bg-cyan-900/30 backdrop-blur-sm"
            aria-label="LinkedIn"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          
          <a 
            :href="personalInfo.github"
            target="_blank"
            rel="noopener noreferrer"
            class="text-neutral-400 hover:text-primary-400 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-110 transform p-2 rounded-full bg-neutral-800/30 hover:bg-primary-900/30 dark:hover:bg-cyan-900/30 backdrop-blur-sm"
            aria-label="GitHub"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>

          <a 
            :href="`mailto:${personalInfo.email}`"
            class="text-neutral-400 hover:text-primary-400 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-110 transform p-2 rounded-full bg-neutral-800/30 hover:bg-primary-900/30 dark:hover:bg-cyan-900/30 backdrop-blur-sm"
            aria-label="Email"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
        </div>
        <div class="border-t border-neutral-700/50 pt-4">
          <p class="text-neutral-400 text-sm">
            © 2025 <span class="bg-gradient-to-r from-primary-400 to-primary-600 dark:from-cyan-400 dark:to-cyan-300 bg-clip-text text-transparent font-medium">{{ personalInfo.name }}</span>. Casi todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>

  </div>
</template>

<style scoped>
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

@keyframes pulse-soft {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 3s infinite;
}

.animate-pulse-soft {
  animation: pulse-soft 3s infinite;
}

section {
  scroll-margin-top: 80px;
}
</style>