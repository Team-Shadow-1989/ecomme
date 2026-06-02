import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://ecomme-backend-ocvx.onrender.com'
      },
      './images': {
        target: 'https://ecomme-backend-ocvx.onrender.com'      }
    }
  }
})
