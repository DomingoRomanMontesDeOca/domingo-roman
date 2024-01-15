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
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Proyectos de investigación',
      link: '/proyectos'
    }, {
      label: 'Publicaciones',
      link: '/publicaciones'
    }, {
      label: 'Curriculum',
      link: '/curriculum'
    }],
    customCss: ['./src/base.css'],
  }), tailwind()]
});