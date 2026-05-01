"use client";

import { motion } from "framer-motion";
import { Quote, Film, MonitorPlay, Heart, Camera, Clapperboard, Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";

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
    { title: "The Diddle", desc: "Played a key role in production coordination and execution." },
    { title: "Baghuni – Dance Like a Tiger (Upcoming)", desc: "A multilingual Odia feature film and one of Odisha’s first international co-productions with NFDC & Glocal Films, with shoots across Odisha and London." }
];

export default function About() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <main className="relative min-h-screen bg-black text-white selection:bg-amber-500 selection:text-white font-sans overflow-hidden">
            <Navbar />

            {/* Back Button */}
            <Link href="/" className="fixed top-24 left-6 md:left-12 z-50 text-[10px] uppercase font-black tracking-widest hover:text-amber-500 transition-colors flex items-center gap-4 group bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
                <span className="w-4 h-[1px] bg-amber-500 group-hover:w-8 transition-all" />
                Back to Home
            </Link>

            {/* Hero Section */}
            <section className="pt-40 md:pt-60 px-6 md:px-20 max-w-7xl mx-auto mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20 items-center">
                    {/* Left: Content */}
                    <div className="lg:col-span-7 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <span className="text-[10px] font-bold tracking-[0.6em] text-amber-500 uppercase mb-8 block">
                                About — Infinity Light Drawings
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.85] tracking-tighter mb-8">
                                Nishith <br /> <span className="text-white/10 italic">Sahasransu</span> <br /> Ray.
                            </h1>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-xl md:text-2xl font-light text-white/70 leading-snug max-w-2xl border-l border-amber-500/30 pl-8 italic"
                        >
                            <Quote size={20} className="text-amber-500 opacity-50 mb-4" />
                            "Cinema has been a friend, a companion, a guru—everything to me."
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="space-y-6 text-sm md:text-base text-white/60 leading-relaxed font-medium"
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
                    </div>

                    {/* Right: The Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        className="lg:col-span-5 relative aspect-square md:aspect-[3/4] w-full"
                    >
                        <div className="absolute inset-0 rounded-full border border-white/5 flex items-center justify-center p-4">
                            <div className="w-full h-full rounded-full border border-dashed border-white/10 animate-[spin_100s_linear_infinite] opacity-30" />
                        </div>
                        
                        <div className="absolute inset-8 md:inset-12 rounded-full bg-zinc-900 border border-amber-500/20 overflow-hidden group shadow-2xl">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-all duration-[3s] group-hover:scale-110"
                                style={{ backgroundImage: "url('/nishit.jpg')" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-12 left-0 right-0 text-center">
                                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-amber-500">Filmmaker</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The Journey & Experience */}
            <section className="py-24 px-6 md:px-20 bg-zinc-950/50 border-y border-white/5 relative">
                <div className="max-w-4xl mx-auto space-y-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xs font-bold tracking-[0.4em] text-amber-500 uppercase mb-6">The Journey</h3>
                        <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
                            My cinematic voice is shaped by timeless masters and evolving storytelling—from poetic realism to bold contemporary narratives. I’ve learned that every frame carries emotion, every silence has meaning, and every story—when told right—can leave a lasting imprint.
                        </p>
                        <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light mt-4">
                            This philosophy is the foundation of everything I create.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xs font-bold tracking-[0.4em] text-amber-500 uppercase mb-6">Experience That Shapes Vision</h3>
                        <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
                            From concept to final cut, I bring a complete understanding of the filmmaking process—blending storytelling, craft, and precision. Every project reflects a commitment to creating content that resonates deeply and stands visually apart.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* What I Create */}
            <section className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">What I Create</h2>
                    <p className="text-white/50 text-lg font-light">I craft visual experiences that are not just seen—but <em>felt</em>.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {creations.map((item, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Selected Works */}
            <section className="py-32 px-6 md:px-20 bg-zinc-950/50 border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-16 flex items-center gap-4">
                        <Star className="text-amber-500" size={32} />
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Selected Works & Collaborations</h2>
                    </div>

                    <div className="space-y-8">
                        {works.map((work, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group border-l-2 border-white/10 pl-8 hover:border-amber-500 transition-colors"
                            >
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                                    {work.title}
                                </h3>
                                <p className="text-white/60 font-light text-lg">
                                    {work.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Where Vision Meets the Frame */}
            <section className="py-32 px-6 md:px-20 text-center relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto space-y-12"
                >
                    <h3 className="text-xs font-bold tracking-[0.4em] text-amber-500 uppercase mb-6">Where Vision Meets the Frame</h3>
                    <h2 className="text-2xl md:text-4xl font-light italic text-white/80 leading-relaxed">
                        Every project begins with one question:<br/>
                        <span className="text-amber-500 font-medium">“What story needs to be told?”</span>
                    </h2>
                    
                    <div className="space-y-6 text-white/60 font-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        <p>
                            At Infinity Light Drawings, cinema is more than visuals—it’s an <em>experience</em>. A harmony of light, emotion, and storytelling crafted with intention. Every frame is designed like visual poetry—meant to engage, inspire, and endure.
                        </p>
                        <p>
                            From films to commercials to digital content, we bring ideas to life with a distinct artistic voice and a deep respect for storytelling.
                        </p>
                    </div>

                    <div className="h-px w-20 bg-amber-500/20 mx-auto my-16" />

                    <div className="space-y-6">
                        <p className="text-2xl md:text-3xl font-light italic text-white/80">
                            "Every film is an experience, and every experience can be unforgettable."
                        </p>
                        <p className="text-xl font-bold uppercase tracking-widest text-amber-500 mt-8">
                            This isn’t just filmmaking.<br/>
                            This is storytelling with soul.
                        </p>
                        <p className="text-white/50 text-sm tracking-widest uppercase pt-4">
                            Welcome to Infinity Light Drawings. Let’s create something timeless.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* SEO Keywords (Subtle Footer) */}
            <section className="py-12 border-t border-white/5 bg-black">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-[10px] text-white/20 leading-relaxed max-w-4xl mx-auto">
                        Filmmaker in Odisha • Filmmaker in Bhubaneswar • Documentary filmmaker India • Corporate film production Odisha • Ad film director India • Video production company Bhubaneswar • Cinematic storytelling India • NGO film production India • Short film director India • Creative film production house Odisha • Professional videography Bhubaneswar • Brand storytelling films India • Commercial video production India • Independent filmmaker India • Film director portfolio India
                    </p>
                </div>
            </section>

            {/* Background Aesthetic Elements */}
            <div className="fixed top-0 right-0 w-[50vw] h-[50vw] bg-amber-500/5 blur-[200px] -z-10 rounded-full pointer-events-none" />
            <div className="fixed bottom-0 left-0 w-[40vw] h-[40vw] bg-zinc-500/5 blur-[200px] -z-10 rounded-full pointer-events-none" />
        </main>
    );
}
