import type { Metadata } from "next";
import ArticleLayout, { H2, P, List, Callout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "How Much Does Small Business Bookkeeping Cost?",
  description:
    "Why two bookkeeping quotes with the same monthly price can represent very different amounts of actual work.",
  alternates: { canonical: "/resources/how-much-does-bookkeeping-cost" },
};

export default function Article() {
  return (
    <ArticleLayout
      category="Bookkeeping & Financial Operations"
      title="How Much Does Small Business Bookkeeping Cost?"
      dek="Two quotes with the same monthly price can represent very different amounts of actual work. Here's what actually drives the cost."
      ctaHref="/bookkeeping"
      ctaLabel="Talk to GTB About Bookkeeping"
    >
      <P>
        Bookkeeping pricing varies more than most business owners expect —
        not because providers are being inconsistent, but because
        &ldquo;bookkeeping&rdquo; covers a wide range of actual work, and
        two businesses with the same revenue can need very different
        amounts of it.
      </P>

      <H2>What actually drives the price</H2>
      <List
        items={[
          "Transaction volume — how many transactions move through the business each month, not just revenue",
          "Number of accounts and cards being reconciled",
          "Whether the books are current or need catch-up work first",
          "How many entities or locations are involved",
          "Whether payroll, inventory, or job costing need to be tracked",
          "How much reporting is needed beyond basic categorization",
        ]}
      />
      <P>
        Two businesses with identical annual revenue can have very
        different bookkeeping needs if one processes twenty transactions a
        month and the other processes four hundred. Revenue is a weak
        predictor of bookkeeping cost; transaction volume and complexity
        are much stronger ones.
      </P>

      <H2>Why &ldquo;cleanup&rdquo; often costs more than ongoing work</H2>
      <P>
        If books haven&rsquo;t been kept current, the first engagement is
        usually catch-up or cleanup work — reconciling months (sometimes
        years) of transactions, fixing miscategorized entries, and getting
        the books to a clean starting point. This is often priced
        separately from ongoing monthly bookkeeping, and it&rsquo;s
        usually more labor-intensive per month than steady-state work
        going forward. It&rsquo;s reasonable to ask any provider to quote
        cleanup and ongoing work as two separate numbers.
      </P>

      <H2>What&rsquo;s often left out of a quote</H2>
      <Callout>
        Ask specifically whether a quote includes financial reports (P&amp;L,
        balance sheet, cash flow), or just transaction categorization.
        &ldquo;Bookkeeping&rdquo; without reporting tells you what
        happened; reporting is what actually makes the books useful for
        decisions.
      </Callout>
      <P>
        Software costs (QuickBooks or similar) are sometimes bundled into
        a bookkeeping quote and sometimes billed separately — worth
        clarifying up front so the comparison between providers is
        apples-to-apples.
      </P>

      <H2>A more useful question than &ldquo;what does it cost&rdquo;</H2>
      <P>
        Rather than comparing a single monthly number across providers, it
        helps to get specific about transaction volume, how many accounts
        need reconciling, and what reporting is actually needed — then ask
        each provider to quote against those specifics. The number that
        comes back means a lot more once it&rsquo;s tied to your actual
        situation instead of a generic starting price.
      </P>
    </ArticleLayout>
  );
}
