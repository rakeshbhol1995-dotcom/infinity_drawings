"use client";

import { motion } from "framer-motion";
import { Quote, Film, MonitorPlay, Heart, Camera, Clapperboard, Star } from "lucide-react";
import Link from "next/link";

const creations = [
    { icon: <MonitorPlay size={24} />, title: "Corporate Films", desc: "Turning brands into powerful human stories with cinematic depth." },
    { icon: <Film size={24} />, title: "Ad Films", desc: "Visually striking narratives that connect instantly and leave impact." },
    { icon: <Heart size={24} />, title: "NGO & Social", desc: "Purpose-driven storytelling rooted in truth and empathy." },
    { icon: <Camera size={24} />, title: "Documentaries", desc: "Real stories told with authenticity, sensitivity, and depth." },
    { icon: <Clapperboard size={24} />, title: "Short Films", desc: "Bold, expressive narratives exploring the human condition." }
];

const works = [
    { title: "Last Drop (2020)", desc: "A documentary on water conservation recognized at international film festivals in the USA and Japan." },
    { title: "Trapped (2020)", desc: "A poignant reflection on life during the COVID-19 lockdown." },
    { title: "Zwigato (2023)", desc: "Worked as Assistant Director, gaining experience in large-scale feature filmmaking." },
    { title: "Jengaburu: The Curse (Sony LIV)", desc: "Assisted in direction, coordination, and creative development." },
    { title: "Baghuni – Dance Like a Tiger", desc: "A multilingual Odia feature film and one of Odisha’s first international co-productions." }
];

export default function AboutSection() {
    return (
        <section id="about" className="py-32 px-6 md:px-20 bg-zinc-950/50 border-y border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="lg:col-span-7 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <span className="text-[10px] font-bold tracking-[0.6em] text-amber-500 uppercase mb-6 block">
                                About — Infinity Light Drawings
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
                                Nishith <br /> <span className="text-white/20 italic">Sahasransu</span> <br /> Ray
                            </h2>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-xl md:text-2xl font-light text-white/70 leading-snug border-l border-amber-500/30 pl-6 italic"
                        >
                            "Cinema has been a friend, a companion, a guru—everything to me."
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="space-y-6 text-sm md:text-base text-white/60 leading-relaxed font-light"
                        >
                            <p>
                                Welcome to <strong className="text-white">Infinity Light Drawings</strong>—where stories don’t just unfold, they <em>breathe</em>.
                            </p>
                            <p>
                                I’m a filmmaker driven by a simple but powerful belief: cinema isn’t just watched—it’s <em>felt</em>. It has the power to move people, shift perspectives, and stay with them long after the screen fades to black.
                            </p>
                            <p>
                                If you’re here, you’re not just looking for a filmmaker—you’re looking for someone who understands your vision and transforms it into something unforgettable. That’s exactly what I do.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="pt-4"
                        >
                            <Link href="/about" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-amber-500 hover:text-white transition-colors group">
                                <span className="w-8 h-[1px] bg-amber-500 group-hover:bg-white transition-colors" />
                                Read Full Story
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: Expertise / Summary Grid */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="p-8 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-sm">
                            <h3 className="text-xs font-bold tracking-[0.4em] text-amber-500 uppercase mb-8 flex items-center gap-3">
                                <Clapperboard size={16} /> What I Create
                            </h3>
                            <div className="space-y-6">
                                {creations.slice(0, 4).map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start group">
                                        <div className="text-white/20 group-hover:text-amber-500 transition-colors mt-1">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">{item.title}</h4>
                                            <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
