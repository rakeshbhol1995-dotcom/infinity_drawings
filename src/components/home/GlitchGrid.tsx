"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const featuredWork = [
    { title: "Nanda Master", type: "Documentary", year: "2024", size: "col-span-12 md:col-span-8 row-span-2", img: "/projects/nandamaster.png" },
    { title: "Zwigato", type: "Feature", year: "2023", size: "col-span-12 md:col-span-4 row-span-1", img: "/projects/zwigato.png" },
    { title: "Jengaburu", type: "Web Series", year: "2023", size: "col-span-12 md:col-span-4 row-span-1", img: "/projects/jengaburu.png" },
];

export default function GlitchGrid() {
    return (
        <section className="py-32 px-6 md:px-20 bg-black text-white">
            <div className="flex justify-between items-end mb-20">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <span className="text-xs font-bold tracking-[0.8em] text-amber-500 uppercase mb-4 block">Archive</span>
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Featured <br /> <span className="italic text-white/30">Frames.</span></h2>
                </motion.div>
                <Link href="/work" className="hidden md:flex items-center gap-4 group">
                    <span className="text-[10px] uppercase font-bold tracking-[0.4em]">View All Work</span>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 transition-all">
                        <ArrowUpRight size={14} className="group-hover:text-white" />
                    </div>
                </Link>
            </div>

            <div className="grid grid-cols-12 gap-4 auto-rows-[250px]">
                {featuredWork.map((work, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className={`${work.size} relative group overflow-hidden cursor-pointer bg-zinc-900 bg-cover bg-center bg-no-repeat`}
                        style={{ backgroundImage: `url(${work.img})` }}
                    >
                        {/* Image Darkener Overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 pointer-events-none" />
                        {/* Film Burn/Glitch Effect Overlay */}
                        <div className="absolute inset-0 bg-amber-500/20 mix-blend-color-burn opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:animate-pulse z-20 pointer-events-none" style={{ mixBlendMode: 'overlay' }} />

                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end z-30 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                            <span className="text-[10px] font-black uppercase tracking-widest text-amber-500 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                {work.type} // {work.year}
                            </span>
                            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight">{work.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            <Link href="/work" className="md:hidden mt-12 flex items-center gap-4 group">
                <span className="text-[10px] uppercase font-bold tracking-[0.4em]">View All Work</span>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <ArrowUpRight size={14} />
                </div>
            </Link>
        </section>
    );
}
