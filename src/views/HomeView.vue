<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { personalInfo } from '@/data/personal'
</script>

<template>
  <!-- Hero Section -->
  <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-neutral-50 to-primary-100 pt-16">
    <div class="container mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        
        <!-- Contenido Principal -->
        <div class="lg:order-1 animate-slide-up">
          <!-- Saludo -->
          <div class="mb-6">
            <span class="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              👋 ¡Hola! Soy Harold
            </span>
            <h1 class="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6">
              {{ personalInfo.title }}
              <span class="block text-primary-600 mt-2">
                especializado en IA
              </span>
            </h1>
          </div>

          <!-- Descripción -->
          <p class="text-lg text-neutral-600 mb-8 leading-relaxed max-w-2xl">
            {{ personalInfo.bio }}
          </p>

          <!-- Habilidades principales -->
          <div class="mb-8">
            <div class="flex flex-wrap gap-3">
              <span 
                v-for="skill in personalInfo.mainSkills" 
                :key="skill"
                class="bg-neutral-100 text-neutral-700 px-3 py-2 rounded-lg text-sm font-medium border border-neutral-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- Botones de acción -->
          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <RouterLink
              to="/projects"
              class="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all duration-200 font-medium hover:shadow-lg hover:scale-105 text-center"
            >
              {{ personalInfo.cta.primary }}
            </RouterLink>
            
            <a
              href="/harold-ponce-cv.pdf"
              download
              class="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200 font-medium text-center"
            >
              {{ personalInfo.cta.secondary }}
            </a>
          </div>

          <!-- Enlaces sociales -->
          <div class="flex items-center space-x-6">
            <a 
              :href="personalInfo.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="text-neutral-600 hover:text-primary-600 transition-colors duration-200"
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
              class="text-neutral-600 hover:text-primary-600 transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            <a 
              :href="`mailto:${personalInfo.email}`"
              class="text-neutral-600 hover:text-primary-600 transition-colors duration-200"
              aria-label="Email"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Imagen/Visual -->
        <div class="lg:order-2 flex justify-center animate-fade-in">
          <div class="relative">
            <!-- Placeholder para tu foto - Reemplaza con tu imagen real -->
            <div class="w-80 h-80 bg-gradient-to-br from-primary-200 to-primary-400 rounded-2xl flex items-center justify-center text-white text-8xl font-bold shadow-2xl">
              {{ personalInfo.name.split(' ')[0][0] }}{{ personalInfo.name.split(' ')[1][0] }}
            </div>
            
            <!-- Elementos decorativos -->
            <div class="absolute -top-4 -right-4 w-20 h-20 bg-primary-600 rounded-full opacity-20 animate-bounce-slow"></div>
            <div class="absolute -bottom-6 -left-6 w-16 h-16 bg-primary-400 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>

      <!-- Estadísticas -->
      <div class="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-up">
        <div 
          v-for="stat in personalInfo.stats" 
          :key="stat.label"
          class="text-center group"
        >
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-neutral-200 group-hover:shadow-xl group-hover:border-primary-200 transition-all duration-300">
            <div class="text-3xl font-bold text-primary-600 mb-2">{{ stat.value }}</div>
            <div class="text-neutral-600 text-sm font-medium">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Scroll Indicator -->
  <div class="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div class="w-6 h-10 border-2 border-primary-600 rounded-full flex justify-center">
      <div class="w-1 h-3 bg-primary-600 rounded-full mt-2 animate-pulse"></div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos específicos si necesitas */
</style>