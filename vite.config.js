import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Multi-page build: every route ships as a real static HTML file with its own
// SEO <head>, all sharing one React bundle (routed by pathname in main.jsx).
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        work: 'work.html',
        book: 'book.html',
        privacy: 'privacy.html',
        'website-design': 'services/website-design.html',
        'website-redesign': 'services/website-redesign.html',
        'app-development': 'services/app-development.html',
        'shopify-apps': 'services/shopify-apps.html',
        seo: 'services/seo.html',
        'local-seo': 'services/local-seo.html',
        'testing-debugging': 'services/testing-debugging.html',
        automation: 'services/automation.html',
        'landing-pages': 'services/landing-pages.html',
        'website-maintenance': 'services/website-maintenance.html',
      },
    },
  },
})
