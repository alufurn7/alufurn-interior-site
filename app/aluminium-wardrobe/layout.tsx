import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aluminium Wardrobe India — Custom Walk-In & Sliding Wardrobe Manufacturer",
    description:
        "India's premium aluminium wardrobe manufacturer. Walk-in wardrobes, sliding systems, fitted wardrobes — waterproof, termite-proof, custom-built. Showrooms in Patna, Jaipur & Calicut.",
    alternates: {
        canonical: "https://www.alufurn.com/aluminium-wardrobe",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Product",
            "@id": "https://www.alufurn.com/aluminium-wardrobe#product",
            "name": "ALUFURN Aluminium Wardrobe",
            "description":
                "Custom aluminium wardrobes manufactured in India. Walk-in, sliding, hinged and fitted systems — waterproof, termite-proof, CNC-machined to 0.1mm accuracy.",
            "brand": { "@type": "Brand", "name": "ALUFURN" },
            "image": ["https://www.alufurn.com/images/walk-in-elite.webp", "https://www.alufurn.com/images/sliding-luxe.webp"],
            "url": "https://www.alufurn.com/aluminium-wardrobe",
            "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "INR",
                "lowPrice": "45000",
                "highPrice": "800000",
                "availability": "https://schema.org/InStock",
                "seller": { "@id": "https://www.alufurn.com/#organization" },
            },
        },
        {
            "@type": "FAQPage",
            "url": "https://www.alufurn.com/aluminium-wardrobe",
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
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.alufurn.com/" },
                { "@type": "ListItem", "position": 2, "name": "Wardrobe Solutions", "item": "https://www.alufurn.com/aluminium-wardrobe" },
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
