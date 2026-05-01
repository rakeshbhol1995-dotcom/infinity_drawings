"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen flex flex-col justify-center px-6 md:px-20 overflow-hidden">
            {/* Immersive Background Element - Simulating a lens */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[120vw] md:h-[120vw] opacity-[0.03] pointer-events-none">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full border-[1px] border-white rounded-full flex items-center justify-center p-20"
                >
                    <div className="w-full h-full border-[1px] border-white rounded-full flex items-center justify-center p-40">
                        <div className="w-full h-full border-[1px] border-white rounded-full" />
                    </div>
                </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-4 pt-32 md:pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                >
                    <span className="text-[9px] md:text-xs font-bold tracking-[0.8em] text-amber-500 uppercase mb-4 block leading-relaxed">
                        "Every film is an experience, and every experience can be unforgettable."
                    </span>
                </motion.div>

                <h1 className="text-7xl md:text-[12vw] font-black leading-[0.85] uppercase tracking-[-0.06em]">
                    <motion.span
                        initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
                        className="block"
                    >
                        Infinity
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, delay: 2.0, ease: "easeOut" }}
                        className="block text-amber-500 italic mix-blend-screen"
                    >
                        Drawings
                    </motion.span>
                </h1>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="absolute bottom-16 right-6 md:right-20 flex flex-col items-end text-right gap-4"
            >
                <div className="flex gap-4 items-center">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 48 }}
                        transition={{ delay: 3.5, duration: 1 }}
                        className="h-[1px] bg-black/20"
                    />
                    <span className="text-[9px] uppercase tracking-widest font-black italic text-white/50">Scroll To Explore</span>
                </div>
            </motion.div>
        </section>
    );
}
