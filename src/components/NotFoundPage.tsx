import { Link } from '@tanstack/react-router'

export function NotFoundPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-semibold mb-4">
        Page not found
      </h1>
      <p className="mb-6">This page could not be found.</p>
      <Link to="/" className="contact-button">
        Back to portfolio
      </Link>
    </div>
  )
}
