import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import LensSwitch from './LensSwitch.jsx'

const LINKS = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 520)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-paper/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight">
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            <circle cx="11" cy="11" r="4.5" fill="var(--lens)" style={{ transition: 'fill .4s' }} />
            <circle cx="3" cy="4" r="2.2" fill="currentColor" />
            <circle cx="19" cy="5" r="2.2" fill="currentColor" />
            <circle cx="18" cy="19" r="2.2" fill="currentColor" />
            <path d="M3 4 11 11M19 5 11 11M18 19 11 11" stroke="currentColor" strokeWidth="1.6" />
          </svg>
          Aryan Jindal
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 text-sm font-medium text-muted lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <AnimatePresence>
            {scrolled && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="hidden sm:block"
              >
                <LensSwitch size="sm" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* On phones the switch floats at the bottom once the hero is out of view */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed inset-x-0 bottom-4 flex justify-center px-4 sm:hidden"
          >
            <div className="rounded-[1.5rem] shadow-[0_8px_30px_-10px_rgba(20,33,61,0.45)]">
              <LensSwitch size="sm" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
