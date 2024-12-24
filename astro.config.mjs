// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  integrations: [tailwind(), icon(), mdx(), react(), sitemap(), db()],
  output: 'hybrid',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
  },
});