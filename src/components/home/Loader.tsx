"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";

export default function Loader() {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                const next = prev + Math.floor(Math.random() * 20) + 15;
                if (next >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 200);
                    return 100;
                }
                return next;
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    exit={{ y: "-100%" }}
                    transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                    className="fixed inset-0 z-[100] bg-black text-white flex flex-col justify-end p-6 md:p-12 overflow-hidden"
                >
                    <div className="absolute top-10 md:top-20 left-10 md:left-20 text-white mix-blend-difference z-50">
                        <span className="text-sm font-black tracking-[0.5em] uppercase">Infinity</span>
                    </div>

                    {/* Centered Brand Logo */}
                    <div className="absolute inset-0 flex items-center justify-center z-40 px-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="relative"
                        >
                            <img
                                src="/new_logo.png"
                                alt="Infinity Light Drawings"
                                className="w-[300px] md:w-[600px] h-auto object-contain"
                            />
                        </motion.div>
                    </div>
                    <div className="flex justify-between items-end w-full">
                        <div className="overflow-hidden">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="block text-[8px] md:text-xs font-black tracking-[0.8em] uppercase text-amber-500"
                            >
                                Loading Experience
                            </motion.span>
                        </div>
                        <div className="text-[15vw] md:text-[12vw] font-black leading-none tracking-tighter">
                            {progress}
                            <span className="text-amber-500 text-[6vw] md:text-[4vw] tracking-normal">%</span>
                        </div>
                    </div>

                    {/* Shutter Effect Panels */}
                    <motion.div
                        initial={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
                        className="absolute inset-x-0 bottom-0 h-1/2 bg-[#050505] origin-bottom -z-10"
                    />
                    <motion.div
                        initial={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
                        className="absolute inset-x-0 top-0 h-1/2 bg-[#050505] origin-top -z-10"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
