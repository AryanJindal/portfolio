import { createContext, useContext, useEffect, useState } from 'react'
import { LENSES } from './data/content'

const LensContext = createContext(null)
const VALID = LENSES.map((l) => l.id)

function readLens() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('for')
    if (VALID.includes(fromUrl)) return fromUrl
  } catch {
    /* ignore */
  }
  return 'all'
}

export function LensProvider({ children }) {
  const [lens, setLens] = useState(readLens)

  useEffect(() => {
    const def = LENSES.find((l) => l.id === lens)
    const root = document.documentElement
    root.style.setProperty('--lens', def.color)
    root.style.setProperty('--lens-ink', def.ink)
    root.dataset.lens = lens
    try {
      const url = new URL(window.location.href)
      if (lens === 'all') url.searchParams.delete('for')
      else url.searchParams.set('for', lens)
      window.history.replaceState(null, '', url)
    } catch {
      /* ignore */
    }
  }, [lens])

  return <LensContext.Provider value={{ lens, setLens }}>{children}</LensContext.Provider>
}

export const useLens = () => useContext(LensContext)

export const matches = (lens, tags) => lens === 'all' || !tags || tags.includes(lens)

// Matching items first, original order kept within each group.
export function byLens(lens, list) {
  if (lens === 'all') return list
  return [...list.filter((x) => matches(lens, x.lenses)), ...list.filter((x) => !matches(lens, x.lenses))]
}
