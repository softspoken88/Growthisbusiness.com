const SERVICES = [
  {
    tag: "Sales & Revenue Growth",
    title: "Grow Revenue",
    copy:
      "Build a sales process that runs the same way whether you're watching it or not — from first response through the follow-up that actually happens.",
    points: [
      "Lead-response & follow-up process",
      "Pipeline & CRM strategy",
      "Sales scripts, KPIs & forecasting",
      "Referral & reactivation strategy",
    ],
  },
  {
    tag: "Business Automation",
    title: "Automate Work",
    copy:
      "Find the repetitive, manual work eating your team's time and replace it with workflows that run themselves — consistently, every time.",
    points: [
      "Lead & form routing",
      "Automated follow-up sequences",
      "Review requests & reactivation",
      "Internal notifications & task creation",
    ],
  },
  {
    tag: "Systems & Operations",
    title: "Build Better Systems",
    copy:
      "Replace tribal knowledge with documented process. Build the CRM, reporting, and operational backbone that lets the business scale past the owner.",
    points: [
      "Process mapping & SOPs",
      "CRM implementation & optimization",
      "System integrations",
      "KPI dashboards & reporting",
    ],
  },
  {
    tag: "Growth Consulting",
    title: "Scale Smarter",
    copy:
      "Get an outside operator's read on what's actually slowing growth, and a prioritized plan — not a binder that sits on a shelf.",
    points: [
      "Business Growth Assessments",
      "Revenue & operational analysis",
      "Growth roadmaps",
      "Ongoing strategic advisory",
    ],
  },
];

export default function CoreServices() {
  return (
    <section id="how-we-help" className="scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="bp-label text-structural">How We Help</p>
          <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-ink-text sm:text-[2.35rem]">
            Four levers. One connected plan.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-muted">
            We rarely fix one of these in isolation — revenue, workload,
            systems, and scale are usually the same problem seen from
            different desks.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="flex flex-col bg-paper p-7">
              <span className="bp-label text-signal-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-[12.5px] font-medium uppercase tracking-wide text-ink-muted">
                {s.tag}
              </p>
              <h3 className="mt-2 font-display text-[1.35rem] font-semibold text-ink-text">
                {s.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-muted">{s.copy}</p>
              <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-[13.5px] text-ink-text/85">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-structural" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
