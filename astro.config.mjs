// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import showTailwindcssBreakpoint from "astro-show-tailwindcss-breakpoint";

export default defineConfig({
  site: 'https://thegymbroscommunity.com',
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap(), showTailwindcssBreakpoint()],
});