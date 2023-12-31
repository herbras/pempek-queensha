import { defineConfig, squooshImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://pempek.qlm.one',
  integrations: [tailwind(), sitemap()],
  image: {
    service: squooshImageService()
  },output: 'static'
});