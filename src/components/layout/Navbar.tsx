"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function MagneticLink({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const boundingRect = ref.current?.getBoundingClientRect();
        if (boundingRect) {
            const x = clientX - (boundingRect.left + boundingRect.width / 2);
            const y = clientY - (boundingRect.top + boundingRect.height / 2);
            setPosition({ x: x * 0.35, y: y * 0.35 });
        }
    };

    const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Work", href: "/work" },
        { name: "Collaboration", href: "/collaboration" },
        { name: "Clients", href: "/clients" },
        { name: "News", href: "/news" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <nav 
                className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 py-6 md:py-8 flex justify-between items-center ${
                    scrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
                }`}
            >
                <MagneticLink>
                    <Link href="/" className="group cursor-pointer mix-blend-difference block">
                        <span className="text-sm font-black tracking-[0.5em] uppercase border-b-2 border-transparent group-hover:border-amber-500 transition-all duration-300">
                            Infinity Light
                        </span>
                        <span className="block text-[8px] tracking-[1.1em] text-white/30 uppercase mt-1 font-bold text-center">
                            Drawings
                        </span>
                    </Link>
                </MagneticLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-12 mix-blend-difference">
                    {navLinks.map((item, idx) => (
                        <motion.div 
                            key={item.name} 
                            initial={{ opacity: 0, y: -10 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ delay: 0.1 * idx }}
                        >
                            <MagneticLink>
                                <Link href={item.href} className="text-[10px] uppercase font-black tracking-widest hover:text-amber-500 transition-colors p-2">
                                    {item.name}
                                </Link>
                            </MagneticLink>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-[110] relative text-white hover:text-amber-500 transition-colors"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-black z-[105] flex flex-col items-center justify-center p-8 md:hidden"
                    >
                        <div className="absolute inset-0 bg-amber-500/5 pointer-events-none" />
                        <div className="flex flex-col gap-12 text-center">
                            {navLinks.map((item, idx) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + 0.1 * idx }}
                                >
                                    <Link 
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl font-black uppercase tracking-tighter hover:text-amber-500 transition-colors block"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        
                        <div className="mt-20 pt-10 border-t border-white/10 w-full text-center">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">
                                Based in Odisha — Global Reach
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
