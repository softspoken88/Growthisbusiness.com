const BEFORE = [
  "Web form",
  "Shared inbox",
  "Someone hopefully responds",
  "Manual follow-up",
  "Spreadsheet",
  "Missed opportunity",
];

const AFTER = [
  "Lead captured",
  "CRM",
  "Automatic assignment",
  "Immediate response",
  "Follow-up sequence",
  "Appointment / opportunity",
  "Reporting",
  "Customer follow-up",
];

export default function BeforeAfter() {
  return (
    <section className="bg-ink bp-grid-ink">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="bp-label text-signal">The Same Lead, Two Ways</p>
          <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-paper-text sm:text-[2.35rem]">
            What happens between &ldquo;form submitted&rdquo; and &ldquo;deal
            won&rdquo; decides most of your revenue.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-6">
          <div className="rounded-2xl border border-line-ink bg-ink-2/50 p-7 sm:p-8">
            <p className="bp-label text-paper-muted">Before</p>
            <ol className="mt-6 space-y-0">
              {BEFORE.map((step, i) => (
                <li key={step} className="flex items-start gap-3.5">
                  <div className="flex flex-col items-center">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-line-ink text-[10px] font-mono text-paper-muted">
                      {i + 1}
                    </span>
                    {i < BEFORE.length - 1 && (
                      <span
                        className="my-0.5 h-6 w-px border-l border-dashed"
                        style={{ borderColor: "var(--color-line-ink)" }}
                      />
                    )}
                  </div>
                  <span className="pb-6 pt-0.5 text-[15px] text-paper-muted">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="bp-corners rounded-2xl border border-line-ink bg-ink-2/50 p-7 sm:p-8">
            <p className="bp-label text-signal">After GTB</p>
            <ol className="mt-6 space-y-0">
              {AFTER.map((step, i) => (
                <li key={step} className="flex items-start gap-3.5">
                  <div className="flex flex-col items-center">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-signal bg-signal/10 text-[10px] font-mono text-signal">
                      {i + 1}
                    </span>
                    {i < AFTER.length - 1 && (
                      <span className="relative my-0.5 h-6 w-px overflow-hidden">
                        <span
                          className="absolute inset-0 border-l"
                          style={{ borderColor: "var(--color-signal)" }}
                        />
                      </span>
                    )}
                  </div>
                  <span className="pb-6 pt-0.5 text-[15px] font-medium text-paper-text">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
