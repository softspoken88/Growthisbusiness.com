const PARTNER_AREAS = [
  "Website design & development",
  "SEO",
  "Paid advertising & PPC",
  "Graphic design & branding",
  "Bookkeeping & specialized accounting",
  "Advanced software development & integrations",
];

export default function PartnerCapabilities() {
  return (
    <section className="bg-paper-2 bp-grid-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="bp-label text-structural">When Specialized Work Is Needed</p>
            <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-ink-text sm:text-[2.35rem]">
              One point of accountability, even when the work touches
              several disciplines.
            </h2>
            <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-ink-muted">
              Some projects need deep, specialized expertise beyond
              growth and systems strategy. When that&rsquo;s the case, we
              coordinate with a network of vetted specialists — and stay
              accountable for the outcome, rather than handing you off.
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-paper p-7 sm:p-8">
            <p className="bp-label text-ink-muted">Coordinated Specialist Areas</p>
            <ul className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {PARTNER_AREAS.map((a) => (
                <li key={a} className="flex items-start gap-2.5 text-[14.5px] text-ink-text/90">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-structural" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-line pt-5 text-[13px] leading-relaxed text-ink-muted">
              GTB does not provide licensed legal, tax, or CPA services.
              Where those are required, we coordinate with appropriately
              licensed professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
