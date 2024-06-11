// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
		baseURL: "/cars/",
    // buildAssetsDir: 'dist'
	},
  plugins: [
    "@/plugins/pina.ts"
  ]
})
