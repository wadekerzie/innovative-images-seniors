import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Senior Portrait Photography | McKinney, TX | Innovative Images",
  description:
    "High school senior portrait photography in McKinney, TX. Fun, creative, and unforgettable senior pictures by Innovative Images - serving the DFW metroplex for 20+ years.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Senior Portrait Photography | Innovative Images",
    description:
      "Creative, trendy high school senior portraits in McKinney, TX. On-location sessions that capture your personality. 20+ years of experience across DFW.",
    url: "https://www.innovativeimagesphotos.com/senior-portraits",
    siteName: "Innovative Images Photography",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "High school senior portrait photography by Innovative Images Photography in McKinney, TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Portrait Photography | Innovative Images",
    description:
      "Creative, trendy high school senior portraits in McKinney, TX. On-location sessions that capture your personality.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.innovativeimagesphotos.com/senior-portraits",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://www.innovativeimagesphotos.com/#business",
      name: "Innovative Images Photography",
      alternateName: "Innovative Images",
      description:
        "High school senior portrait photography serving the Dallas-Fort Worth metroplex for 20+ years. Creative, fun, and unforgettable senior pictures on location.",
      url: "https://www.innovativeimagesphotos.com",
      founder: {
        "@type": "Person",
        name: "Kurt Nelson",
        jobTitle: "Owner & Photographer",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "McKinney",
        addressRegion: "TX",
        postalCode: "75069",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.1972,
        longitude: -96.6397,
      },
      priceRange: "$$",
      areaServed: [
        "McKinney",
        "Dallas",
        "Fort Worth",
        "Plano",
        "Frisco",
        "Allen",
        "Richardson",
        "Prosper",
        "Celina",
        "Anna",
      ].map((city) => ({ "@type": "City", name: city })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Senior Portrait Photography",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Senior Portrait Sessions",
              description:
                "On-location high school senior portrait sessions — outdoor, urban, studio, and lifestyle settings tailored to each senior's personality.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Senior Portrait Packages",
              description:
                "Custom senior portrait packages including digital images, prints, albums, and wall art for families.",
            },
          },
        ],
      },
      potentialAction: {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://calendly.com/innovativeimages/portraitphoneconsultation",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
        name: "Book a Senior Portrait Consultation",
      },
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.innovativeimagesphotos.com/senior-portraits/#webpage",
      url: "https://www.innovativeimagesphotos.com/senior-portraits",
      name: "Senior Portrait Photography | McKinney, TX | Innovative Images",
      description:
        "High school senior portrait photography in McKinney, TX. Fun, creative, and unforgettable senior pictures by Innovative Images.",
      isPartOf: {
        "@id": "https://www.innovativeimagesphotos.com/#website",
      },
      about: {
        "@id": "https://www.innovativeimagesphotos.com/#business",
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Gilda+Display&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
