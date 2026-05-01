"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const news = [
    { 
        date: "OCT 2023", 
        title: "BPFTIO Alumnus. Odisha Roots. Global Recognition", 
        type: "Profile",
        url: "https://odishapostepaper.com/edition/832/orissapost/page/2"
    },
    { 
        date: "JUL 2020", 
        title: "How this Odia youth's documentary on water wastage is hot on the film festival circuit", 
        type: "Feature",
        url: "https://www.edexlive.com/breaking/2020/Jul/08/aspiring-filmmaker-nishith-sahasransu-rays-short-film-last-drop-is-a-plea-to-save-water-13144.html"
    },
    { 
        date: "MAR 2020", 
        title: "Odia youngsters’ short film to be screened at international festival", 
        type: "Selected",
        url: "https://timesofindia.indiatimes.com/entertainment/events/bhubaneswar/odia-youngsters-short-film-to-be-screened-at-international-festival/articleshow/74824052.cms"
    },
];

export default function NewsHeadlines() {
    return (
        <section className="py-20 md:py-40 px-6 md:px-20 bg-black text-white relative border-t border-white/5">
            <div className="grid lg:grid-cols-12 gap-10 md:gap-20">
                <div className="lg:col-span-4 flex flex-col justify-between relative p-8 md:p-12 overflow-hidden rounded-2xl bg-zinc-950 min-h-[300px] md:min-h-[400px]">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-30 grayscale hover:scale-110 transition-transform duration-1000"
                        style={{ backgroundImage: "url('/studio_journal.png')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                            </span>
                            <span className="text-[10px] md:text-xs font-bold tracking-[0.8em] text-amber-500 uppercase">Live Dispatch</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight">News & <br /> <span className="italic text-white/30 text-3xl md:text-5xl">Headlines.</span></h2>
                    </div>

                    <Link href="/news" className="relative z-10 hidden lg:flex items-center gap-4 group mt-20">
                        <span className="text-[10px] uppercase font-bold tracking-[0.4em]">Read Full Archive</span>
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 transition-all">
                            <ArrowUpRight size={16} className="group-hover:text-white" />
                        </div>
                    </Link>
                </div>

                <div className="lg:col-span-8 flex flex-col justify-center gap-10">
                    {news.map((item, idx) => (
                        <Link key={idx} href={item.url} target="_blank" className="block group">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 pb-8 md:pb-10 border-b border-white/10 cursor-pointer"
                            >
                                <span className="text-[10px] md:text-xs font-black text-white/30 uppercase tracking-[0.3em] w-32 shrink-0">{item.date}</span>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tight group-hover:text-amber-500 transition-colors w-full">
                                    {item.title}
                                </h3>
                                <div className="flex justify-between items-center w-full md:w-auto">
                                    <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] px-3 py-1.5 md:px-4 md:py-2 border border-white/20 rounded-full text-white/60 whitespace-nowrap">
                                        {item.type}
                                    </span>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
