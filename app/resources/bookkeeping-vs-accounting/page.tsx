import type { Metadata } from "next";
import ArticleLayout, { H2, P, List } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Bookkeeping vs. Accounting: What's the Difference?",
  description:
    "They get used interchangeably, but they're different jobs, done at different points, often by different people.",
  alternates: { canonical: "/resources/bookkeeping-vs-accounting" },
};

export default function Article() {
  return (
    <ArticleLayout
      category="Bookkeeping & Financial Operations"
      title="Bookkeeping vs. Accounting: What's the Difference?"
      dek="The terms get used interchangeably, but they're different jobs, done at different points, often by different people."
      ctaHref="/bookkeeping"
      ctaLabel="Talk to GTB About Bookkeeping"
    >
      <P>
        &ldquo;I need someone to do my books&rdquo; and &ldquo;I need an
        accountant&rdquo; sound similar, but they&rsquo;re often requests
        for two different things. Knowing the difference makes it much
        easier to hire the right person for the right job.
      </P>

      <H2>Bookkeeping: the day-to-day record</H2>
      <P>
        Bookkeeping is the ongoing, transactional work — recording income
        and expenses, categorizing transactions, reconciling bank and
        credit-card accounts, and keeping the financial records current.
        It answers the question &ldquo;what happened,&rdquo; accurately
        and up to date.
      </P>
      <List
        items={[
          "Recording and categorizing transactions",
          "Bank and credit-card reconciliation",
          "Basic financial reports (P&L, balance sheet)",
          "Invoice and bill tracking",
          "Keeping the books current, typically monthly",
        ]}
      />

      <H2>Accounting: interpretation and strategy</H2>
      <P>
        Accounting builds on top of a clean set of books — analyzing what
        the numbers mean, preparing for tax filings, advising on business
        structure, and handling more complex financial decisions. It
        answers &ldquo;what should we do about it,&rdquo; and it&rsquo;s
        typically the domain of a CPA or accountant, not a bookkeeper.
      </P>
      <List
        items={[
          "Tax preparation and filing",
          "Financial analysis and strategic advice",
          "Audit support",
          "Complex compliance and regulatory matters",
        ]}
      />

      <H2>Why the distinction matters</H2>
      <P>
        Bookkeeping and accounting require different skill sets, and
        conflating them leads to two common problems: paying accountant
        rates for routine data entry, or expecting a bookkeeper to give
        tax advice they&rsquo;re not licensed or positioned to give.
        Clean, current bookkeeping is also what makes accounting possible
        — an accountant working from disorganized books spends real time
        (and your money) just getting to a usable starting point before
        they can do the higher-value work you actually hired them for.
      </P>

      <H2>How they work together</H2>
      <P>
        In a well-run setup, bookkeeping happens continuously — monthly or
        even more often — keeping the books clean and current. Accounting
        happens periodically on top of that foundation: at tax time, at
        major business decisions, or when the numbers need real
        interpretation. Businesses that skip the bookkeeping layer and go
        straight to &ldquo;we&rsquo;ll deal with it at tax time&rdquo;
        often end up paying more overall, in a rushed, once-a-year
        cleanup instead of steady, manageable monthly work.
      </P>
    </ArticleLayout>
  );
}
