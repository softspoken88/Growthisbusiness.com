const STEPS = [
  {
    n: "01",
    title: "Assessment",
    copy: "Understand how the business operates today.",
  },
  {
    n: "02",
    title: "Strategy",
    copy: "Determine what actually needs to change.",
  },
  {
    n: "03",
    title: "Selection",
    copy: "Identify the right tools, technology, or content.",
  },
  {
    n: "04",
    title: "Implementation",
    copy: "Build and configure the solution.",
  },
  {
    n: "05",
    title: "Automation",
    copy: "Connect it to how the business actually runs.",
  },
  {
    n: "06",
    title: "Training",
    copy: "Help your people use what's been built.",
  },
  {
    n: "07",
    title: "Optimization",
    copy: "Measure results and keep improving.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-paper-2 bp-grid-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="bp-label text-structural">How It Works</p>
          <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-ink-text sm:text-[2.35rem]">
            One strategic partner for the systems that help your business
            grow.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-muted">
            We don&rsquo;t start with software. We start with what your
            business needs — then carry it through every step below,
            whether we&rsquo;re building it directly or coordinating the
            right specialist.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => {
            const smPad = i % 2 !== 0 ? "sm:pl-6" : "";
            const lgPad = i % 4 === 0 ? "lg:pl-1" : "lg:pl-6";
            return (
              <div
                key={s.n}
                className={`relative border-t-2 border-ink px-1 py-1 pb-6 pr-6 ${smPad} ${lgPad}`}
              >
                <span className="bp-label text-signal-deep">Step {s.n}</span>
                <h3 className="mt-4 font-display text-[1.2rem] font-semibold text-ink-text">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-muted">{s.copy}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
