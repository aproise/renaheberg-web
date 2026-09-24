import { defineConfig, envField } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import dotenv from 'dotenv';

dotenv.config();

const PUBLIC_SITE_URL = process.env.PUBLIC_SITE_URL;

export default defineConfig({
  site: PUBLIC_SITE_URL || 'https://renaheberg.pages.dev',
  vite: { plugins: [tailwind()] },
  compressHTML: true,
  prefetch: true,
  trailingSlash: 'never',
  output: 'static',
  build: { inlineStylesheets: 'auto' },
  env: {
    schema: {
      PUBLIC_SITE_URL: envField.string({ context: 'client', access: 'public', optional: false }),
    },
  },
});