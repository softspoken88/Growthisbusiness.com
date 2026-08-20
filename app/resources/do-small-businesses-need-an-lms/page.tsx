import type { Metadata } from "next";
import ArticleLayout, { H2, P, List } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Does a Small Business Actually Need an LMS?",
  description:
    "A more useful question than 'which LMS' is often 'do we need one at all yet.'",
  alternates: { canonical: "/resources/do-small-businesses-need-an-lms" },
};

export default function Article() {
  return (
    <ArticleLayout
      category="Workforce Training"
      title="Does a Small Business Actually Need an LMS?"
      dek="A more useful question than 'which LMS' is often 'do we need one at all yet.' Here's how to tell."
      ctaHref="/workforce-training"
      ctaLabel="Talk to a Training Consultant"
    >
      <P>
        Plenty of small businesses buy a learning management system
        before they need one, and plenty more go years without one after
        they genuinely did. Both mistakes are common, and both are
        avoidable with a few honest questions.
      </P>

      <H2>Signs you probably don&rsquo;t need one yet</H2>
      <List
        items={[
          "You have a handful of employees and onboard someone new every few months, not every few weeks",
          "Required training is simple enough to track in a spreadsheet without anyone losing track of it",
          "You're not subject to recurring compliance or certification requirements that need documented proof",
          "Nobody's asking \"did everyone actually complete this?\" and not being able to answer confidently",
        ]}
      />
      <P>
        If that&rsquo;s your situation, a shared drive of documents, a
        simple checklist, and a manager who follows up is often genuinely
        enough. Buying software to solve a problem you don&rsquo;t have
        yet just adds a bill and a login nobody uses consistently.
      </P>

      <H2>Signs it&rsquo;s becoming a real problem</H2>
      <List
        items={[
          "You're hiring often enough that onboarding consistency has started to slip",
          "Compliance or safety training needs to be provable, not just assumed",
          "Training keeps getting assigned informally and completion tracking depends on someone remembering",
          "Multiple locations or managers are handling training differently from each other",
          "An audit, inspection, or client requirement asked for documentation you couldn't produce quickly",
        ]}
      />
      <P>
        None of these individually means you need a full LMS tomorrow —
        but two or three of them together usually mean the manual
        approach has quietly become more work (and more risk) than a
        proper system would be.
      </P>

      <H2>The middle ground most businesses miss</H2>
      <P>
        &ldquo;LMS or nothing&rdquo; is a false choice. Some organizations
        genuinely just need a small set of required courses and a
        reliable way to track completion — not a full platform with
        content authoring, advanced reporting, and integrations they
        won&rsquo;t use. Right-sizing the solution to the actual problem
        matters more than picking the most feature-complete option
        available.
      </P>

      <H2>A reasonable way to decide</H2>
      <P>
        If you can honestly answer &ldquo;who completed what training,
        and when&rdquo; without digging, you&rsquo;re probably fine as-is.
        If that question makes you wince, it&rsquo;s worth a real
        assessment — not necessarily to buy an LMS, but to figure out
        what you actually need before deciding what to buy.
      </P>
    </ArticleLayout>
  );
}
