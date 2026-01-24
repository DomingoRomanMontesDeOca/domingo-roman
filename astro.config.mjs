import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Domingo Román',
      description: 'Recursos de fonética acústica y lingüística',
      locales: {
        root: {
          label: 'Español',
          lang: 'es',
        }
      },
      social: [
        { href: 'mailto:domingo.roman@usach.cl', icon: 'email', label: 'email' }
      ],
      customCss: ['./src/base.css'],
    }),
    tailwind()
  ]
});