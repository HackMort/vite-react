import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import packageVersion from 'vite-plugin-package-version'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), packageVersion()]
})
