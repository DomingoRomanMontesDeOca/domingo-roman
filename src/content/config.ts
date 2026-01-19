// src/content/config.ts
import { defineCollection, z } from "astro:content";

// ❌ Elimina esto:
// const baseSchema = z.object({ ... });
// const extendedSchema = baseSchema.extend({ ... });

// ✅ Usa este formato:
const docsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    sidebar: z
      .object({
        label: z.string(),
        order: z.number()
      })
      .optional()
  })
});

export const collections = {
  docs: docsCollection
};
