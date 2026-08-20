import type { Metadata } from "next";
import Link from "next/link";
import { RESOURCES } from "./resources-data";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Practical guides on choosing an LMS, automating employee training, fixing lead follow-up, and building better business systems — no pitch, just what we've learned.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesIndexPage() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="bp-label text-structural">Resources</p>
        <h1 className="mt-4 font-display text-[2.1rem] font-semibold leading-[1.15] tracking-tight text-ink-text sm:text-[2.5rem]">
          Practical guides, not sales pitches.
        </h1>
        <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink-muted">
          Straightforward answers to the questions we hear most from
          business owners — on training, sales, systems, and automation.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {RESOURCES.map((r) => (
            <Link
              key={r.slug}
              href={`/resources/${r.slug}`}
              className="block rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-structural"
            >
              <p className="bp-label text-signal-deep">{r.category}</p>
              <h2 className="mt-3 font-display text-[1.15rem] font-semibold leading-snug text-ink-text">
                {r.title}
              </h2>
              <p className="mt-2.5 text-[14px] leading-relaxed text-ink-muted">{r.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
