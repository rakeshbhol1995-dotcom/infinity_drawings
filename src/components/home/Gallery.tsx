"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Maximize2, Camera, Filter } from "lucide-react";

type Category = "all" | "film" | "corporate" | "ngo";

const galleryImages = [
    { id: 1, src: "/gallery/gallery_1.png", span: "row-span-2 col-span-2", alt: "Cinematic Film Set", category: "film" },
    { id: 2, src: "/gallery/gallery_2.png", span: "row-span-1 col-span-1", alt: "Professional Lens Archive", category: "film" },
    { id: 3, src: "/gallery/gallery_3.png", span: "row-span-2 col-span-1", alt: "Production Silhouette", category: "film" },
    { id: 4, src: "/gallery/corporate_1.png", span: "row-span-1 col-span-2", alt: "Corporate Briefing Session", category: "corporate" },
    { id: 5, src: "/projects/bts_2.png", span: "row-span-2 col-span-2", alt: "NGO Social Impact Story", category: "ngo" },
    { id: 6, src: "/projects/bts_3.png", span: "row-span-1 col-span-1", alt: "Authentic Rural Capture", category: "ngo" },
    { id: 7, src: "/projects/bts_4.png", span: "row-span-1 col-span-2", alt: "Multi-cam Corporate Setup", category: "corporate" },
    { id: 8, src: "/projects/bts_5.png", span: "row-span-2 col-span-1", alt: "Community Outreach Project", category: "ngo" },
    { id: 9, src: "/projects/bts_1.png", span: "row-span-1 col-span-1", alt: "Executive Interview Production", category: "corporate" },
];

const categories: { label: string; value: Category }[] = [
    { label: "All Work", value: "all" },
    { label: "Film", value: "film" },
    { label: "Corporate", value: "corporate" },
    { label: "NGO", value: "ngo" },
];

export default function Gallery() {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState<Category>("all");

    // Close on escape
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedId(null);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    const filteredImages = galleryImages.filter(
        (img) => activeCategory === "all" || img.category === activeCategory
    );

    const selectedImage = galleryImages.find((img) => img.id === selectedId);

    return (
        <section className="py-24 md:py-40 bg-zinc-950 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
            
            <div className="px-6 md:px-20 max-w-7xl mx-auto mb-16 md:mb-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div className="max-w-2xl">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-bold tracking-[0.8em] text-amber-500 uppercase block mb-6"
                        >
                            The Library
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]"
                        >
                            Our <span className="text-white/10 italic">Portfolio.</span>
                        </motion.h2>
                    </div>

                    {/* Category Filter Desktop */}
                    <div className="flex flex-wrap gap-x-8 gap-y-4">
                        {categories.map((cat, idx) => (
                            <button
                                key={cat.value}
                                onClick={() => setActiveCategory(cat.value)}
                                className={`text-[10px] uppercase font-black tracking-[0.3em] transition-all duration-300 relative group overflow-hidden ${
                                    activeCategory === cat.value ? "text-amber-500" : "text-white/30 hover:text-white"
                                }`}
                            >
                                {cat.label}
                                {activeCategory === cat.value && (
                                    <motion.div 
                                        layoutId="activeTab"
                                        className="h-px bg-amber-500 w-full mt-1"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Masonry-style Grid with Layout Animations */}
            <motion.div 
                layout
                className="px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[300px] gap-4 max-w-[1700px] mx-auto min-h-[600px]"
            >
                <AnimatePresence mode="popLayout">
                    {filteredImages.map((image, idx) => (
                        <motion.div
                            layout
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4 }}
                            className={`${image.span} relative group cursor-pointer overflow-hidden bg-zinc-900 border border-white/5 rounded-sm`}
                            onClick={() => setSelectedId(image.id)}
                        >
                            {/* Film Grain/Texture Overlay */}
                            <div className="absolute inset-0 z-10 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none mix-blend-overlay bg-[url('/noise.png')] bg-repeat" />
                            
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                            />

                            {/* Hover UI */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 z-20">
                                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-amber-500 mb-2 block">{image.category}</span>
                                <div className="flex justify-between items-center w-full">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white leading-tight">{image.alt}</span>
                                    <Maximize2 size={16} className="text-white" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Lightbox Portal */}
            <AnimatePresence>
                {selectedId && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-20 cursor-zoom-out"
                        onClick={() => setSelectedId(null)}
                    >
                        <button 
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedId(null)}
                        >
                            <X size={32} />
                        </button>
                        
                        <motion.div
                            layoutId={selectedId.toString()}
                            className="relative max-w-full max-h-full flex items-center justify-center shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage?.src}
                                alt={selectedImage?.alt}
                                className="max-w-full max-h-[85vh] object-contain border border-white/10"
                            />
                            <div className="absolute bottom-[-50px] left-0 right-0 text-center flex flex-col gap-1">
                                <span className="text-[8px] font-black uppercase tracking-[0.5em] text-amber-500">
                                    {selectedImage?.category}
                                </span>
                                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/60">
                                    {selectedImage?.alt}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
