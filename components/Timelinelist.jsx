"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaBookOpen,
  FaUniversity,
  FaSchool,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa";

// Pick an icon from the text so each entry feels different
const getIcon = (item, type) => {
  const text = `${item.title} ${item.subtitle}`.toLowerCase();
  if (text.includes("personal projects")) return <FaCode />;
  if (text.includes("university")) return <FaUniversity />;
  if (text.includes("youtube") || text.includes("freecodecamp"))
    return <FaLaptopCode />;
  if (text.includes("college") || text.includes("vidyalaya"))
    return <FaSchool />;
  return type === "education" ? <FaGraduationCap /> : <FaBookOpen />;
};

// Cursor-following spotlight
const trackMouse = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
};

/**
 * items: [{ duration, title, subtitle }]
 * type: "experience" | "education"
 */
export default function TimelineList({ items, type = "experience" }) {
  return (
    <ul className="relative flex flex-col gap-6 py-2 pl-12 pr-3 text-left">
      {/* the vertical line draws itself in */}
      <motion.span
        aria-hidden="true"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute left-[15px] top-4 bottom-4 w-[2px] origin-top bg-gradient-to-b from-accent via-accent/40 to-transparent"
      />

      {items.map((item, index) => {
        const current = /present/i.test(item.duration);
        return (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            className="relative"
          >
            {/* timeline node */}
            <span className="absolute -left-12 top-5 w-8 h-8 rounded-full bg-primary border-2 border-accent text-accent text-sm flex items-center justify-center z-10">
              {current && (
                <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
              )}
              <span className="relative">{getIcon(item, type)}</span>
            </span>

            {/* card */}
            <div
              onMouseMove={trackMouse}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#232329]/80 p-5 transition-all duration-500 hover:border-accent/50 hover:translate-x-1.5"
            >
              {/* spotlight */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(260px circle at var(--x,50%) var(--y,50%), rgba(0,255,153,0.12), transparent 65%)",
                }}
              />
              {/* left accent bar */}
              <span className="absolute left-0 top-0 h-full w-[3px] bg-accent origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />

              <div className="relative flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full text-xs text-accent border border-accent/30 bg-accent/10">
                    {item.duration}
                  </span>
                  {current && (
                    <span className="text-xs text-white/60">· Current</span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors duration-500">
                  {item.title}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                  <p className="text-white/60">{item.subtitle}</p>
                </div>
              </div>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
}