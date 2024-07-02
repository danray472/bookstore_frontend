import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // This is the default, but ensure it points to your project root
  build: {
    outDir: 'dist',
  },
  publicDir: 'public', // Ensure this is set if using a 'public' directory
});
