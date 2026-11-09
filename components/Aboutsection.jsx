"use client";

import { motion } from "framer-motion";
import {
  FaUser,
  FaPhoneAlt,
  FaGlobeAsia,
  FaEnvelope,
  FaUniversity,
  FaGraduationCap,
  FaBriefcase,
  FaLanguage,
} from "react-icons/fa";

const ICONS = {
  Name: <FaUser />,
  Phone: <FaPhoneAlt />,
  Nationality: <FaGlobeAsia />,
  Email: <FaEnvelope />,
  University: <FaUniversity />,
  Degree: <FaGraduationCap />,
  Freelance: <FaBriefcase />,
  Languages: <FaLanguage />,
};

// Make phone and email clickable
const getHref = (name, value) => {
  if (name === "Email") return `mailto:${value}`;
  if (name === "Phone") return `tel:${value.replace(/[^\d+]/g, "")}`;
  return null;
};

export default function AboutSection({ about }) {
  return (
    <div className="flex flex-col gap-8 text-left">
      {/* intro */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-5 items-center xl:items-start text-center xl:text-left"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm text-accent border border-accent/30 bg-accent/10">
          <span className="relative flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-accent animate-ping" />
            <span className="relative w-2 h-2 rounded-full bg-accent" />
          </span>
          Open to full-time Software Engineer roles
        </span>
        <h3 className="text-4xl font-bold">{about.title}</h3>
        <p className="[640px] text-white/60 border-l-2 border-accent/60 pl-5 text-left">
          {about.description}
        </p>
      </motion.div>

      {/* info cards */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[760px] mx-auto xl:mx-0 w-full">
        {about.info.map((item, index) => {
          const href = getHref(item.fieldName, item.fieldValue);
          const isLanguages = item.fieldName === "Languages";
          const isFreelance = item.fieldName === "Freelance";

          const value = isLanguages ? (
            <div className="flex flex-wrap gap-2 mt-1">
              {item.fieldValue.split(",").map((l) => (
                <span
                  key={l}
                  className="px-2.5 py-0.5 rounded-full text-sm text-accent border border-accent/30 bg-accent/5"
                >
                  {l.trim()}
                </span>
              ))}
            </div>
          ) : (
            <span
              className={`text-lg break-words ${
                isFreelance ? "text-accent" : "text-white"
              }`}
            >
              {item.fieldValue}
            </span>
          );

          const content = (
            <>
              <div className="shrink-0 w-12 h-12 rounded-lg bg-accent/10 text-accent text-xl flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                {ICONS[item.fieldName]}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs uppercase tracking-wider text-white/50">
                  {item.fieldName}
                </span>
                {value}
              </div>
            </>
          );

          const cardClass =
            "group flex items-center gap-4 rounded-xl border border-white/10 bg-[#232329]/80 p-4 transition-all duration-500 hover:border-accent/50";

          return (
            <motion.li
              key={item.fieldName}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.07, duration: 0.45 }}
              whileHover={{ y: -4 }}
              className={isLanguages ? "sm:col-span-2" : ""}
            >
              {href ? (
                <a href={href} className={cardClass}>
                  {content}
                </a>
              ) : (
                <div className={cardClass}>{content}</div>
              )}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
