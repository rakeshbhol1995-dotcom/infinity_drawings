"use client";

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { Instagram, Linkedin, ExternalLink } from "lucide-react";

const team = [
    { 
        name: "Nishith S. Ray", 
        role: "Director & Creative Head", 
        img: "/nishit.jpg", 
        expertise: "Cinematic Storytelling",
        bio: "A visionary filmmaker with over a decade of experience in cinematic storytelling, specializing in human emotions and visual grandeur.",
        socials: { instagram: "https://instagram.com/nishitray", linkedin: "https://linkedin.com/in/nishitray" }
    },
    { 
        name: "Sachin Ramesh Pattanayak", 
        role: "Cinematographer", 
        img: "/sachin.png", 
        expertise: "Brands: Livspace, MeeMee",
        bio: "Master of light and shadow, Sachin has crafted visual identities for major brands, bringing a luxury aesthetic to every frame.",
        socials: { instagram: "https://instagram.com/sachin", linkedin: "https://linkedin.com/in/sachin" }
    },
    { 
        name: "FM SANKAR", 
        role: "Cinematographer / Photographer", 
        img: "/sankar.png", 
        expertise: "Light Painting & Long-Exposure",
        bio: "Known for his expertise in Light Painting and Long-Exposure photography, Sankar captures the surreal beauty of time and motion.",
        socials: { instagram: "https://instagram.com/fmsankar", linkedin: "https://linkedin.com/in/fmsankar" }
    },
    { 
        name: "ASWINI JENA", 
        role: "Editor | Post-Production Artist", 
        img: "/aswini.png", 
        expertise: "Timing & Narrative Flow",
        bio: "The rhythm behind the story, Aswini is an expert in timing and narrative flow, creating seamless cinematic experiences.",
        socials: { instagram: "https://instagram.com/aswini", linkedin: "https://linkedin.com/in/aswini" }
    },
];

function TiltCard({ children, member }: { children: React.ReactNode, member: any }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { handleMouseLeave(); setIsHovered(false); }}
            style={{ rotateX, rotateY }}
            className="group relative bg-black aspect-[3/4] overflow-hidden flex flex-col justify-end cursor-pointer border border-white/5"
        >
            <div 
                className="absolute inset-0 grayscale-0 opacity-100 transition-all duration-1000 bg-cover bg-center"
                style={{ backgroundImage: `url(${member.img})` }}
            />
            
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
            
            {/* Bio Overlay (Glassmorphism) */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div 
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-start pt-12"
                    >
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            <p className="text-[10px] md:text-xs text-white/70 leading-relaxed font-medium mb-6">
                                {member.bio}
                            </p>
                            
                            <div className="flex gap-4">
                                {member.socials.instagram && (
                                    <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-amber-500 hover:text-black transition-all duration-300">
                                        <Instagram size={14} />
                                    </a>
                                )}
                                {member.socials.linkedin && (
                                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-amber-500 hover:text-black transition-all duration-300">
                                        <Linkedin size={14} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-10 p-8 space-y-2 transition-transform duration-500 group-hover:-translate-y-2">
                {children}
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500/20 group-hover:bg-amber-500 transition-colors duration-500" />
        </motion.div>
    );
}

export default function Team() {
    return (
        <section className="py-20 md:py-40 px-6 md:px-20 bg-black text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 md:mb-32">
                    <div className="space-y-6">
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.8em] text-amber-500 uppercase block">
                            The Collective
                        </span>
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                            Our <br /> <span className="text-white/10 italic">Core Team.</span>
                        </h2>
                    </div>
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/40 leading-relaxed font-bold max-w-xs text-right">
                        A syndicate of visionaries dedicated to the craft of cinematic excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 border border-white/5">
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <TiltCard member={member}>
                                <span className="text-amber-500 text-[8px] font-black uppercase tracking-widest block mb-1">
                                    {member.role} — {member.expertise}
                                </span>
                                <h3 className="text-2xl font-black uppercase tracking-tighter">
                                    {member.name}
                                </h3>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <Link href="/collaboration" className="px-10 py-5 border border-white/10 rounded-full group hover:border-amber-500 transition-colors cursor-pointer">
                        <span className="text-[10px] uppercase font-black tracking-[0.5em] group-hover:text-amber-500 transition-colors">
                            Join The Syndicate
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
