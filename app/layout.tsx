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
    title: {
        default: "Alufurn | Aluminium Modular Kitchens, Doors & Panels India",
        template: "%s | Alufurn",
    },
    description:
        "India's leading aluminium interior manufacturer. Custom modular kitchens, doors, wardrobes & wall panels. Showrooms in Patna, Jaipur & Calicut. Free design consultation.",
    alternates: {
        canonical: "https://www.alufurn.com/",
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://www.alufurn.com/",
        siteName: "ALUFURN",
        title: "ALUFURN | Premium Aluminium Modular Kitchens, Doors & Panels — India",
        description:
            "India's leading aluminium interior manufacturer. Custom aluminium modular kitchens, doors, wardrobes & wall panels. Showrooms in Patna, Jaipur & Calicut.",
        images: [
            {
                url: "https://www.alufurn.com/images/og-image.jpg",
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
        images: ["https://www.alufurn.com/images/og-image.jpg"],
    },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.alufurn.com/#website",
      "url": "https://www.alufurn.com/",
      "name": "Alufurn",
      "alternateName": "ALUFURN",
      "description": "Premium Aluminium Modular Kitchens, Doors & Panels — India",
      "publisher": {
        "@id": "https://www.alufurn.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.alufurn.com/blog?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.alufurn.com/#organization",
      "name": "Alufurn",
      "alternateName": "ALUFURN",
      "url": "https://www.alufurn.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.alufurn.com/logo_green.png",
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
      "@id": "https://www.alufurn.com/#store-patna",
      "name": "ALUFURN Experience Centre Patna",
      "image": "https://www.alufurn.com/images/studio-patna.jpg",
      "telephone": "+91-7763970474",
      "email": "enquiries@alufurn.com",
      "url": "https://www.alufurn.com/experience",
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
      "@id": "https://www.alufurn.com/#store-jaipur",
      "name": "Alufurn Experience Centre Jaipur",
      "image": "https://www.alufurn.com/images/studio-jaipur.jpg",
      "telephone": "+91-9776397047",
      "email": "enquiries@alufurn.com",
      "url": "https://www.alufurn.com/experience",
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
      "parentOrganization": { "@id": "https://www.alufurn.com/#organization" }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.alufurn.com/#store-calicut",
      "name": "Alufurn Experience Centre Calicut",
      "image": "https://www.alufurn.com/images/studio-calicut.jpg",
      "telephone": "+91-9776397047",
      "email": "enquiries@alufurn.com",
      "url": "https://www.alufurn.com/experience",
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
      "parentOrganization": { "@id": "https://www.alufurn.com/#organization" }
    },
    {
      "@type": "Product",
      "@id": "https://www.alufurn.com/aluminium-kitchen#product",
      "name": "Aluminium Modular Kitchen",
      "description": "Waterproof & termite-proof aluminium modular kitchens, custom-made to your exact dimensions.",
      "brand": {
        "@id": "https://www.alufurn.com/#organization"
      },
      "image": "https://www.alufurn.com/images/products/aluminium-kitchen.jpg",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "250000",
        "highPrice": "600000",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "Product",
      "@id": "https://www.alufurn.com/aluminium-doors#product",
      "name": "Aluminium Interior Doors",
      "description": "Custom aluminium interior doors — pivot, flush, barn & sliding. No warping, no maintenance.",
      "brand": {
        "@id": "https://www.alufurn.com/#organization"
      },
      "image": "https://www.alufurn.com/images/products/aluminium-doors.jpg",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "180000",
        "highPrice": "450000",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "Product",
      "@id": "https://www.alufurn.com/aluminium-panels#product",
      "name": "Aluminium Wall Panels & Facade Cladding",
      "description": "Architectural aluminium wall panels & facade cladding. Custom CNC patterns, 100+ finishes.",
      "brand": {
        "@id": "https://www.alufurn.com/#organization"
      },
      "image": "https://www.alufurn.com/images/products/aluminium-panels.jpg",
      "offers": {
        "@type": "AggregateOffer",
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
      "@id": "https://www.alufurn.com/aluminium-wardrobe#product",
      "name": "Aluminium Modular Wardrobe",
      "description": "Waterproof & termite-proof aluminium wardrobes. Walk-in, sliding & hinged configurations.",
      "brand": {
        "@id": "https://www.alufurn.com/#organization"
      },
      "image": "https://www.alufurn.com/images/products/aluminium-wardrobe.jpg",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "150000",
        "highPrice": "400000",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "Product",
      "@id": "https://www.alufurn.com/aluminium-vanity#product",
      "name": "Aluminium Bathroom Vanity",
      "description": "100% waterproof aluminium bathroom vanity units. Custom sizes & finishes. Rust-free for life.",
      "brand": {
        "@id": "https://www.alufurn.com/#organization"
      },
      "image": "https://www.alufurn.com/images/products/aluminium-vanity.jpg",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": "35000",
        "highPrice": "150000",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.alufurn.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.alufurn.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://www.alufurn.com/aluminium-kitchen"
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