import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:                resolve(__dirname, 'index.html'),
        'book-a-call':       resolve(__dirname, 'book-a-call/index.html'),
        gohighlevel:         resolve(__dirname, 'services/gohighlevel/index.html'),
        'web-development':   resolve(__dirname, 'services/web-development/index.html'),
        seo:                 resolve(__dirname, 'services/seo/index.html'),
        'digital-marketing': resolve(__dirname, 'services/digital-marketing/index.html'),
        'social-media':      resolve(__dirname, 'services/social-media/index.html'),
        copywriting:         resolve(__dirname, 'services/copywriting/index.html'),
        'virtual-assistant': resolve(__dirname, 'services/virtual-assistant/index.html'),
      }
    }
  }
})
