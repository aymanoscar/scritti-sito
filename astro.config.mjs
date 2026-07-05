import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://aymanoscar.github.io',
  base: '/scritti-sito',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwind()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
