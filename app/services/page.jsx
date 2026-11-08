"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { FaLayerGroup, FaDesktop, FaServer, FaDatabase } from "react-icons/fa";
import TiltCard from "@/components/Tiltcard";

const services = [
  {
    num: "01",
    icon: <FaLayerGroup />,
    title: "Fullstack Web Development",
    description:
      "Complete web applications from frontend to backend, fast, scalable and production-ready.",
    tags: ["React", "Next.js", "Node.js", "Express"],
  },
  {
    num: "02",
    icon: <FaDesktop />,
    title: "Frontend Development",
    description:
      "Responsive, modern interfaces with smooth animations and a focus on performance and user experience.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
  },
  {
    num: "03",
    icon: <FaServer />,
    title: "Backend & API Development",
    description:
      "Robust REST APIs with secure authentication and clean database integration.",
    tags: ["Node.js", "Express", "JWT", "Mongoose"],
  },
  {
    num: "04",
    icon: <FaDatabase />,
    title: "Database Design & Management",
    description:
      "Efficient, reliable and scalable data storage with both SQL and NoSQL databases.",
    tags: ["MongoDB", "PostgreSQL"],
  },
];

const container = {
  hidden: {},
  show: { transition: { delayChildren: 2.4, staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Spotlight follows the cursor inside the card
const trackMouse = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
};

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8"
        >
          {services.map((s) => (
            <motion.div key={s.num} variants={item}>
              <TiltCard max={6} className="h-full">
                <div
                  onMouseMove={trackMouse}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#27272c]/70 p-8 xl:p-10 flex flex-col gap-5 transition-colors duration-500 hover:border-accent/50"
                >
                  {/* cursor spotlight */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(320px circle at var(--x,50%) var(--y,50%), rgba(0,255,153,0.14), transparent 65%)",
                    }}
                  />

                  {/* top row */}
                  <div className="relative flex items-start justify-between">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent text-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                      {s.icon}
                    </div>
                    <span className="text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500">
                      {s.num}
                    </span>
                  </div>

                  <h2 className="relative text-3xl xl:text-[34px] font-bold leading-tight text-white group-hover:text-accent transition-colors duration-500">
                    {s.title}
                  </h2>
                  <p className="relative text-white/60">{s.description}</p>

                  {/* tags */}
                  <ul className="relative flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li
                        key={t}
                        className="px-3 py-1 rounded-full text-xs text-accent border border-accent/30 bg-accent/5"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="relative mt-auto inline-flex items-center gap-2 text-white/80 group-hover:text-accent transition-colors duration-500"
                  >
                    <span>Discuss this service</span>
                    <BsArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                  </Link>

                  {/* animated bottom line */}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-700" />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
