/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslint(), react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
