import { motion } from 'framer-motion'
import { PROJECTS } from '../data/content'
import { byLens, matches, useLens } from '../lens.jsx'
import Section from './Section.jsx'

function Status({ p }) {
  if (p.status === 'building') {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-line px-3 py-1 text-xs font-semibold text-muted">
        <span className="pulse-dot h-2 w-2 rounded-full bg-lens" aria-hidden="true" />
        In progress
      </span>
    )
  }
  if (p.award) {
    return (
      <span className="inline-flex items-center rounded-full bg-lens px-3 py-1 text-xs font-semibold text-lens-ink transition-colors duration-500">
        {p.award}
      </span>
    )
  }
  return null
}

export default function Projects() {
  const { lens } = useLens()
  const list = byLens(lens, PROJECTS)

  return (
    <Section
      id="projects"
      title="Things I've built"
      intro="Shipped work first. The GenAI pieces marked in progress are being built right now — check back soon."
    >
      <motion.div layout className="grid gap-5 md:grid-cols-2">
        {list.map((p, i) => {
          const on = matches(lens, p.lenses)
          const featured = i === 0
          const building = p.status === 'building'
          return (
            <motion.article
              layout
              key={p.title}
              animate={{ opacity: on ? 1 : 0.5 }}
              transition={{ layout: { type: 'spring', stiffness: 260, damping: 30 }, opacity: { duration: 0.4 } }}
              className={`group relative flex flex-col overflow-hidden rounded-[1.75rem] border-2 bg-card p-6 sm:p-8 ${
                building ? 'border-dashed border-line' : on && lens !== 'all' ? 'border-lens' : 'border-line'
              } ${featured ? 'md:col-span-2' : ''}`}
              style={{ transition: 'border-color .5s' }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3
                  className={`font-display font-extrabold tracking-tight ${featured ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}
                >
                  {p.title}
                </h3>
                <Status p={p} />
              </div>

              <p className={`mt-3 leading-relaxed text-muted ${featured ? 'max-w-3xl text-lg' : ''}`}>{p.blurb}</p>

              {p.points && (
                <ul className={`mt-4 space-y-2 ${featured ? 'md:columns-2 md:gap-8 [&>li]:break-inside-avoid' : ''}`}>
                  {p.points.map((pt) => (
                    <li key={pt} className="relative pl-5 text-[0.95rem] leading-relaxed">
                      <span aria-hidden="true" className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-lens" />
                      {pt}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-auto pt-6">
                <ul className="flex flex-wrap gap-2" aria-label="Built with">
                  {p.stack.map((s) => (
                    <li key={s} className="rounded-full bg-paper px-3 py-1 text-sm font-medium">
                      {s}
                    </li>
                  ))}
                </ul>
                {p.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-4">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold underline decoration-lens decoration-2 underline-offset-4 transition-colors hover:text-muted"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          )
        })}
      </motion.div>
    </Section>
  )
}
