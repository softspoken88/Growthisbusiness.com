import type { Metadata } from "next";
import ArticleLayout, { H2, P, List, Callout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "How to Automate Invoicing and Payment Follow-Up",
  description:
    "What actually changes when getting paid stops depending on someone remembering to send a reminder.",
  alternates: { canonical: "/resources/automate-invoicing-payment-follow-up" },
};

export default function Article() {
  return (
    <ArticleLayout
      category="Bookkeeping & Financial Operations"
      title="How to Automate Invoicing and Payment Follow-Up"
      dek="What actually changes when getting paid stops depending on someone remembering to send a reminder."
      ctaHref="/bookkeeping"
      ctaLabel="Talk to GTB About Bookkeeping"
    >
      <P>
        Slow payment is rarely about customers refusing to pay. More often
        it&rsquo;s a follow-up problem: an invoice goes out, nobody
        tracks whether it was opened, and the first reminder — if it
        happens at all — comes whenever someone notices the balance is
        old, not on any consistent schedule.
      </P>

      <H2>What the manual version looks like</H2>
      <P>
        Invoice sent, then... nothing systematic. Maybe someone checks
        aging receivables once a month. Maybe a customer gets a friendly
        reminder call three weeks late, or three months late, depending
        on how busy things are. The business isn&rsquo;t being lax — this
        is just what happens when follow-up depends on a person noticing,
        rather than a process that runs on its own.
      </P>

      <H2>What an automated version does instead</H2>
      <List
        items={[
          "Invoice goes out immediately when a job or order is marked complete",
          "The customer gets it right away, not whenever someone has time to send it",
          "If it's not paid by a set point, a reminder goes out automatically — no one has to remember",
          "Once payment comes in, it's matched to the invoice and reconciled without manual lookup",
          "Aging receivables are visible on a dashboard, not reconstructed by hand each month",
        ]}
      />
      <P>
        None of this requires being more aggressive with customers — a
        well-timed, consistent reminder usually reads as more
        professional than either silence or an apologetic late call.
      </P>

      <H2>Where this tends to break down</H2>
      <Callout>
        The most common failure isn&rsquo;t the automation itself —
        it&rsquo;s unclear rules. If &ldquo;when do we follow up&rdquo;
        and &ldquo;how many reminders before someone calls&rdquo; aren&rsquo;t
        clearly defined, automating the process just automates the
        inconsistency faster. Deciding the actual policy first matters
        more than which tool executes it.
      </Callout>

      <H2>Where to start</H2>
      <P>
        The highest-value starting point is usually the handoff moment
        itself — the instant a job, order, or service is marked complete.
        If invoicing triggers automatically from that single event, and a
        simple reminder schedule runs from there, most of the value is
        already captured. More sophisticated steps — payment-plan
        options, escalation paths for significantly overdue accounts — are
        easier to add once that first, simple loop is working reliably.
      </P>
    </ArticleLayout>
  );
}
