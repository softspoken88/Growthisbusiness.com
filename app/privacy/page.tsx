import type { Metadata } from "next";
import { H2, P, List } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false, follow: true },
};

const EFFECTIVE_DATE = "August 20, 2026";

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-ink bp-grid-ink">
        <div className="mx-auto max-w-3xl px-5 pb-14 pt-16 sm:px-8 sm:pt-20">
          <p className="bp-label text-signal">Legal</p>
          <h1 className="mt-4 font-display text-[2rem] font-semibold leading-[1.15] tracking-tight text-paper-text sm:text-[2.4rem]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-[14px] text-paper-muted">Effective {EFFECTIVE_DATE}</p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <P>
            Grow This Business (&ldquo;GTB,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy.
            This policy explains what information we collect through
            GrowThisBusiness.com (the &ldquo;Site&rdquo;), how we use it,
            and the choices you have.
          </P>

          <H2>Information we collect</H2>
          <P>
            <strong>Information you provide directly.</strong> When you
            submit a Growth Assessment request, we collect your name,
            company name, email address, phone number, website (if
            provided), industry, approximate company size, your biggest
            challenge, and any additional details you choose to share. We
            only collect what you enter into that form — we don&rsquo;t
            ask for payment information, passwords, or account
            credentials anywhere on the Site.
          </P>
          <P>
            <strong>Information collected automatically.</strong> Like
            most websites, our hosting provider automatically logs
            standard technical information (such as IP address, browser
            type, and access times) for security and operational
            purposes. The Site itself does not currently use cookies or
            analytics tracking. If that changes, we&rsquo;ll update this
            policy to reflect it.
          </P>

          <H2>How we use your information</H2>
          <P>
            We use the information you submit to respond to your Growth
            Assessment request, follow up about the services you asked
            about, and improve how we serve prospective clients. We do
            not sell your information, and we do not use it for purposes
            unrelated to responding to your inquiry.
          </P>

          <H2>How we share information</H2>
          <P>
            We share information with the service providers that help us
            operate the Site and respond to inquiries — specifically
            Resend (email delivery) and Vercel (website hosting). These
            providers process information on our behalf and are not
            authorized to use it for their own purposes. If you become a
            client, additional information may be shared with specialized
            partners coordinated as part of a specific engagement, as
            described directly to you at that time. We do not otherwise
            share, rent, or sell your information to third parties.
          </P>

          <H2>Data retention</H2>
          <P>
            We retain the information you submit for as long as
            reasonably necessary to respond to your inquiry and, if you
            become a client, for the duration of that relationship and as
            required for our business records. You can request deletion
            at any time — see &ldquo;Your choices&rdquo; below.
          </P>

          <H2>Your choices</H2>
          <List
            items={[
              "Ask us to access, correct, or delete the personal information we hold about you",
              "Opt out of future communications at any time",
              "California residents have rights under the CCPA to know what personal information we collect and to request its deletion",
            ]}
          />
          <P>
            To exercise any of these choices, email
            hello@growthisbusiness.com or call (918) 618-1274.
          </P>

          <H2>Data security</H2>
          <P>
            We take reasonable steps to protect the information you
            provide, but no method of transmission or storage is
            completely secure, and we can&rsquo;t guarantee absolute
            security.
          </P>

          <H2>Children&rsquo;s privacy</H2>
          <P>
            The Site is intended for business owners and professionals.
            We do not knowingly collect information from anyone under 13.
          </P>

          <H2>Changes to this policy</H2>
          <P>
            We may update this policy from time to time. The effective
            date above reflects the most recent revision.
          </P>

          <H2>Contact us</H2>
          <P>
            Questions about this policy: hello@growthisbusiness.com or
            (918) 618-1274.
          </P>
        </div>
      </section>
    </>
  );
}
