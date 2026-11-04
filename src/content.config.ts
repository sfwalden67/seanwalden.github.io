import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const howtos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/howtos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { howtos };
