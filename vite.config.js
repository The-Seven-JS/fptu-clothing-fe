import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@blocknote/core', '@blocknote/mantine', '@blocknote/react']
  },
  resolve: {
    dedupe: ['react', 'react-dom']
  }
})