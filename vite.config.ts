import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react(),tailwindcss()],
=======
  plugins: [react(),
    tailwindcss()
  ],
>>>>>>> 60ef5218ad3c0e5861d3cde4b7ce0455b4e25b72
})
