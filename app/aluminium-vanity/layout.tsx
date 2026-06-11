import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aluminium Bathroom Vanity India — Custom Vanity Units Manufacturer",
    description:
        "India's premium aluminium bathroom vanity manufacturer. Floating vanities, double basins, mirror cabinets — waterproof, mould-proof, custom-built. Showrooms in Patna, Jaipur & Calicut.",
    alternates: {
        canonical: "https://alufurn.com/aluminium-vanity",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Product",
            "@id": "https://alufurn.com/aluminium-vanity#product",
            "name": "ALUFURN Aluminium Bathroom Vanity",
            "description":
                "Custom aluminium bathroom vanity units manufactured in India. Floating, freestanding, and fitted systems — 100% waterproof, mould-resistant.",
            "brand": { "@type": "Brand", "name": "ALUFURN" },
            "image": ["https://alufurn.com/images/floating-vanity.webp", "https://alufurn.com/images/double-basin.webp"],
            "url": "https://alufurn.com/aluminium-vanity",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "bestRating": "5",
                "worstRating": "1",
                "reviewCount": "14",
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
                "reviewBody": "The floating vanity unit looks stunning and is completely waterproof. No swelling, no warping — exactly what you need in a bathroom.",
            },
            "offers": {
                "@type": "AggregateOffer",
                "offerCount": "6",
                "lowPrice": "35000",
                "highPrice": "120000",
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
            "url": "https://alufurn.com/aluminium-vanity",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is the price of an aluminium bathroom vanity in India?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "ALUFURN aluminium vanity units range from ₹18,000 for a compact powder-room unit to ₹1.2 lakh for a double-basin master bathroom configuration with mirror cabinet and integrated lighting. We provide a zero-charge quote based on your specific dimensions and requirements.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "Are aluminium vanities fully waterproof?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. ALUFURN vanity units are constructed entirely from aluminium profiles and waterproof carcass materials — no MDF, no particleboard, no wood-based substrate that can absorb moisture, swell, or delaminate. The frame is 100% impervious to water, steam, and bathroom condensation.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "What countertop and basin options are available?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We work with ceramic, quartz, and engineered stone countertops. Under-mount, drop-in, and vessel basins are supported across all our vanity systems. Our design team can co-ordinate countertop and basin supply as part of a complete package.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "Can ALUFURN vanity units be made to custom sizes?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. All ALUFURN vanity units are manufactured to your exact measurements — width, height, depth, and internal configuration. We do not sell from fixed catalogue dimensions.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "Do ALUFURN vanities come with integrated lighting?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "LED strip lighting is available in pelmet cavities and mirror cabinets across all collections. Colour temperature, dimmability, and IP rating options are available. Lighting is specified at the design stage and pre-wired at our factory before delivery.",
                    },
                },
            ],
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://alufurn.com/" },
                { "@type": "ListItem", "position": 2, "name": "Vanity Units", "item": "https://alufurn.com/aluminium-vanity" },
            ],
        },
    ],
};

export default function VanityLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {children}
        </>
    );
}
