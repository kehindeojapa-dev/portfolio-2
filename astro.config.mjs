// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const site = "https://kehindeojapa.netlify.app";

export default defineConfig({
  site,
  integrations: [sitemap({ filter: (page) => !page.endsWith("/cv/") })],
  vite: {
    plugins: [tailwindcss()],
  },
});
