"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const works = [
    { id: "01", title: "Baghuni – Dance Like a Tiger", category: "FILM", year: "Upcoming", url: "https://www.imdb.com/title/tt29629518/" },
    { id: "02", title: "Nanda Master’nka Chatasali", category: "FILM", year: "2022", url: "https://www.imdb.com/title/tt32414572/" },
    { id: "03", title: "Jengaburu: A Billion Dollar Curse", category: "FILM", year: "2023", url: "https://youtu.be/E3WrfD_ee8g?si=OkwGoL0YlDCyMduW" },
    { id: "04", title: "Zwigato", category: "FILM", year: "2022", url: "https://youtu.be/xtd1aB-iLe0?si=TcwZ_1a-Zuz2ccLD" },
    { id: "05", title: "Last Drop", category: "DOCUMENTARY", year: "2020", url: "https://drive.google.com/drive/folders/1B-QSRBM0cBFGlPrSCFKvCSeBPMDN2o_l" },
    { id: "06", title: "Trapped (Director)", category: "SHORT FILM", year: "2020", url: "https://www.youtube.com/watch?v=K7fg9FRb6sQ" },
    { id: "07", title: "Dustbin (Director)", category: "SHORT FILM", year: "2019", url: "https://www.youtube.com/watch?v=sWdYUDqULg0" },
    { id: "08", title: "College TVC Portfolio", category: "TVC", year: "2024", url: "https://drive.google.com/drive/folders/1hCLiYRtW_GMJMUZ8gK2qZaHqKpCAEIVa" },
    { id: "09", title: "Corporate Films Archive", category: "CORPORATE", year: "2024", url: "https://drive.google.com/drive/folders/1hCLiYRtW_GMJMUZ8gK2qZaHqKpCAEIVa" },
    { id: "10", title: "NGO Social Impact Films", category: "NGO", year: "2024", url: "https://drive.google.com/file/d/1g2NZF8D27iocupY1E4W_dUIbMH7umRWx/view?usp=drivesdk" },
    { id: "11", title: "Sri Jagannath Mandir Heritage Corridor", category: "CORPORATE", year: "2024", url: "https://drive.google.com/file/d/1n075kH5GG7V30plpaJyS1bUXgxYAG0v2/view" },
    { id: "12", title: "5T School Development Documentation", category: "CORPORATE", year: "2023", url: "https://drive.google.com/drive/u/2/folders/1VJynjjHe8Bo50V8eN9WlHO0tw nWZwXl3" },
    { id: "13", title: "Skilling Odisha Youth (OSDA)", category: "NGO", year: "2022", url: "https://drive.google.com/drive/u/2/folders/175gLClqYYefdbKyQNNkLvinTUJEHFEON" },
    { id: "14", title: "Women & Child (Mamata Scheme)", category: "NGO", year: "2022", url: "https://drive.google.com/file/d/151xT7LBprZFoD_479ftga3YaCGEskH s1/view" },
];

export default function Work() {
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
                        The Archive
                    </span>
                    <h1 className="text-[12vw] md:text-[10vw] font-black uppercase leading-[0.85] tracking-[-0.05em] mb-20 whitespace-nowrap">
                        The <span className="text-white/10 italic">Collection.</span>
                    </h1>
                </motion.div>

                <div className="space-y-0 border-t border-white/5">
                    {works.map((work, idx) => (
                        <a 
                            key={work.id}
                            href={work.url}
                            target={work.url.startsWith("http") ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="block group"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="border-b border-white/5 py-8 md:py-12 flex flex-col md:flex-row justify-between items-center cursor-pointer hover:bg-black/[0.01] px-4 transition-colors"
                            >
                            <div className="flex items-center gap-6 md:gap-10 w-full md:w-auto">
                                <span className="text-[10px] font-black text-white/20 group-hover:text-amber-500">{work.id}</span>
                                <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-500">
                                    {work.title}
                                </h2>
                            </div>
                            <div className="flex items-center gap-10 w-full md:w-auto mt-4 md:mt-0 justify-between md:justify-end">
                                <div className="text-right">
                                    <span className="text-[8px] uppercase tracking-widest text-white/30 block mb-1 font-black">{work.category}</span>
                                    <span className="text-[10px] font-bold tracking-widest">{work.year}</span>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-black group-hover:border-white transition-all transform group-hover:scale-110">
                                    <ArrowUpRight size={18} className="group-hover:text-white transition-colors" />
                                </div>
                            </div>
                            </motion.div>
                        </a>
                    ))}
                </div>
            </section>
            <div className="h-40" />
        </main>
    );
}
