import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    locale: z.string(),
    slug: z.string().optional(),
    image: z.string().optional(),
    shortTitle: z.string().optional(),
  }),
});

const prototypeCollection = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/prototypes',
    generateId: ({ data }) => `${data.locale}-${data.slug}`,
  }),
  schema: z.object({
    title: z.string(),
    locale: z.string(),
    slug: z.string(),
    season: z.string(),
    speed: z.string().optional(),
    category: z.string(),
    image: z.string(),
    cardImage: z.string(),
    order: z.number(),
    gallery: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'prototypes': prototypeCollection,
};