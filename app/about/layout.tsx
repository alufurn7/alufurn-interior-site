import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Alufurn — Aluminium Interior Manufacturer India",
    description:
        "Learn about Alufurn — India's premier aluminium interior manufacturer. Premium modular kitchens, doors, wardrobes & panels. Showrooms in Patna, Jaipur & Calicut.",
    alternates: {
        canonical: "https://alufurn.com/about",
    },
    openGraph: {
        type: "website",
        url: "https://alufurn.com/about",
        title: "About Alufurn — Aluminium Interior Manufacturer India",
        description:
            "India's premier aluminium interior manufacturer — custom kitchens, wardrobes, doors & panels. Precision-engineered. Showrooms in Patna, Jaipur & Calicut.",
        siteName: "ALUFURN",
        images: [
            {
                url: "https://alufurn.com/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Alufurn — About Us",
            },
        ],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "AboutPage",
            "@id": "https://alufurn.com/about#webpage",
            "url": "https://alufurn.com/about",
            "name": "About Alufurn",
            "description":
                "Alufurn is India's leading manufacturer of precision-engineered aluminium interiors — modular kitchens, wardrobes, interior doors, vanity units, and custom wall panels.",
            "isPartOf": { "@id": "https://alufurn.com/#website" },
            "about": { "@id": "https://alufurn.com/#organization" },
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
                "height": 80,
            },
            "description":
                "India's leading aluminium interior manufacturer producing custom modular kitchens, wardrobes, pivot & flush doors, vanity units, and wall panel systems.",
            "foundingDate": "2018",
            "areaServed": "IN",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7763970474",
                "contactType": "customer service",
                "email": "enquiries@alufurn.com",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"],
            },
            "sameAs": [
                "https://www.instagram.com/alufurn",
                "https://www.facebook.com/people/Alufurn/61583290337095/",
                "https://www.linkedin.com/in/alufurn-home-44099b391",
            ],
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://alufurn.com/" },
                { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://alufurn.com/about" },
            ],
        },
    ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
