export type ResourceMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
};

// Add an entry here when publishing a new article at
// app/resources/<slug>/page.tsx. Keep excerpts to one sentence.
export const RESOURCES: ResourceMeta[] = [
  {
    slug: "how-to-choose-an-lms",
    title: "How to Choose an LMS: A Practical Checklist",
    excerpt:
      "The questions worth answering before you sit through another demo — features are the least important one.",
    category: "Workforce Training",
  },
  {
    slug: "lms-pricing-models-explained",
    title: "LMS Pricing Models Explained: Per-User vs. Unlimited-User",
    excerpt:
      "Why the sticker price on an LMS quote rarely predicts what you'll actually pay a year from now.",
    category: "Workforce Training",
  },
  {
    slug: "do-small-businesses-need-an-lms",
    title: "Does a Small Business Actually Need an LMS?",
    excerpt:
      "A more useful question than 'which LMS' is often 'do we need one at all yet.'",
    category: "Workforce Training",
  },
  {
    slug: "how-to-automate-employee-training",
    title: "How to Automate Employee Training",
    excerpt:
      "What actually changes when training stops depending on someone remembering to assign it.",
    category: "Automation",
  },
  {
    slug: "lead-follow-up-first-24-hours",
    title: "Why Most Businesses Lose Deals in the First 24 Hours",
    excerpt:
      "The response-time math behind why fast, unglamorous follow-up outperforms almost everything else in sales.",
    category: "Sales & Revenue",
  },
  {
    slug: "crm-vs-spreadsheet",
    title: "CRM vs. Spreadsheet: When You've Outgrown Both",
    excerpt:
      "The signs that your current system has quietly become the bottleneck it was supposed to fix.",
    category: "Systems & Operations",
  },
  {
    slug: "how-much-does-bookkeeping-cost",
    title: "How Much Does Small Business Bookkeeping Cost?",
    excerpt:
      "Why two bookkeeping quotes with the same monthly price can represent very different amounts of actual work.",
    category: "Bookkeeping & Financial Operations",
  },
  {
    slug: "bookkeeping-vs-accounting",
    title: "Bookkeeping vs. Accounting: What's the Difference?",
    excerpt:
      "They get used interchangeably, but they're different jobs, done at different points, often by different people.",
    category: "Bookkeeping & Financial Operations",
  },
  {
    slug: "automate-invoicing-payment-follow-up",
    title: "How to Automate Invoicing and Payment Follow-Up",
    excerpt:
      "What actually changes when getting paid stops depending on someone remembering to send a reminder.",
    category: "Bookkeeping & Financial Operations",
  },
];
