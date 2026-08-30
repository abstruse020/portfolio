import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    journal: z.string(),
    year: z.number(),
    doi: z.string().optional(),
    url: z.string().url().optional(),
    abstract: z.string().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/skills' }),
  schema: z.object({
    category: z.string(),
    items: z.array(z.string()),
    icon: z.string().optional(),
    order: z.number().default(0),
  }),
});

const life = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/life' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

export const collections = {
  projects,
  publications,
  skills,
  life,
};
