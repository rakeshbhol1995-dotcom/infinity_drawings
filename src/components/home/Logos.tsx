"use client";

import { motion } from "framer-motion";

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

export default function Logos() {
    return (
        <section id="partners-section-new" className="py-24 md:py-40 bg-white text-black border-y border-black/10 relative z-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-[10px] font-bold tracking-[0.8em] text-black/40 uppercase block mb-4">The Network</span>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Strategic <span className="italic text-black/20">Partners.</span></h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 items-center justify-items-center">
                    {partners.map((partner, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center w-full group"
                        >
                            {partner.img ? (
                                <img
                                    src={partner.img}
                                    alt={partner.name}
                                    className="max-h-20 md:max-h-32 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                        const sibling = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                                        if (sibling) sibling.style.display = 'block';
                                    }}
                                />
                            ) : null}
                            <span className={`${partner.img ? 'hidden' : 'block'} text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-black/40 text-center`}>
                                {partner.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
