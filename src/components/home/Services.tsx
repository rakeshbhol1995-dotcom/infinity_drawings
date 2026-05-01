"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
    { 
        title: "Corporate Films", 
        desc: "We produce high-quality films for government departments and institutions, combining clarity, creativity, and cinematic excellence.", 
        num: "01", 
        img: "/services/corporate_new.png",
        link: "https://drive.google.com/drive/folders/1hCLiYRtW_GMJMUZ8gK2qZaHqKpCAEIVa"
    },
    { 
        title: "College TVCs", 
        desc: "Capturing the energy and legacy of educational institutions through dynamic television commercials and campus promos.", 
        num: "02", 
        img: "/services/college_tvc.png",
        link: "https://drive.google.com/drive/folders/1hCLiYRtW_GMJMUZ8gK2qZaHqKpCAEIVa"
    },
    { 
        title: "NGO Projects", 
        desc: "We create impactful films for NGOs that highlight real stories, social issues, and community change through empathetic storytelling.", 
        num: "03", 
        img: "/services/ngo_new.png",
        link: "https://drive.google.com/file/d/1g2NZF8D27iocupY1E4W_dUIbMH7umRWx/view?usp=drivesdk"
    },
    { 
        title: "Documentary", 
        desc: "Unveil the truth to inspire and inform through deep-dive investigative and human-centric films.", 
        num: "04", 
        img: "/services/documentary.png",
        link: "https://drive.google.com/drive/folders/1B-QSRBM0cBFGlPrSCFKvCSeBPMDN2o_l"
    },
    { 
        title: "Short Films", 
        desc: "Bold psychological narratives and social awareness films that explore human emotions and community issues.", 
        num: "05", 
        img: "/services/shortfilm.png",
        link: "https://www.youtube.com/watch?v=K7fg9FRb6sQ"
    },
];

export default function Services() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <section className="bg-black text-white border-t border-white/5 pb-32">
            <div className="py-20 px-6 md:px-20">
                <span className="text-xs font-bold tracking-[0.8em] text-amber-500 uppercase block">Expertise</span>
            </div>

            <div className="flex flex-col w-full h-auto min-h-[60vh] md:h-[80vh] md:flex-row group/container">
                {services.map((service, idx) => (
                    <motion.div
                        key={idx}
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                        animate={{
                            width: (typeof window !== 'undefined' && window.innerWidth < 768) 
                                ? "100%" 
                                : (hoveredIdx === idx ? "50%" : hoveredIdx === null ? "33.33%" : "25%"),
                        }}
                        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                        className={`relative border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-between p-8 md:p-12 overflow-hidden cursor-pointer w-full md:w-auto h-[40vh] md:h-full bg-cover bg-center transition-colors group`}
                        style={{ backgroundImage: `url(${service.img})` }}
                        onClick={() => service.link && window.open(service.link, "_blank")}
                    >
                        {/* Interactive Background */}
                        <div className={`absolute inset-0 bg-black/60 transition-colors duration-700 ${hoveredIdx === idx ? 'bg-black/20' : 'bg-black/80'}`} />
                        <div className={`absolute inset-0 bg-amber-500/10 mix-blend-color-burn transition-opacity duration-700 ${hoveredIdx === idx ? 'opacity-100' : 'opacity-0'}`} />

                        <div className="relative z-10 flex justify-between items-start">
                            <span className="text-xs font-black uppercase text-white/20 tracking-widest">{service.num}</span>
                            <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 overflow-hidden ${hoveredIdx === idx ? 'border-amber-500 bg-amber-500 text-white' : 'border-white/20'}`}>
                                <ArrowUpRight size={14} />
                            </div>
                        </div>

                        <div className="relative z-10 mt-10 md:mt-0">
                            <h3 className={`text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-4 transition-all duration-500 ${hoveredIdx === idx ? 'text-amber-500' : 'text-white'}`}>
                                {service.title}
                            </h3>
                            <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{
                                    opacity: (typeof window !== 'undefined' && window.innerWidth < 768) ? 1 : (hoveredIdx === idx ? 1 : 0),
                                    height: (typeof window !== 'undefined' && window.innerWidth < 768) ? "auto" : (hoveredIdx === idx ? "auto" : 0)
                                }}
                                transition={{ duration: 0.4 }}
                                className="text-xs md:text-sm text-white/50 tracking-widest uppercase leading-relaxed font-bold max-w-sm"
                            >
                                {service.desc}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
