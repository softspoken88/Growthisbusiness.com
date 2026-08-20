import Link from "next/link";
import { WordmarkOnDark } from "./Logo";

const COLUMNS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Services",
    links: [
      { label: "Sales & Revenue Growth", href: "/#how-we-help" },
      { label: "Business Automation", href: "/#how-we-help" },
      { label: "Systems & Operations", href: "/#how-we-help" },
      { label: "Workforce Training", href: "/workforce-training" },
      { label: "Bookkeeping & Financial Operations", href: "/bookkeeping" },
      { label: "Growth Consulting", href: "/#how-we-help" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Home & Field Services", href: "/#industries" },
      { label: "Professional Services", href: "/#industries" },
      { label: "Financial & Insurance", href: "/#industries" },
      { label: "Property & Real Estate", href: "/#industries" },
      { label: "B2B Organizations", href: "/#industries" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Resources", href: "/resources" },
      { label: "Ways to Work Together", href: "/#engagements" },
      { label: "Free Growth Assessment", href: "/assessment" },
      { label: "Contact", href: "/#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-paper-muted">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <WordmarkOnDark />
            <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed text-paper-muted">
              Sales, systems, and automation consulting for owner-led
              businesses ready for their next stage of growth.
            </p>
            <p className="mt-5 max-w-xs text-[14.5px] leading-relaxed text-paper-text">
              Prefer email? Reach us at{" "}
              <a
                href="mailto:hello@growthisbusiness.com"
                className="font-medium text-signal hover:underline"
              >
                hello@growthisbusiness.com
              </a>{" "}
              — we read every message.
            </p>
            <p className="bp-label mt-6 text-paper-muted/80">GrowThisBusiness.com</p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="bp-label text-paper-text">{col.heading}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[14.5px] text-paper-muted transition-colors hover:text-paper-text"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bp-rule-ink mt-14 flex flex-col gap-4 pt-8 text-[13px] text-paper-muted/80 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>&copy; {new Date().getFullYear()} Grow This Business, LLC.</span>
            <Link href="/privacy" className="hover:text-paper-text">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-paper-text">
              Terms of Service
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="mailto:hello@growthisbusiness.com" className="hover:text-paper-text">
              hello@growthisbusiness.com
            </a>
            <a href="tel:+19186181274" className="hover:text-paper-text">
              (918) 618-1274
            </a>
            <a
              href="https://www.linkedin.com/company/growthisbusiness"
              target="_blank"
              rel="noreferrer"
              className="hover:text-paper-text"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
