import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from './src/lib/languages';

export default defineConfig({
  site: 'https://www.physolution.com',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: DEFAULT_LANGUAGE,
    locales: SUPPORTED_LANGUAGES,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
