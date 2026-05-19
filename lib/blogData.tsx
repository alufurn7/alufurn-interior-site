import React from "react";
import Link from "next/link";
import Image from "next/image";

export type BlogPost = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    image: string;
    primaryKeyword: string;
    content: React.ReactNode;
};

export const blogPosts: BlogPost[] = [
    {
        slug: "aluminium-vs-plywood-modular-kitchen",
        title: "Aluminium vs Plywood Modular Kitchen: Which Wins for Indian Homes?",
        date: "2025-05-18",
        excerpt: "Comparing aluminium and plywood for modular kitchens in India. Learn why aluminium is the superior, waterproof, and termite-proof choice for your home.",
        image: "/images/kitchen_01.webp",
        primaryKeyword: "aluminium vs plywood modular kitchen India",
        content: (
            <>
                <p className="lead text-lg text-gray-700 mb-8">
                    When designing a new home or renovating an existing space in India, the kitchen is often the most significant investment. For decades, plywood has been the default material. But as modern Indian homeowners demand higher longevity, zero maintenance, and flawless aesthetics, a new standard has emerged: the <strong>aluminium modular kitchen</strong>. But how does it really compare to plywood? Let's break it down.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-primary">1. The Truth About Indian Kitchen Environments</h2>
                <p className="mb-4 text-gray-600">
                    Indian kitchens are high-stress environments. Between the heavy boiling, deep-frying, and grinding, the cabinetry is constantly exposed to moisture, steam, oil, and heat. Furthermore, India’s distinct seasons—specifically the humid monsoons—wreak havoc on organic materials. Termites and borers are a constant threat in many parts of the country. To survive, a kitchen material needs to be engineered for absolute resilience.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-primary">2. Plywood Modular Kitchens: The Pros and The Hidden Flaws</h2>
                <p className="mb-4 text-gray-600">
                    Commercial plywood (BWR and BWP grades) is made by gluing sheets of wood veneer together. 
                    <strong>The Pros:</strong> It is relatively cheap upfront, readily available, and every local carpenter knows how to work with it.
                    <strong>The Flaws:</strong> No matter how high the grade of plywood, it is still wood. When exposed to continuous moisture (like under the sink), it eventually swells, delaminates, and rots. It provides a food source for termites. Furthermore, the hinges screwed into plywood tend to loosen over time, leading to sagging doors within just 3 to 5 years.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-primary">3. Aluminium Modular Kitchens: Engineered for India</h2>
                <p className="mb-4 text-gray-600">
                    Aluminium is a non-ferrous metal, meaning it contains no iron and cannot rust. It contains no organic matter, meaning it cannot be eaten by termites. 
                    <strong>The Pros:</strong> An <Link href="/aluminium-kitchen" className="text-brand-gold underline hover:text-brand-primary transition-colors">ALUFURN aluminium modular kitchen</Link> is 100% waterproof, termite-proof, and fire-retardant. It is dimensionally stable, meaning it will never warp, expand, or contract during the monsoon. Hardware like hinges and drawer channels are bolted directly into the metal frame, ensuring they never sag or pull out.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-primary">4. Cost Comparison: Initial Investment vs 15-Year Value</h2>
                <p className="mb-4 text-gray-600">
                    There is a misconception that aluminium kitchens are prohibitively expensive. While the initial investment for a premium aluminium kitchen is approximately 20% to 30% higher than a standard plywood kitchen, the lifetime value is vastly superior.
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                    <li><strong>Plywood Lifespan:</strong> 8 to 12 years (often requiring hinge repairs and laminate replacements within 5 years).</li>
                    <li><strong>Aluminium Lifespan:</strong> 25+ years (zero maintenance, no swelling, no termite treatments needed).</li>
                </ul>
                <p className="mb-4 text-gray-600">
                    When you factor in the cost of pest control, repairing water damage under the sink, and eventual replacement, aluminium is significantly cheaper over a 15-year period.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-primary">5. Maintenance & Hygiene in Daily Indian Cooking</h2>
                <p className="mb-4 text-gray-600">
                    Indian cooking uses powerful spices like turmeric, which can permanently stain laminates and edge-banding on plywood. Wood is also porous, absorbing moisture and holding onto musty odours during the rainy season. 
                    Aluminium, finished with a marine-grade powder coat, is completely non-porous. Oil splatters and spice spills wipe away effortlessly. Because it doesn't absorb water, an aluminium kitchen will never develop that damp, musty smell common in older wooden kitchens.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-primary">6. The Verdict: Making the Right Choice for Your Home</h2>
                <p className="mb-4 text-gray-600">
                    If you are building a temporary setup or outfitting a rental property, plywood might suffice. But if you are building your forever home and want a kitchen that looks as flawless on day 5,000 as it did on day 1, aluminium is the undisputed winner. It is an investment in peace of mind.
                </p>

                <div className="bg-gray-50 p-8 border-l-4 border-brand-gold mt-10">
                    <h3 className="text-xl font-bold mb-3">Ready to see the aluminium difference?</h3>
                    <p className="mb-4 text-gray-600">Experience the quality firsthand at an ALUFURN experience centre.</p>
                    <Link href="/contact" className="inline-block bg-brand-primary text-white px-6 py-3 text-sm uppercase tracking-widest font-bold hover:bg-brand-gold transition-colors duration-300">
                        Book a Free Design Consultation Today
                    </Link>
                </div>
            </>
        )
    },
    {
        slug: "aluminium-kitchen-cost-guide-india",
        title: "Complete Aluminium Kitchen Cost Guide India (2025)",
        date: "2025-05-15",
        excerpt: "Understand exactly how much an aluminium modular kitchen costs in India. We break down the price per square foot, hardware costs, and layout impact.",
        image: "/images/kitchen_01.webp",
        primaryKeyword: "aluminium modular kitchen price India",
        content: (
            <>
                <p className="lead text-lg text-gray-700 mb-8">
                    One of the first questions homeowners ask when considering a switch to metal interiors is: <em>"What is the actual aluminium modular kitchen price in India?"</em> The truth is, pricing can vary significantly based on your layout, the thickness of the aluminium profiles, the finishes you choose, and the hardware inside. In this 2025 guide, we break down exactly what you are paying for.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-primary">1. Why Pricing Differs Between Aluminium Kitchen Brands</h2>
                <p className="mb-4 text-gray-600">
                    Not all aluminium kitchens are created equal. You may find local fabricators offering "aluminium kitchens" at prices lower than cheap plywood. These are often made from thin, low-grade aluminium tubes screwed together manually. Premium brands like <Link href="/aluminium-kitchen" className="text-brand-gold underline hover:text-brand-primary transition-colors">ALUFURN</Link> use heavy-gauge, custom-extruded aluminium profiles that are CNC-machined for absolute precision and structural integrity. The difference in price reflects the difference between a flimsy cabinet and a lifelong architectural installation.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-primary">2. Cost Breakdown: What You're Actually Paying For</h2>
                <p className="mb-4 text-gray-600">When you receive a quote for an aluminium kitchen, it typically comprises four main elements:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                    <li><strong>Carcass (The Inner Frame):</strong> The waterproof structural body of the kitchen.</li>
                    <li><strong>Shutters (The Doors):</strong> The visual face of the kitchen, available in powder-coated aluminium, glass, or timber-grain finishes.</li>
                    <li><strong>Hardware & Mechanisms:</strong> Hinges, drawer runners, tandem boxes, and lift-up systems (usually from German brands like Hettich or Blum).</li>
                    <li><strong>Internal Accessories:</strong> Pull-outs, cutlery trays, corner carousels, and tall units.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-primary">3. Standard 2BHK Kitchen Layout Costs</h2>
                <p className="mb-4 text-gray-600">
                    For a standard straight or L-shaped kitchen in a typical 2BHK apartment (approx. 8 to 10 feet in length), a high-quality ALUFURN aluminium kitchen typically ranges between <strong>₹2,50,000 to ₹4,00,000</strong>. This includes premium soft-close hardware and standard internal accessories. Because aluminium requires no pest control, no waterproof lining, and no future maintenance, this upfront cost is the final cost.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-primary">4. Island Kitchen and Luxury Configuration Costs</h2>
                <p className="mb-4 text-gray-600">
                    For larger homes, villas, or open-plan living spaces featuring a central island, tall pantry units, and built-in appliance housing, the sheer volume of material and specialized mechanisms increases the price. A luxury U-shaped or Island aluminium kitchen will typically range from <strong>₹5,00,000 to ₹8,00,000+</strong>. These kitchens often feature advanced automation, integrated LED lighting profiles, and premium fluted glass shutters.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-primary">5. Hardware Choices That Impact Your Budget</h2>
                <p className="mb-4 text-gray-600">
                    The single biggest variable in your kitchen quote (after the size of the room) is the hardware. 
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                    <li>Opting for basic soft-close doors and wire baskets keeps costs down.</li>
                    <li>Opting for seamless tandem drawers (which hold up to 65kg of weight), corner magic corners, and servo-drive automated lift-up systems will increase the overall budget significantly.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-brand-primary">6. How ALUFURN Keeps Prices Competitive (Manufacturer-Direct)</h2>
                <p className="mb-4 text-gray-600">
                    Because ALUFURN manufactures every kitchen in our own state-of-the-art facility, there are no middleman markups. You are buying directly from the source. This allows us to provide German-level engineering and precision at prices that are accessible to the Indian market. We measure, manufacture, and install.
                </p>

                <div className="bg-gray-50 p-8 border-l-4 border-brand-gold mt-10">
                    <h3 className="text-xl font-bold mb-3">Get a Precise Quote for Your Kitchen</h3>
                    <p className="mb-4 text-gray-600">Every home is different. Get a quote tailored exactly to your floor plan dimensions.</p>
                    <Link href="/contact" className="inline-block bg-brand-primary text-white px-6 py-3 text-sm uppercase tracking-widest font-bold hover:bg-brand-gold transition-colors duration-300">
                        Request a Site Measurement
                    </Link>
                </div>
            </>
        )
    }
];
