"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Wordmark } from "./Logo";

const SERVICE_LINKS = [
  { kicker: "Grow", label: "Sales & Revenue", href: "/#grow" },
  { kicker: "Systemize", label: "Systems, CRM & Automation", href: "/#systemize" },
  { kicker: "Develop", label: "Workforce Training & Learning", href: "/workforce-training" },
];

const ADDITIONAL_LINKS = [
  { label: "Bookkeeping & Financial Operations", href: "/bookkeeping" },
  { label: "Business Technology & Communications", href: "/#additional-solutions" },
];

const SIMPLE_NAV = [
  { label: "Industries", href: "/#industries" },
  { label: "Resources", href: "/resources" },
];

const PHONE_DISPLAY = "(918) 618-1274";
const PHONE_HREF = "tel:+19186181274";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link
          href="/"
          aria-label="Grow This Business — home"
          className="shrink-0"
          onClick={() => setMobileOpen(false)}
        >
          <Wordmark size={44} />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            <li ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                aria-expanded={servicesOpen}
                className="flex items-center gap-1.5 text-[14px] font-medium text-ink-muted transition-colors hover:text-ink-text"
              >
                Services
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                >
                  <path d="M1.5 3L5 6.5L8.5 3" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute left-1/2 top-full mt-3 w-80 -translate-x-1/2 rounded-2xl border border-line bg-paper p-4 shadow-lg">
                  <p className="bp-label px-2 text-ink-muted">Services</p>
                  <ul className="mt-2">
                    {SERVICE_LINKS.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          onClick={() => setServicesOpen(false)}
                          className="block rounded-lg px-2 py-2.5 hover:bg-paper-2"
                        >
                          <span className="block text-[11px] font-medium uppercase tracking-wide text-signal-deep">
                            {s.kicker}
                          </span>
                          <span className="block text-[14px] font-medium text-ink-text">
                            {s.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <p className="bp-label mt-3 border-t border-line px-2 pt-3 text-ink-muted">
                    Additional Solutions
                  </p>
                  <ul className="mt-2">
                    {ADDITIONAL_LINKS.map((a) => (
                      <li key={a.href}>
                        <Link
                          href={a.href}
                          onClick={() => setServicesOpen(false)}
                          className="block rounded-lg px-2 py-2 text-[13.5px] text-ink-text/85 hover:bg-paper-2"
                        >
                          {a.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            {SIMPLE_NAV.map((item) => (
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
            className="inline-flex items-center text-ink-muted transition-colors hover:text-ink-text lg:hidden"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <a
            href={PHONE_HREF}
            className="hidden text-[13px] font-medium text-ink-muted transition-colors hover:text-ink-text lg:inline-flex items-center gap-1.5"
          >
            {PHONE_DISPLAY}
          </a>
          <Link
            href="/assessment"
            className="hidden items-center rounded-full bg-ink px-4 py-2.5 text-[13.5px] font-semibold text-paper-text transition-colors hover:bg-ink-3 sm:inline-flex sm:px-5"
          >
            Get a Free Growth Assessment
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center text-ink-text lg:hidden"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2.5 5.5H17.5M2.5 10H17.5M2.5 14.5H17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-line bg-paper px-5 py-5 lg:hidden">
          <p className="bp-label text-ink-muted">Services</p>
          <ul className="mt-2 mb-4 space-y-0.5">
            {SERVICE_LINKS.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-2 py-2 text-[15px] font-medium text-ink-text hover:bg-paper-2"
                >
                  {s.label}
                </Link>
              </li>
            ))}
            {ADDITIONAL_LINKS.map((a) => (
              <li key={a.href}>
                <Link
                  href={a.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-2 py-2 text-[14.5px] text-ink-text/85 hover:bg-paper-2"
                >
                  {a.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-0.5 border-t border-line pt-4">
            {SIMPLE_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-2 py-2 text-[15px] font-medium text-ink-text hover:bg-paper-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/assessment"
            onClick={() => setMobileOpen(false)}
            className="mt-5 flex items-center justify-center rounded-full bg-ink px-5 py-3 text-[14px] font-semibold text-paper-text"
          >
            Get a Free Growth Assessment
          </Link>
        </div>
      )}
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
