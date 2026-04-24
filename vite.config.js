import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// accuarion.com is served from the root (custom domain), so base='/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
