"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const news = [
    { 
        date: "OCT 2023", 
        title: "BPFTIO Alumnus. Odisha Roots. Global Recognition", 
        type: "Profile",
        url: "https://odishapostepaper.com/edition/832/orissapost/page/2",
        source: "Orissa Post"
    },
    { 
        date: "JUL 2020", 
        title: "How this Odia youth's documentary on water wastage is hot on the film festival circuit", 
        type: "Feature",
        url: "https://www.edexlive.com/breaking/2020/Jul/08/aspiring-filmmaker-nishith-sahasransu-rays-short-film-last-drop-is-a-plea-to-save-water-13144.html",
        source: "EdexLive"
    },
    { 
        date: "MAR 2020", 
        title: "Odia youngsters’ short film to be screened at international festival", 
        type: "Selected",
        url: "https://timesofindia.indiatimes.com/entertainment/events/bhubaneswar/odia-youngsters-short-film-to-be-screened-at-international-festival/articleshow/74824052.cms",
        source: "Times of India"
    },
];

export default function News() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <main className="relative min-h-screen bg-black text-white pt-32 md:pt-40 px-6 md:px-20 overflow-hidden">
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
                    <span className="text-xs font-bold tracking-[0.8em] text-amber-500 uppercase mb-8 block">
                        The Global Feed
                    </span>
                    <h1 className="text-[12vw] md:text-[10vw] font-black uppercase leading-[0.85] tracking-[-0.05em] mb-20 whitespace-nowrap">
                        News & <br /> <span className="text-white/10 italic">Headlines.</span>
                    </h1>
                </motion.div>

                <div className="space-y-0 border-t border-white/5">
                    {news.map((item, idx) => (
                        <Link 
                            key={idx} 
                            href={item.url} 
                            target="_blank" 
                            className="block group"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="border-b border-white/5 py-12 md:py-16 flex flex-col md:flex-row justify-between items-center cursor-pointer hover:bg-black/[0.01] px-4 transition-colors"
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16 w-full">
                                    <div className="shrink-0">
                                        <span className="text-[10px] font-black text-white/20 block mb-2 uppercase tracking-[0.3em]">{item.date}</span>
                                        <span className="text-[9px] font-bold text-amber-500/50 uppercase tracking-[0.2em]">{item.source}</span>
                                    </div>
                                    <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight group-hover:translate-x-4 transition-all duration-500 group-hover:text-amber-500 leading-tight md:max-w-3xl">
                                        {item.title}
                                    </h2>
                                </div>
                                
                                <div className="flex items-center gap-10 w-full md:w-auto mt-8 md:mt-0 justify-between md:justify-end">
                                    <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.4em] px-4 py-2 border border-white/10 rounded-full text-white/40 group-hover:border-amber-500/30 group-hover:text-white transition-all whitespace-nowrap">
                                        {item.type}
                                    </span>
                                    <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-black group-hover:border-white transition-all transform group-hover:scale-110">
                                        <ArrowUpRight size={20} className="group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>
            
            <div className="h-40" />
        </main>
    );
}
