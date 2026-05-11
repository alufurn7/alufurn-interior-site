"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FilterPillsProps {
    filters: string[];
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

export function FilterPills({ filters, activeFilter, onFilterChange }: FilterPillsProps) {
    return (
        <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((filter) => (
                <motion.button
                    key={filter}
                    onClick={() => onFilterChange(filter)}
                    whileTap={{ scale: 0.96 }}
                    className={`relative px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 border ${
                        activeFilter === filter
                            ? "bg-brand-primary text-white border-brand-primary"
                            : "bg-transparent text-brand-primary/60 border-brand-primary/20 hover:border-brand-primary/50 hover:text-brand-primary"
                    }`}
                >
                    {filter}
                </motion.button>
            ))}
        </div>
    );
}
