"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function QuoteDivider() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Invert colors based on scroll progress
    const bgColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#000000", "#f59e0b", "#000000"]);
    const textColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#ffffff", "#000000", "#ffffff"]);

    return (
        <motion.section
            ref={ref}
            style={{ backgroundColor: bgColor, color: textColor }}
            className="py-40 md:py-60 px-6 md:px-20 min-h-screen flex items-center justify-center text-center transition-colors border-t border-white/5"
        >
            <div className="max-w-6xl">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mix-blend-difference"
                >
                    "We do not capture light, <br className="hidden md:block" /> we let the light <span className="italic">draw</span> the <span className="italic">truth.</span>"
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-xs uppercase font-bold tracking-[0.5em] mix-blend-difference"
                >
                    The Studio Ethos
                </motion.div>
            </div>
        </motion.section>
    );
}
