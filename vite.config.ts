import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        // Автоматическая оптимизация для всех изображений
        const params = new URLSearchParams();
        
        // Если указан формат, используем его
        if (url.searchParams.has('format')) {
          params.set('format', url.searchParams.get('format') || 'webp');
        }
        
        // Качество по умолчанию 80%
        if (url.searchParams.has('quality')) {
          params.set('quality', url.searchParams.get('quality') || '80');
        } else {
          params.set('quality', '80');
        }
        
        return params;
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Можно добавить глобальные стили здесь, если нужно
      },
    },
  },
  publicDir: 'public',
  build: {
    // Оптимизация сборки
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
})

