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
    sidebar: [
    {
      label: 'Proyectos de investigación',
      link: '/proyectos'
    }, {
      label: 'Publicaciones',
      link: '/publicaciones'
    }, {
      label: 'Curriculum',
      link: '/curriculum'
    }, {
      label: 'Carpeta de ejemplo',
      autogenerate: { directory: '/carpeta' },
    }
  ],
    customCss: ['./src/base.css'],
  }), tailwind()]
});