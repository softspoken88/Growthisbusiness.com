const INDUSTRIES = [
  { name: "Home & Field Services", note: "Plumbing, HVAC, electrical, roofing, landscaping, restoration" },
  { name: "Professional Services", note: "Firms selling expertise and time" },
  { name: "Financial & Insurance Services", note: "Mortgage, lending, insurance agencies" },
  { name: "Property & Real Estate Services", note: "Property management & related operators" },
  { name: "B2B Organizations", note: "Companies selling to other businesses" },
  { name: "Other Growing Businesses", note: "Healthcare-adjacent orgs, nonprofits & associations" },
];

export default function Industries() {
  return (
    <section id="industries" className="scroll-mt-20 bg-paper-2 bp-grid-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="bp-label text-structural">Who We Work With</p>
          <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-ink-text sm:text-[2.35rem]">
            The systems change less than you&rsquo;d think from one industry
            to the next.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-muted">
            We work across industries with businesses generally between
            $250K–$10M in revenue and 3–100 employees — companies that
            have already grown past what their systems can support.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind) => (
            <div key={ind.name} className="bg-paper p-6">
              <h3 className="font-display text-[1.05rem] font-semibold text-ink-text">
                {ind.name}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">{ind.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
