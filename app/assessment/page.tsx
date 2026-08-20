import type { Metadata } from "next";
import GrowthAssessmentForm from "@/components/GrowthAssessmentForm";

export const metadata: Metadata = {
  title: "Free Business Growth Assessment",
  description:
    "Request a free Business Growth Assessment. We'll look at your sales process, lead follow-up, CRM, systems, and automation to find where you're losing revenue and time.",
  alternates: { canonical: "/assessment" },
};

const LOOK_AT = [
  "Lead response & sales process",
  "CRM & pipeline visibility",
  "Follow-up & conversion",
  "Customer journey",
  "Technology & systems fit",
  "Repetitive administrative work",
  "Reporting",
  "Operational bottlenecks",
];

export default function AssessmentPage() {
  return (
    <>
      <section className="bg-ink bp-grid-ink">
        <div className="mx-auto max-w-5xl px-5 pb-14 pt-16 sm:px-8 sm:pt-20">
          <p className="bp-label text-signal">Free Business Growth Assessment</p>
          <h1 className="mt-5 max-w-2xl font-display text-[2.3rem] font-semibold leading-[1.12] tracking-tight text-paper-text sm:text-[2.75rem]">
            Find out where your business is losing revenue, time, and
            opportunities.
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-paper-muted">
            No pitch, no obligation. Tell us what&rsquo;s happening and
            we&rsquo;ll take a real look at how leads, follow-up, and
            reporting move through your business today — then tell you
            plainly what we find.
          </p>

          <div className="mt-9 grid max-w-xl grid-cols-2 gap-x-8 gap-y-3">
            {LOOK_AT.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[13.5px] text-paper-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="bp-corners rounded-2xl border border-line bg-paper p-6 sm:p-10">
            <p className="bp-label text-structural">Tell Us What&rsquo;s Happening</p>
            <h2 className="mt-3 font-display text-[1.5rem] font-semibold text-ink-text">
              Request your assessment
            </h2>
            <div className="mt-8">
              <GrowthAssessmentForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
