import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Web_Development_LearningApp/', // Replace with your repository name
  plugins: [react()],
});
