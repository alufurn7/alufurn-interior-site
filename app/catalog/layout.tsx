import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Alufurn Product Catalog — Download Aluminium Interiors Catalogue",
    description:
        "Download the Alufurn product catalog. Explore our full range of aluminium modular kitchens, wardrobes, doors, panels & vanity units. Designs, sizes & finishes included.",
    alternates: {
        canonical: "https://www.alufurn.com/catalog",
    },
    openGraph: {
        type: "website",
        url: "https://www.alufurn.com/catalog",
        title: "Alufurn Product Catalog — Download Aluminium Interiors Catalogue",
        description:
            "Download the complete Alufurn catalog — aluminium kitchens, wardrobes, pivot doors, vanity units and wall panels. All designs, finishes and pricing inside.",
        siteName: "ALUFURN",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://www.alufurn.com/catalog#webpage",
            "url": "https://www.alufurn.com/catalog",
            "name": "Alufurn Product Catalog",
            "description":
                "Download the Alufurn product catalog for aluminium modular kitchens, wardrobes, doors, panels and vanity units.",
            "isPartOf": { "@id": "https://www.alufurn.com/#website" },
        },
        {
            "@type": "BreadcrumbList",
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
                    "name": "Catalog",
                    "item": "https://www.alufurn.com/catalog"
                }
            ]
        }
    ]
};

export default function CatalogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
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
