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
