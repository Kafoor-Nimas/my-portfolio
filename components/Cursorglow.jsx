"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

// Soft accent glow that trails the cursor (hidden on touch devices).
export default function CursorGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.6 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - 150);
      y.set(e.clientY - 150);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: sx, y: sy }}
      className="hidden md:block fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-0 bg-accent/10 blur-[90px]"
    />
  );
}
