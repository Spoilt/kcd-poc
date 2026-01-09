// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxtjs/sanity'],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { isr: 60 },
    '/actualites': { isr: 60 },
    '/sorties': { isr: 60 },
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  sanity: {
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: import.meta.env.PUBLIC_SANITY_DATASET,
    apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION,
    useCdn: import.meta.env.PUBLIC_SANITY_USE_CDN
  }, 

  vite: {
    optimizeDeps: {
      include: ["@sanity/visual-editing"],
    },
} 
})
