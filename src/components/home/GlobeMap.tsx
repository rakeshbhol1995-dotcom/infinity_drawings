"use client";

import { motion } from "framer-motion";

export default function GlobeMap() {
    return (
        <section className="py-40 px-6 md:px-20 bg-zinc-950 text-white relative overflow-hidden flex flex-col items-center justify-center min-h-screen border-t border-white/5">
            <div className="text-center mb-20 relative z-20">
                <span className="text-xs font-bold tracking-[0.8em] text-amber-500 uppercase block mb-4">Coverage</span>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Global <span className="italic text-white/30">Reach.</span></h2>
            </div>

            {/* Abstract Radar/Globe Map overlay */}
            <div className="relative w-full max-w-4xl aspect-[2/1] mx-auto opacity-30">
                {/* Longitude and Latitude grid lines simulation */}
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-black/20 -translate-y-1/2" />
                <div className="absolute inset-x-0 top-1/4 h-[1px] bg-black/10 -translate-y-1/2 border-dashed border-white/10" />
                <div className="absolute inset-x-0 top-3/4 h-[1px] bg-black/10 -translate-y-1/2 border-dashed border-white/10" />

                <div className="absolute inset-y-0 left-1/2 w-[1px] bg-black/20 -translate-x-1/2" />
                <div className="absolute inset-y-0 left-1/4 w-[1px] bg-black/10 -translate-x-1/2 border-dashed border-white/10 border-l" />
                <div className="absolute inset-y-0 left-3/4 w-[1px] bg-black/10 -translate-x-1/2 border-dashed border-white/10 border-l" />

                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] border border-amber-500/20 rounded-full -translate-x-1/2 -translate-y-1/2"
                />
                <motion.div
                    animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"
                />

                {/* Nodes */}
                {[
                    { top: '30%', left: '70%', label: "Mumbai" },
                    { top: '40%', left: '72%', label: "Odisha" },
                    { top: '25%', left: '85%', label: "Busan" },
                    { top: '35%', left: '25%', label: "Toronto" },
                    { top: '45%', left: '48%', label: "London" }
                ].map((node, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: idx * 0.2 + 0.5 }}
                        viewport={{ once: true }}
                        className="absolute group z-10"
                        style={{ top: node.top, left: node.left }}
                    >
                        <div className="w-4 h-4 rounded-full bg-amber-500 shadow-[0_0_15px_#f59e0b] -translate-x-1/2 -translate-y-1/2 cursor-pointer relative">
                            <div className="absolute w-full h-full bg-amber-500 rounded-full animate-ping opacity-75" />
                        </div>
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-widest font-black text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity w-max">
                            {node.label}
                        </span>
                    </motion.div>
                ))}
            </div>

            <p className="mt-20 text-[10px] uppercase font-bold tracking-[0.4em] text-white/30 relative z-20">Filmed & Screened Across 5+ Countries</p>
        </section>
    );
}
