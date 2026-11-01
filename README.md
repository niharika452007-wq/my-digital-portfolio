# Niharika — Digital Portfolio

The personal portfolio of **Kalisetti Naga Geetha Niharika**, a Computer Science and Systems Engineering undergraduate at Lendi Institute of Engineering and Technology (expected 2028), focused on software development and cybersecurity.

It is one elegant scrolling page with a circular animated portrait. It covers the professional summary, technical skills, projects, education, internships and training, certifications, leadership, additional information, and a working contact form. Visitors can also download the résumé PDF.

## Tech stack

- TanStack Start + React 19 (file-based routing, SSR)
- Tailwind CSS v4 with a custom crimson and gold theme; Fraunces and Plus Jakarta Sans fonts
- lucide-react icons, plus inline SVG brand icons for LinkedIn, GitHub, and LeetCode
- Netlify Image CDN for the optimized, square-cropped portrait
- Netlify Forms for contact form submissions

## Run locally

```bash
pnpm install
netlify dev   # serves the app with Netlify features (Image CDN, Forms) emulated
```

`pnpm dev` also works, but the portrait is served through `/.netlify/images`, so use `netlify dev` to see it locally.

## Editing content

All personal details live in `src/lib/profile.ts`. Update that file to change any text on the site. The photo is `public/img/niharika.jpg` and the downloadable résumé is `public/Niharika-Kalisetti-Resume.pdf`.
