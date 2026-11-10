"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaUniversity,
  FaBriefcase,
  FaLanguage,
  FaCode,
  FaBullseye,
  FaGlobeAsia,
} from "react-icons/fa";

// Cursor-following spotlight
const trackMouse = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
};

// One bento tile: glass card with spotlight, staggered entrance and lift on hover
function Card({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      onMouseMove={trackMouse}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#232329]/80 p-5 transition-colors duration-500 hover:border-accent/50 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(260px circle at var(--x,50%) var(--y,50%), rgba(0,255,153,0.12), transparent 65%)",
        }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}

const Label = ({ icon, children }) => (
  <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-widest text-white/50">
    <span className="text-accent text-sm">{icon}</span>
    {children}
  </div>
);

const Pill = ({ children }) => (
  <li className="px-3 py-1 rounded-full text-xs text-accent border border-accent/30 bg-accent/5">
    {children}
  </li>
);

// Photo with a light beam travelling around the border and floating tags
function PhotoCard({ src, name }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative md:col-span-2 md:row-span-2 min-h-[340px] overflow-hidden rounded-2xl bg-white/10 p-[2px]"
    >
      <motion.span
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        style={{
          x: "-50%",
          y: "-50%",
          background:
            "conic-gradient(from 0deg, transparent 0 60%, #00ff99 85%, transparent 100%)",
        }}
        className="absolute left-1/2 top-1/2 w-[220%] aspect-square"
      />

      <div className="relative h-full min-h-[336px] overflow-hidden rounded-[14px] bg-[#232329]">
        {src && !failed ? (
          <Image
            src={src}
            alt={name}
            fill
            sizes="(min-width: 768px) 260px, 100vw"
            className="object-cover object-top"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-accent">
            {name?.[0] || "N"}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* floating tags */}
        <motion.span
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs text-white border border-white/20 bg-black/40 backdrop-blur"
        >
          Final-year BICT
        </motion.span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs text-accent border border-accent/40 bg-black/50 backdrop-blur"
        >
          MERN &amp; Next.js
        </motion.span>
      </div>
    </motion.div>
  );
}

export default function AboutSection({ about }) {
  const get = (field) =>
    about.info.find((i) => i.fieldName === field)?.fieldValue || "";

  const name = get("Name") || "Nimas";
  const email = get("Email");
  const phone = get("Phone");
  const languages = get("Languages")
    .split(",")
    .map((l) => l.trim())
    .filter(Boolean);

  // Optional fields in the `about` object, with sensible defaults
  const focus = about.focus || [
    "MERN Stack",
    "Next.js",
    "TypeScript",
    "REST APIs",
    "PostgreSQL",
  ];
  const currently = about.currently || {
    role: "Software Engineer Intern",
    place: "Apptron Solutions · Remote",
  };
  const lookingFor = about.lookingFor || "Associate / Junior Software Engineer";

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 text-left">
      {/* photo */}
      <PhotoCard src={about.photo} name={name} />

      {/* intro */}
      <Card className="md:col-span-4 p-6 xl:p-7" delay={0.1}>
        <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs text-accent border border-accent/30 bg-accent/10">
          <span className="relative flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-accent animate-ping" />
            <span className="relative w-2 h-2 rounded-full bg-accent" />
          </span>
          Open to full-time Software Engineer roles
        </span>
        <h3 className="text-3xl xl:text-5xl font-bold leading-tight">
          Hi, I'm <span className="text-accent">{name}</span>
        </h3>
        <p className="mt-4 text-white/60">{about.description}</p>
      </Card>

      {/* currently */}
      <Card className="md:col-span-2" delay={0.2}>
        <Label icon={<FaBriefcase />}>Currently</Label>
        <p className="text-lg font-semibold">{currently.role}</p>
        <p className="mt-1 flex items-center gap-2 text-sm text-white/60">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          {currently.place}
        </p>
      </Card>

      {/* looking for */}
      <Card className="md:col-span-2" delay={0.3}>
        <Label icon={<FaBullseye />}>Looking for</Label>
        <p className="text-lg font-semibold">{lookingFor}</p>
        <p className="mt-1 text-sm text-white/60">Full-time role</p>
      </Card>

      {/* education */}
      <Card className="md:col-span-3" delay={0.4}>
        <Label icon={<FaUniversity />}>Education</Label>
        <p className="text-lg font-semibold">{get("University")}</p>
        <p className="mt-1 text-sm text-white/60">
          {get("Degree")} · Final year
        </p>
      </Card>

      {/* contact */}
      <Card className="md:col-span-3" delay={0.5}>
        <Label icon={<FaEnvelope />}>Get in touch</Label>
        <div className="flex flex-col gap-2">
          {email && (
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors break-all"
            >
              <FaEnvelope className="shrink-0 text-accent" /> {email}
            </a>
          )}
          {phone && (
            <a
              href={`tel:${phone.replace(/[^\d+]/g, "")}`}
              className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors"
            >
              <FaPhoneAlt className="shrink-0 text-accent" /> {phone}
            </a>
          )}
        </div>
      </Card>

      {/* languages + nationality */}
      <Card className="md:col-span-2" delay={0.6}>
        <Label icon={<FaLanguage />}>Languages</Label>
        <ul className="flex flex-wrap gap-2">
          {languages.map((l) => (
            <Pill key={l}>{l}</Pill>
          ))}
        </ul>
        {get("Nationality") && (
          <p className="mt-3 flex items-center gap-2 text-sm text-white/60">
            <FaGlobeAsia className="text-accent" /> {get("Nationality")}
          </p>
        )}
      </Card>

      {/* focus */}
      <Card className="md:col-span-4" delay={0.7}>
        <Label icon={<FaCode />}>Core focus</Label>
        <ul className="flex flex-wrap gap-2">
          {focus.map((f) => (
            <Pill key={f}>{f}</Pill>
          ))}
        </ul>
      </Card>
    </div>
  );
}
