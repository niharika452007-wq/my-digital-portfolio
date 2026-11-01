import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { profile } from '../lib/profile'

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#education', label: 'Education' },
  { href: '/#experience', label: 'Training' },
  { href: '/#contact', label: 'Contact' },
] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-border/70 bg-background/85 shadow-sm backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link
          to="/"
          className="group flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-10 place-items-center rounded-full bg-primary font-display text-lg font-semibold text-primary-foreground shadow-md shadow-primary/30 transition group-hover:rotate-6">
            N
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">
            {profile.firstName}
            <span className="text-primary">.</span>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition hover:bg-secondary hover:text-secondary-foreground focus-visible:outline-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={profile.resume}
          download
          className="hidden rounded-full border border-primary/30 px-5 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground md:inline-flex"
        >
          Résumé
        </a>
        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-border bg-card md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t border-border/70 px-5 pb-5 md:hidden"
        >
          <ul className="grid gap-1 pt-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 font-medium hover:bg-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resume}
                download
                className="mt-2 block rounded-xl bg-primary px-4 py-3 text-center font-semibold text-primary-foreground"
              >
                Download résumé
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
