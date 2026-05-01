"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const btsImages = [
    { title: "Nanda Master", label: "Documentary", img: "/projects/nandamaster.png", url: "#" },
    { title: "Zwigato", label: "Assistant Director", img: "/projects/zwigato.png", url: "https://youtu.be/xtd1aB-iLe0?si=TcwZ_1a-Zuz2ccLD" },
    { title: "Jengaburu", label: "Assistant Director", img: "/projects/jengaburu.png", url: "https://youtu.be/E3WrfD_ee8g?si=OkwGoL0YlDCyMduW" },
    { title: "Last Drop", label: "Director / Documentary", img: "/projects/bts_3.png", url: "https://www.edexlive.com/breaking/2020/Jul/08/aspiring-filmmaker-nishith-sahasransu-rays-short-film-last-drop-is-a-plea-to-save-water-13144.html" },
    { title: "Trapped", label: "Director / Short Film", img: "/projects/bts_1.png", url: "https://www.youtube.com/watch?v=K7fg9FRb6sQ" },
    { title: "Baghuni", label: "Assistant Director", img: "/projects/bts_2.png", url: "https://www.imdb.com/title/tt29629518/" },
];

export default function HorizontalScroll() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]); // Adjust based on number of items

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
            {/* Sticky Container - Only Sticky on Desktop */}
            <div className="md:sticky md:top-0 h-auto md:h-screen flex items-center overflow-hidden py-20 md:py-0">
                <div className="absolute top-10 md:top-20 left-6 md:left-20 z-10">
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.8em] text-amber-500 uppercase block leading-relaxed">Raw Frames</span>
                    <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mt-4 text-white">Our <span className="italic text-white/30">Portfolio.</span></h2>
                </div>

                {/* Desktop Version: Parallax scroll */}
                <motion.div style={{ x }} className="hidden md:flex gap-10 px-20 pt-40 pb-20 items-center w-fit">
                    <div className="w-[20vw] shrink-0" />
                    {btsImages.map((img, idx) => (
                        <a key={idx} href={img.url} target="_blank" rel="noopener noreferrer" className="w-[45vw] h-[60vh] shrink-0 relative group block">
                            <div
                                className="w-full h-full bg-neutral-900 overflow-hidden relative bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-1000"
                                style={{ backgroundImage: `url(${img.img})` }}
                            >
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-1000" />
                                <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay pointer-events-none" />
                            </div>
                            <div className="mt-6 flex justify-between items-end px-4 border-l border-amber-500 pl-4">
                                <h3 className="text-3xl font-black uppercase text-white tracking-widest">{img.title}</h3>
                                <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-amber-500">{img.label}</span>
                            </div>
                        </a>
                    ))}
                    <div className="w-[20vw] shrink-0" />
                </motion.div>

                {/* Mobile Version: Standard Horizontal Scroll */}
                <div className="flex md:hidden overflow-x-auto gap-6 px-6 pt-32 pb-10 w-full no-scrollbar snap-x snap-mandatory">
                    {btsImages.map((img, idx) => (
                        <a key={idx} href={img.url} target="_blank" rel="noopener noreferrer" className="w-[85vw] shrink-0 relative block snap-center">
                            <div
                                className="w-full aspect-[4/5] bg-neutral-900 overflow-hidden relative bg-cover bg-center bg-no-repeat rounded-sm"
                                style={{ backgroundImage: `url(${img.img})` }}
                            >
                                <div className="absolute inset-0 bg-black/40" />
                            </div>
                            <div className="mt-4 flex justify-between items-end px-4 border-l border-amber-500 pl-4">
                                <h3 className="text-xl font-black uppercase text-white tracking-tight">{img.title}</h3>
                                <span className="text-[8px] uppercase font-bold tracking-[0.3em] text-amber-500">{img.label}</span>
                            </div>
                        </a>
                    ))}
                    <div className="w-[6vw] shrink-0" />
                </div>
            </div>
        </section>

    );
}
