# AGENTS.md

A single-page personal portfolio for Kalisetti Naga Geetha Niharika, built with TanStack Start (React 19) and Tailwind CSS v4 and deployed on Netlify.

## Architecture

- `src/lib/profile.ts`: **single source of truth** for all personal content (summary, education, skills, projects, training, certifications, leadership, languages, contact links). It mirrors the résumé exactly. Do not drop or paraphrase résumé details; the owner asked that nothing be missed.
- `src/lib/site.ts`: site name/description and the `pageMeta()` helper for route heads.
- `src/routes/index.tsx`: the whole portfolio. Each section is a local component (`Hero`, `Portrait`, `About`, `Skills`, `Projects`, `Education`, `Experience`, `Leadership`, `Contact`, `Footer`) with a matching `id` anchor used by the header nav.
- `src/routes/__root.tsx`: HTML shell, Google Fonts links, skip link, sticky `SiteHeader`.
- `src/components/SiteHeader.tsx`: sticky header with anchor links (`/#about` …), a mobile menu, and a résumé download.
- `src/components/ContactForm.tsx`: Netlify Forms AJAX submission to `/contact.html`. Field names must stay in sync with `public/contact.html` (static registration). Tests in `ContactForm.test.tsx` depend on the labels "Name", "Email", "Message", the "Send message" button, and the "Message received" heading.
- `src/components/BrandIcons.tsx`: inline SVG logos. lucide-react v1 no longer ships brand icons.
- `src/styles.css`: theme tokens (ivory background, crimson `--primary`, gold `--accent`), `font-display`, and the custom animation classes (`portrait-ring`, `orbit`, `reveal`, `grain`). It respects `prefers-reduced-motion`.

## Non-obvious decisions

- The portrait source (`public/img/niharika.jpg`) is a tall 720×1280 photo. The circle is produced by the Netlify Image CDN with `fit=cover&position=top` at square sizes, which keeps the face centered. Keep the CDN URL rather than linking the raw file.
- The template's blog, Content Collections, and separate projects/résumé routes were removed on purpose. The résumé has no exact dates and no blog, so a single page with in-code data is simpler.
- `Reveal` uses IntersectionObserver in an effect, which keeps it SSR-safe. Content fades in after hydration.
- Netlify Forms is enabled for the site. Form detection relies on `public/contact.html`.

## Conventions

Tailwind utility classes inline, theme colors via tokens (`text-primary`, `bg-secondary`, `text-accent`), and Prettier formatting (`.prettierrc.json`).
