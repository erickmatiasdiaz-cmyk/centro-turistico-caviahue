/*
  ======================================
  LAYOUT GLOBAL CON SEO DINÁMICO
  ======================================
*/

import "./globals.css";
import type { Metadata } from "next";
import { siteData } from "@/lib/siteData";

/*
  Generamos metadata dinámica desde siteData
*/
export const metadata: Metadata = {
  title: siteData.seo.title,
  description: siteData.seo.description,

  keywords: siteData.seo.keywords,

  openGraph: {
    title: siteData.seo.title,
    description: siteData.seo.description,
    url: siteData.domain,
    siteName: siteData.name,
    images: [
      {
        url: siteData.seo.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_CL",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: siteData.seo.title,
    description: siteData.seo.description,
    images: [siteData.seo.ogImage],
  },

  metadataBase: new URL(siteData.domain),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /*
    Schema JSON-LD para LocalBusiness
    Esto ayuda a Google a entender el negocio.
  */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: siteData.name,
    image: `${siteData.domain}${siteData.seo.ogImage}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteData.location.city,
      addressRegion: siteData.location.region,
      addressCountry: siteData.location.country,
    },
    telephone: siteData.phoneDisplay,
    email: siteData.email,
    url: siteData.domain,
  };

  return (
    <html lang="es">
      <body className="bg-white text-gray-900">

        {/* Inyección de Schema estructurado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {children}
      </body>
    </html>
  );
}
