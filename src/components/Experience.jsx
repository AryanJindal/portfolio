import { motion } from 'framer-motion'
import { EXPERIENCE, LENSES } from '../data/content'
import { matches, useLens } from '../lens.jsx'
import Rich from './Rich.jsx'
import Section from './Section.jsx'

export default function Experience() {
  const { lens } = useLens()
  const label = LENSES.find((l) => l.id === lens).label

  return (
    <Section
      id="experience"
      title="Where I've worked"
      intro={
        lens === 'all'
          ? 'Two roles, both about making systems and data work for the people who depend on them.'
          : `The bright lines are the ones that matter most for ${label} roles. The rest stay readable.`
      }
    >
      <ol className="relative ml-2 space-y-16 border-l-2 border-line">
        {EXPERIENCE.map((job) => (
          <li key={job.company} className="relative pl-7 sm:pl-10">
            <span
              aria-hidden="true"
              className="absolute -left-[11px] top-2.5 h-5 w-5 rounded-full border-4 border-paper bg-lens transition-colors duration-500"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-display text-3xl font-extrabold tracking-tight">{job.company}</h3>
              <span className="font-medium text-muted">{job.period}</span>
            </div>
            <p className="mt-1 text-lg font-semibold">{job.role}</p>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted">{job.summary}</p>

            <div className="mt-8 grid gap-10 lg:grid-cols-2">
              {job.groups.map((g) => (
                <div key={g.title} className={job.groups.length === 1 ? 'lg:col-span-2' : ''}>
                  <h4 className="mb-4 font-display text-xl font-semibold">{g.title}</h4>
                  <ul className={`space-y-4 ${job.groups.length === 1 ? 'lg:columns-2 lg:gap-10 [&>li]:break-inside-avoid' : ''}`}>
                    {g.items.map((it) => {
                      const on = matches(lens, it.lenses)
                      return (
                        <motion.li
                          key={it.text}
                          animate={{ opacity: on ? 1 : 0.42 }}
                          transition={{ duration: 0.4 }}
                          className={`relative pl-5 leading-relaxed ${on ? '' : 'dim'}`}
                        >
                          <span
                            aria-hidden="true"
                            className={`absolute left-0 top-[0.6em] h-2 w-2 rounded-full transition-colors duration-500 ${on ? 'bg-lens' : 'bg-line'}`}
                          />
                          <Rich text={it.text} />
                          {it.link && (
                            <a
                              href={it.link.href}
                              target="_blank"
                              rel="noreferrer"
                              className="ml-2 inline-block font-semibold underline decoration-lens decoration-2 underline-offset-4"
                            >
                              {it.link.label}
                            </a>
                          )}
                        </motion.li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
