"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        name: "Shyam Sundar",
        role: "Production Head, Sony LIV",
        content: "Working with Nishith was a seamless experience. His vision for cinematic storytelling is exceptional, especially during the production of Jengaburu.",
        rating: 5
    },
    {
        name: "Amrita Patnaik",
        role: "Creative Director, Cinema 4 Good",
        content: "The way he captures human emotions in documentaries like 'Last Drop' is truly moving. A storyteller who understands the soul of the subject.",
        rating: 5
    },
    {
        name: "Rajesh Mohanty",
        role: "Executive Producer",
        content: "His attention to detail and ability to handle large-scale productions while keeping the artistic essence alive is remarkable.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="py-32 md:py-48 px-6 md:px-20 bg-black text-white relative overflow-hidden border-t border-white/5">
            {/* Background Light Spill */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-amber-500/5 blur-[150px] -z-10 rounded-full" />
            
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 text-center md:text-left">
                    <span className="text-[10px] font-bold tracking-[0.8em] text-amber-500 uppercase block mb-6">
                        Voices of Collaboration
                    </span>
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                        The <br /> <span className="text-white/10 italic">Cinematic Verdict.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="relative group p-10 bg-zinc-950 border border-white/5 rounded-2xl hover:border-amber-500/30 transition-all duration-500"
                        >
                            <Quote size={40} className="text-amber-500 opacity-20 absolute top-8 right-8" />
                            
                            <div className="flex gap-1 mb-8">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={12} className="fill-amber-500 text-amber-500" />
                                ))}
                            </div>

                            <p className="text-lg md:text-xl font-light text-white/70 leading-relaxed mb-10 italic">
                                "{item.content}"
                            </p>

                            <div className="space-y-1">
                                <h3 className="text-sm font-black uppercase tracking-widest text-white">
                                    {item.name}
                                </h3>
                                <p className="text-[10px] uppercase font-bold tracking-widest text-amber-500">
                                    {item.role}
                                </p>
                            </div>
                            
                            {/* Hover accent */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500/0 group-hover:bg-amber-500 transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
