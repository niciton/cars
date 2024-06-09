import { createPinia, PiniaVuePlugin } from 'pinia'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createPinia());
})