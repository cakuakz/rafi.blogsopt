// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify";

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: "https://rafirfansyah.site/" ,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx({
      syntaxHighlight: "shiki",
      extendMarkdownConfig: false,
      gfm: false,
      shikiConfig: {
        theme: 'github-dark',
        wrap: true,
        defaultColor: false
      }
    }),
    react(),
    icon(),
    sitemap(),
    robotsTxt({
      host: 'rafirfansyah.site',
			sitemap: 'https://rafirfansyah.site/sitemap-index.xml',
			policy: [
				{
					userAgent: "*",
					allow: "/",
				},
			],
    })
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
