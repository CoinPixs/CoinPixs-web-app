// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/node_modules/@nuxtjs/tailwindcss/dist/runtime/tailwind.css',
    configPath: 'tailwind.config.cjs',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    shim: false,
  }
})
