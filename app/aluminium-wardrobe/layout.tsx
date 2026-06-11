import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aluminium Wardrobes India — Custom Walk-In & Sliding | Alufurn",
    description:
        "Custom aluminium wardrobes — walk-in, sliding & fitted systems. Waterproof, termite-proof. Alufurn showrooms in Patna, Jaipur & Calicut. Free design quote.",
    alternates: {
        canonical: "https://alufurn.com/aluminium-wardrobe",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Product",
            "@id": "https://alufurn.com/aluminium-wardrobe#product",
            "name": "ALUFURN Aluminium Wardrobe",
            "description":
                "Custom aluminium wardrobes manufactured in India. Walk-in, sliding, hinged and fitted systems — waterproof, termite-proof, CNC-machined to 0.1mm accuracy.",
            "brand": { "@type": "Brand", "name": "ALUFURN" },
            "image": ["https://alufurn.com/images/walk-in-elite.webp", "https://alufurn.com/images/sliding-luxe.webp"],
            "url": "https://alufurn.com/aluminium-wardrobe",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "bestRating": "5",
                "worstRating": "1",
                "reviewCount": "21",
            },
            "review": {
                "@type": "Review",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                },
                "author": {
                    "@type": "Person",
                    "name": "Verified Customer",
                },
                "reviewBody": "The sliding wardrobe system is beautifully made. Perfectly fitted to our wall, smooth operation, and the finish is premium.",
            },
            "offers": {
                "@type": "AggregateOffer",
                "offerCount": "6",
                "lowPrice": "150000",
                "highPrice": "400000",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "seller": {
                    "@type": "Organization",
                    "name": "ALUFURN",
                },
            },
        },
        {
            "@type": "FAQPage",
            "url": "https://alufurn.com/aluminium-wardrobe",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is the price of an aluminium wardrobe in India?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A standard ALUFURN aluminium wardrobe ranges from ₹45,000 to ₹1.5 lakh for a fitted unit. Walk-in systems for master bedrooms start at ₹2 lakh. Contact ALUFURN for a detailed quote after site measurement.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "How does aluminium wardrobe compare to plywood?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Aluminium wardrobes are 100% waterproof, termite-proof, and dimensionally stable — they never warp in monsoon or crack in summer. Lifespan is 20–30 years versus 8–15 years for plywood wardrobes.",
                    },
                },
            ],
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://alufurn.com/" },
                { "@type": "ListItem", "position": 2, "name": "Wardrobe Solutions", "item": "https://alufurn.com/aluminium-wardrobe" },
            ],
        },
    ],
};

export default function WardrobeLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    );
}
