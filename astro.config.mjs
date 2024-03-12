import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Domingo Román',
    // tableOfContents: true,
    locales: {
      root: {
        label: 'Español',
        lang: 'es',
      }
    },
    social: {
      email: 'mailto:domingo.roman@usach.cl'
    },
    customCss: ['./src/base.css'],
  }), tailwind()]
});