import Link from "next/link";

const NODES = [
  { x: 40, label: "Lead Captured" },
  { x: 190, label: "CRM" },
  { x: 340, label: "Assigned" },
  { x: 490, label: "Followed Up" },
  { x: 640, label: "Won" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink bp-grid-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-10 lg:pb-24 lg:pt-24">
        <div>
          <p className="bp-label text-signal">
            Growth &middot; Systems &middot; Automation Consulting
          </p>
          <h1 className="mt-5 font-display text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-paper-text sm:text-[3.1rem] lg:text-[3.4rem]">
            You built the business.
            <br />
            Now let&rsquo;s grow it.
          </h1>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-paper-muted">
            We help owner-led businesses find where they&rsquo;re losing
            revenue, time, and opportunities — then build the sales
            processes, systems, and automation to fix it. Not another
            software subscription. A business that actually runs the way
            you meant it to.
          </p>
          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center rounded-full bg-signal px-7 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-signal-deep"
            >
              Get a Free Growth Assessment
            </Link>
            <Link
              href="#how-we-help"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line-ink px-7 py-3.5 text-[15px] font-semibold text-paper-text transition-colors hover:border-signal hover:text-signal"
            >
              See How We Help
            </Link>
          </div>
          <p className="mt-7 text-[13px] text-paper-muted/80">
            No pitch deck. We look at how leads, follow-up, and reporting
            actually move through your business today.
          </p>
        </div>

        <div className="bp-corners rounded-2xl border border-line-ink bg-ink-2/60 p-5 sm:p-7">
          <p className="bp-label text-paper-muted">Fig. 01 — Lead-to-Won, automated</p>
          <div className="mt-5 overflow-x-auto">
            <svg
              viewBox="-20 0 700 190"
              className="min-w-[620px]"
              role="img"
              aria-label="Diagram showing a lead automatically moving from captured, to CRM, to assignment, to follow-up, to won"
            >
              <line
                x1="40"
                y1="70"
                x2="640"
                y2="70"
                stroke="var(--color-line-ink)"
                strokeWidth="1.5"
              />
              <line
                x1="40"
                y1="70"
                x2="640"
                y2="70"
                stroke="var(--color-signal)"
                strokeWidth="1.5"
                className="bp-flow-path"
              />

              {NODES.map((n, i) => (
                <g key={n.label}>
                  <circle
                    cx={n.x}
                    cy="70"
                    r="6"
                    fill={i === NODES.length - 1 ? "var(--color-good)" : "var(--color-signal)"}
                    className="bp-node-pulse"
                    style={{ animationDelay: `${i * 0.35}s` }}
                  />
                  <circle cx={n.x} cy="70" r="11" fill="none" stroke="var(--color-line-ink)" />
                  <text
                    x={n.x}
                    y="112"
                    textAnchor="middle"
                    fontFamily="var(--font-mono)"
                    fontSize="11.5"
                    fill="var(--color-paper-muted)"
                  >
                    {n.label}
                  </text>
                  <text
                    x={n.x}
                    y="40"
                    textAnchor="middle"
                    fontFamily="var(--font-mono)"
                    fontSize="10"
                    fill="var(--color-signal)"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </text>
                </g>
              ))}

              <text
                x="40"
                y="160"
                fontFamily="var(--font-mono)"
                fontSize="10.5"
                fill="var(--color-paper-muted)"
              >
                No step waits on someone remembering to do it.
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
