import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory
    emptyOutDir: true, // Ensure the output directory is clean on each build
  },
});
