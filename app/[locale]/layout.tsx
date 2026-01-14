import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from 'next-intl/server';
import { ReactNode } from "react";
import { locales } from '@/i18n/config';
import { notFound } from 'next/navigation';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title:
      "Maze Group - Hotel Equipment & IT Solutions Supplier | Georgia, Azerbaijan, Armenia, CIS",
    description:
      "Leading hotel equipment supplier in Georgia, Azerbaijan & CIS. LG & Samsung TVs, LED screens, digital signage, IT solutions. 24/7 service in Tbilisi.",
    authors: [{ name: "Maze Group" }],
    creator: "Maze Group",
    publisher: "Maze Group",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: "Maze Group - Hotel Equipment & IT Solutions Supplier",
      description:
        "Professional hotel equipment supplier in Georgia, Azerbaijan, Armenia and CIS. LG & Samsung TVs, minibars, safes, LED screens, IT infrastructure.",
      url: `https://maze-group.com/${locale}`,
      siteName: "Maze Group",
      locale: locale === 'ka' ? 'ka_GE' : locale === 'ru' ? 'ru_RU' : 'en_US',
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // Google Search Console verification
      // google: 'your-google-verification-code',
      // Yandex verification (for Russian market)
      // yandex: 'your-yandex-verification-code',
    },
    alternates: {
      canonical: `https://maze-group.com/${locale}`,
      languages: {
        en: "https://maze-group.com/en",
        ru: "https://maze-group.com/ru",
        ka: "https://maze-group.com/ka",
      },
    },
    other: {
      "apple-mobile-web-app-status-bar-style": "default",
      "msapplication-navbutton-color": "#FFFFFF",
      "msapplication-TileColor": "#FFFFFF",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate that the incoming locale is valid
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta name="msapplication-navbutton-color" content="#FFFFFF" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* Geo targeting */}
        <meta name="geo.region" content="GE" />
        <meta name="geo.placename" content="Tbilisi" />

        {/* Business schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Maze Group",
              description:
                "Hotel equipment and IT solutions supplier in Georgia, Azerbaijan, Armenia and CIS region",
              url: "https://maze-group.com",
              logo: "https://maze-group.com/logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tbilisi",
                addressCountry: "GE",
              },
              areaServed: ["GE", "AZ", "AM"],
              serviceType: [
                "Hotel Equipment Supply",
                "IT Infrastructure",
                "Hospitality Solutions",
                "LED Display Systems",
                "Digital Signage",
              ],
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className="bg-gradient-to-br from-blue-50 to-indigo-100"
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <SpeedInsights />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
