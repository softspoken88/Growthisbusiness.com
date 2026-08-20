const PROBLEMS = [
  "Leads aren't followed up on — or not fast enough to matter.",
  "Employees manually move information between systems that don't talk to each other.",
  "Nobody can say exactly what's sitting in the pipeline right now.",
  "Estimates and proposals go cold with no one chasing them.",
  "The owner is the system — if you're out, follow-up stops.",
  "Past customers aren't consistently re-engaged.",
  "Technology exists, but the pieces don't communicate.",
  "Reporting takes hours to assemble and is out of date by the time it's read.",
];

function BrokenConnector() {
  return (
    <svg
      width="28"
      height="14"
      viewBox="0 0 28 14"
      aria-hidden="true"
      className="mt-1 shrink-0"
    >
      <circle cx="3" cy="7" r="2.5" fill="none" stroke="#C9CFDC" strokeWidth="1.5" />
      <line x1="7" y1="7" x2="24" y2="7" stroke="#C9CFDC" strokeWidth="1.5" strokeDasharray="1.5 3.5" />
      <circle cx="24" cy="7" r="2.5" fill="none" stroke="#C9CFDC" strokeWidth="1.5" />
    </svg>
  );
}

export default function ProblemSection() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="bp-label text-structural">The Problem</p>
            <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-ink-text sm:text-[2.35rem]">
              You don&rsquo;t necessarily need more software.
              <br />
              You need the business you already have to work better.
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-muted">
              Most owner-led companies didn&rsquo;t plan to end up here. Revenue
              grew faster than the systems underneath it, and now good
              people are compensating for gaps with memory, spreadsheets,
              and hustle.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {PROBLEMS.map((p) => (
              <li key={p} className="flex items-start gap-3 border-t border-line pt-5">
                <BrokenConnector />
                <span className="text-[15px] leading-relaxed text-ink-text/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
