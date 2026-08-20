import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
        <p className="bp-label text-structural">[ Placeholder ]</p>
        <h1 className="mt-4 font-display text-[2rem] font-semibold text-ink-text">
          Privacy Policy
        </h1>
        <p className="mt-6 text-[15px] leading-relaxed text-ink-muted">
          This page is a placeholder. Replace this content with a
          real privacy policy — covering what data the Growth
          Assessment form collects, how it&rsquo;s used and stored, and
          any third-party tools (CRM, analytics, email) it&rsquo;s shared
          with — before launch. Consider having counsel review the
          final version.
        </p>
      </div>
    </section>
  );
}
