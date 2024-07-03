import { defineConfig } from 'astro/config';
import htmx from "astro-htmx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [htmx(), tailwind()],
  image: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'uploads.mangadex.org',
      pathname: '/covers/**',
    }, {
      protocol: 'https',
      hostname: 'uploads.mangadex.org',
      pathname: '/data/**',
    }, {
      protocol: 'https',
      hostname: 'uploads.mangadex.org',
      pathname: '/data-saver/**',
    }]
  }
});