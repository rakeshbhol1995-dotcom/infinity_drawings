"use client";

import { motion } from "framer-motion";
import { Handshake, Zap, Users, ShieldCheck, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Collaboration() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const collabTypes = [
        {
            icon: Zap,
            title: "Creative Syndicate",
            desc: "For directors, cinematographers, and artists looking to push boundaries in visual storytelling.",
            benefits: ["Access to ILD Pipeline", "High-End Gear Pool", "Global Distribution"]
        },
        {
            icon: Users,
            title: "Brand Alliances",
            desc: "Bespoke content solutions for brands that value cinematic integrity over generic marketing.",
            benefits: ["Bespoke Visual ID", "Strategic Placement", "Premium Production"]
        },
        {
            icon: ShieldCheck,
            title: "Technical Partners",
            desc: "Hardware, software, and gear partners who power the future of filmmaking.",
            benefits: ["BETA Testing", "Showcase Integration", "Long-Term Vision"]
        }
    ];

    return (
        <main className="relative min-h-screen bg-black text-white pt-32 md:pt-40 px-6 md:px-20 overflow-hidden">
            {/* Visual Enhancements */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-amber-500/5 blur-[150px] -z-10" />
            
            <Link href="/" className="fixed top-8 left-8 z-50 text-[10px] uppercase font-black tracking-widest hover:text-amber-500 transition-colors flex items-center gap-4 group">
                <span className="w-8 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-amber-500 transition-all" />
                Back
            </Link>

            <section className="max-w-7xl mx-auto mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <span className="text-xs font-bold tracking-[0.8em] text-amber-500 uppercase mb-8 block">
                        The Synergy
                    </span>
                    <h1 className="text-[12vw] md:text-[10vw] font-black uppercase leading-[0.85] tracking-[-0.05em] mb-12">
                        Build <br /> The <span className="text-white/10 italic">Future.</span>
                    </h1>
                    <p className="text-sm md:text-xl text-white/40 leading-relaxed max-w-2xl font-medium tracking-wide">
                        We don't just hire people; we build syndicates. ILD is an open ecosystem for visionaries, technicians, and brands who want to redefine cinema.
                    </p>
                </motion.div>
            </section>

            <section className="max-w-7xl mx-auto mb-40">
                <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
                    {collabTypes.map((type, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-black p-10 md:p-16 flex flex-col justify-between group hover:bg-white/[0.02] transition-colors"
                        >
                            <div className="space-y-10">
                                <div className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500">
                                    <type.icon size={32} />
                                </div>
                                <div className="space-y-4">
                                    <h2 className="text-3xl font-black uppercase tracking-tighter">{type.title}</h2>
                                    <p className="text-sm text-white/40 leading-relaxed">{type.desc}</p>
                                </div>
                                <ul className="space-y-3">
                                    {type.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[10px] uppercase font-black tracking-widest text-white/60">
                                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Kinetic Contact Section */}
            <section className="max-w-7xl mx-auto mb-40 border-t border-white/5 pt-20">
                <div className="flex flex-col md:flex-row gap-20 items-center">
                    <div className="w-full md:w-1/2 space-y-10">
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                            Ready To <br /> <span className="text-amber-500">Deploy?</span>
                        </h2>
                        <div className="flex flex-col gap-6">
                            <a href="mailto:infinitylightdrawings@gmail.com" className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                    <MessageSquare />
                                </div>
                                <span className="text-xl font-black uppercase tracking-widest border-b border-transparent group-hover:border-white transition-all">Send Proposal</span>
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 bg-white/5 p-10 md:p-20 rounded-3xl border border-white/10">
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <span className="text-[10px] font-black uppercase tracking-widest text-amber-500">Quick Note</span>
                                <h3 className="text-2xl font-black uppercase tracking-tight">Syndicate Application</h3>
                            </div>
                            <div className="space-y-6">
                                <input type="text" placeholder="WHO ARE YOU?" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-amber-500 transition-colors uppercase font-black tracking-widest text-xs" />
                                <input type="text" placeholder="YOUR VISION?" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-amber-500 transition-colors uppercase font-black tracking-widest text-xs" />
                                <button className="w-full py-6 bg-white text-black font-black uppercase tracking-[0.5em] text-xs hover:bg-amber-500 transition-colors">
                                    Initiate Dialogue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
