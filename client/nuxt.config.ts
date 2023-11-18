// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        Oswald: [200, 300, 400, 500, 600, 700], 'Josefin+Sans': true,
        Montserrat: [200, 300, 400, 500, 600, 700], 'Josefin+Sans': true,
      }
    }]
  ],
  css: [
    '@/assets/sass/reset.sass',
  ]
})
