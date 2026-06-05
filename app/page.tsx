"use client";

import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import ProjectGallery from "@/components/ProjectGallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import OutletSection from "@/components/OutletSection";
import QuickLinks from "@/components/QuickLinks";
import ConsultationSection from "@/components/ConsultationSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <ProductShowcase />
            <ProjectGallery />
            <WhyChooseUs />
            <OutletSection />
            <QuickLinks />
            <ConsultationSection />
        </>
    );
}
