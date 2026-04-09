import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:             resolve(__dirname, 'index.html'),
        ghl:              resolve(__dirname, 'ghl.html'),
        'web-development': resolve(__dirname, 'web-development.html'),
        seo:              resolve(__dirname, 'seo.html'),
        'digital-marketing': resolve(__dirname, 'digital-marketing.html'),
        'social-media':   resolve(__dirname, 'social-media.html'),
        copywriting:      resolve(__dirname, 'copywriting.html'),
        'virtual-assistant': resolve(__dirname, 'virtual-assistant.html'),
      }
    }
  }
})
