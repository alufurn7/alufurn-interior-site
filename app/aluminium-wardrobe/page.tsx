"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, CheckCircle } from "lucide-react";
import { useQuote } from "@/components/AppWrapper";

const faqs = [
    { q: "What is the price of an aluminium wardrobe in India?", a: "A standard ALUFURN fitted aluminium wardrobe (8–10 ft, 2–4 door) ranges from ₹45,000 to ₹1.5 lakh. Walk-in systems start at ₹2 lakh. We provide a zero-charge quote after site measurement." },
    { q: "How does an aluminium wardrobe compare to plywood or MDF?", a: "Aluminium is 100% waterproof, termite-proof, and dimensionally stable across India's climate extremes. Lifespan is 20–30 years versus 8–15 years for plywood wardrobes." },
    { q: "What sliding and hinge systems does ALUFURN use?", a: "ALUFURN sources soft-close sliding systems and concealed hinge hardware from German and European manufacturers — every system includes soft-close deceleration as standard." },
    { q: "Can ALUFURN wardrobes include mirrors, glass panels, and lighting?", a: "Yes. Full-length mirror panels, clear/frosted glass shutters, LED strip lighting, and internal organiser systems (shoe racks, velvet drawer inserts, tie racks) are all available." },
    { q: "What warranty does ALUFURN offer on wardrobes?", a: "Structural warranty on all aluminium profiles. Hardware carries the manufacturer's warranty from our European partners. Full written documentation at order." },
];

const wardrobeRange = [
    { name: "Walk-In Elite", subtitle: "Full Room System", image: "/images/walk-in-elite.webp" },
    { name: "Sliding Luxe", subtitle: "Space Saving Design", image: "/images/sliding-luxe.webp" },
    { name: "Fitted Pro", subtitle: "Wall-to-Wall", image: "/images/fitted-pro.webp" },
    { name: "Hinged Classic", subtitle: "Traditional Doors", image: "/images/hinged-classic.webp" },
    { name: "Modular Cube", subtitle: "Customizable Units", image: "/images/modular-cube.webp" },
    { name: "Dresser Suite", subtitle: "Integrated Vanity", image: "/images/dresser-suite.webp" },
];

const advantages = [
    "100% waterproof — no warping or swelling in monsoon",
    "Termite-proof and pest-resistant for life",
    "Soft-close German hardware on every unit",
    "Dimensionally stable across all Indian climate zones",
    "Custom sizes — wall-to-wall, floor-to-ceiling",
    "50+ powder-coat and laminate finishes",
    "CNC precision to ±0.1mm on every profile",
    "No repainting or refinishing ever required",
];

function FaqItem({ q, a, isOpen, toggle }: { q: string; a: string; isOpen: boolean; toggle: () => void }) {
    return (
        <div className="border-b border-gray-200 last:border-0">
            <button onClick={toggle} className="w-full flex items-center justify-between py-5 text-left gap-4 group" aria-expanded={isOpen}>
                <span className="text-brand-primary font-semibold text-sm md:text-base leading-snug group-hover:text-brand-gold transition-colors duration-200">{q}</span>
                <ChevronDown size={18} className={`shrink-0 text-brand-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div key="ans" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <p className="text-brand-primary/70 text-sm leading-relaxed pb-5 font-light">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function WardrobePage() {
    const { openQuote } = useQuote();
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    return (
        <div className="min-h-screen bg-brand-surface">
            {/* Hero */}
            <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
                <Image src="/images/walk-in-elite.webp" alt="ALUFURN aluminium walk-in wardrobe India – custom fitted wardrobe system" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
                <div className="absolute inset-0 flex flex-col items-start justify-end px-6 md:px-16 pb-16 md:pb-24 max-w-6xl mx-auto">
                    <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">Aluminium Wardrobe Solutions</motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter uppercase leading-none mb-5 max-w-4xl">
                        Aluminium Wardrobes —{" "}
                        <em className="font-light" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>Built to Last</em>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-white/75 text-sm md:text-lg font-light max-w-xl leading-relaxed mb-8">
                        Precision-engineered aluminium wardrobes with German-standard hardware. Waterproof, termite-proof, and custom-made for every Indian bedroom.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="flex flex-col sm:flex-row gap-3">
                        <button onClick={openQuote} className="px-8 py-4 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-[0.35em] hover:bg-[#C5A059] transition-colors duration-200">Get a Free Wardrobe Quote</button>
                        <Link href="/experience" className="px-8 py-4 border border-white/40 text-white text-[10px] font-bold uppercase tracking-[0.35em] hover:border-white/80 hover:bg-white/10 transition-all duration-200 text-center">Visit a Showroom</Link>
                    </motion.div>
                </div>
            </div>

            {/* Collection */}
            <section className="py-14 md:py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
                        <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">Our Collections</span>
                        <div className="h-px w-10 bg-brand-gold mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tighter uppercase leading-tight mb-4">
                            ALUFURN Wardrobe Range —{" "}
                            <em className="font-light" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>Walk-In to Fitted</em>
                        </h2>
                        <p className="text-brand-primary/60 text-sm md:text-base font-light max-w-xl mx-auto">Every ALUFURN wardrobe is custom-designed and manufactured to your exact room dimensions, storage needs, and aesthetic preferences.</p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {wardrobeRange.map((item, i) => (
                            <motion.div key={item.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group cursor-pointer">
                                <div className="relative aspect-[3/2] overflow-hidden mb-5 bg-brand-light">
                                    <Image src={item.image} alt={`ALUFURN ${item.name} aluminium wardrobe India`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/20 transition-colors duration-500" />
                                    <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                        <div className="bg-brand-primary/90 backdrop-blur-sm px-5 py-3">
                                            <span className="text-white text-[10px] font-semibold uppercase tracking-[0.3em]">View Details</span>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-sm md:text-base font-bold text-brand-primary uppercase tracking-wide mb-1 group-hover:text-brand-gold transition-colors duration-300">{item.name}</h3>
                                <p className="text-[11px] md:text-xs text-brand-text-muted font-light tracking-wider uppercase">{item.subtitle}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Aluminium */}
            <section className="py-14 md:py-20 bg-[#f4f4f4]">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">Why Aluminium</span>
                            <div className="h-px w-10 bg-brand-gold mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tighter uppercase leading-tight mb-6">Why Indian Homeowners Are Switching to Aluminium Wardrobes</h2>
                            <p className="text-brand-primary/70 text-sm md:text-base font-light leading-relaxed mb-6">India's climate is the enemy of wood-based wardrobes. Monsoon humidity causes plywood to swell and doors to jam. Summer heat causes MDF to crack and delaminate. Within 7–10 years, most plywood wardrobes require expensive repairs or full replacement.</p>
                            <p className="text-brand-primary/70 text-sm md:text-base font-light leading-relaxed mb-8">ALUFURN aluminium wardrobes are engineered specifically for Indian conditions — 100% waterproof, termite-proof, and dimensionally stable whether the humidity is 20% or 95%. The doors align as perfectly on year twenty as they did on day one.</p>
                            <ul className="space-y-3">
                                {advantages.map((adv) => (
                                    <li key={adv} className="flex items-start gap-3 text-sm text-brand-primary/80">
                                        <CheckCircle size={16} className="text-brand-gold shrink-0 mt-0.5" />
                                        <span className="font-light">{adv}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="relative aspect-[4/5] overflow-hidden">
                            <Image src="/images/hinged-classic.webp" alt="ALUFURN Hinged Classic aluminium wardrobe India" fill className="object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                                <p className="text-white/60 text-[10px] uppercase tracking-[0.4em] font-bold mb-1">Featured</p>
                                <p className="text-white font-bold text-lg tracking-tight uppercase">Hinged Classic Wardrobe</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Dark Manufacturing */}
            <section className="py-14 md:py-20 bg-brand-charcoal text-white">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative aspect-[4/3] overflow-hidden">
                            <Image src="/images/manufacturing.webp" alt="ALUFURN aluminium wardrobe CNC manufacturing India" fill className="object-cover opacity-70" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10">
                                {[{ val: "0.1mm", label: "Accuracy" }, { val: "50+", label: "Finishes" }, { val: "20yr", label: "Lifespan" }].map((s) => (
                                    <div key={s.label} className="flex flex-col items-center text-center px-4 first:pl-0 last:pr-0">
                                        <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">{s.val}</span>
                                        <span className="text-brand-gold text-[9px] uppercase tracking-widest font-bold mt-1">{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
                            <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">In-House Manufacturing</span>
                            <div className="h-px w-10 bg-brand-gold mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter uppercase leading-tight mb-6">Precision-Made at Our In-House Facility</h2>
                            <p className="text-white/65 text-sm md:text-base font-light leading-relaxed mb-5">Every ALUFURN wardrobe profile is CNC-routed to ±0.1mm accuracy. In-house powder coating and anodising ensures zero finish variance — every shutter, every drawer, every panel is consistent.</p>
                            <p className="text-white/65 text-sm md:text-base font-light leading-relaxed mb-8">Site-ready, pre-fitted components reduce on-site installation to 1–2 days for a standard bedroom wardrobe — a fraction of conventional carpentry timelines.</p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link href="/quality" className="inline-flex items-center gap-2 text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] hover:gap-4 transition-all duration-300 group">Our Manufacturing Standards <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" /></Link>
                                <span className="hidden sm:block text-white/20">|</span>
                                <Link href="/projects" className="inline-flex items-center gap-2 text-white/60 text-[10px] font-bold uppercase tracking-[0.3em] hover:text-white transition-colors duration-200">Completed Projects <ArrowRight size={12} /></Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="py-14 md:py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-3xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                        <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">FAQ</span>
                        <div className="h-px w-10 bg-brand-gold mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tighter uppercase leading-tight">
                            Aluminium Wardrobe —{" "}
                            <em className="font-light" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>Common Questions</em>
                        </h2>
                    </motion.div>
                    <div className="divide-y divide-gray-200 border-y border-gray-200">
                        {faqs.map((faq, i) => (<FaqItem key={i} q={faq.q} a={faq.a} isOpen={openFaq === i} toggle={() => setOpenFaq(openFaq === i ? null : i)} />))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#f4f4f4]">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">Start Your Project</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tighter uppercase leading-tight mb-5">Ready to Design Your Aluminium Wardrobe?</h2>
                        <p className="text-brand-primary/60 text-sm md:text-base font-light mb-8 max-w-lg mx-auto leading-relaxed">Visit our experience centre in Patna, Jaipur, or Calicut — or book a free online consultation with our design team.</p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <button onClick={openQuote} className="px-10 py-4 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-[0.35em] hover:bg-[#C5A059] transition-colors duration-200">Get a Free Design Quote</button>
                            <Link href="/experience" className="px-10 py-4 border border-brand-primary/30 text-brand-primary text-[10px] font-bold uppercase tracking-[0.35em] hover:border-brand-primary/60 transition-all duration-200 text-center inline-flex items-center justify-center gap-2 group">Visit an Experience Centre <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" /></Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-12 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <p className="text-brand-primary/40 text-[10px] uppercase tracking-[0.4em] font-bold mb-6 text-center">Explore More from ALUFURN</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { label: "Aluminium Modular Kitchen", href: "/aluminium-kitchen" },
                            { label: "Aluminium Interior Doors", href: "/aluminium-doors" },
                            { label: "Aluminium Wall Panels", href: "/aluminium-panels" },
                            { label: "Bathroom Vanity Units", href: "/aluminium-vanity" },
                            { label: "Visit an Experience Centre", href: "/experience" },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="text-brand-primary/60 hover:text-brand-gold text-xs font-light border border-gray-200 hover:border-brand-gold/30 px-4 py-2 transition-all duration-200">{link.label}</Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
