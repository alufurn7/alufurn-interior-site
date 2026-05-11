"use client";

import { motion } from "framer-motion";
import HeroCarousel from "./HeroCarousel";

/**
 * HeroSection Component
 * 
 * Reusable Next.js (App Router) component featuring a video background,
 * cinematic typography with a "Made in India" gradient, and framer-motion animations.
 */
export default function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/bg_hero_section.webm" type="video/webm" />
                </video>
            </div>

            {/* Content — vertically centred with top-bias from nav */}
            <div className="container mx-auto px-6 md:px-12 relative z-20 pt-24 md:pt-28">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <HeroCarousel />
                </motion.div>
            </div>

            {/* Subtle Scroll indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 opacity-30"
            >
                <div className="w-px h-8 bg-white" />
            </motion.div>
        </section>
    );
}
