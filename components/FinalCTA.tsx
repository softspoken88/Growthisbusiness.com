import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:py-28">
        <p className="bp-label text-signal">Free Growth Assessment</p>
        <h2 className="mx-auto mt-5 max-w-2xl font-display text-[2.1rem] font-semibold leading-[1.15] tracking-tight text-paper-text sm:text-[2.6rem]">
          What could your business do if the systems worked as hard as
          you do?
        </h2>
        <div className="mt-9 flex justify-center">
          <Link
            href="/assessment"
            className="inline-flex items-center justify-center rounded-full bg-signal px-8 py-4 text-[15.5px] font-semibold text-ink transition-colors hover:bg-signal-deep"
          >
            Get Your Free Growth Assessment
          </Link>
        </div>
        <p className="mt-6 text-[13.5px] text-paper-muted">
          A real look at your business — not a disguised sales call.
        </p>
      </div>
    </section>
  );
}
