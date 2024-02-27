// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxtjs/storybook',
    'vue3-carousel-nuxt',
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/eslint-module',
      {
        fix: true,
      },
    ],
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
});
