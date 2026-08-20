const MODELS = [
  {
    title: "Business Growth Assessment",
    fit: "Start here",
    copy:
      "A focused look at sales, lead management, systems, workflows, technology, and where operations are creating drag — with a clear picture of what to fix first.",
  },
  {
    title: "Implementation Projects",
    fit: "Fixed scope",
    copy:
      "A defined project to build or fix a specific system, workflow, CRM, or automation — with a clear deliverable and timeline.",
  },
  {
    title: "Ongoing Growth & Systems Support",
    fit: "Monthly",
    copy:
      "Continued monitoring, maintenance, and optimization so the systems we build keep working as the business changes.",
  },
  {
    title: "Fractional Growth Support",
    fit: "Embedded",
    copy:
      "Higher-touch, ongoing sales, revenue, and operational leadership for companies that need the function without a full-time hire yet.",
  },
];

export default function EngagementModels() {
  return (
    <section id="engagements" className="scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="bp-label text-structural">Ways to Work Together</p>
            <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-ink-text sm:text-[2.35rem]">
              Start with an assessment. Scale the engagement as it earns it.
            </h2>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-4">
          {MODELS.map((m) => (
            <div
              key={m.title}
              className="flex flex-col rounded-2xl border border-line bg-paper p-6"
            >
              <span className="bp-label w-fit rounded-full bg-paper-2 px-2.5 py-1 text-ink-muted">
                {m.fit}
              </span>
              <h3 className="mt-4 font-display text-[1.15rem] font-semibold leading-snug text-ink-text">
                {m.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">{m.copy}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-[13.5px] text-ink-muted">
          Pricing depends on scope. Every engagement starts with a Growth
          Assessment so the plan fits the business — not a rate card.
        </p>
      </div>
    </section>
  );
}
