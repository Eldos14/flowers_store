import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // разрешает доступ с любого IP
    port: 5173, // твой порт
    strictPort: false,
    allowedHosts: [
      'e417fa0f9ced.ngrok-free.app', // сюда вставь ссылку ngrok
    ],
  },
})
