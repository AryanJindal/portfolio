import { motion } from 'framer-motion'
import { LENSES } from '../data/content'
import { useLens } from '../lens.jsx'

export default function LensSwitch({ size = 'lg' }) {
  const { lens, setLens } = useLens()
  const big = size === 'lg'
  return (
    <div
      role="radiogroup"
      aria-label="What are you hiring for?"
      className={`inline-flex flex-wrap gap-1 rounded-[1.4rem] border border-line bg-card p-1 ${big ? '' : 'text-sm'}`}
    >
      {LENSES.map((l) => {
        const active = l.id === lens
        return (
          <button
            key={l.id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setLens(l.id)}
            className={`relative rounded-full font-semibold transition-colors ${
              big ? 'px-4 py-2.5 sm:px-5' : 'px-3 py-1.5'
            } ${active ? '' : 'text-muted hover:text-ink'}`}
          >
            {active && (
              <motion.span
                layoutId={`lens-pill-${size}`}
                className="absolute inset-0 rounded-full"
                style={{ background: l.color }}
                transition={{ type: 'spring', stiffness: 520, damping: 38 }}
              />
            )}
            <span className="relative" style={active ? { color: l.ink } : undefined}>
              {big ? l.label : l.short}
            </span>
          </button>
        )
      })}
    </div>
  )
}
