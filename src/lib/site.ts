import { profile } from './profile'

export const site = {
  name: profile.fullName,
  role: profile.headline,
  description:
    'Portfolio of Kalisetti Naga Geetha Niharika — Computer Science and Systems Engineering undergraduate focused on software development and cybersecurity.',
  summary: profile.summary,
}

export function pageMeta(title: string, description: string) {
  const fullTitle = `${title} | ${site.name}`
  return {
    meta: [
      { title: fullTitle },
      { name: 'description', content: description },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
    ],
  }
}
