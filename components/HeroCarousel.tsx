"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useQuote } from "./AppWrapper";

/* ──────────────────────────────────────────────
   Slide data
   ────────────────────────────────────────────── */
const slides = [
    {
        category: "Premium Aluminium Interiors",
        line1: "MADE IN INDIA,",
        line2: "DESIGNED FOR EVERY SPACE",
        subline: "From Kitchens to Wardrobes — Built for Your Space",
        cta: "Get a Quote",
        href: "/contact",
        isQuote: true,
    },
    {
        category: "Aluminium Kitchens",
        line1: "YOUR KITCHEN,",
        line2: "YOUR IDENTITY",
        subline: "Bespoke aluminium kitchens crafted around your life.",
        cta: "Explore Kitchens",
        href: "/product#kitchen",
        isQuote: false,
    },
    {
        category: "Full Home Solutions",
        line1: "EVERY ROOM,",
        line2: "PERFECTLY INTEGRATED",
        subline: "Wardrobes, Vanities, Doors — one vision, one standard.",
        cta: "View Full Range",
        href: "/product",
        isQuote: false,
    },
];

const INTERVAL_MS = 5000;
const FADE_MS = 500; // must match CSS transition duration below

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */
export default function HeroCarousel() {
    const { openQuote } = useQuote();

    const [idx, setIdx] = useState(0);
    const [show, setShow] = useState(true); // true = faded-in, false = faded-out

    // refs so interval callbacks always see current values
    const idxRef   = useRef(0);
    const pausedRef = useRef(false);
    const timerRef  = useRef<ReturnType<typeof setInterval> | null>(null);

    /* keep ref in sync */
    useEffect(() => { idxRef.current = idx; }, [idx]);

    /* animate to a target slide index */
    const goTo = useCallback((next: number) => {
        setShow(false);                        // fade out
        setTimeout(() => {
            setIdx(next);
            idxRef.current = next;
            setShow(true);                     // fade in
        }, FADE_MS);
    }, []);

    /* start (or restart) the auto-advance interval */
    const startTimer = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            if (pausedRef.current) return;
            goTo((idxRef.current + 1) % slides.length);
        }, INTERVAL_MS);
    }, [goTo]);

    /* boot on mount */
    useEffect(() => {
        startTimer();
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [startTimer]);

    /* manual dot click */
    const jumpTo = useCallback((i: number) => {
        if (i === idxRef.current) return;
        if (timerRef.current) clearInterval(timerRef.current);
        goTo(i);
        setTimeout(startTimer, FADE_MS + 20);
    }, [goTo, startTimer]);

    /* hover pause */
    const pause  = () => { pausedRef.current = true;  };
    const resume = () => { pausedRef.current = false; };

    const slide = slides[idx];

    /* shared CSS transition string */
    const fadeStyle = {
        opacity:    show ? 1 : 0,
        transform:  show ? "translateY(0px)" : (show === false ? "translateY(-12px)" : "translateY(12px)"),
        transition: `opacity ${FADE_MS}ms ease-in-out, transform ${FADE_MS}ms ease-in-out`,
    };

    return (
        /* onMouseEnter/Leave on this wrapper so the entire text block pauses the timer */
        <div
            className="max-w-4xl"
            onMouseEnter={pause}
            onMouseLeave={resume}
        >
            {/* ── Category Eyebrow ── */}
            <div style={fadeStyle} className="mb-3 md:mb-4 flex items-center gap-3">
                <div className="w-6 h-px bg-brand-gold" />
                <span className="text-brand-gold text-[9px] uppercase tracking-[0.55em] font-bold">
                    {slide.category}
                </span>
            </div>

            {/* ── Heading ── keep h1 className identical to original ── */}
            <h1
                className="text-2xl md:text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4 md:mb-6 uppercase"
                style={fadeStyle}
            >
                {/* Two block spans → always two lines on every screen size */}
                <span className="block">
                    {slide.line1 === "MADE IN INDIA," ? (
                        <>
                            <span className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] bg-clip-text text-transparent">
                                MADE IN INDIA
                            </span>
                            ,
                        </>
                    ) : (
                        slide.line1
                    )}
                </span>
                <span className="block">{slide.line2}</span>
            </h1>

            {/* ── Subline ── keep p className identical to original ── */}
            <p
                className="text-sm md:text-lg lg:text-2xl text-white mb-6 md:mb-10 max-w-2xl font-medium"
                style={fadeStyle}
            >
                {slide.subline}
            </p>

            {/* ── CTA ── keep motion.button className identical to original ── */}
            <div style={fadeStyle}>
                {slide.isQuote ? (
                    <motion.button
                        onClick={openQuote}
                        whileHover={{ backgroundColor: "#ffffff", color: "#1a1a1a", scale: 1.05 }}
                        whileInView={{ scale: [1, 1.05, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.1, delay: 0 }}
                        className="px-8 py-3 md:px-10 md:py-4 border-2 border-white text-white rounded-none tracking-widest text-xs md:text-base font-bold uppercase transition-colors"
                    >
                        {slide.cta}
                    </motion.button>
                ) : (
                    <Link
                        href={slide.href}
                        className="inline-block px-8 py-3 md:px-10 md:py-4 border-2 border-white text-white rounded-none tracking-widest text-xs md:text-base font-bold uppercase transition-colors hover:bg-white hover:text-[#1a1a1a]"
                    >
                        {slide.cta}
                    </Link>
                )}
            </div>

            {/* ── Dot indicators ── sit directly below the CTA, 24px margin-top ── */}
            <div className="flex items-center gap-[6px] mt-6">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => jumpTo(i)}
                        style={{
                            width:           i === idx ? "24px" : "6px",
                            height:          "4px",
                            borderRadius:    "9999px",
                            backgroundColor: i === idx
                                ? "rgba(255,255,255,1)"
                                : "rgba(255,255,255,0.35)",
                            transition: "width 300ms ease, background-color 300ms ease",
                            border:  "none",
                            padding: 0,
                            cursor:  "pointer",
                            flexShrink: 0,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
