import { useEffect, useRef, useState, type ReactNode } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  GraduationCap,
  Languages,
  Layers,
  Mail,
  MapPin,
  Phone,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trophy,
  Users,
  Wrench,
} from 'lucide-react'
import { ContactForm } from '../components/ContactForm'
import {
  GithubIcon,
  LeetcodeIcon,
  LinkedinIcon,
} from '../components/BrandIcons'
import {
  additional,
  certifications,
  education,
  leadership,
  profile,
  projects,
  skills,
  training,
} from '../lib/profile'
import { site, pageMeta } from '../lib/site'

export const Route = createFileRoute('/')({
  component: PortfolioHome,
  head: () => pageMeta('Portfolio', site.description),
})

const portrait = (width: number) =>
  `/.netlify/images?url=${profile.photo}&w=${width}&h=${width}&fit=cover&position=top&fm=webp&q=85`

const socials = [
  { label: 'LinkedIn', href: profile.links.linkedin, Icon: LinkedinIcon },
  { label: 'GitHub', href: profile.links.github, Icon: GithubIcon },
  { label: 'LeetCode', href: profile.links.leetcode, Icon: LeetcodeIcon },
]

const skillIcons = [Code2, Layers, Server, Database, Brain, Wrench]

function PortfolioHome() {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  )
}

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children?: ReactNode
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
        <span className="h-px w-8 bg-primary" />
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {children && (
        <p className="mt-4 text-lg text-muted-foreground">{children}</p>
      )}
    </Reveal>
  )
}

function RotatingRole() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((value) => (value + 1) % profile.roles.length),
      2600,
    )
    return () => window.clearInterval(id)
  }, [])
  return (
    <span className="relative inline-block text-primary" aria-live="off">
      <span
        key={index}
        className="inline-block animate-in fade-in slide-in-from-bottom-2 duration-500"
      >
        {profile.roles[index]}
      </span>
    </span>
  )
}

function Hero() {
  return (
    <section className="grain relative -mt-[73px] pt-[73px]">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-12 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28 lg:pt-20">
        <div className="order-2 lg:order-1">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-4 py-1.5 text-sm font-medium text-secondary-foreground shadow-sm backdrop-blur animate-in fade-in slide-in-from-bottom-3 duration-700">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Open to internships & learning opportunities
          </p>
          <p className="mb-2 text-lg font-medium text-muted-foreground animate-in fade-in duration-700">
            Hello, I'm
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="block text-2xl font-medium tracking-normal text-foreground/70 sm:text-3xl">
              Kalisetti Naga Geetha
            </span>
            <span className="bg-gradient-to-r from-primary via-[oklch(0.58_0.2_35)] to-[oklch(0.66_0.15_70)] bg-clip-text italic text-transparent">
              Niharika
            </span>
          </h1>
          <p className="mt-6 text-xl font-semibold sm:text-2xl">
            <RotatingRole />
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {profile.headline} at Lendi Institute of Engineering and Technology,
            focused on software development and cybersecurity.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/80">
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              {profile.location}
            </li>
            <li>
              <a
                href={`tel:+91${profile.phone}`}
                className="flex items-center gap-2 hover:text-primary"
              >
                <Phone className="size-4 text-primary" aria-hidden="true" />
                {profile.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 hover:text-primary"
              >
                <Mail className="size-4 text-primary" aria-hidden="true" />
                {profile.email}
              </a>
            </li>
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="contact-button">
              <Mail size={18} aria-hidden="true" />
              Get in touch
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/15 bg-card px-7 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <Download size={18} aria-hidden="true" />
              Download résumé
            </a>
            <div className="flex gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="grid size-12 place-items-center rounded-full border border-border bg-card text-foreground/80 shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <Portrait />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-16">
        <dl className="grid grid-cols-2 gap-4 rounded-3xl border border-border bg-card/80 p-6 shadow-lg shadow-primary/5 backdrop-blur sm:grid-cols-4 sm:p-8">
          {[
            { value: '2028', label: 'B.Tech graduation (expected)' },
            { value: '85.8%', label: 'Intermediate (MPC) score' },
            { value: '3', label: 'EduSkills training programs' },
            { value: '2', label: 'Projects built' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center sm:border-l sm:border-border sm:first:border-l-0"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl font-semibold text-primary sm:text-4xl">
                {stat.value}
              </dd>
              <dd className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function Portrait() {
  const chips = [
    { label: 'Java', Icon: Code2, className: '-left-4 top-10 sm:-left-8' },
    {
      label: 'Python',
      Icon: Terminal,
      className: '-right-2 top-4 sm:-right-6',
    },
    {
      label: 'React.js',
      Icon: Layers,
      className: '-left-2 bottom-12 sm:-left-10',
    },
    {
      label: 'Cybersecurity',
      Icon: ShieldCheck,
      className: '-right-4 bottom-4 sm:-right-10',
    },
  ]
  return (
    <div className="relative size-72 sm:size-96 animate-in fade-in zoom-in-95 duration-1000">
      <div
        className="orbit absolute -inset-6 rounded-full border-2 border-dashed border-accent/60"
        aria-hidden="true"
      />
      <div
        className="orbit-reverse absolute -inset-12 hidden rounded-full border border-primary/15 sm:block"
        aria-hidden="true"
      >
        <span className="absolute left-1/2 top-0 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_16px] shadow-accent" />
      </div>
      <div
        className="absolute inset-0 rounded-full bg-primary/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="portrait-ring absolute inset-0 rounded-full p-[6px] shadow-2xl shadow-primary/30"
        aria-hidden="true"
      />
      <div className="absolute inset-[6px] overflow-hidden rounded-full border-[6px] border-background bg-muted">
        <img
          src={portrait(640)}
          srcSet={`${portrait(400)} 400w, ${portrait(640)} 640w, ${portrait(800)} 800w`}
          sizes="(min-width: 640px) 384px, 288px"
          width={640}
          height={640}
          alt="Portrait of Kalisetti Naga Geetha Niharika"
          className="size-full object-cover object-top transition duration-700 hover:scale-105"
          fetchPriority="high"
        />
      </div>
      {chips.map(({ label, Icon, className }, i) => (
        <span
          key={label}
          style={{ animationDelay: `${i * 0.6}s` }}
          className={`absolute ${className} flex animate-bounce items-center gap-2 rounded-full border border-border bg-card/95 px-3 py-1.5 text-xs font-semibold shadow-lg backdrop-blur [animation-duration:3.2s] sm:px-4 sm:py-2 sm:text-sm`}
        >
          <Icon className="size-4 text-primary" aria-hidden="true" />
          {label}
        </span>
      ))}
    </div>
  )
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="About me" title="Professional summary" />
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <p className="font-display text-2xl leading-relaxed text-foreground/90 first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:font-semibold first-letter:leading-[0.85] first-letter:text-primary">
            {profile.summary}
          </p>
          <div className="mt-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Proficient in
            </p>
            <ul className="flex flex-wrap gap-2">
              {profile.proficientIn.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative overflow-hidden rounded-3xl bg-foreground p-8 text-background shadow-2xl">
            <div
              className="absolute -right-16 -top-16 size-48 rounded-full bg-primary/40 blur-3xl"
              aria-hidden="true"
            />
            <h3 className="relative mb-6 font-display text-2xl font-semibold">
              At a glance
            </h3>
            <dl className="relative space-y-5">
              {[
                {
                  Icon: GraduationCap,
                  label: 'Studying',
                  value: 'B.Tech, Computer Science and Systems Engineering',
                },
                {
                  Icon: BookOpen,
                  label: 'Institute',
                  value: 'Lendi Institute of Engineering and Technology',
                },
                { Icon: MapPin, label: 'Based in', value: profile.location },
                {
                  Icon: ShieldCheck,
                  label: 'Focus',
                  value: 'Software development & cybersecurity',
                },
                {
                  Icon: Languages,
                  label: 'Languages',
                  value: additional.languages.join(', '),
                },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-background/10 text-accent">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-background/60">
                      {label}
                    </dt>
                    <dd className="font-medium">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="bg-card/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Technical skills" title="My toolkit">
          Languages, frameworks, and fundamentals I use to build and learn.
        </SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => {
            const Icon = skillIcons[i]
            return (
              <Reveal key={skill.group} delay={i * 80}>
                <article className="group h-full rounded-3xl border border-border bg-background p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                  <span className="mb-5 grid size-12 place-items-center rounded-2xl bg-secondary text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mb-4 font-display text-xl font-semibold">
                    {skill.group}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-border bg-card px-3 py-1 text-sm font-medium text-foreground/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading eyebrow="Projects" title="Things I've built">
        Learning-focused products that make studying easier and more fun.
      </SectionHeading>
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 120}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
              <div
                className={`absolute inset-x-0 top-0 h-1.5 ${
                  i === 0
                    ? 'bg-gradient-to-r from-primary to-accent'
                    : 'bg-gradient-to-r from-accent to-emerald-500'
                }`}
                aria-hidden="true"
              />
              <div className="mb-6 flex items-start justify-between gap-4">
                <span className="grid size-14 place-items-center rounded-2xl bg-secondary text-primary">
                  {i === 0 ? (
                    <Sparkles className="size-7" aria-hidden="true" />
                  ) : (
                    <Trophy className="size-7" aria-hidden="true" />
                  )}
                </span>
                <span className="font-display text-5xl font-semibold text-foreground/10">
                  0{i + 1}
                </span>
              </div>
              <p className="text-sm font-semibold italic text-primary">
                {project.kind}
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold">
                {project.title}
              </h3>
              {project.stack.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
              <ul className="mt-6 space-y-3 text-foreground/80">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <ArrowUpRight
                      className="mt-1 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 text-center">
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline"
        >
          <GithubIcon className="size-5" />
          See more on GitHub
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </Reveal>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="bg-card/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Education" title="Academic journey" />
        <ol className="relative ml-3 border-l-2 border-dashed border-primary/30">
          {education.map((entry, i) => (
            <li key={entry.degree} className="relative mb-10 pl-10 last:mb-0">
              <span
                className="absolute -left-[13px] top-6 grid size-6 place-items-center rounded-full border-4 border-background bg-primary shadow-md"
                aria-hidden="true"
              />
              <Reveal delay={i * 100}>
                <article className="flex flex-col gap-4 rounded-3xl border border-border bg-background p-7 transition hover:border-primary/40 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="mb-1 inline-flex rounded-full bg-secondary px-3 py-0.5 text-xs font-bold text-secondary-foreground">
                      {entry.year}
                    </p>
                    <h3 className="font-display text-xl font-semibold sm:text-2xl">
                      {entry.degree}
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      {entry.school}
                      {entry.place ? ` · ${entry.place}` : ''}
                    </p>
                  </div>
                  {entry.score ? (
                    <div className="shrink-0 rounded-2xl bg-foreground px-6 py-3 text-center text-background">
                      <p className="font-display text-3xl font-semibold text-accent">
                        {entry.score}
                      </p>
                      <p className="text-xs uppercase tracking-widest text-background/70">
                        Score
                      </p>
                    </div>
                  ) : (
                    <div className="shrink-0 rounded-2xl border border-primary/30 px-6 py-3 text-center">
                      <GraduationCap
                        className="mx-auto size-7 text-primary"
                        aria-hidden="true"
                      />
                      <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                        Pursuing
                      </p>
                    </div>
                  )}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        eyebrow="Internships & training"
        title="Hands-on learning"
      />
      <div className="grid gap-5 md:grid-cols-3">
        {training.map((item, i) => (
          <Reveal key={item.title} delay={i * 100}>
            <article className="h-full rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
              <BriefcaseBusiness
                className="mb-5 size-8 text-primary"
                aria-hidden="true"
              />
              <h3 className="font-display text-xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {item.provider}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-20">
        <Reveal className="mb-8">
          <h3 className="font-display text-3xl font-semibold">
            Certifications
          </h3>
        </Reveal>
        {certifications.map((cert) => (
          <Reveal key={cert.title}>
            <article className="relative flex flex-col gap-6 overflow-hidden rounded-3xl border-2 border-accent/50 bg-gradient-to-br from-card to-[oklch(0.95_0.05_85)] p-8 sm:flex-row sm:items-center">
              <span className="grid size-16 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/40">
                <Award className="size-8" aria-hidden="true" />
              </span>
              <div className="flex-1">
                <h4 className="font-display text-2xl font-semibold">
                  {cert.title}
                </h4>
                <p className="mt-1 text-muted-foreground">{cert.issuer}</p>
              </div>
              <div className="flex gap-3">
                <span className="rounded-full bg-foreground px-4 py-1.5 text-sm font-semibold text-background">
                  {cert.result}
                </span>
                <span className="rounded-full border border-foreground/20 px-4 py-1.5 text-sm font-semibold">
                  {cert.year}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Leadership() {
  return (
    <section id="leadership" className="bg-foreground py-24 text-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">
              <span className="h-px w-8 bg-accent" />
              Leadership activities
            </p>
          </Reveal>
          {leadership.map((item) => (
            <Reveal key={item.role} delay={100}>
              <h2 className="font-display text-4xl font-semibold sm:text-5xl">
                {item.role}
                <span className="block text-2xl italic text-accent sm:text-3xl">
                  {item.context}
                </span>
              </h2>
              <ul className="mt-8 space-y-4">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-4 text-lg text-background/80"
                  >
                    <Users
                      className="mt-1 size-5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <div>
          <Reveal>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">
              <span className="h-px w-8 bg-accent" />
              Additional information
            </p>
          </Reveal>
          <div className="grid gap-5">
            <Reveal delay={100}>
              <a
                href={profile.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-3xl border border-background/15 bg-background/5 p-7 transition hover:border-accent hover:bg-background/10"
              >
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <LeetcodeIcon className="size-7" />
                </span>
                <span className="flex-1">
                  <span className="block text-xs uppercase tracking-widest text-background/60">
                    Problem solving
                  </span>
                  <span className="font-display text-xl font-semibold">
                    {additional.problemSolving}
                  </span>
                </span>
                <ArrowUpRight
                  className="size-6 text-accent transition group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex items-center gap-5 rounded-3xl border border-background/15 bg-background/5 p-7">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
                  <Languages className="size-7" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-background/60">
                    Languages
                  </p>
                  <ul className="mt-1 flex flex-wrap gap-2">
                    {additional.languages.map((language) => (
                      <li
                        key={language}
                        className="font-display text-xl font-semibold after:ml-2 after:text-accent after:content-['•'] last:after:content-none"
                      >
                        {language}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const channels = [
    {
      Icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      Icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:+91${profile.phone}`,
    },
    { Icon: MapPin, label: 'Location', value: profile.location, href: null },
  ]
  return (
    <section id="contact" className="grain py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Contact" title="Let's work together">
          Have an internship, project, or collaboration in mind? Send a message
          — I'd love to hear from you.
        </SectionHeading>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <ul className="space-y-4">
              {channels.map(({ Icon, label, value, href }) => {
                const body = (
                  <>
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        {label}
                      </span>
                      <span className="block break-words font-semibold">
                        {value}
                      </span>
                    </span>
                  </>
                )
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40 hover:shadow-md"
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                        {body}
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="size-4" />
                  {label}
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold text-foreground">
            {profile.fullName}
          </span>
        </p>
        <p className="flex items-center gap-1">
          Built with care in {profile.location.split(',')[0]}
        </p>
      </div>
    </footer>
  )
}
