"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
    return (
        <section className="py-20 md:py-40 px-6 md:px-20 border-t border-white/5 bg-black">
            <div className="max-w-6xl mx-auto space-y-32">
                {/* Section 1: Intro */}
                <div className="grid md:grid-cols-12 gap-10">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="md:col-span-4"
                    >
                        <span className="text-xs font-bold tracking-[0.6em] text-amber-500 uppercase block mb-6">Introduction</span>
                        <div className="h-[1px] w-12 bg-black/20" />
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="md:col-span-8 space-y-6 md:space-y-8"
                    >
                        <h2 className="text-2xl md:text-5xl font-light leading-tight text-white/90">
                            "Cinema has been a <span className="font-bold text-white uppercase italic">friend</span>, a <span className="font-bold text-white uppercase italic">companion</span>, a <span className="font-bold text-white uppercase italic">guru</span>—everything to me."
                        </h2>
                        <p className="text-sm md:text-lg text-white/50 leading-relaxed max-w-2xl font-medium tracking-wide italic">
                            Welcome! I’m Nishith Sahasransu Ray, a filmmaker driven by a passion for stories that resonate beyond the screen. Here, you're looking for someone who can bring your vision to life—and that's exactly what I do.
                        </p>
                    </motion.div>
                </div>


                {/* Section 3: Signature Approach */}
                <div className="grid md:grid-cols-12 gap-10">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="md:col-span-4"
                    >
                        <span className="text-xs font-bold tracking-[0.6em] text-amber-500 uppercase block mb-6">What I Do</span>
                        <div className="h-[1px] w-12 bg-black/20" />
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="md:col-span-8 space-y-12"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { title: "Corporate Films", desc: "Tell your brand’s story with authenticity and cinematic artistry." },
                                { title: "Ad Films", desc: "Craft impactful messages that captivate in seconds." },
                                { title: "NGO Projects", desc: "Shine a light on causes with empathy and purpose." },
                                { title: "Documentaries", desc: "Unveil the truth to inspire and inform." },
                                { title: "Short Films", desc: "Explore human emotions with bold, original storytelling." }
                            ].map((item, i) => (
                                <div key={i} className="space-y-2">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-white">{item.title}</h4>
                                    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="pt-10 border-t border-white/5">
                            <h4 className="text-xs font-black uppercase tracking-widest text-amber-500 mb-6">Professional Experience</h4>
                            <p className="text-sm text-white/50 leading-relaxed tracking-wide font-medium italic">
                                "With experience across diverse genres and formats, I’ve developed a deep understanding of filmmaking, from script development to post-production. My work reflects my commitment to creating content that resonates with audiences and makes an impact."
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Director Signature */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-end pr-0 md:pr-20"
                >
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                            <span className="text-xs font-black text-amber-500">NR</span>
                        </div>
                        <div>
                            <span className="block text-xs uppercase tracking-[0.3em] font-black">Nishith S. Ray</span>
                            <span className="block text-[10px] uppercase tracking-widest text-white/40 mt-1">Founder & Director</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
