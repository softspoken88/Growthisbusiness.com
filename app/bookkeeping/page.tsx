import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Business Bookkeeping & Financial Operations",
  description:
    "Keep your books organized, improve visibility into your finances, and build better processes around the money moving through your business.",
  alternates: { canonical: "/bookkeeping" },
};

const SERVICE_GROUPS = [
  {
    title: "Monthly Bookkeeping & Reporting",
    points: [
      "Monthly bookkeeping & transaction categorization",
      "Bank & credit-card reconciliation",
      "Profit & loss reporting",
      "Balance-sheet reporting",
      "Cash-flow visibility",
    ],
  },
  {
    title: "QuickBooks & Cleanup",
    points: [
      "QuickBooks setup",
      "QuickBooks support",
      "Bookkeeping cleanup",
      "Catch-up bookkeeping",
    ],
  },
  {
    title: "Receivables & Payables",
    points: [
      "Accounts receivable support",
      "Accounts payable support",
      "Invoice & payment tracking",
    ],
  },
  {
    title: "Process & Automation",
    points: [
      "Bookkeeping process improvement",
      "Financial workflow automation",
      "Systems and reporting built around how you actually operate",
    ],
  },
];

const AUTOMATION_FLOW = [
  "Customer / job completed",
  "Invoice created",
  "Customer notified",
  "Payment reminder",
  "Payment received",
  "Transaction reconciled",
  "Reporting updated",
  "Owner has visibility",
];

const AUDIENCES = [
  "Home & Field Service Companies",
  "HVAC & Plumbing",
  "Electrical Contractors",
  "Restoration & Roofing",
  "Property Management Companies",
  "Professional Services",
  "Other Growing Owner-Led Businesses",
];

export default function BookkeepingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink bp-grid-ink">
        <div className="mx-auto max-w-5xl px-5 pb-16 pt-16 sm:px-8 sm:pt-20">
          <p className="bp-label text-signal">Bookkeeping &amp; Financial Operations</p>
          <h1 className="mt-5 max-w-2xl font-display text-[2.3rem] font-semibold leading-[1.12] tracking-tight text-paper-text sm:text-[2.75rem]">
            Bookkeeping Built for a Growing Business.
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-paper-muted">
            Keep your books organized, improve visibility into your
            finances, and build better processes around the money moving
            through your business.
          </p>
          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center rounded-full bg-signal px-7 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-signal-deep"
            >
              Talk to GTB About Bookkeeping
            </Link>
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line-ink px-7 py-3.5 text-[15px] font-semibold text-paper-text transition-colors hover:border-signal hover:text-signal"
            >
              Request a Growth Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="bp-label text-structural">Know What&rsquo;s Happening</p>
            <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-ink-text sm:text-[2.35rem]">
              Know what&rsquo;s happening in your business — including the
              numbers.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-ink-muted">
              Growing businesses need accurate books and reliable financial
              processes. Through GTB&rsquo;s bookkeeping partner network,
              we help businesses access professional bookkeeping support
              while also identifying opportunities to improve the systems
              and workflows surrounding invoicing, payments, reporting,
              and financial administration.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {SERVICE_GROUPS.map((g) => (
              <div key={g.title} className="bg-paper p-7">
                <h3 className="font-display text-[1.1rem] font-semibold text-ink-text">
                  {g.title}
                </h3>
                <ul className="mt-4 space-y-2.5 border-t border-line pt-4">
                  {g.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-[13.5px] text-ink-text/85">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-structural" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-2xl text-[12.5px] leading-relaxed text-ink-muted">
            GTB is not a CPA firm and does not provide tax preparation,
            tax advice, auditing, legal advice, attestation services, or
            investment advice. Bookkeeping services are fulfilled through
            GTB&rsquo;s bookkeeping partner network.
          </p>
        </div>
      </section>

      {/* Automation */}
      <section className="bg-ink bp-grid-ink">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="bp-label text-signal">In Practice</p>
            <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-paper-text sm:text-[2.35rem]">
              Better books. Better processes. Better visibility.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-paper-muted">
              GTB&rsquo;s value isn&rsquo;t simply providing someone to
              categorize transactions. We can look at the processes
              surrounding the books, not just the books themselves — for
              example, what happens after an invoice goes out, or after a
              vendor bill comes in.
            </p>
          </div>

          <div className="bp-corners mt-12 rounded-2xl border border-line-ink bg-ink-2/50 p-7 sm:p-8">
            <ol className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
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
          <p className="mt-6 max-w-2xl text-[13px] leading-relaxed text-paper-muted">
            The same idea applies on the payables side — a vendor bill
            coming in can just as easily trigger automatic routing to the
            right approver, categorization, and reconciliation, rather
            than depending on someone remembering each step. Not every
            engagement includes every automation shown here; this is a
            conceptual example of the kind of process GTB can help build.
          </p>
        </div>
      </section>

      {/* Partner positioning */}
      <section className="bg-paper-2 bp-grid-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <p className="bp-label text-structural">How This Works</p>
              <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-ink-text sm:text-[2.35rem]">
                One relationship, even for specialized work.
              </h2>
            </div>
            <div className="rounded-2xl border border-line bg-paper p-7 sm:p-8">
              <p className="text-[15px] leading-relaxed text-ink-text/90">
                Through GTB&rsquo;s bookkeeping partner network, growing
                businesses can access professional bookkeeping support
                while maintaining one strategic relationship for their
                broader systems and operational needs.
              </p>
              <p className="mt-5 border-t border-line pt-5 text-[13px] leading-relaxed text-ink-muted">
                Bookkeeping work itself is fulfilled through that partner
                network, not performed directly by GTB staff — GTB stays
                the point of accountability for discovery, strategy, and
                how bookkeeping connects to your broader systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who this serves */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="bp-label text-structural">Who This Serves</p>
            <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-ink-text sm:text-[2.35rem]">
              Especially useful for businesses whose books haven&rsquo;t
              kept up with their growth.
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
            Ready to get real visibility into your numbers?
          </h2>
          <div className="mt-9 flex justify-center">
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center rounded-full bg-signal px-8 py-4 text-[15.5px] font-semibold text-ink transition-colors hover:bg-signal-deep"
            >
              Talk to GTB About Bookkeeping
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
