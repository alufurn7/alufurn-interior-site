import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import AppWrapper from "@/components/AppWrapper";

/* ── Fonts ── */
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-display",
    display: "swap",
});

/* ── Metadata ── */
export const metadata: Metadata = {
    metadataBase: new URL('https://alufurn.com'),
    title: {
        default: "Alufurn | Aluminium Modular Kitchens, Doors & Panels India",
        template: "%s | Alufurn",
    },
    description:
        "India's leading aluminium interior manufacturer. Custom modular kitchens, doors, wardrobes & wall panels. Showrooms in Patna, Jaipur & Calicut. Free design consultation.",
    alternates: {
        canonical: "https://alufurn.com/",
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://alufurn.com/",
        siteName: "ALUFURN",
        title: "ALUFURN | Premium Aluminium Modular Kitchens, Doors & Panels — India",
        description:
            "India's leading aluminium interior manufacturer. Custom aluminium modular kitchens, doors, wardrobes & wall panels. Showrooms in Patna, Jaipur & Calicut.",
        images: [
            {
                url: "https://alufurn.com/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "ALUFURN — Premium Aluminium Interiors India",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ALUFURN | Premium Aluminium Interiors India",
        description:
            "India's leading aluminium interior manufacturer — kitchens, wardrobes, doors & wall panels. Showrooms in Patna, Jaipur & Calicut.",
        images: ["https://alufurn.com/images/og-image.jpg"],
    },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://alufurn.com/#website",
      "url": "https://alufurn.com/",
      "name": "Alufurn",
      "alternateName": "ALUFURN",
      "description": "Premium Aluminium Modular Kitchens, Doors & Panels — India",
      "publisher": {
        "@id": "https://alufurn.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://alufurn.com/blog?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://alufurn.com/#organization",
      "name": "Alufurn",
      "alternateName": "ALUFURN",
      "url": "https://alufurn.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://alufurn.com/logo_green.png",
        "width": 240,
        "height": 80
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7763970474",
        "contactType": "customer service",
        "email": "enquiries@alufurn.com",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://www.instagram.com/alufurn",
        "https://www.facebook.com/people/Alufurn/61583290337095/",
        "https://www.linkedin.com/in/alufurn-home-44099b391"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://alufurn.com/#store-patna",
      "name": "ALUFURN Experience Centre Patna",
      "image": "https://alufurn.com/images/studio-patna.jpg",
      "telephone": "+91-7763970474",
      "email": "enquiries@alufurn.com",
      "url": "https://alufurn.com/experience",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "G-15, Shashi Complex, Exhibition Road",
        "addressLocality": "Patna",
        "addressRegion": "Bihar",
        "postalCode": "800001",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "19:00"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://alufurn.com/#store-jaipur",
      "name": "Alufurn Experience Centre Jaipur",
      "image": "https://alufurn.com/images/studio-jaipur.jpg",
      "telephone": "+91-9776397047",
      "email": "enquiries@alufurn.com",
      "url": "https://alufurn.com/experience",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "131-132, Main Niwaru Road, Jhotwara Industrial Area",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.9386,
        "longitude": 75.7394
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "19:00"
      },
      "priceRange": "₹₹₹",
      "parentOrganization": { "@id": "https://alufurn.com/#organization" }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://alufurn.com/#store-calicut",
      "name": "Alufurn Experience Centre Calicut",
      "image": "https://alufurn.com/images/studio-calicut.jpg",
      "telephone": "+91-9776397047",
      "email": "enquiries@alufurn.com",
      "url": "https://alufurn.com/experience",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "42/1680 Kunnummal Nallalam, Behind Industrial Estate",
        "addressLocality": "Kozhikode",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 11.2588,
        "longitude": 75.7804
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "19:00"
      },
      "priceRange": "₹₹₹",
      "parentOrganization": { "@id": "https://alufurn.com/#organization" }
    },
    {
      "@type": "Product",
      "@id": "https://alufurn.com/aluminium-kitchen#product",
      "name": "Aluminium Modular Kitchen",
      "description": "Waterproof & termite-proof aluminium modular kitchens, custom-made to your exact dimensions.",
      "brand": {
        "@id": "https://alufurn.com/#organization"
      },
      "image": "https://alufurn.com/images/products/aluminium-kitchen.jpg",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": "38"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Verified Customer"
        },
        "reviewBody": "Outstanding aluminium modular kitchen. Flawless finish, precise installation, and genuinely waterproof — exactly as promised."
      },
      "offers": {
        "@type": "AggregateOffer",
        "offerCount": "5",
        "priceCurrency": "INR",
        "lowPrice": "250000",
        "highPrice": "600000",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "Product",
      "@id": "https://alufurn.com/aluminium-doors#product",
      "name": "Aluminium Interior Doors",
      "description": "Custom aluminium interior doors — pivot, flush, barn & sliding. No warping, no maintenance.",
      "brand": {
        "@id": "https://alufurn.com/#organization"
      },
      "image": "https://alufurn.com/images/products/aluminium-doors.jpg",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": "24"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Verified Customer"
        },
        "reviewBody": "The pivot door system is exceptional. Perfect flush fit, smooth action, and the finish has not changed after a year of daily use."
      },
      "offers": {
        "@type": "AggregateOffer",
        "offerCount": "5",
        "priceCurrency": "INR",
        "lowPrice": "18000",
        "highPrice": "45000",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "Product",
      "@id": "https://alufurn.com/aluminium-panels#product",
      "name": "Aluminium Wall Panels & Facade Cladding",
      "description": "Architectural aluminium wall panels & facade cladding. Custom CNC patterns, 100+ finishes.",
      "brand": {
        "@id": "https://alufurn.com/#organization"
      },
      "image": "https://alufurn.com/images/products/aluminium-panels.jpg",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": "17"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Verified Customer"
        },
        "reviewBody": "Used ALUFURN aluminium panels for our building facade. Excellent finish, no corrosion after monsoon season, and installation was clean and fast."
      },
      "offers": {
        "@type": "AggregateOffer",
        "offerCount": "3",
        "priceCurrency": "INR",
        "lowPrice": "350",
        "highPrice": "800",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "unitCode": "FTK"
          }
        }
      }
    },
    {
      "@type": "Product",
      "@id": "https://alufurn.com/aluminium-wardrobe#product",
      "name": "Aluminium Modular Wardrobe",
      "description": "Waterproof & termite-proof aluminium wardrobes. Walk-in, sliding & hinged configurations.",
      "brand": {
        "@id": "https://alufurn.com/#organization"
      },
      "image": "https://alufurn.com/images/products/aluminium-wardrobe.jpg",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": "21"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Verified Customer"
        },
        "reviewBody": "The sliding wardrobe system is beautifully made. Perfectly fitted to our wall, smooth operation, and the finish is premium."
      },
      "offers": {
        "@type": "AggregateOffer",
        "offerCount": "6",
        "priceCurrency": "INR",
        "lowPrice": "150000",
        "highPrice": "400000",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "Product",
      "@id": "https://alufurn.com/aluminium-vanity#product",
      "name": "Aluminium Bathroom Vanity",
      "description": "100% waterproof aluminium bathroom vanity units. Custom sizes & finishes. Rust-free for life.",
      "brand": {
        "@id": "https://alufurn.com/#organization"
      },
      "image": "https://alufurn.com/images/products/aluminium-vanity.jpg",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": "14"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Verified Customer"
        },
        "reviewBody": "The floating vanity unit looks stunning and is completely waterproof. No swelling, no warping — exactly what you need in a bathroom."
      },
      "offers": {
        "@type": "AggregateOffer",
        "offerCount": "6",
        "priceCurrency": "INR",
        "lowPrice": "35000",
        "highPrice": "120000",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://alufurn.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://alufurn.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://alufurn.com/aluminium-kitchen"
        }
      ]
    }
  ]
};

/* ── Root Layout ── */
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${playfair.variable} antialiased`}
        >
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="min-h-screen">
                <AppWrapper>
                    {children}
                </AppWrapper>
            </body>
        </html>
    );
}