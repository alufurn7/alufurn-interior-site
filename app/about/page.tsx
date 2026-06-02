import Image from "next/image";
import Link from "next/link";
import { Award, Users, MapPin, CheckCircle2, Cpu, ShieldCheck, Clock, Star } from "lucide-react";

const milestones = [
    { year: "2018", event: "Founded in Patna, Bihar — first aluminium-only interior brand in East India." },
    { year: "2020", event: "Opened second Experience Centre in Jaipur, Rajasthan." },
    { year: "2022", event: "Launched CNC precision manufacturing facility with German-standard machinery." },
    { year: "2023", event: "Third showroom opened in Calicut (Kozhikode), Kerala." },
    { year: "2024", event: "Crossed 500+ completed residential and commercial projects across India." },
    { year: "2025", event: "Expanded product range to include aluminium bathroom vanity systems." },
];

const values = [
    {
        icon: Cpu,
        title: "CNC Precision",
        description:
            "Every profile is machined to 0.1 mm accuracy on German-standard CNC equipment. No shimming, no filler — just perfect fit.",
    },
    {
        icon: ShieldCheck,
        title: "100% Aluminium",
        description:
            "We build exclusively with aluminium — no wood, no MDF, no compromise. The material is inherently waterproof, termite-proof, and dimensionally stable.",
    },
    {
        icon: Clock,
        title: "Lifetime Durability",
        description:
            "Our aluminium interiors are engineered for 25–30 years of service without warping, cracking, or swelling — even in India's most extreme climates.",
    },
    {
        icon: Star,
        title: "Design Excellence",
        description:
            "Unlimited finishes — powder coat, anodised, PVD metallic, and natural veneer laminates. Any aesthetic, any space.",
    },
];

const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "7+", label: "Years of Experience" },
    { value: "3", label: "Experience Centres" },
    { value: "25 Yr", label: "Structural Warranty" },
];

const showrooms = [
    {
        city: "Patna",
        state: "Bihar",
        address: "G-15, Shashi Complex, Exhibition Road, Patna — 800001",
        phone: "+91 776 397 0474",
        mapLink: "https://maps.app.goo.gl/9CuuLSiMVcXLk3rY6",
    },
    {
        city: "Jaipur",
        state: "Rajasthan",
        address: "131-132, Main Niwaru Road, Jhotwara Industrial Area, Jaipur",
        phone: "+91 977 639 7047",
        mapLink: "#",
    },
    {
        city: "Calicut",
        state: "Kerala",
        address: "42/1680 Kunnummal Nallalam, Behind Industrial Estate, Calicut (Kozhikode)",
        phone: "+91 977 639 7047",
        mapLink: "#",
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-brand-surface">
            {/* ── Hero ── */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <Image
                    src="/images/linear-series.webp"
                    alt="Alufurn precision aluminium interiors"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
                        Our Story
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter uppercase leading-none mb-5">
                        About Alufurn
                    </h1>
                    <p className="text-white/70 text-sm md:text-base font-light max-w-xl leading-relaxed">
                        India's leading manufacturer of precision-engineered aluminium interiors — built for spaces that demand permanence.
                    </p>
                </div>
            </div>

            {/* ── Stats Bar ── */}
            <div className="bg-brand-primary py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-1">
                                    {stat.value}
                                </p>
                                <p className="text-brand-gold text-[9px] uppercase tracking-[0.3em] font-bold">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Brand Story ── */}
            <div className="container mx-auto px-6 md:px-12 py-20 md:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
                            Who We Are
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight uppercase leading-tight mb-6">
                            Built on Precision. Built to Last.
                        </h2>
                        <p className="text-brand-text-muted text-sm font-light leading-relaxed mb-5">
                            Alufurn was founded with a single conviction: that the Indian interior market deserved a material better than wood. We built our first aluminium kitchen in 2018, and the response was immediate. Homeowners, architects, and developers saw what we saw — a product that would not warp in monsoon, would not crack in summer, and would not require repainting every five years.
                        </p>
                        <p className="text-brand-text-muted text-sm font-light leading-relaxed mb-5">
                            Today, Alufurn manufactures aluminium modular kitchens, custom wardrobes, interior doors (pivot, flush, sliding and barn), bathroom vanity units, and bespoke wall panel systems. We operate three Experience Centres — in Patna, Jaipur, and Calicut — where clients can see, touch, and specify every product in full scale.
                        </p>
                        <p className="text-brand-text-muted text-sm font-light leading-relaxed">
                            Our production is backed by German-standard CNC machinery, enabling 0.1 mm machining accuracy on every profile and panel. All finishing — powder coat, anodising, PVD metallic — is handled in-house. The result is absolute consistency across an entire project, whether it is a single kitchen or a developer fit-out of 50 apartments.
                        </p>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                            src="/images/manufacturing.webp"
                            alt="Alufurn CNC manufacturing facility"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-brand-primary/10" />
                    </div>
                </div>

                {/* ── Core Values ── */}
                <div className="mb-24">
                    <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
                        What Drives Us
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight uppercase leading-tight mb-12 max-w-lg">
                        Our Four Commitments
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                        {values.map((value) => {
                            const Icon = value.icon;
                            return (
                                <div key={value.title} className="border-l-2 border-brand-gold pl-6 py-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Icon className="text-brand-gold" size={20} />
                                        <h3 className="text-base md:text-lg font-bold text-brand-primary uppercase tracking-tight">
                                            {value.title}
                                        </h3>
                                    </div>
                                    <p className="text-brand-text-muted text-sm font-light leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ── Timeline ── */}
                <div className="mb-24">
                    <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
                        Our Journey
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight uppercase leading-tight mb-12 max-w-lg">
                        Milestones
                    </h2>
                    <div className="space-y-0 border-l-2 border-brand-gold/30 pl-8 ml-2">
                        {milestones.map((m) => (
                            <div key={m.year} className="relative pb-8 last:pb-0">
                                <div className="absolute -left-[42px] top-1 w-4 h-4 bg-brand-gold rounded-full border-2 border-white" />
                                <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.3em] block mb-1">
                                    {m.year}
                                </span>
                                <p className="text-brand-text-muted text-sm font-light leading-relaxed">
                                    {m.event}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Showrooms ── */}
                <div className="mb-24">
                    <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
                        Find Us
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight uppercase leading-tight mb-12 max-w-lg">
                        Our Experience Centres
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {showrooms.map((store) => (
                            <div
                                key={store.city}
                                className="border border-brand-border p-8 hover:border-brand-gold transition-colors duration-300"
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <MapPin className="text-brand-gold" size={18} />
                                    <h3 className="font-bold text-brand-primary uppercase tracking-widest text-sm">
                                        {store.city}
                                    </h3>
                                    <span className="text-brand-primary/40 text-[10px] uppercase tracking-wider">
                                        {store.state}
                                    </span>
                                </div>
                                <p className="text-brand-text-muted text-[12px] font-light leading-relaxed mb-3">
                                    {store.address}
                                </p>
                                <p className="text-brand-primary text-[12px] font-mono mb-5">{store.phone}</p>
                                <a
                                    href={store.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold hover:underline"
                                >
                                    Get Directions →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Trust Signals ── */}
                <div className="bg-brand-primary text-white p-12 md:p-16 mb-16">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">
                            Why Alufurn
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-8 leading-tight">
                            The Permanent Choice for Indian Homes
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10">
                            {[
                                "100% waterproof & termite-proof aluminium construction",
                                "0.1 mm CNC machining accuracy — zero shimming",
                                "In-house powder coat, anodising & PVD finishing",
                                "German-standard production machinery",
                                "25–30 year structural longevity",
                                "Showrooms in Patna, Jaipur & Calicut",
                                "Supply & installation across all major Indian cities",
                                "Full-range: kitchens, wardrobes, doors, vanity & panels",
                            ].map((point) => (
                                <div key={point} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-brand-gold shrink-0 mt-0.5" size={16} />
                                    <span className="text-white/80 text-sm font-light">{point}</span>
                                </div>
                            ))}
                        </div>
                        <Link
                            href="/contact"
                            className="inline-block px-10 py-4 bg-brand-gold text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-brand-primary transition-colors duration-300"
                        >
                            Get a Free Consultation
                        </Link>
                    </div>
                </div>

                {/* ── CTA ── */}
                <div className="text-center border-t border-brand-border pt-16">
                    <p className="text-brand-text-muted text-sm font-light mb-6 max-w-md mx-auto leading-relaxed">
                        Visit one of our experience centres to see our full product range in person.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/experience"
                            className="inline-block px-10 py-4 bg-brand-primary text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-brand-gold transition-colors duration-300"
                        >
                            Visit a Showroom
                        </Link>
                        <Link
                            href="/aluminium-kitchen"
                            className="inline-block px-10 py-4 border border-brand-primary text-brand-primary text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-brand-primary hover:text-white transition-colors duration-300"
                        >
                            Explore Products
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
