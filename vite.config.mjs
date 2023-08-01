import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const port = process.env.FA_PORT || 5000;

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: port,
  },
})
