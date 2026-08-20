import type { Metadata } from "next";
import Link from "next/link";
import PartnerLogos from "@/components/PartnerLogos";
import {
  IconSafety,
  IconCompliance,
  IconLeadership,
  IconSalesCS,
  IconBizSkills,
  IconYouth,
  IconOnboarding,
} from "@/components/ServiceIcons";

export const metadata: Metadata = {
  title: "Workforce Training Consulting | LMS Selection & Training Solutions",
  description:
    "From LMS selection to safety, compliance, leadership, and custom learning content, we help organizations build training programs that work for their people and their business.",
  alternates: { canonical: "/workforce-training" },
};

const LMS_POINTS = [
  "LMS selection & vendor evaluation",
  "Requirements gathering",
  "Replacement & migration planning",
  "Implementation & configuration strategy",
  "Integration & SSO requirements",
  "Vendor comparison & RFP support",
];

const CONTENT_CATEGORIES = [
  {
    title: "Workplace Safety & OSHA-Related",
    icon: IconSafety,
    copy: "Workplace safety, hazard communication, PPE, and emergency preparedness — matched to your industry, not treated as one-size-fits-all.",
  },
  {
    title: "Compliance & Ethics",
    icon: IconCompliance,
    copy: "Harassment prevention, workplace conduct, HR compliance, and privacy & security awareness.",
  },
  {
    title: "Leadership & Management",
    icon: IconLeadership,
    copy: "Supervisor fundamentals, coaching, performance management, and change management.",
  },
  {
    title: "Sales & Customer Service",
    icon: IconSalesCS,
    copy: "Consultative selling, prospecting, customer experience, negotiation, and account management.",
  },
  {
    title: "Business & Professional Skills",
    icon: IconBizSkills,
    copy: "Communication, time management, workplace technology, and career development.",
  },
  {
    title: "K-12, Afterschool & Youth Development",
    icon: IconYouth,
    copy: "Professional development for education and youth-serving staff, program quality, and staff development — matched to your specific programs.",
  },
  {
    title: "Employee Onboarding",
    icon: IconOnboarding,
    copy: "Required training, role-based learning, and your own culture and process training — automatically assigned and tracked.",
  },
];

const CUSTOM_POINTS = [
  "Custom eLearning strategy",
  "Instructional design coordination",
  "Video-based & microlearning content",
  "Product & process / SOP training",
  "Scenario-based learning",
  "Assessments & knowledge checks",
];

const STRATEGY_POINTS = [
  "Training needs assessments",
  "Workforce development strategy",
  "Onboarding & compliance-training strategy",
  "Learner engagement",
  "Training reporting & analytics",
  "Vendor consolidation & technology roadmaps",
];

const AUTOMATION_FLOW = [
  "New employee added",
  "Role identified",
  "Required training assigned",
  "Employee notified",
  "Reminders automatically sent",
  "Completion recorded",
  "Manager notified",
  "Reporting updated",
  "Renewal / recertification triggered when applicable",
];

const AUDIENCES = [
  "Growing Businesses",
  "Multi-Location Employers",
  "Associations & Nonprofits",
  "Healthcare Organizations",
  "Financial Services Organizations",
  "Manufacturers",
  "Service Businesses",
  "Education & Youth-Serving Organizations",
  "Distributed Workforces",
];

export default function WorkforceTrainingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink bp-grid-ink">
        <div className="mx-auto max-w-5xl px-5 pb-16 pt-16 sm:px-8 sm:pt-20">
          <p className="bp-label text-signal">Workforce Training Consulting &amp; LMS Solutions</p>
          <h1 className="mt-5 max-w-2xl font-display text-[2.3rem] font-semibold leading-[1.12] tracking-tight text-paper-text sm:text-[2.75rem]">
            Build a Better-Trained Workforce.
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-paper-muted">
            From LMS selection to safety, compliance, leadership, and custom
            learning content, we help organizations build training programs
            that work for their people and their business.
          </p>
          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center rounded-full bg-signal px-7 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-signal-deep"
            >
              Talk to a Training Consultant
            </Link>
            <Link
              href="#training-solutions"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line-ink px-7 py-3.5 text-[15px] font-semibold text-paper-text transition-colors hover:border-signal hover:text-signal"
            >
              Explore Training Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* LMS Selection & Consulting */}
      <section id="training-solutions" className="scroll-mt-20 bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <p className="bp-label text-structural">LMS Selection &amp; Consulting</p>
              <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-ink-text sm:text-[2.35rem]">
                We help you find the learning technology that fits — not
                just the one with the best demo.
              </h2>
              <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-ink-muted">
                We don&rsquo;t sell an LMS. We help you determine what
                learning technology actually fits your organization, then
                help you evaluate, select, and implement it.
              </p>
              <div className="mt-7 rounded-2xl border border-signal/40 bg-signal/5 p-6">
                <p className="font-display text-[1.05rem] font-semibold leading-snug text-ink-text">
                  Train more people without watching your LMS bill grow with
                  every user.
                </p>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-muted">
                  Through select GTB learning-technology solutions,
                  organizations can support large or changing learner
                  populations without traditional per-user pricing.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-line bg-paper p-7 sm:p-8">
              <p className="bp-label text-ink-muted">What This Covers</p>
              <ul className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {LMS_POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[14.5px] text-ink-text/90">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-structural" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Content categories */}
      <section className="bg-paper-2 bp-grid-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="bp-label text-structural">Training Content</p>
            <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-ink-text sm:text-[2.35rem]">
              Thousands of training possibilities. One strategy built around
              your workforce.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-muted">
              Through relationships with established learning-technology,
              training-content, and instructional-design providers, GTB
              helps organizations access training across a broad range of
              workforce-development needs.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {CONTENT_CATEGORIES.map((c) => (
              <div key={c.title} className="bg-paper p-6">
                <c.icon className="h-11 w-11" />
                <h3 className="mt-3 font-display text-[1.05rem] font-semibold text-ink-text">
                  {c.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">{c.copy}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-[12.5px] leading-relaxed text-ink-muted">
            Categories reflect the range of training GTB can help source —
            not a guarantee that every course satisfies a specific
            organization&rsquo;s regulatory, OSHA, or accreditation
            requirements. We&rsquo;ll help you confirm fit for your
            situation.
          </p>

          <div className="mt-14 rounded-2xl border border-line bg-paper p-7 sm:p-8">
            <h3 className="font-display text-[1.2rem] font-semibold text-ink-text">
              Custom Training Content
            </h3>
            <p className="mt-2.5 max-w-2xl text-[14px] leading-relaxed text-ink-muted">
              For training built specifically around your company,
              processes, products, or workforce, we coordinate the
              instructional design and development.
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-3.5 border-t border-line pt-5 sm:grid-cols-2 lg:grid-cols-3">
              {CUSTOM_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-2 text-[13.5px] text-ink-text/85">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-structural" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Training Strategy */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="bp-label text-structural">Training Strategy</p>
            <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-ink-text sm:text-[2.35rem]">
              Training that&rsquo;s planned, not improvised.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-muted">
              We work as a training consultant, not simply an LMS broker —
              helping you decide what to train, how to deliver it, how to
              manage it, and how to measure whether it worked.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {STRATEGY_POINTS.map((p) => (
              <div key={p} className="flex items-start gap-3 border-t border-line pt-5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-structural" />
                <span className="text-[14.5px] leading-relaxed text-ink-text/90">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Automation */}
      <section className="bg-ink bp-grid-ink">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="bp-label text-signal">In Practice</p>
            <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-paper-text sm:text-[2.35rem]">
              Training that keeps running once someone&rsquo;s hired.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-paper-muted">
              The same automation approach we use for sales and operations
              applies here — training doesn&rsquo;t depend on someone
              remembering to assign it, or renew it.
            </p>
          </div>

          <div className="bp-corners mt-12 rounded-2xl border border-line-ink bg-ink-2/50 p-7 sm:p-8">
            <ol className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
              {AUTOMATION_FLOW.map((step, i) => (
                <li key={step} className="flex items-start gap-3.5 pb-6 pr-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-signal bg-signal/10 text-[10px] font-mono text-signal">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-[14.5px] font-medium text-paper-text">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Technology & Content Partners */}
      <section className="bg-paper-2 bp-grid-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <p className="bp-label text-structural">When Specialized Work Is Needed</p>
              <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-ink-text sm:text-[2.35rem]">
                Technology chosen for your organization — not the other way
                around.
              </h2>
              <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-ink-muted">
                Rather than forcing every organization into a single
                platform or content library, GTB evaluates your workforce,
                requirements, technology environment, and budget to
                identify the right solution.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-paper p-7 sm:p-8">
              <p className="text-[15px] leading-relaxed text-ink-text/90">
                Grow This Business works with established learning
                technology, workforce-training, and instructional-design
                providers to give organizations access to flexible LMS
                technology, extensive training libraries, and custom
                learning solutions.
              </p>
              <p className="mt-5 border-t border-line pt-5 text-[13px] leading-relaxed text-ink-muted">
                Access to some of the industry&rsquo;s established learning
                technology, workforce-training, and content solutions —
                coordinated through one strategic partner. We evaluate your
                requirements and recommend solutions based on fit.
              </p>
              <div className="mt-6 border-t border-line pt-6">
                <PartnerLogos />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nonprofit pricing */}
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <div className="bp-corners rounded-2xl border border-line bg-paper-2 p-7 text-center sm:p-10">
            <p className="bp-label text-structural">Special Pricing for Organizations Doing Important Work</p>
            <h2 className="mx-auto mt-4 max-w-xl font-display text-[1.6rem] font-semibold leading-[1.2] tracking-tight text-ink-text sm:text-[1.9rem]">
              Special pricing for organizations doing important work.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[14.5px] leading-relaxed text-ink-muted">
              GTB helps nonprofit and mission-driven organizations access
              workforce-training, learning technology, and
              professional-development solutions at pricing designed around
              their needs.
            </p>
            <div className="mt-7">
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-[14.5px] font-semibold text-paper-text transition-colors hover:bg-ink-3"
              >
                Ask About Nonprofit Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Serves */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-4 sm:px-8 lg:pb-28">
          <div className="max-w-2xl">
            <p className="bp-label text-structural">Who This Serves</p>
            <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-ink-text sm:text-[2.35rem]">
              Training needs aren&rsquo;t limited to small businesses.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {AUDIENCES.map((a) => (
              <div key={a} className="bg-paper p-6">
                <p className="text-[14.5px] font-medium text-ink-text">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ink">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:py-28">
          <p className="bp-label text-signal">Free Growth Assessment</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-[2.1rem] font-semibold leading-[1.15] tracking-tight text-paper-text sm:text-[2.6rem]">
            Ready to build training that actually works?
          </h2>
          <div className="mt-9 flex justify-center">
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center rounded-full bg-signal px-8 py-4 text-[15.5px] font-semibold text-ink transition-colors hover:bg-signal-deep"
            >
              Talk to a Training Consultant
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
