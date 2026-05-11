"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/**
 * ShowcaseItem Component
 *
 * Desktop: large image left/right with overlapping content card.
 * Mobile: image full-width, then content card below — no negative margin.
 */
const ShowcaseItem = ({
    title,
    description,
    image,
    link,
    reverse = false
}: {
    title: string;
    description: string;
    image: string;
    link: string;
    reverse?: boolean;
}) => {
    return (
        <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-start md:items-center mb-20 last:mb-0 relative gap-0`}>
            {/* Image */}
            <div className="w-full md:w-[75%] aspect-[16/9] overflow-hidden shadow-2xl relative">
                <motion.div
                    initial={{ scale: 1.06 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 75vw"
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </div>

            {/* Content Card — overlaps on desktop, sits below on mobile */}
            <motion.div
                initial={{ opacity: 0, x: reverse ? 15 : -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`
                    bg-white shadow-2xl z-10 border border-gray-100
                    w-[88%] mx-auto md:mx-0 md:w-[30%]
                    p-6 md:p-8
                    mt-[-28px] md:mt-0
                    ${reverse ? "md:ml-[-8%]" : "md:mr-[-8%]"}
                    flex flex-col justify-center
                `}
            >
                <span className="text-brand-gold text-[9px] font-bold uppercase tracking-[0.35em] mb-3 block">
                    Collection
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-3 tracking-tight uppercase">
                    {title}
                </h3>
                <p className="text-brand-primary/70 leading-relaxed text-[12px] md:text-[13px] max-w-sm mb-5">
                    {description}
                </p>
                <Link
                    href={link}
                    className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 hover:gap-4 transition-all duration-300 group w-fit"
                >
                    Explore {title}
                    <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                </Link>
            </motion.div>
        </div>
    );
};

/* ── Extended Collection Card Data ── */
const extendedProducts = [
    {
        eyebrow: "Bathroom",
        title: "Vanity",
        description: "Aluminium vanity units built for humidity resistance and lasting finish.",
        image: "/images/vanity_01.webp",
        href: "/product#vanity",
    },
    {
        eyebrow: "Surfaces",
        title: "Aluminium Panels",
        description: "Architectural wall finishes for feature walls, ceilings, and facades.",
        image: "/images/wallpanel_01.webp",
        href: "/product#aluminium-panels",
    },
    {
        eyebrow: "Doors",
        title: "Interior Doors",
        description: "Aluminium-framed doors in wood, glass, and frosted panel options.",
        image: "/images/door_01.webp",
        href: "/product#interior-doors",
    },
];

/**
 * ProductShowcase Component
 *
 * Section 01 — flagship Kitchen & Wardrobe showcase items.
 * Section 02 — Extended Collection 3-column image card grid.
 */
export default function ProductShowcase() {
    return (
        <>
            {/* ── Section 01: Flagship Products ── */}
            <section className="py-28 md:py-36 bg-[#f4f4f4] overflow-hidden">
                <div className="container mx-auto px-6 md:px-12">
                    {/* Intro */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
                            What We Make
                        </span>
                        {/* Gold draw-in line */}
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "40px" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="h-px bg-brand-gold mx-auto mt-1 mb-5"
                        />
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-primary uppercase tracking-tight mb-4">
                            Complete Home Interior{" "}
                            <em className="font-light not-italic" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>
                                Solutions
                            </em>
                        </h2>
                        <p className="text-brand-text-muted text-sm md:text-base font-light max-w-md mx-auto">
                            Kitchens, wardrobes, vanities &amp; doors — one material standard, perfectly integrated.
                        </p>
                    </motion.div>

                    <ShowcaseItem
                        title="Kitchen"
                        description="Our bespoke aluminium kitchens are precision-crafted — featuring premium material integration and German-standard hardware for a culinary space that endures."
                        image="/images/kitchen_01.webp"
                        link="/product#kitchen"
                    />

                    <ShowcaseItem
                        title="Wardrobe"
                        description="Intelligently designed wardrobes that combine sophisticated aesthetics with unparalleled organisation — tailored to your space, delivered to the millimetre."
                        image="/images/wardrobe_01.webp"
                        link="/product#wardrobe"
                        reverse
                    />
                </div>
            </section>

            {/* ── Section 02: Extended Collection ── */}
            <section className="py-28 md:py-36 bg-white overflow-hidden">
                <div className="container mx-auto px-6 md:px-12">

                    {/* Header */}
                    <div className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto">
                        <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
                            Extended Collection
                        </span>
                        {/* Gold draw-in line */}
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "40px" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="h-px bg-brand-gold mx-auto mt-1 mb-6"
                        />
                        <h2 className="text-4xl md:text-6xl font-bold text-brand-primary tracking-tighter uppercase leading-none mb-6">
                            Beyond Kitchens <br />
                            <span className="text-brand-gold italic font-light" style={{ fontFamily: "var(--font-display)" }}>&amp; Wardrobes.</span>
                        </h2>
                        <p className="text-brand-text-muted text-sm md:text-base font-light leading-relaxed">
                            Discover our specialised solutions for every corner of your home, crafted with the same precision and care.
                        </p>
                    </div>

                    {/* ── 2-column editorial layout ── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                        {/* ── LEFT COLUMN: Vanity + Panels stacked ── */}
                        <div className="flex flex-col gap-3">
                            {/* Card 1 — Vanity */}
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <Link
                                    href={extendedProducts[0].href}
                                    className="group relative overflow-hidden h-[260px] md:h-[300px] flex"
                                >
                                    <Image
                                        src={extendedProducts[0].image}
                                        alt={extendedProducts[0].title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                                    <span className="absolute top-5 right-6 text-white/[0.07] text-[80px] font-bold select-none pointer-events-none leading-none">01</span>
                                    <div className="relative z-10 flex flex-col justify-end p-6 md:p-8 w-full">
                                        <span className="text-brand-gold text-[9px] uppercase tracking-[0.5em] font-bold mb-2 block">
                                            {extendedProducts[0].eyebrow}
                                        </span>
                                        <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-tight mb-3">
                                            {extendedProducts[0].title}
                                        </h3>
                                        <span className="text-white/70 text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                                            Explore <span className="text-brand-gold">→</span>
                                        </span>
                                    </div>
                                    <div className="absolute bottom-0 left-0 h-[2px] bg-brand-gold w-0 group-hover:w-full transition-all duration-700 ease-out" />
                                </Link>
                            </motion.div>

                            {/* Card 2 — Aluminium Panels */}
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                            >
                                <Link
                                    href={extendedProducts[1].href}
                                    className="group relative overflow-hidden h-[260px] md:h-[300px] flex"
                                >
                                    <Image
                                        src={extendedProducts[1].image}
                                        alt={extendedProducts[1].title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                                    <span className="absolute top-5 right-6 text-white/[0.07] text-[80px] font-bold select-none pointer-events-none leading-none">02</span>
                                    <div className="relative z-10 flex flex-col justify-end p-6 md:p-8 w-full">
                                        <span className="text-brand-gold text-[9px] uppercase tracking-[0.5em] font-bold mb-2 block">
                                            {extendedProducts[1].eyebrow}
                                        </span>
                                        <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-tight mb-3">
                                            {extendedProducts[1].title}
                                        </h3>
                                        <span className="text-white/70 text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                                            Explore <span className="text-brand-gold">→</span>
                                        </span>
                                    </div>
                                    <div className="absolute bottom-0 left-0 h-[2px] bg-brand-gold w-0 group-hover:w-full transition-all duration-700 ease-out" />
                                </Link>
                            </motion.div>
                        </div>

                        {/* ── RIGHT COLUMN: Interior Doors — full height ── */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="h-full"
                        >
                            <Link
                                href={extendedProducts[2].href}
                                className="group relative overflow-hidden flex h-[340px] md:h-full md:min-h-[615px]"
                            >
                                <Image
                                    src={extendedProducts[2].image}
                                    alt={extendedProducts[2].title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                                <span className="absolute top-6 right-8 text-white/[0.07] text-[120px] font-bold select-none pointer-events-none leading-none">03</span>
                                <div className="relative z-10 flex flex-col justify-end p-8 md:p-10 w-full">
                                    <span className="text-brand-gold text-[9px] uppercase tracking-[0.5em] font-bold mb-3 block">
                                        {extendedProducts[2].eyebrow}
                                    </span>
                                    <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-tight mb-3">
                                        {extendedProducts[2].title}
                                    </h3>
                                    <p className="text-white/55 text-sm font-light max-w-xs mb-5 leading-relaxed hidden md:block">
                                        {extendedProducts[2].description}
                                    </p>
                                    <span className="text-white text-[10px] uppercase tracking-[0.25em] font-bold flex items-center gap-2 group-hover:gap-5 transition-all duration-300">
                                        Explore Collection <span className="text-brand-gold">→</span>
                                    </span>
                                </div>
                                <div className="absolute bottom-0 left-0 h-[2px] bg-brand-gold w-0 group-hover:w-full transition-all duration-700 ease-out" />
                            </Link>
                        </motion.div>

                    </div>

                </div>
            </section>
        </>
    );
}

