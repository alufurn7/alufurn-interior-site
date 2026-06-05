import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Completed Projects — ALUFURN Aluminium Interiors India",
    description: "Explore our portfolio of premium aluminium interior projects across India — luxury residences, developer fit-outs, and commercial spaces.",
    alternates: {
        canonical: "https://alufurn.com/projects",
    },
};

const projects = [
    {
        name: "Luxury 3BHK Kitchen",
        city: "Patna",
        descriptor: "Full modular aluminium kitchen with island counter",
        image: "/images/kitchen_01.webp",
    },
    {
        name: "Developer Project — 12 Units",
        city: "Jaipur",
        descriptor: "Turnkey wardrobe & vanity supply for residential complex",
        image: "/images/wardrobe_01.webp",
    },
    {
        name: "Premium Villa Interior",
        city: "Calicut",
        descriptor: "Bespoke kitchen, wardrobe & interior doors — end-to-end",
        image: "/images/linear-series.webp",
    },
    {
        name: "Boutique Apartment Fit-Out",
        city: "Patna",
        descriptor: "Sliding wardrobes & floating vanity units throughout",
        image: "/images/dresser-suite.webp",
    },
    {
        name: "High-Rise Developer Supply",
        city: "Jaipur",
        descriptor: "Aluminium panel cladding for facade & lobbies — 6 floors",
        image: "/images/wallpanel_01.webp",
    },
    {
        name: "Architect-Led Residence",
        city: "Calicut",
        descriptor: "Pivot door entrance + seamless flush interior doors",
        image: "/images/door_01.webp",
    },
];

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-brand-surface">

            {/* ── Full-bleed Page Hero ── */}
            <div className="relative h-[55vh] md:h-[65vh] w-full overflow-hidden">
                <Image
                    src="/images/projects.webp"
                    alt="ALUFURN Projects"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

                {/* Hero text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
                        Portfolio
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter uppercase leading-none mb-5">
                        Our Projects
                    </h1>
                    <p className="text-white/70 text-sm md:text-base font-light max-w-md leading-relaxed">
                        From single luxury residences to large developer contracts — precision aluminium interiors, delivered on time.
                    </p>
                </div>
            </div>

            {/* ── Project Grid ── */}
            <div className="container mx-auto px-6 md:px-12 py-20 md:py-28">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {projects.map((project) => (
                        <div
                            key={project.name}
                            className="group relative overflow-hidden cursor-pointer"
                            style={{ aspectRatio: "4/3" }}
                        >
                            <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* City pill */}
                            <div className="absolute top-4 left-4 z-10">
                                <span className="bg-brand-gold/90 text-white text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1">
                                    {project.city}
                                </span>
                            </div>

                            {/* Bottom info */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                                <h3 className="text-white font-bold text-base md:text-lg leading-tight mb-1 tracking-tight">
                                    {project.name}
                                </h3>
                                <p className="text-white/60 text-[11px] font-light tracking-wide leading-relaxed">
                                    {project.descriptor}
                                </p>
                            </div>

                            {/* Hover border */}
                            <div className="absolute inset-0 border-2 border-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </div>
                    ))}
                </div>

                {/* ── CTA ── */}
                <div className="text-center border-t border-brand-border pt-16">
                    <p className="text-brand-text-muted text-sm font-light mb-6 max-w-md mx-auto leading-relaxed">
                        Want to see your space transformed with precision aluminium interiors?
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-10 py-4 bg-brand-primary text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-brand-gold transition-colors duration-300"
                    >
                        Start Your Project
                    </Link>
                </div>
            </div>
        </div>
    );
}
