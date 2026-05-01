"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export default function ProjectTeaser() {
    return (
        <section className="h-[80vh] bg-black text-white relative flex items-center justify-center overflow-hidden border-t border-white/5 group cursor-not-allowed">
            {/* Cinematic background */}
            <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[2s] ease-out"
                style={{ backgroundImage: "url('/teaser_bg.png')" }}
            >
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10" />
            </div>

            {/* Interference overlay */}
            <div className="absolute inset-0 bg-amber-500/5 mix-blend-overlay z-20 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-30 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Lock size={40} className="text-white/20 mb-10 mx-auto group-hover:text-amber-500 transition-colors duration-500" />
                    <span className="text-xs font-bold tracking-[0.8em] text-amber-500 uppercase mb-4 block">Project 08</span>
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-black to-black/10 select-none">
                        Classified <br /> Production
                    </h2>
                </motion.div>

                <p className="mt-12 text-[10px] font-bold uppercase tracking-[0.5em] text-white/40">
                    Status: In Principal Photography // Est. 2025
                </p>

                <div className="mt-16 flex gap-4">
                    <div className="w-16 h-[2px] bg-amber-500/20" />
                    <div className="w-8 h-[2px] bg-amber-500/50" />
                    <div className="w-4 h-[2px] bg-amber-500" />
                </div>
            </div>
        </section>
    );
}
