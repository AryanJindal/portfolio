import { SKILLS } from '../data/content'
import { byLens, matches, useLens } from '../lens.jsx'
import Section from './Section.jsx'

export default function Skills() {
  const { lens } = useLens()
  const groups = byLens(lens, SKILLS)

  return (
    <Section
      id="skills"
      title="What I work with"
      intro="C++ is my strongest language. Day to day it's Python, JavaScript, SQL and a lot of enterprise APIs."
    >
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {groups.map((g) => {
          const on = matches(lens, g.lenses)
          const lit = on && lens !== 'all'
          return (
            <div
              key={g.title}
              className={`mb-5 break-inside-avoid rounded-3xl border bg-card p-6 transition-all duration-500 ${
                lit ? 'border-lens' : 'border-line'
              } ${on ? '' : 'opacity-50'}`}
            >
              <h3 className="font-display text-xl font-semibold">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className={`rounded-full px-3 py-1 text-sm font-medium transition-colors duration-500 ${
                      lit ? 'bg-lens text-lens-ink' : 'bg-paper text-ink'
                    }`}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
