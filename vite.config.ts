import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// When deploying to GitHub Pages the site lives at /homepage/.
// Set VITE_BASE_PATH=/ in your environment (or a custom domain config)
// to override this for production on a custom domain.
const base = process.env.VITE_BASE_PATH ?? '/homepage/'

export default defineConfig({
  base,
  plugins: [react()],
})
