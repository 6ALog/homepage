import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (6alogic.com) serves from root, so base is '/'.
// If reverting to 6alog.github.io/homepage without a custom domain,
// set VITE_BASE_PATH=/homepage/ in the GitHub Actions environment.
const base = process.env.VITE_BASE_PATH ?? '/'

export default defineConfig({
  base,
  plugins: [react()],
})
