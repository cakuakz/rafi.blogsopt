// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || "http://localhost:4321",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      syntaxHighlight: false,
      extendMarkdownConfig: false,
      gfm: false,
    }),
    react(),
    icon(),
    sitemap(),
  ],
  output: "static",
  adapter: netlify(),
  vite: {
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
  },
});
