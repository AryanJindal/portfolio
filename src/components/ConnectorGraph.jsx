import { useEffect, useState } from 'react'
import { SYSTEMS } from '../data/content'
import { matches, useLens } from '../lens.jsx'

const W = 600
const H = 520
const CX = W / 2
const CY = H / 2
const RX = 228
const RY = 200

function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const on = (e) => setReduced(e.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return reduced
}

const nodes = SYSTEMS.map((s, i) => {
  // offset by half a step so no label sits dead-centre at the top or bottom
  const a = ((i + 0.5) / SYSTEMS.length) * Math.PI * 2 - Math.PI / 2
  const x = CX + RX * Math.cos(a)
  const y = CY + RY * Math.sin(a)
  // bend each wire a little so the diagram feels hand-patched, not radial
  const mx = (x + CX) / 2
  const my = (y + CY) / 2
  const bend = i % 2 ? 26 : -26
  const len = Math.hypot(x - CX, y - CY)
  const nx = -(y - CY) / len
  const ny = (x - CX) / len
  return {
    ...s,
    x,
    y,
    w: s.label.length * 7.6 + 26,
    d: `M ${x.toFixed(1)} ${y.toFixed(1)} Q ${(mx + nx * bend).toFixed(1)} ${(my + ny * bend).toFixed(1)} ${CX} ${CY}`,
  }
})

export default function ConnectorGraph() {
  const { lens } = useLens()
  const reduced = useReducedMotion()

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full max-w-[600px] select-none"
      role="img"
      aria-label="Diagram of the systems Aryan connects: SAP, Salesforce, Oracle, AWS, Snowflake, PostgreSQL, LLM APIs, LangGraph and more."
    >
      {nodes.map((n) => {
        const on = matches(lens, n.lenses)
        return (
          <g key={`w-${n.label}`}>
            <path
              d={n.d}
              fill="none"
              stroke={on ? 'var(--lens)' : 'var(--line)'}
              strokeWidth={on ? 2.4 : 1.5}
              className={on ? 'flow' : ''}
              style={{ transition: 'stroke .5s, stroke-width .5s' }}
            />
            {on && !reduced && (
              <circle r="4.5" fill="var(--lens)">
                <animateMotion dur={`${2 + (n.label.length % 5) * 0.35}s`} repeatCount="indefinite" path={n.d} />
              </circle>
            )}
          </g>
        )
      })}

      {/* the hub */}
      <circle cx={CX} cy={CY} r="62" fill="var(--lens)" opacity="0.16" style={{ transition: 'fill .5s' }}>
        {!reduced && <animate attributeName="r" values="56;70;56" dur="3.2s" repeatCount="indefinite" />}
      </circle>
      <circle cx={CX} cy={CY} r="48" fill="var(--ink)" />
      <text x={CX} y={CY - 4} textAnchor="middle" fill="var(--paper)" fontFamily="'Bricolage Grotesque', system-ui, sans-serif" fontWeight="800" fontSize="22">
        Aryan
      </text>
      <text x={CX} y={CY + 16} textAnchor="middle" fill="var(--paper)" fontFamily="'IBM Plex Sans', system-ui, sans-serif" fontSize="11" opacity="0.75">
        the connector
      </text>

      {nodes.map((n) => {
        const on = matches(lens, n.lenses)
        return (
          <g key={`n-${n.label}`} style={{ transition: 'opacity .5s' }} opacity={on ? 1 : 0.55}>
            <rect
              x={n.x - n.w / 2}
              y={n.y - 16}
              width={n.w}
              height="32"
              rx="16"
              fill={on ? 'var(--lens)' : 'var(--card)'}
              stroke={on ? 'var(--lens)' : 'var(--line)'}
              strokeWidth="1.5"
              style={{ transition: 'fill .5s, stroke .5s' }}
            />
            <text
              x={n.x}
              y={n.y + 4.5}
              textAnchor="middle"
              fontFamily="'IBM Plex Sans', system-ui, sans-serif"
              fontWeight="600"
              fontSize="13"
              fill={on ? 'var(--lens-ink)' : 'var(--muted)'}
              style={{ transition: 'fill .5s' }}
            >
              {n.label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
