// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react"; // Import react integration

// https://astro.build/config
export default defineConfig({
  site: "https://chrono-finder.com",
  integrations: [
    mdx(), 
    sitemap(),
    tailwind(),
    react() // Add react integration
  ],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
