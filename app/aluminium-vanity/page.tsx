"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, CheckCircle } from "lucide-react";
import { useQuote } from "@/components/AppWrapper";

const faqs = [
    { q: "What is the price of an aluminium bathroom vanity in India?", a: "ALUFURN aluminium vanity units range from ₹18,000 for a compact powder-room unit to ₹1.2 lakh for a double-basin master bathroom configuration with mirror cabinet and integrated lighting. We provide a zero-charge quote based on your specific dimensions and requirements." },
    { q: "Are aluminium vanities fully waterproof?", a: "Yes. ALUFURN vanity units are constructed entirely from aluminium profiles and waterproof carcass materials — no MDF, no particleboard, no wood-based substrate that can absorb moisture, swell, or delaminate. The frame is 100% impervious to water, steam, and bathroom condensation." },
    { q: "What countertop and basin options are available?", a: "We work with ceramic, quartz, and engineered stone countertops. Under-mount, drop-in, and vessel basins are supported across all our vanity systems. Our design team can co-ordinate countertop and basin supply as part of a complete package." },
    { q: "Can ALUFURN vanity units be made to custom sizes?", a: "Yes. All ALUFURN vanity units are manufactured to your exact measurements — width, height, depth, and internal configuration. We do not sell from fixed catalogue dimensions." },
    { q: "Do ALUFURN vanities come with integrated lighting?", a: "LED strip lighting is available in pelmet cavities and mirror cabinets across all collections. Colour temperature, dimmability, and IP rating options are available. Lighting is specified at the design stage and pre-wired at our factory before delivery." },
];

const vanityRange = [
    { name: "Floating Vanity", subtitle: "Wall Mounted", image: "/images/floating-vanity.webp" },
    { name: "Double Basin", subtitle: "His & Hers", image: "/images/double-basin.webp" },
    { name: "Compact Unit", subtitle: "Powder Room", image: "/images/compact-unit.webp" },
    { name: "Mirror Cabinet", subtitle: "Storage & Light", image: "/images/mirror-cabinet.webp" },
    { name: "Luxury Console", subtitle: "Freestanding", image: "/images/luxury-console.webp" },
    { name: "Corner Unit", subtitle: "Space Optimizer", image: "/images/corner-unit.webp" },
];

const advantages = [
    "100% waterproof aluminium frame — never swells or delaminates",
    "Fully concealed plumbing channels built into profiles",
    "Non-porous surface — resists soap scum and mould",
    "Scratch-resistant anodised or powder-coated finishes",
    "Available wall-mounted or freestanding",
    "Custom widths from 400mm to 1800mm",
    "Integrated soft-close drawers and hinges",
    "Fire-safe aluminium structure",
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

export default function VanityPage() {
    const { openQuote } = useQuote();
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    return (
        <div className="min-h-screen bg-brand-surface">
            {/* Hero */}
            <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
                <Image src="/images/floating-vanity.webp" alt="ALUFURN aluminium bathroom vanity India – custom floating vanity unit" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
                <div className="absolute inset-0 flex flex-col items-start justify-end px-6 md:px-16 pb-16 md:pb-24 max-w-6xl mx-auto">
                    <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">Aluminium Vanity Units</motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter uppercase leading-none mb-5 max-w-4xl">
                        Aluminium Bathroom Vanities —{" "}
                        <em className="font-light" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>Spa-Grade Luxury</em>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-white/75 text-sm md:text-lg font-light max-w-xl leading-relaxed mb-8">
                        100% waterproof aluminium vanity units with precision-fitted soft-close hardware. Custom-built for every Indian bathroom, from powder room to master ensuite.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="flex flex-col sm:flex-row gap-3">
                        <button onClick={openQuote} className="px-8 py-4 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-[0.35em] hover:bg-[#C5A059] transition-colors duration-200">Get a Free Vanity Quote</button>
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
                            ALUFURN Vanity Range —{" "}
                            <em className="font-light" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>Compact to Bespoke</em>
                        </h2>
                        <p className="text-brand-primary/60 text-sm md:text-base font-light max-w-xl mx-auto">Every ALUFURN vanity is custom-sized and configured to your exact bathroom layout, plumbing positions, and storage requirements.</p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {vanityRange.map((item, i) => (
                            <motion.div key={item.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group cursor-pointer">
                                <div className="relative aspect-[3/2] overflow-hidden mb-5 bg-brand-light">
                                    <Image src={item.image} alt={`ALUFURN ${item.name} aluminium bathroom vanity India`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
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
                            <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">Why Aluminium Vanity</span>
                            <div className="h-px w-10 bg-brand-gold mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tighter uppercase leading-tight mb-6">The Case for Aluminium in the Indian Bathroom</h2>
                            <p className="text-brand-primary/70 text-sm md:text-base font-light leading-relaxed mb-6">Indian bathrooms are among the most moisture-intensive environments in any home. Steam, condensation, splashing water, and cleaning chemicals rapidly degrade plywood and MDF vanity units — causing swelling frames, peeling laminates, and failing hinges within 3–5 years.</p>
                            <p className="text-brand-primary/70 text-sm md:text-base font-light leading-relaxed mb-8">ALUFURN aluminium vanities are constructed from the same corrosion-resistant profiles used in architectural facades — materials that are 100% impervious to water, steam, and chemical cleaning agents. The result is a bathroom vanity that looks and functions perfectly for decades.</p>
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
                            <Image src="/images/double-basin.webp" alt="ALUFURN Double Basin aluminium vanity unit India" fill className="object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                                <p className="text-white/60 text-[10px] uppercase tracking-[0.4em] font-bold mb-1">Featured</p>
                                <p className="text-white font-bold text-lg tracking-tight uppercase">Double Basin Vanity</p>
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
                            Aluminium Vanity —{" "}
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
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tighter uppercase leading-tight mb-5">Ready to Design Your Aluminium Vanity?</h2>
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
                            { label: "Wardrobe Solutions", href: "/aluminium-wardrobe" },
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
