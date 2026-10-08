import { motion } from 'framer-motion'
import { ACHIEVEMENTS, CERTIFICATIONS, EDUCATION } from '../data/content'
import Section from './Section.jsx'

function Icon({ kind }) {
  if (kind === 'star') {
    return (
      <motion.svg
        viewBox="0 0 24 24"
        className="h-10 w-10"
        aria-hidden="true"
        whileHover={{ rotate: 72, scale: 1.15 }}
        transition={{ type: 'spring', stiffness: 260, damping: 12 }}
      >
        <path
          d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z"
          fill="var(--lens)"
          stroke="var(--ink)"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </motion.svg>
    )
  }
  if (kind === 'code') {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14l-1.5 8 5-3 5 3-1.5-8" />
    </svg>
  )
}

export default function Achievements() {
  const [star, ...rest] = ACHIEVEMENTS
  return (
    <Section id="achievements" title="Recognition">
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="flex flex-col justify-between rounded-[1.75rem] bg-ink p-8 text-paper lg:row-span-2">
          <Icon kind="star" />
          <div className="mt-10">
            <p className="font-display text-5xl font-extrabold tracking-tight">{star.title}</p>
            <p className="mt-2 text-lg opacity-80">
              {star.detail}, {star.year}
            </p>
          </div>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
          {rest.map((a) => (
            <li key={a.title} className="flex gap-4 rounded-3xl border border-line bg-card p-6">
              <span className="mt-0.5 shrink-0 text-muted">
                <Icon kind={a.kind} />
              </span>
              <div>
                <p className="font-display text-xl font-semibold">{a.title}</p>
                <p className="mt-1 text-muted">{a.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20 grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="font-display text-2xl font-extrabold tracking-tight">Education</h3>
          <ul className="mt-5 space-y-5">
            {EDUCATION.map((e) => (
              <li key={e.school}>
                <p className="font-semibold">{e.school}</p>
                <p className="text-muted">
                  {e.degree}
                  {e.period && `, ${e.period}`}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-2xl font-extrabold tracking-tight">Certifications</h3>
          <ul className="mt-5 space-y-3">
            {CERTIFICATIONS.map((c) => (
              <li key={c} className="leading-relaxed text-muted">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
