import Link from "next/link";
import type { ReactNode } from "react";

type ArticleLayoutProps = {
  title: string;
  category: string;
  dek: string;
  children: ReactNode;
  ctaHref?: string;
  ctaLabel?: string;
  ctaHeading?: string;
};

export default function ArticleLayout({
  title,
  category,
  dek,
  children,
  ctaHref = "/assessment",
  ctaLabel = "Get a Free Growth Assessment",
  ctaHeading = "Want help applying this to your business?",
}: ArticleLayoutProps) {
  return (
    <>
      <section className="bg-ink bp-grid-ink">
        <div className="mx-auto max-w-3xl px-5 pb-14 pt-16 sm:px-8 sm:pt-20">
          <Link
            href="/resources"
            className="text-[13px] font-medium text-paper-muted transition-colors hover:text-paper-text"
          >
            &larr; Resources
          </Link>
          <p className="bp-label mt-6 text-signal">{category}</p>
          <h1 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-paper-text sm:text-[2.5rem]">
            {title}
          </h1>
          <p className="mt-5 text-[16px] leading-relaxed text-paper-muted">{dek}</p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <div>{children}</div>

          <div className="bp-corners mt-16 rounded-2xl border border-line bg-paper-2 p-7 text-center sm:p-9">
            <p className="font-display text-[1.15rem] font-semibold text-ink-text">{ctaHeading}</p>
            <div className="mt-5">
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-signal px-7 py-3.5 text-[14.5px] font-semibold text-ink transition-colors hover:bg-signal-deep"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-10 font-display text-[1.35rem] font-semibold leading-snug text-ink-text first:mt-0">
      {children}
    </h2>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-[15.5px] leading-relaxed text-ink-text/90">{children}</p>;
}

export function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-ink-text/90">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-structural" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="mt-8 rounded-2xl border border-line bg-paper-2 p-6">
      <p className="text-[14.5px] leading-relaxed text-ink-text/90">{children}</p>
    </div>
  );
}
