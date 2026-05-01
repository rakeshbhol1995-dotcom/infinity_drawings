"use client";

import React, { useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function Spotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 300 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      <motion.div
        className="absolute w-[1000px] h-[1000px] rounded-full"
        style={{
          left: smoothX,
          top: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle at center, rgba(245, 158, 11, 0.08) 0%, rgba(245, 158, 11, 0.03) 25%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
