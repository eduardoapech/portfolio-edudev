import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      include: '**/*.{jsx,tsx}',
      exclude: /locales\/.*\.js$/,
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})

