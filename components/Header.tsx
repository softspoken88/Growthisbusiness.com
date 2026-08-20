import Link from "next/link";
import { Wordmark } from "./Logo";

const NAV = [
  { label: "How We Help", href: "/#how-we-help" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Industries", href: "/#industries" },
  { label: "Ways to Work Together", href: "/#engagements" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link href="/" aria-label="Grow This Business — home" className="shrink-0">
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[14px] font-medium text-ink-muted transition-colors hover:text-ink-text"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+18005550100"
            className="hidden text-[13px] font-medium text-ink-muted hover:text-ink-text md:inline-flex items-center gap-1.5"
          >
            <span className="bp-label text-ink-muted">[ Placeholder ]</span>
            (800) 555-0100
          </a>
          <Link
            href="/assessment"
            className="inline-flex items-center rounded-full bg-ink px-4 py-2.5 text-[13.5px] font-semibold text-paper-text transition-colors hover:bg-ink-3 sm:px-5"
          >
            Get a Free Growth Assessment
          </Link>
        </div>
      </div>
    </header>
  );
}
