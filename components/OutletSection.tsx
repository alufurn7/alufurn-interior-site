"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

/**
 * Outlets Component
 * 
 * Showcasing physical locations with a clean grid design. 
 * Features hover-reactive cards and subtle typographic background accents.
 */
export default function Outlets() {
    const outlets = [
        { city: "PATNA", address: "G-15, Shashi Complex Exhibition Road", type: "FLAGSHIP STUDIO" },
        { city: "JAIPUR", address: "131-132, Main Niwaru Road Jhotwara Industrial Area", type: "EXPERIENCE CENTER" },
        { city: "CALICUT", address: "Behind Industrial Estate Ground Floor 42/1680, Kunnummal Nallalam", type: "DESIGN STUDIO" }
        // { city: "Opeing soon", address: "", type: "EXPERIENCE CENTER" },
        // { city: "Opeinig soon", address: "", type: "BOUTIQUE STUDIO" }
    ];

    return (
        <section className="py-32 bg-brand-light">
            <div className="container mx-auto px-6 md:px-12">

                {/* Header Block */}
                <div className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-3 block font-bold"
                    >
                        OUR PRESENCE
                    </motion.span>
                    {/* Gold draw-in line */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "40px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-px bg-brand-gold mx-auto mt-1 mb-6"
                    />
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-semibold text-brand-primary tracking-tight mb-6"
                    >
                        Domestic{" "}
                        <em className="font-light" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>Outlets</em>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-brand-primary/60 text-sm md:text-base font-light leading-relaxed"
                    >
                        Experience our craftsmanship firsthand at our exclusive design studios across the country.
                    </motion.p>
                </div>

                {/* Outlets Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {outlets.map((outlet, index) => (
                        <motion.div
                            key={outlet.city}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-12 h-[350px] flex flex-col justify-between group hover:bg-brand-primary transition-colors duration-700 relative overflow-hidden border-t-2 border-brand-gold"
                        >
                            {/* Top Meta Info */}
                            <div className="flex justify-between items-start">
                                <div className="p-2 rounded-none border border-brand-gold/30 group-hover:border-white/30 transition-colors">
                                    <MapPin size={16} className="text-brand-gold group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-[10px] font-bold text-brand-primary/30 group-hover:text-white/30 tracking-widest uppercase">
                                    {outlet.type}
                                </span>
                            </div>

                            {/* City & Address */}
                            <div>
                                <h3 className="text-3xl font-semibold text-brand-primary group-hover:text-white mb-2 transition-colors">
                                    {outlet.city}
                                </h3>
                                <p className="text-brand-primary/40 group-hover:text-white/60 text-sm font-regular transition-colors">
                                    {outlet.address}
                                </p>
                            </div>

                            {/* Decorative background initial letter */}
                            <div className="absolute -bottom-10 -right-10 text-8xl font-bold text-brand-primary/5 group-hover:text-white/5 transition-colors pointer-events-none select-none">
                                {outlet.city[0]}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
