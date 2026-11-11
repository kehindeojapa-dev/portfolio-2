# Kehinde Ojapa — portfolio

Personal portfolio built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed on Netlify.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Editing content

- **Projects:** `src/data/projects.ts`. Featured projects show as large case-study cards. Everything else goes in the "Other work" grid.
- **Profile, links, skills:** `src/data/site.ts`
- **Images:** put them in `src/assets/projects/` and import them in `projects.ts`. Astro converts them to WebP at build time.
- **CV:** `public/cv/kehinde-ojapa-cv.pdf`
