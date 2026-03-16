import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.innovativeimagesphotos.com"),
  title: "Senior Portrait Photography | McKinney, TX | Innovative Images",
  description:
    "High school senior portrait photography in McKinney, TX. Fun, creative, and unforgettable senior pictures by Innovative Images - serving the DFW metroplex for 30+ years.",
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
      "Creative, trendy high school senior portraits in McKinney, TX. On-location sessions that capture your personality. 30+ years of experience across DFW.",
    url: "https://www.innovativeimagesphotos.com/senior-portraits",
    siteName: "Innovative Images Photography",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Portrait Photography | Innovative Images",
    description:
      "Creative, trendy high school senior portraits in McKinney, TX. On-location sessions that capture your personality. 30+ years of experience.",
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
        "High school senior portrait photography serving the Dallas-Fort Worth metroplex for 30+ years. Creative, fun, and unforgettable senior pictures on location.",
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "4",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "E. Gonzalez" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "The best photographer I've ever worked with. He gets everything right. You could be the least photogenic person and he will bring out the best in you through his guidance through each pose.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "M. Cameron" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "I HIGHLY recommend Kurt Nelson! Our daughter was very concerned about her senior pictures. Kurt helped us find terrific locations and then walked us through his process to pair the right clothes with the right harmonious backdrop. Wow!",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "D. Perkins" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "Kurt did an amazing job with our son's senior pictures. Most photographers we looked at focused on girls, but Kurt does a great job with boys making them feel relaxed to get natural smiles.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "D. Smith" },
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "Kurt has been our photographer for years! You would never know his pictures were taken three years later — they look like they were taken on the same day.",
        },
      ],
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
