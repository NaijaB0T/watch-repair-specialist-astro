// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://chrono-finder.com",
  integrations: [
    mdx(), 
    sitemap(), 
    react({ 
      runtime: 'react-server',
      // Custom render function to use react-dom/server/edge for Cloudflare Workers compatibility
      // This helps avoid browser-specific APIs like MessageChannel during SSR
      render: '@astrojs/react/server.js'
    })
  ],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
