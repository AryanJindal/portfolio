export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="mx-auto max-w-page px-4 py-20 sm:px-6 md:py-28">
      <div className="mb-12 max-w-2xl">
        <h2 className="font-display text-[clamp(2.1rem,4.5vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.025em]">
          {title}
        </h2>
        {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
      </div>
      {children}
    </section>
  )
}
