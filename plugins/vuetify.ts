import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'customTheme',
      themes: {
        customTheme: {
          dark: false,
          colors: {
            background: '#16281F',
          },
        },
      },
    },
  })
  app.vueApp.use(vuetify)
})
