import tailwind from '@astrojs/tailwind';
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  trailingSlash: 'never',
  env: {
    schema: {
      DATOCMS_API_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
      }),
    },
  },
  vite: {
    ssr: {
      noExternal: ['datocms-structured-text-utils', '@datocms/astro'],
    },
  },
});
