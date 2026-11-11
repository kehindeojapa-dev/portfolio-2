import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/case-studies" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    /** Must match a project `title` in src/data/projects.ts; adds a "Read case study" link to its card. */
    project: z.string(),
    role: z.string().optional(),
    stack: z.array(z.string()).default([]),
    /** Drafts only exist in `npm run dev`; they are not built or linked in production. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { caseStudies };
