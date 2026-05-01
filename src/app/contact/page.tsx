"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Contact() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <main className="relative min-h-screen bg-black text-white pt-32 md:pt-40 px-6 md:px-20 overflow-hidden">
            <Link href="/" className="fixed top-8 left-8 z-50 text-[10px] uppercase font-black tracking-widest hover:text-amber-500 transition-colors flex items-center gap-4 group">
                <span className="w-8 h-[1px] bg-black/20 group-hover:w-16 group-hover:bg-amber-500 transition-all" />
                Back
            </Link>

            <section className="max-w-7xl mx-auto mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-xs font-bold tracking-[0.8em] text-amber-500 uppercase mb-8 block">
                        The Collaboration
                    </span>
                    <h1 className="text-[12vw] md:text-[10vw] font-black uppercase leading-[0.85] tracking-[-0.05em] mb-20 whitespace-nowrap">
                        Start The <br /> <span className="text-white/10 italic">Dialogue.</span>
                    </h1>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-12"
                    >
                        <div className="space-y-10">
                            {["Full Name", "Email Address"].map((label) => (
                                <div key={label} className="group">
                                    <span className="text-[9px] uppercase tracking-widest text-white/20 font-black mb-2 block">{label}</span>
                                    <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-amber-500 transition-colors text-lg" placeholder="..." />
                                </div>
                            ))}
                            <div className="group">
                                <span className="text-[9px] uppercase tracking-widest text-white/20 font-black mb-2 block">Project Inquiry</span>
                                <textarea rows={1} className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-amber-500 transition-colors text-lg resize-none" placeholder="..." />
                            </div>
                        </div>
                        <button className="group relative w-full md:w-auto px-12 py-6 bg-black text-white font-black uppercase tracking-[0.4em] overflow-hidden text-sm">
                            <span className="relative z-10 flex items-center justify-center gap-4">
                                Send Inquiry <Send size={18} />
                            </span>
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="space-y-16 lg:pt-10"
                    >
                        {[
                            { icon: Mail, label: "Email", value: "infinitylightdrawings@gmail.com", href: "mailto:infinitylightdrawings@gmail.com" },
                            { icon: Phone, label: "Phone", value: "+91 82494 95660", href: "tel:+918249495660" },
                            { icon: Phone, label: "WhatsApp", value: "+91 96924 58263", href: "https://wa.me/919692458263" },
                            { icon: MapPin, label: "Studio", value: "Bhubaneswar, Odisha", href: null }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-8 group">
                                <item.icon className="text-amber-500" size={18} />
                                <div>
                                    <span className="text-[8px] uppercase tracking-widest text-white/20 block mb-1 font-black">{item.label}</span>
                                    {item.href ? (
                                        <a href={item.href} target={item.label === "WhatsApp" ? "_blank" : undefined} className="text-sm font-bold tracking-widest uppercase hover:text-amber-500 transition-colors">
                                            {item.value}
                                        </a>
                                    ) : (
                                        <span className="text-sm font-bold tracking-widest uppercase">{item.value}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
