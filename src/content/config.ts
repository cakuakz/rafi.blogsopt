import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()),
    duration: z.string(),
    likes: z.number().default(0),
  }),
});

const project = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    endProjectDate: z.coerce.date().optional(),
    techStack: z.array(z.string()),
    projectUrl: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = {
  blog: blog,
  project: project,
};
