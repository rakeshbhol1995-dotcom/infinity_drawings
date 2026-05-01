"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
    { label: "Independent Films Produced", value: 5, suffix: "+" },
    { label: "Global Festival Selections", value: 10, suffix: "+" },
    { label: "Years of Visual Artistry", value: 5, suffix: "" },
];

export default function Stats() {
    return (
        <section className="py-40 px-6 md:px-20 bg-zinc-950 text-white relative overflow-hidden flex items-center min-h-[60vh]">
            {/* Parallax Background Texture */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.02 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at center, white 2px, transparent 2px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-10 divide-y md:divide-y-0 md:divide-x divide-white/10">
                {stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center pt-10 md:pt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            viewport={{ once: true, margin: "-10%" }}
                            className="text-[15vw] md:text-[8vw] font-black tracking-tighter leading-none text-white drop-shadow-[0_0_30px_rgba(245,158,11,0.2)]"
                        >
                            <Counter from={0} to={stat.value} duration={2} />
                            <span className="text-amber-500">{stat.suffix}</span>
                        </motion.div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: (idx * 0.2) + 0.5 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mt-6 max-w-[200px]"
                        >
                            {stat.label}
                        </motion.span>
                    </div>
                ))}
            </div>
        </section>
    );
}

// Simple Counter Component
function Counter({ from, to, duration }: { from: number, to: number, duration: number }) {
    const [count, setCount] = useState(from);

    useEffect(() => {
        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (time: number) => {
            if (!startTime) startTime = time;
            const progress = (time - startTime) / (duration * 1000);

            if (progress < 1) {
                setCount(Math.floor(from + (to - from) * progress));
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(to);
            }
        };

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animationFrame = requestAnimationFrame(animate);
                observer.disconnect();
            }
        });

        const element = document.getElementById(`counter-${to}`);
        if (element) observer.observe(element);

        return () => {
            if (animationFrame) cancelAnimationFrame(animationFrame);
            observer.disconnect();
        };
    }, [from, to, duration]);

    return <span id={`counter-${to}`}>{count}</span>;
}
