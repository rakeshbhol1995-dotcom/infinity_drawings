"use client";

import { motion } from "framer-motion";
import { Camera, Monitor, Zap, Heart } from "lucide-react";

const features = [
    { icon: <Camera size={20} />, title: "Cinematic Capture", desc: "Using industry-standard RED and Arri ecosystems for unparalleled visual depth." },
    { icon: <Monitor size={20} />, title: "Precision Post", desc: "Expert color grading and narrative-focused editing that brings stories to life." },
    { icon: <Zap size={20} />, title: "Rapid Turnaround", desc: "Efficient workflows that never compromise on the artistic soul of the project." },
    { icon: <Heart size={20} />, title: "Human Storytelling", desc: "We don't just film; we connect. Every frame is a piece of the soul." }
];

export default function Studio() {
    return (
        <section className="py-32 md:py-48 px-6 md:px-20 bg-zinc-950 text-white relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-12">
                    <div>
                        <span className="text-[10px] font-bold tracking-[0.8em] text-amber-500 uppercase block mb-6">
                            The Apparatus
                        </span>
                        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                            Studio <br /> <span className="text-white/10 italic">Philosophies.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="space-y-4 group"
                            >
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500">
                                    {feature.icon}
                                </div>
                                <h3 className="text-sm font-black uppercase tracking-widest text-white">{feature.title}</h3>
                                <p className="text-xs text-white/40 leading-relaxed font-bold uppercase tracking-tight">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden group"
                >
                    <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-110"
                        style={{ backgroundImage: "url('/studio_journal.png')" }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute bottom-10 left-10">
                        <span className="text-[8px] font-black uppercase tracking-[0.5em] text-amber-500">Location: Cuttack, Odisha</span>
                        <h4 className="text-xl font-black uppercase tracking-widest text-white mt-2">Infinity Headquarters</h4>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
