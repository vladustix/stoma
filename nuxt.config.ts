export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  srcDir: 'src',
  serverDir: 'server',
  app: {
    rootAttrs: {
      id: '__stoma',
    },
    head: {
      htmlAttrs: {
        lang: 'ru',
      }
    },
  },
  runtimeConfig: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    jwtSecret: process.env.JWT_SECRET,
  },
  css: ['~/assets/css/main.css'],
  imports: {
    dirs: ['~/constants', '~/constants/*/**.{ts,js,mjs,mts}', '~/constants/**'],
  },
  plugins: [],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-icon-tw',
    'nuxt-swiper',
    '@pinia/nuxt',
  ],
  image: {
    format: ['webp'],
    quality: 80,
  },
});