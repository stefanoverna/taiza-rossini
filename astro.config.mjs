import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
  ],
  output: 'static',
  vite: {
    ssr: {
      noExternal: ['datocms-structured-text-utils', '@datocms/astro'],
    },
  },
});
