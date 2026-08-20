import type { Metadata } from "next";
import ArticleLayout, { H2, P, List, Callout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "LMS Pricing Models Explained: Per-User vs. Unlimited-User",
  description:
    "Why the sticker price on an LMS quote rarely predicts what you'll actually pay a year from now.",
  alternates: { canonical: "/resources/lms-pricing-models-explained" },
};

export default function Article() {
  return (
    <ArticleLayout
      category="Workforce Training"
      title="LMS Pricing Models Explained: Per-User vs. Unlimited-User"
      dek="The sticker price on an LMS quote rarely predicts what you'll actually pay a year from now. Here's what actually drives the total cost."
      ctaHref="/workforce-training"
      ctaLabel="Talk to a Training Consultant"
    >
      <P>
        Two LMS quotes can look nearly identical on price per month and
        end up costing wildly different amounts by the end of the year.
        The reason almost always comes down to pricing model, not the
        headline number.
      </P>

      <H2>Per-user pricing</H2>
      <P>
        The most common model: a monthly or annual fee per active
        learner. It&rsquo;s simple to understand and predictable if your
        headcount is stable. It becomes expensive fast if your
        organization has seasonal hiring, high turnover in certain roles,
        contractors who need onboarding training, or growth you&rsquo;re
        actively trying to support. Every new person is a new line item,
        which can quietly turn training into a line item that discourages
        training more people — the opposite of what you actually want.
      </P>

      <H2>Tiered pricing</H2>
      <P>
        Fixed bands based on headcount ranges (say, 1&ndash;50 users,
        51&ndash;150, and so on). This softens the &ldquo;every new hire
        costs more&rdquo; problem somewhat, but organizations often end up
        paying for headroom they don&rsquo;t use, or getting bumped into
        an expensive new tier by a handful of additional users.
      </P>

      <H2>Unlimited-user / flat-fee pricing</H2>
      <P>
        A fixed cost regardless of how many people are enrolled. This
        model exists, though it&rsquo;s less commonly advertised than
        per-user pricing and isn&rsquo;t offered by every provider.
        It&rsquo;s worth asking about directly if your learner population
        changes throughout the year, since it removes the disincentive to
        train more people.
      </P>
      <Callout>
        Not every learning-technology solution offers unlimited-user
        pricing, and it isn&rsquo;t automatically the right fit for every
        organization — a very small, stable team may do better on a
        straightforward per-user plan. It&rsquo;s worth asking about
        specifically rather than assuming either model is the default.
      </Callout>

      <H2>What actually drives total cost</H2>
      <List
        items={[
          "How much your headcount fluctuates during the year",
          "Whether contractors, seasonal staff, or part-time employees need access",
          "Content costs on top of the platform fee, if a library is bundled separately",
          "Implementation and setup time, which is a real cost even if it isn't itemized",
          "Support tier — some \"unlimited\" plans limit support hours instead of users",
        ]}
      />

      <H2>The question worth asking every vendor</H2>
      <P>
        Rather than comparing sticker prices, ask each vendor to model
        your actual cost at your typical headcount and your peak
        headcount for the year. The gap between those two numbers tells
        you more about the real cost of a pricing model than the monthly
        rate on the pricing page ever will.
      </P>
    </ArticleLayout>
  );
}
