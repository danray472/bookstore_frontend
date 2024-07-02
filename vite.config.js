import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { resolve } from 'path';

// Load environment variables from .env file
dotenv.config({ path: resolve(__dirname, '.env') });

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'src/index.jsx',
    },
  },
  define: {
    // Define environment variables for Vite
    'process.env': JSON.stringify(process.env),
    // Define __dirname for Vite (not needed for React component, but for backend code)
    '__dirname': JSON.stringify(resolve()),
  },
});
