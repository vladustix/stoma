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
      },
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favs/favicon-96x96.png',
          sizes: '96x96',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favs/favicon.svg',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favs/apple-touch-icon.png',
        },
        {
          rel: 'manifest',
          href: '/favs/site.webmanifest',
        },
      ],
      meta: [
        {
          name: 'apple-mobile-web-app-title',
          content: 'Red Dragon',
        },
      ],
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