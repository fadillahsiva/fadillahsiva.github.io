import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ganti 'fadillah-profile' sesuai nama repository GitHub Anda nanti
export default defineConfig({
  plugins: [react()],
  base: '/fadillahsiva/', 
})
