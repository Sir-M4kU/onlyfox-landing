import { defineConfig } from 'astro/config'

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://sir-m4ku.github.io',
  base: '/onlyfox-landing'
})
