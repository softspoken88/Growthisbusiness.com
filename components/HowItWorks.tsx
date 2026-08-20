const STEPS = [
  {
    n: "01",
    title: "Assess",
    copy: "We look at how the business actually operates today — sales, follow-up, systems, and the manual work behind the scenes.",
  },
  {
    n: "02",
    title: "Identify",
    copy: "We find where revenue is leaking, where work is duplicated, and where technology isn't earning its keep.",
  },
  {
    n: "03",
    title: "Build",
    copy: "We implement the processes, technology, and automation to fix it — or coordinate the right specialist to build it with you.",
  },
  {
    n: "04",
    title: "Optimize",
    copy: "We measure what changed, then keep tuning. Systems don't get built once and left alone.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-paper-2 bp-grid-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="bp-label text-structural">How It Works</p>
          <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-ink-text sm:text-[2.35rem]">
            A straightforward process, in order.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className={`relative border-t-2 border-ink px-1 py-1 pr-6 ${
                i > 0 ? "sm:pl-6" : ""
              }`}
            >
              <span className="bp-label text-signal-deep">Step {s.n}</span>
              <h3 className="mt-5 font-display text-[1.4rem] font-semibold text-ink-text">
                {s.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-muted">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
