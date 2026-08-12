"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const EVENT_START = new Date("2026-08-20T00:00:00+05:30").getTime();
const DISMISSED_KEY = "alufurn-matecia-popup-dismissed";

type Countdown = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    complete: boolean;
};

function getCountdown(): Countdown {
    const remaining = Math.max(0, EVENT_START - Date.now());

    return {
        days: Math.floor(remaining / 86_400_000),
        hours: Math.floor((remaining / 3_600_000) % 24),
        minutes: Math.floor((remaining / 60_000) % 60),
        seconds: Math.floor((remaining / 1_000) % 60),
        complete: remaining === 0,
    };
}

export default function TemporaryMateciaPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [countdown, setCountdown] = useState<Countdown>(getCountdown);

    useEffect(() => {
        if (sessionStorage.getItem(DISMISSED_KEY) !== "true") {
            const showTimer = window.setTimeout(() => setIsOpen(true), 700);
            return () => window.clearTimeout(showTimer);
        }
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const countdownTimer = window.setInterval(() => {
            setCountdown(getCountdown());
        }, 1_000);

        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                sessionStorage.setItem(DISMISSED_KEY, "true");
                setIsOpen(false);
            }
        };
        window.addEventListener("keydown", closeOnEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.clearInterval(countdownTimer);
            window.removeEventListener("keydown", closeOnEscape);
        };
    }, [isOpen]);

    const closePopup = () => {
        sessionStorage.setItem(DISMISSED_KEY, "true");
        setIsOpen(false);
    };

    if (!isOpen) return null;

    const timeUnits = [
        [countdown.days, "Days"],
        [countdown.hours, "Hours"],
        [countdown.minutes, "Mins"],
        [countdown.seconds, "Secs"],
    ] as const;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-2 py-2 backdrop-blur-sm md:px-8 md:py-5"
            role="presentation"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) closePopup();
            }}
        >
            <section
                role="dialog"
                aria-modal="true"
                aria-labelledby="matecia-popup-title"
                className="relative max-h-[calc(100dvh-16px)] w-full max-w-[430px] overflow-hidden rounded-2xl border border-white/15 bg-[#150000] text-white shadow-[0_30px_100px_rgba(0,0,0,0.7)] lg:max-h-[94vh] lg:max-w-[1180px] lg:overflow-y-auto"
            >
                <Image
                    src="/temp/metacia.jpg"
                    alt="Yashobhoomi exhibition venue"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 1180px"
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,0,0,0.98)_0%,rgba(37,0,0,0.88)_43%,rgba(116,0,0,0.66)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_20%,rgba(238,20,24,0.35),transparent_38%),linear-gradient(0deg,rgba(8,0,0,0.8),transparent_55%)]" />

                <button
                    type="button"
                    onClick={closePopup}
                    className="absolute right-3 top-3 z-20 rounded-full border border-white/35 bg-black/35 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.2em] text-white transition hover:border-[#e8bd61] hover:text-[#f1c96f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f1c96f] lg:right-4 lg:top-4 lg:px-4 lg:py-2 lg:text-[10px]"
                    aria-label="Close event announcement"
                >
                    Close
                </button>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.02fr_1fr]">
                    <div className="flex flex-col border-white/25 px-5 pb-4 pt-12 lg:min-h-[600px] lg:border-r lg:px-10 lg:py-8">
                        <div className="flex max-w-[530px] items-center gap-4 border-b border-white/25 pb-3 pr-16 lg:gap-9 lg:pb-5 lg:pr-0">
                            <div className="relative h-7 flex-1 lg:h-12">
                                <Image
                                    src="/temp/alufurn.png"
                                    alt="ALUFURN Luxury Living"
                                    fill
                                    sizes="260px"
                                    className="object-contain object-left"
                                />
                            </div>
                            <span className="h-9 w-px shrink-0 bg-white/70 lg:h-14" aria-hidden="true" />
                            <div className="relative h-10 flex-1 lg:h-16">
                                <Image
                                    src="/temp/matecia.webp"
                                    alt="MATECIA Building Material Exhibition"
                                    fill
                                    sizes="260px"
                                    className="object-contain object-left"
                                />
                            </div>
                        </div>

                        <div className="flex flex-1 flex-col justify-center py-4 lg:py-5">
                            <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.27em] text-[#e8bd61] lg:mb-3 lg:text-xs lg:tracking-[0.32em]">
                                Building Material Exhibition
                            </p>
                            <h2
                                id="matecia-popup-title"
                                className="text-[2.45rem] font-black uppercase leading-[0.82] tracking-[-0.055em] lg:text-[clamp(3rem,6.2vw,5.2rem)]"
                            >
                                Matecia
                                <span className="mt-2 block bg-gradient-to-r from-[#f3d27f] via-[#d9a746] to-[#f6db8d] bg-clip-text text-transparent lg:mt-3">
                                    National 2026
                                </span>
                            </h2>
                            <div className="mt-3 h-0.5 w-12 bg-[#e8bd61] lg:mt-6 lg:h-1 lg:w-16" aria-hidden="true" />
                            <p className="mt-3 max-w-md text-sm font-light leading-snug text-white/90 lg:mt-5 lg:text-xl">
                                Visit us there to experience
                                <span className="block font-semibold text-[#e8bd61]">
                                    the living that you deserve.
                                </span>
                            </p>
                        </div>

                        <div className="border-t border-white/20 pt-3 lg:pt-4">
                            <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.2em] text-[#e8bd61] lg:mb-3 lg:text-[10px] lg:tracking-[0.25em]">
                                {countdown.complete ? "The exhibition is now live" : "Countdown to 20 August"}
                            </p>
                            {!countdown.complete && (
                                <div className="flex gap-5 lg:gap-7" aria-label="Countdown to MATECIA National 2026">
                                    {timeUnits.map(([value, label]) => (
                                        <div key={label}>
                                            <span className="block text-xl font-bold tabular-nums lg:text-3xl">
                                                {String(value).padStart(2, "0")}
                                            </span>
                                            <span className="text-[7px] uppercase tracking-[0.15em] text-white/55 lg:text-[9px] lg:tracking-[0.2em]">
                                                {label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col justify-center px-5 pb-5 pt-0 lg:min-h-[600px] lg:px-10 lg:py-8">
                        <div className="grid grid-cols-2 gap-x-4 border-y border-[#e8bd61]/30 lg:block lg:divide-y lg:divide-[#e8bd61]/30">
                            <div className="col-span-2 border-b border-[#e8bd61]/30 py-3 lg:border-0 lg:py-5">
                                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#e8bd61] lg:text-xs">Location</p>
                                <div className="mt-1 flex items-baseline justify-between gap-3 lg:block">
                                    <p className="text-xl font-black uppercase leading-none lg:mt-2 lg:text-4xl">Yashobhoomi</p>
                                    <p className="text-xs font-medium uppercase tracking-[0.08em] lg:mt-2 lg:text-2xl">Delhi, India</p>
                                </div>
                            </div>
                            <div className="border-r border-[#e8bd61]/30 py-3 pr-3 lg:border-0 lg:py-5 lg:pr-0">
                                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#e8bd61] lg:text-xs">Date</p>
                                <p className="mt-1 text-lg font-black uppercase leading-none lg:mt-2 lg:text-4xl">20–23 Aug 2026</p>
                            </div>
                            <div className="py-3 pl-1 lg:py-5 lg:pl-0">
                                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#e8bd61] lg:text-xs">Booth No.</p>
                                <p className="mt-1 text-2xl font-black uppercase leading-none lg:text-6xl">B3</p>
                            </div>
                        </div>

                        <a
                            href="https://www.matecia.com/visitor-registration.php"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 flex min-h-11 items-center justify-between rounded-lg border border-[#ffe59a] bg-gradient-to-b from-[#ffe59a] via-[#e6b955] to-[#bd7f20] px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.07em] text-[#53130c] shadow-[0_0_26px_rgba(232,189,97,0.28)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffe59a] lg:mt-6 lg:min-h-14 lg:rounded-xl lg:px-6 lg:py-4 lg:text-lg lg:tracking-[0.08em]"
                        >
                            <span>Click to register yourself</span>
                            <span className="ml-3 text-lg lg:ml-5 lg:text-2xl" aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
