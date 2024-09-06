import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Set the server to be accessible on the local network
    port: 3000        // Optionally, set the port (default is 3000)
  }
})
