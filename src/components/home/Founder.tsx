"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Founder() {
    return (
        <section className="py-40 px-6 md:px-20 bg-zinc-950 text-white relative flex justify-center overflow-hidden">
            {/* Massive Background Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] uppercase tracking-tighter whitespace-nowrap select-none pointer-events-none z-0">
                Nishith S. Ray
            </div>

            <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-20 items-center">
                {/* The Lens Cutout */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-square md:aspect-[3/4] max-w-md mx-auto w-full"
                >
                    <div className="absolute inset-4 rounded-full border border-white/10 flex items-center justify-center p-8">
                        <div className="w-full h-full rounded-full border border-dashed border-white/20 animate-[spin_60s_linear_infinite] opacity-50" />
                    </div>
                    {/* Founder image container */}
                    <div className="absolute inset-12 rounded-full bg-zinc-900 border border-amber-500/20 overflow-hidden group">
                        {/* Founder Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-all duration-[2s] group-hover:scale-105"
                            style={{ backgroundImage: "url('/nishit.jpg')" }}
                        />
                        {/* Dramatic Shadow Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none" />

                        <div className="absolute bottom-10 left-0 right-0 text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500">Visionary</span>
                        </div>
                    </div>
                </motion.div>

                <div className="space-y-10 pl-0 md:pl-10 text-center md:text-left">
                    <Quote size={40} className="text-amber-500 opacity-20 mx-auto md:mx-0" />
                    <h3 className="text-3xl md:text-5xl font-light italic text-white/80 leading-snug">
                        "Cinema has been a friend, a companion, a guru—everything to me."
                    </h3>
                    <div className="space-y-2 pt-6">
                        <p className="text-sm font-black uppercase tracking-widest text-white">Nishith Sahasransu Ray</p>
                        <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-amber-500">Filmmaker & Creative Director</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
