import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import { PUBLIC_SITE_URL } from 'astro/env';

export default defineConfig({
  site: PUBLIC_SITE_URL,
  vite: { plugins: [tailwind()] },
  compressHTML: true,
  prefetch: true,
  trailingSlash: 'never',
  output: 'static',
  build: { inlineStylesheets: 'auto' },
});