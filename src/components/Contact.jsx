import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LENSES, PROFILE } from '../data/content'
import { useLens } from '../lens.jsx'

export default function Contact() {
  const { lens } = useLens()
  const [copied, setCopied] = useState(false)
  const resume = PROFILE.resumes[lens] || PROFILE.resumes.all
  const label = LENSES.find((l) => l.id === lens).label

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      /* clipboard blocked: nothing to do */
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-page px-4 pb-24 pt-10 sm:px-6">
      <div className="relative overflow-hidden rounded-[2.25rem] bg-ink px-6 py-16 text-paper sm:px-12 md:py-20">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lens opacity-90 transition-colors duration-500"
        />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.03] tracking-[-0.03em]">
            Got a system to connect, or an agent to build?
          </h2>
          <p className="mt-5 text-lg opacity-80">I reply to every email. The fastest way to reach me is below.</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="rounded-full bg-lens px-6 py-3 font-semibold text-lens-ink transition-transform hover:-translate-y-0.5"
            >
              Email {PROFILE.email}
            </a>
            {resume && (
              <a
                href={resume}
                download
                className="rounded-full border-2 border-paper px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5"
              >
                Download resume
              </a>
            )}
            <button
              type="button"
              onClick={copyLink}
              className="rounded-full border-2 border-paper/40 px-6 py-3 font-semibold transition-colors hover:border-paper"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? 'done' : 'idle'}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="inline-block"
                >
                  {copied ? 'Link copied' : lens === 'all' ? 'Copy link to this page' : `Copy link to the ${label} view`}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {PROFILE.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold underline decoration-paper/40 decoration-2 underline-offset-4 transition-colors hover:decoration-lens"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-8 text-center text-sm text-muted">Built with React and Framer Motion, hosted on Firebase.</p>
    </section>
  )
}
