"use client";

import { motion } from "framer-motion";

import { Mail, MapPin, Globe, Instagram, Linkedin, Video, Film } from "lucide-react";

export default function EndCredits() {
    return (
        <section className="relative bg-black text-white py-20 md:py-40 px-6 md:px-20 border-t border-white/5 overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/noise.png')] bg-repeat" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Massive Kinetic Header */}
                <div className="mb-32 overflow-hidden">
                    <motion.h2 
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
                        className="text-[15vw] md:text-[12vw] font-black uppercase tracking-tighter leading-none text-white/5 select-none"
                    >
                        Connectivity.
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
                    {/* Left Side: Direct Action */}
                    <div className="lg:col-span-7 space-y-20">
                        <div className="space-y-8">
                            <span className="text-[10px] md:text-xs font-bold tracking-[0.8em] text-amber-500 uppercase block">
                                Initiate Collaboration
                            </span>
                            <div className="space-y-4">
                                <motion.a 
                                    href="mailto:infinitylightdrawings@gmail.com"
                                    whileHover={{ x: 20 }}
                                    className="group flex items-center gap-6 text-3xl md:text-6xl font-black uppercase tracking-tighter hover:text-amber-500 transition-all duration-500"
                                >
                                    <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                                        <Mail className="w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                    <span>Work with us.</span>
                                </motion.a>
                                <motion.a 
                                    href="mailto:nishith.creation@gmail.com"
                                    whileHover={{ x: 20 }}
                                    className="group flex items-center gap-6 text-xl md:text-3xl font-black uppercase tracking-tighter text-white/40 hover:text-white transition-all duration-500"
                                >
                                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                                        <Globe className="w-4 h-4 md:w-5 md:h-5" />
                                    </div>
                                    <span>Direct Line.</span>
                                </motion.a>
                            </div>
                        </div>

                        {/* Social Matrix */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { name: "Instagram", icon: Instagram, href: "#" },
                                { name: "IMDB", icon: Film, href: "#" },
                                { name: "LinkedIn", icon: Linkedin, href: "#" },
                                { name: "Vimeo", icon: Video, href: "#" },
                            ].map((item) => (
                                <a 
                                    key={item.name} 
                                    href={item.href}
                                    className="flex flex-col gap-4 group"
                                >
                                    <div className="h-px bg-white/10 w-full group-hover:bg-amber-500 transition-colors" />
                                    <div className="flex items-center gap-3">
                                        <item.icon className="w-4 h-4 text-white/20 group-hover:text-amber-500 transition-colors" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                                            {item.name}
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Studio Footprint */}
                    <div className="lg:col-span-5 space-y-16 lg:pl-12 lg:border-l border-white/5">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <MapPin className="text-amber-500 w-4 h-4" />
                                    <span className="text-[10px] font-black tracking-[0.4em] text-amber-500 uppercase">Odisha HQ</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-tight">
                                    Andharpur, Near Railway Crossing<br />
                                    Duladei Road, Cuttack - 753013
                                </h3>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <MapPin className="text-amber-500 w-4 h-4" />
                                    <span className="text-[10px] font-black tracking-[0.4em] text-amber-500 uppercase">Mumbai Studio</span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-tight">
                                    Next to Billabong High School<br />
                                    Jankalyan Nagar, Malad West - 400095
                                </h3>
                            </div>
                        </div>

                        {/* Credits Footer */}
                        <div className="pt-20 space-y-8">
                            <div className="flex flex-col gap-2">
                                <span className="text-[8px] font-black uppercase tracking-[0.8em] text-white/20">Executive Authority</span>
                                <span className="text-sm font-black uppercase tracking-widest">Nishith S. Ray — Director</span>
                            </div>
                            <div className="flex gap-8 text-[9px] font-black uppercase tracking-widest text-white/30">
                                <a href="/terms" className="hover:text-amber-500 transition-colors">Legal</a>
                                <a href="/privacy" className="hover:text-amber-500 transition-colors">Privacy</a>
                                <span className="ml-auto opacity-50">© 2024 ILD</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
