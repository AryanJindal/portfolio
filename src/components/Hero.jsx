import { AnimatePresence, motion } from 'framer-motion'
import { FACTS, HERO, LENSES, PROFILE } from '../data/content'
import { byLens, useLens } from '../lens.jsx'
import ConnectorGraph from './ConnectorGraph.jsx'
import LensSwitch from './LensSwitch.jsx'

const word = {
  hidden: { opacity: 0, y: '0.55em', rotate: 4 },
  show: { opacity: 1, y: 0, rotate: 0, transition: { type: 'spring', stiffness: 380, damping: 26 } },
  exit: { opacity: 0, y: '-0.3em', transition: { duration: 0.15 } },
}

export default function Hero() {
  const { lens } = useLens()
  const copy = HERO[lens]
  const facts = byLens(lens, FACTS).slice(0, 4)
  const current = LENSES.find((l) => l.id === lens)

  return (
    <header id="top" className="mx-auto max-w-page px-4 pb-10 pt-28 sm:px-6 md:pt-32">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-base font-medium text-muted">
            {PROFILE.name}, {PROFILE.role}
          </p>

          <h1
            aria-live="polite"
            className="mt-4 font-display text-[clamp(2.3rem,4.6vw,3.9rem)] font-extrabold leading-[1.03] tracking-[-0.03em] lg:min-h-[3.15em]"
          >
            <AnimatePresence mode="wait" initial={true}>
              <motion.span
                key={lens}
                className="block"
                initial="hidden"
                animate="show"
                exit="exit"
                variants={{ show: { transition: { staggerChildren: 0.035 } }, exit: { transition: { staggerChildren: 0.01 } } }}
              >
                {copy.headline.split(' ').map((w, i) => (
                  <motion.span key={i} variants={word} className="mr-[0.22em] inline-block">
                    {w}
                  </motion.span>
                ))}
              </motion.span>
            </AnimatePresence>
          </h1>

          <AnimatePresence mode="wait">
            <motion.p
              key={lens}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.25 } }}
              exit={{ opacity: 0 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              {copy.sub}
            </motion.p>
          </AnimatePresence>

          <div className="mt-9">
            <p className="mb-3 font-display text-lg font-semibold">What are you hiring for?</p>
            <LensSwitch size="lg" />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#experience"
              className="rounded-full bg-ink px-6 py-3 font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              See my work
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="rounded-full border-2 border-ink px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5"
            >
              Email me
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <ConnectorGraph />
        </div>
      </div>

      <motion.ul layout className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
        <AnimatePresence initial={false} mode="popLayout">
          {facts.map((f) => (
            <motion.li
              layout
              key={f.label}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 34 }}
              className="bg-card px-4 py-5 sm:px-6"
            >
              <span className="block font-display text-2xl font-extrabold tracking-tight">
                <mark className="hl">{f.value}</mark>
              </span>
              <span className="mt-1 block text-sm leading-snug text-muted">{f.label}</span>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      <p className="sr-only" aria-live="polite">
        Showing highlights for {current.label}
      </p>
    </header>
  )
}
