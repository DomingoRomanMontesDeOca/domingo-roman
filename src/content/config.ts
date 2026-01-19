import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

// Extender el esquema de Starlight
const starlightSchema = docsSchema().extend({
  sidebar: z.object({
    label: z.string(),
    order: z.number(),
  }).optional(),
});

export const collections = {
  docs: defineCollection({ 
    schema: starlightSchema, 
  }),
};
