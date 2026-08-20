import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
        <p className="bp-label text-structural">[ Placeholder ]</p>
        <h1 className="mt-4 font-display text-[2rem] font-semibold text-ink-text">
          Terms of Service
        </h1>
        <p className="mt-6 text-[15px] leading-relaxed text-ink-muted">
          This page is a placeholder. Replace this content with real
          terms of service covering site use and, separately, the
          engagement terms for assessments and consulting work.
          Consider having counsel review the final version before
          launch.
        </p>
      </div>
    </section>
  );
}
