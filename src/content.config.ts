import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const opere = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/opera' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    collection: z.enum(['libro', 'racconti']),
    order: z.number(),
    cover: z.string().optional(),
    excerpt: z.string().optional(),
    author: z.string().default('Ayman Soloman'),
    date: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { opera: opere };
