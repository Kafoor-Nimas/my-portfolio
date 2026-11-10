"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { FaLayerGroup, FaDesktop, FaServer, FaDatabase } from "react-icons/fa";
import TiltCard from "@/components/Tiltcard";
import { Button } from "@/components/ui/button";

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

// Edit these to match how you really work
const steps = [
  { title: "Plan", text: "Understand the requirements, define the scope and model the data." },
  { title: "Design", text: "Sketch the flows and build a clean, responsive interface." },
  { title: "Build", text: "Develop the frontend, REST APIs and database layer." },
  { title: "Ship", text: "Test, deploy and keep improving from feedback." },
];

const container = {
  hidden: {},
  show: { transition: { delayChildren: 2.4, staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: "easeOut" },
};

// Spotlight follows the cursor inside the card
const trackMouse = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
};

const Services = () => {
  return (
    <section className="flex flex-col justify-center py-12 xl:py-16 overflow-x-clip">
      <div className="container mx-auto">
        {/* ---------- heading ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.7, ease: "easeOut" }}
          className="text-center xl:text-left mb-12 xl:mb-16"
        >
          <span className="inline-block mb-3 text-sm uppercase tracking-widest text-accent">
            What I do
          </span>
          <h1 className="text-4xl xl:text-6xl font-bold leading-tight">
            From idea to <span className="text-accent">deployment</span>
          </h1>
          <p className="mt-4 max-w-[560px] text-white/60 mx-auto xl:mx-0">
            I design, build and ship complete web applications, covering the
            interface, the API and the database.
          </p>
        </motion.div>

        {/* ---------- service cards ---------- */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8"
        >
          {services.map((s, i) => (
            <motion.div key={s.num} variants={item}>
              {/* gentle idle float, each card on its own rhythm */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5 + i * 0.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full"
              >
                <TiltCard max={6} className="h-full">
                  {/* outer shell: a light beam travels around the border on hover */}
                  <div className="group relative h-full overflow-hidden rounded-2xl bg-white/10 p-[1px]">
                    <motion.span
                      aria-hidden="true"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      style={{
                        x: "-50%",
                        y: "-50%",
                        background:
                          "conic-gradient(from 0deg, transparent 0 70%, #00ff99 88%, transparent 100%)",
                      }}
                      className="absolute left-1/2 top-1/2 w-[200%] aspect-square opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    <div
                      onMouseMove={trackMouse}
                      className="relative h-full overflow-hidden rounded-[15px] bg-[#27272c] p-8 xl:p-10 flex flex-col gap-5"
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
                        <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent text-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-primary group-hover:rotate-[10deg] group-hover:scale-110 transition-all duration-500">
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
                          <motion.li
                            key={t}
                            whileHover={{ y: -3, scale: 1.06 }}
                            className="px-3 py-1 rounded-full text-xs text-accent border border-accent/30 bg-accent/5 cursor-default"
                          >
                            {t}
                          </motion.li>
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
                  </div>
                </TiltCard>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* ---------- how I work ---------- */}
        <div className="mt-20 xl:mt-28">
          <motion.div {...reveal} className="text-center mb-12">
            <span className="inline-block mb-3 text-sm uppercase tracking-widest text-accent">
              My process
            </span>
            <h2 className="text-3xl xl:text-4xl font-bold">How I work</h2>
          </motion.div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {/* connecting line draws itself across (desktop) */}
            <motion.span
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="hidden md:block absolute top-[28px] left-[12.5%] right-[12.5%] h-[2px] origin-left bg-gradient-to-r from-accent via-accent/50 to-accent"
            />

            {steps.map((st, i) => (
              <motion.div
                key={st.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                className="relative flex flex-col items-center text-center gap-3"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent bg-primary text-accent text-lg font-bold">
                  <span className="absolute inset-0 rounded-full bg-accent/30 animate-ping [animation-duration:2.5s]" />
                  <span className="relative">{i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold">{st.title}</h3>
                <p className="max-w-[220px] text-sm text-white/60">{st.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ---------- CTA ---------- */}
        <motion.div
          {...reveal}
          className="relative mt-20 xl:mt-28 overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-[#27272c]/70 to-[#27272c]/70 px-6 py-12 xl:px-16 text-center"
        >
          <motion.div
            aria-hidden="true"
            animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-[90px]"
          />
          <h2 className="relative text-3xl xl:text-4xl font-bold mb-4">
            Have a project in mind?
          </h2>
          <p className="relative max-w-[520px] mx-auto text-white/60 mb-8">
            Tell me what you want to build and let's talk about how I can help.
          </p>
          <Link href="/contact" className="relative inline-block">
            <Button size="lg" className="uppercase flex items-center gap-2">
              <span>Start a conversation</span>
              <BsArrowUpRight className="text-xl" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;