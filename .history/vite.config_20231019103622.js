import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    // Specify the output directory for the build
    outDir: "C:\\Users\\SamuelFelipeLopezRon\\Desktop\\Front Server", // Update to your desired path
  },
  plugins: [react()],
})
