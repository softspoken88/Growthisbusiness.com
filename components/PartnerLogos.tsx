/**
 * Authorized Technology & Content Partners — logo strip.
 *
 * Not currently used anywhere. Built so it can be dropped into
 * app/workforce-training/page.tsx (or elsewhere) the moment there
 * are real, authorized partner logos to show — without touching
 * layout code at that point, just this file's PARTNERS array.
 *
 * Intentionally empty of any real partner names or logos right now.
 * Populate `PARTNERS` below with { name, logoSrc, href } once
 * specific partners are approved for public display, then render
 * <PartnerLogos /> wherever it belongs. Until then this component
 * renders nothing.
 */

type Partner = {
  name: string;
  logoSrc: string;
  href?: string;
};

const PARTNERS: Partner[] = [];

export default function PartnerLogos() {
  if (PARTNERS.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
      {PARTNERS.map((p) => {
        const img = (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.logoSrc} alt={p.name} className="h-8 w-auto opacity-80" />
        );
        return p.href ? (
          <a key={p.name} href={p.href} target="_blank" rel="noreferrer" aria-label={p.name}>
            {img}
          </a>
        ) : (
          <span key={p.name} aria-label={p.name}>
            {img}
          </span>
        );
      })}
    </div>
  );
}
