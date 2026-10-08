// Renders **bold** segments as highlighter marks.
export default function Rich({ text }) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((p, i) => (i % 2 ? <mark key={i} className="hl">{p}</mark> : p))
}
