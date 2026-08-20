const EXAMPLES = [
  {
    title: "Never Forget Another Lead",
    copy: "New inquiries are assigned and followed up with automatically — no lead waits on someone checking an inbox.",
  },
  {
    title: "Recover More Open Estimates",
    copy: "Consistent follow-up on outstanding proposals, without depending on an employee remembering to circle back.",
  },
  {
    title: "Turn Completed Jobs Into Reviews",
    copy: "Feedback requests go out automatically at the right moment — after the work is actually done.",
  },
  {
    title: "Bring Old Customers Back",
    copy: "Reactivation outreach built around each customer's own history, not a generic blast list.",
  },
  {
    title: "Stop Manually Routing Information",
    copy: "Forms, approvals, and updates move between people and systems on their own — nobody's re-typing the same data twice.",
  },
  {
    title: "Know What's Happening",
    copy: "Dashboards and reporting that give owners real visibility, without building a spreadsheet every week.",
  },
];

export default function AutomationExamples() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="bp-label text-structural">In Practice</p>
          <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-ink-text sm:text-[2.35rem]">
            What automation actually looks like here.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-muted">
            We build with tools like HubSpot, GoHighLevel, Zapier, Make,
            and QuickBooks where they fit — but you&rsquo;re buying the outcome
            below, not a stack of software.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {EXAMPLES.map((ex, i) => (
            <div key={ex.title} className="border-t border-line pt-6">
              <div className="flex items-center gap-2.5">
                <svg width="22" height="12" viewBox="0 0 22 12" aria-hidden="true">
                  <circle cx="3" cy="6" r="2.2" fill="var(--color-good)" />
                  <line x1="6.5" y1="6" x2="19" y2="6" stroke="var(--color-good)" strokeWidth="1.5" />
                  <circle cx="19" cy="6" r="2.2" fill="var(--color-good)" />
                </svg>
                <span className="bp-label text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-3 font-display text-[1.15rem] font-semibold text-ink-text">
                {ex.title}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-muted">{ex.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
