"use client";

import { motion } from "framer-motion";

export default function Marquee() {
    const words = [
        "Feature Films", "Documentaries", "Commercials", "Visual Storytelling",
        "Global Accolades", "Award Winning", "Cinematic Depth", "Artisanal Production"
    ];

    return (
        <section className="py-20 md:py-32 bg-amber-500 text-white overflow-hidden flex flex-col gap-4">
            {/* Row 1 - Moves Left */}
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1035] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                    className="flex text-[8vw] md:text-[5vw] font-black uppercase tracking-tighter italic pr-8"
                >
                    {[...words, ...words].map((word, idx) => (
                        <div key={idx} className="flex items-center">
                            <span>{word}</span>
                            <span className="mx-8 md:mx-16 text-white/20">✦</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Row 2 - Moves Right */}
            <div className="flex whitespace-nowrap">
                <motion.div
                    initial={{ x: -1035 }}
                    animate={{ x: 0 }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                    className="flex text-[8vw] md:text-[5vw] font-black uppercase tracking-tighter pr-8"
                >
                    {[...words].reverse().concat([...words].reverse()).map((word, idx) => (
                        <div key={idx} className="flex items-center">
                            <span className="text-white/50">{word}</span>
                            <span className="mx-8 md:mx-16 text-white/20">✦</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
