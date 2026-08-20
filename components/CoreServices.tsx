import Link from "next/link";
import { IconGrowRevenue, IconBuildSystems, IconWorkforce } from "./ServiceIcons";

const PILLARS = [
  {
    kicker: "Grow",
    title: "Sales & Revenue",
    icon: IconGrowRevenue,
    copy:
      "A more predictable path from opportunity to revenue — lead response, pipeline, CRM strategy, and the follow-up that actually happens.",
    ctaLabel: "Improve Revenue",
    href: "/assessment",
    accent: "amber" as const,
  },
  {
    kicker: "Systemize",
    title: "Systems, CRM & Automation",
    icon: IconBuildSystems,
    copy:
      "Stop relying on manual work, disconnected tools, and people remembering every next step. CRM, workflow automation, reporting, and the operational backbone that lets the business scale.",
    ctaLabel: "Build Better Systems",
    href: "/assessment",
    accent: "blue" as const,
  },
  {
    kicker: "Develop",
    title: "Workforce Training & Learning",
    icon: IconWorkforce,
    copy:
      "Give your people the systems, content, and training they need to perform — from LMS selection to compliance, leadership, and custom learning content.",
    ctaLabel: "Develop Your Workforce",
    href: "/workforce-training",
    accent: "amber" as const,
  },
];

export default function CoreServices() {
  return (
    <section id="how-we-help" className="scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="bp-label text-structural">How We Help</p>
          <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-ink-text sm:text-[2.35rem]">
            Grow. Systemize. Develop.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-muted">
            Three outcomes, one connected plan — revenue, the systems
            behind it, and the people running it are rarely separate
            problems.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              id={p.kicker.toLowerCase()}
              className="scroll-mt-24 flex flex-col rounded-2xl border border-line bg-paper p-8"
            >
              <p.icon className="h-14 w-14" />
              <p className="mt-6 bp-label text-signal-deep">{p.kicker}</p>
              <h3 className="mt-2 font-display text-[1.6rem] font-semibold leading-tight text-ink-text">
                {p.title}
              </h3>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-muted">{p.copy}</p>
              <Link
                href={p.href}
                className="mt-7 inline-flex w-fit items-center gap-1.5 border-t border-line pt-5 text-[14px] font-semibold text-structural transition-colors hover:text-ink-text"
              >
                {p.ctaLabel}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
