import Link from "next/link";
import { Wordmark } from "./Logo";

const NAV = [
  { label: "How We Help", href: "/#how-we-help" },
  { label: "Workforce Training", href: "/workforce-training" },
  { label: "Bookkeeping", href: "/bookkeeping" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Industries", href: "/#industries" },
  { label: "Resources", href: "/resources" },
  { label: "Ways to Work Together", href: "/#engagements" },
];

const PHONE_DISPLAY = "(918) 618-1274";
const PHONE_HREF = "tel:+19186181274";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link href="/" aria-label="Grow This Business — home" className="shrink-0">
          <Wordmark size={44} />
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
            href={PHONE_HREF}
            aria-label={`Call ${PHONE_DISPLAY}`}
            className="inline-flex items-center text-ink-muted transition-colors hover:text-ink-text md:hidden"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <a
            href={PHONE_HREF}
            className="hidden text-[13px] font-medium text-ink-muted transition-colors hover:text-ink-text md:inline-flex items-center gap-1.5"
          >
            {PHONE_DISPLAY}
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

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20.5c0 .6-.4 1-1 1C10.6 21.5 2.5 13.4 2.5 3.1c0-.6.4-1 1-1H7.2c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z" />
    </svg>
  );
}
