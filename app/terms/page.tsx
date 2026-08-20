import type { Metadata } from "next";
import { H2, P } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: false, follow: true },
};

const EFFECTIVE_DATE = "August 20, 2026";

// Governing-law state below is set to Oklahoma as a reasonable default
// (business phone number is an Oklahoma area code) — confirm this
// matches the state Grow This Business, LLC is actually registered in
// before treating this page as final.
export default function TermsPage() {
  return (
    <>
      <section className="bg-ink bp-grid-ink">
        <div className="mx-auto max-w-3xl px-5 pb-14 pt-16 sm:px-8 sm:pt-20">
          <p className="bp-label text-signal">Legal</p>
          <h1 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-paper-text sm:text-[2.4rem]">
            Terms of Service
          </h1>
          <p className="mt-4 text-[14px] text-paper-muted">Effective {EFFECTIVE_DATE}</p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <P>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use
            of GrowThisBusiness.com (the &ldquo;Site&rdquo;), operated by
            Grow This Business, LLC (&ldquo;GTB,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By using the Site,
            you agree to these Terms.
          </P>

          <H2>Use of the Site</H2>
          <P>
            The Site provides general information about GTB&rsquo;s
            consulting services and a way to request a Growth Assessment.
            You agree to use the Site only for lawful purposes, and not
            to attempt to disrupt, scrape, or gain unauthorized access to
            the Site or its underlying systems.
          </P>

          <H2>Not a services agreement</H2>
          <P>
            These Terms govern use of the website itself. They are not
            the agreement that governs any actual consulting engagement
            — if you become a client, that relationship will be governed
            by a separate agreement outlining scope, fees, and
            deliverables specific to your project.
          </P>

          <H2>Informational content</H2>
          <P>
            Resources, articles, and other content on the Site are
            provided for general informational purposes only. They are
            not a substitute for advice tailored to your specific
            business, and using them doesn&rsquo;t create a consulting
            relationship between you and GTB.
          </P>

          <H2>Intellectual property</H2>
          <P>
            The Site&rsquo;s content, design, and the Grow This Business
            name and mark are owned by GTB or its licensors. You may view
            and share Site content for personal, non-commercial
            reference, but may not reproduce, distribute, or create
            derivative works from it without our permission.
          </P>

          <H2>Third-party services and links</H2>
          <P>
            The Site may reference or link to third-party services — for
            example, the technology, training, or content providers GTB
            coordinates with for client engagements. We aren&rsquo;t
            responsible for the content, policies, or practices of any
            third-party service.
          </P>

          <H2>Disclaimers</H2>
          <P>
            The Site and its content are provided &ldquo;as is,&rdquo;
            without warranties of any kind, express or implied. We
            don&rsquo;t guarantee that the Site will be uninterrupted or
            error-free, or that any specific business outcome will result
            from using the Site or engaging GTB&rsquo;s services.
          </P>

          <H2>Limitation of liability</H2>
          <P>
            To the fullest extent permitted by law, GTB is not liable for
            any indirect, incidental, or consequential damages arising
            from your use of the Site.
          </P>

          <H2>Governing law</H2>
          <P>
            These Terms are governed by the laws of the State of
            Oklahoma, without regard to conflict-of-law principles.
          </P>

          <H2>Changes to these Terms</H2>
          <P>
            We may update these Terms from time to time. Continued use of
            the Site after changes means you accept the updated Terms.
          </P>

          <H2>Contact us</H2>
          <P>
            Questions about these Terms: hello@growthisbusiness.com or
            (918) 618-1274.
          </P>
        </div>
      </section>
    </>
  );
}
