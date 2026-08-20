import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://growthisbusiness.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Grow This Business | Sales, Systems & Automation Consulting",
    template: "%s | Grow This Business",
  },
  description:
    "Grow This Business helps owner-led companies find where they're losing revenue, time, and opportunities — then builds the sales processes, systems, and automation to fix it.",
  keywords: [
    "business growth consulting",
    "small business consulting",
    "business automation services",
    "sales consulting",
    "sales automation",
    "CRM consulting",
    "business systems consulting",
    "workflow automation",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Grow This Business",
    title: "Grow This Business | Sales, Systems & Automation Consulting",
    description:
      "We help business owners find where they're losing revenue, time, and opportunities — then build the systems to fix it.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Grow This Business" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow This Business | Sales, Systems & Automation Consulting",
    description:
      "We help business owners find where they're losing revenue, time, and opportunities — then build the systems to fix it.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Grow This Business",
      alternateName: "GTB",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
      description:
        "Sales, systems, and business automation consulting for owner-led companies.",
      // TODO: replace placeholders with real contact details before launch.
      email: "hello@growthisbusiness.com",
      telephone: "+1-800-555-0100",
      sameAs: ["https://www.linkedin.com/company/growthisbusiness"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Grow This Business",
      image: `${SITE_URL}/icon.svg`,
      url: SITE_URL,
      priceRange: "$$",
      description:
        "Growth, sales, systems, operations, and business automation consulting for small and lower-middle-market businesses.",
      areaServed: "US",
      knowsAbout: [
        "Sales process development",
        "CRM implementation",
        "Business process automation",
        "Business operations consulting",
        "Go-to-market strategy",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper-text"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
