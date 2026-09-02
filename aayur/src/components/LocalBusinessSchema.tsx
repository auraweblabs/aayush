import { SITE_CONFIG } from "@/config/site";

export function LocalBusinessSchema() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": ["HealthAndBeautyBusiness", "DaySpa", "LocalBusiness"],
    "@id": "https://aayurtouch.com.au/#localbusiness",
    name: SITE_CONFIG.name,
    alternateName: "Aayur Touch Ayurvedic Massage Cameron Park",
    description: "Certified Ayurvedic massage therapies in Cameron Park, NSW at 19 Turnock Drive. Offering whole body Abhyanga, relaxation massage, headache relief, and upper body tension treatments.",
    url: "https://aayurtouch.com.au",
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    priceRange: "$$",
    currenciesAccepted: "AUD",
    paymentAccepted: "Cash, Credit Card, Direct Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: "19 Turnock Drive",
      addressLocality: "Cameron Park",
      addressRegion: "NSW",
      postalCode: "2285",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -32.8986,
      longitude: 151.6214,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "10:00",
        closes: "15:00",
      },
    ],
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Cameron Park NSW 2285",
      },
      {
        "@type": "AdministrativeArea",
        name: "Edgeworth NSW 2285",
      },
      {
        "@type": "AdministrativeArea",
        name: "West Wallsend NSW 2286",
      },
      {
        "@type": "AdministrativeArea",
        name: "Fletcher NSW 2287",
      },
      {
        "@type": "AdministrativeArea",
        name: "Maryland NSW 2287",
      },
      {
        "@type": "AdministrativeArea",
        name: "Wallsend NSW 2287",
      },
      {
        "@type": "AdministrativeArea",
        name: "Lake Macquarie NSW",
      },
      {
        "@type": "AdministrativeArea",
        name: "Newcastle NSW",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Ayurvedic Massage Therapies",
      itemListElement: SITE_CONFIG.services.map((service, index) => ({
        "@type": "OfferCatalog",
        name: service.title,
        position: index + 1,
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.fullDesc,
              provider: {
                "@type": "LocalBusiness",
                name: SITE_CONFIG.name,
              },
            },
          },
        ],
      })),
    },
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SITE_CONFIG.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
}
