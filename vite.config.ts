import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// BASE_PATH lets the GitHub Pages workflow serve the site from /<repo>/.
// Locally and on a custom domain it stays at the root.
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH ?? '/',
})
