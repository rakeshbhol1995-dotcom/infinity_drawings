"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const partners = [
    { name: "NFDC", img: "/partners/nfdc.png" },
    { name: "Applause Entertainment", img: "/partners/applause.png" },
    { name: "Sony LIV", img: "/partners/sonyliv.png" },
    { name: "Cinema 4 Good", img: "/partners/cinema4good.png" },
    { name: "Gram Vikas", img: "/partners/gramvikas.png" },
    { name: "ORMAS", img: "/partners/ormas.png" },
    { name: "Skilled in Odisha", img: "/partners/skilled_in_odisha.png" },
    { name: "Women and Child Development", img: "/partners/wcd.png" },
    { name: "Fisheries & Animal Resources", img: "/partners/fisheries.png" },
    { name: "Chatrapur NAC", img: "/partners/chatrapur_nac.png" },
    { name: "Panchayati Raj & Drinking Water", img: "/partners/panchayati_raj.png" },
];

export default function Clients() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <main className="relative min-h-screen bg-white text-black pt-32 md:pt-40 px-6 md:px-20 overflow-hidden">
            <Link href="/" className="fixed top-8 left-8 z-50 text-[10px] uppercase font-black tracking-widest hover:text-amber-500 transition-colors flex items-center gap-4 group">
                <span className="w-8 h-[1px] bg-black/20 group-hover:w-16 group-hover:bg-amber-500 transition-all" />
                Back
            </Link>

            <section className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-xs font-bold tracking-[0.8em] text-amber-600 uppercase mb-8 block">
                        The Portfolio
                    </span>
                    <h1 className="text-[12vw] md:text-[10vw] font-black uppercase leading-[0.85] tracking-[-0.05em] mb-20 whitespace-nowrap">
                        Our <br /> <span className="text-black/10 italic">Clients.</span>
                    </h1>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-24 items-center justify-items-center mt-10">
                    {partners.map((partner, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center w-full group cursor-default"
                        >
                            <img
                                src={partner.img}
                                alt={partner.name}
                                className="max-h-20 md:max-h-32 w-auto object-contain transition-all duration-500 transform group-hover:scale-110"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                    const sibling = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                                    if (sibling) sibling.style.display = 'block';
                                }}
                            />
                            <span className="hidden text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-black/40 text-center">
                                {partner.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </section>

            <div className="h-40" />
        </main>
    );
}
