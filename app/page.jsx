"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { BsArrowUpRight } from "react-icons/bs";
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiMongoose,
  SiGithub,
} from "react-icons/si";

import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import Typewriter from "@/components/Typewriter";
import TiltCard from "@/components/Tiltcard"; // match your file's exact casing
import HeroSceneClient from "@/components/three/HeroSceneClient";
import { Button } from "@/components/ui/button";

const tech = [
  { icon: <FaReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMongoose />, name: "Mongoose" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3 />, name: "CSS3" },
  { icon: <SiGithub />, name: "GitHub" },
];

const featured = [
  {
    title: "Online Food Ordering System",
    text: "Real-time menu search, JWT authentication, order tracking and a full admin dashboard.",
    stack: ["React", "Node.js", "MongoDB"],
    image: "/assets/work/foodOrder.jfif",
  },
  {
    title: "Instacart — Grocery Delivery (PERN)",
    text: "Customer ordering, an admin panel and a delivery partner dashboard on PostgreSQL.",
    stack: ["React", "Express", "PostgreSQL"],
    image: "/assets/work/instacart.jfif",
  },
  {
    title: "Awwwards — GSAP Animated Website",
    text: "An Awwwards-inspired site with scroll animations, clip-path effects, ScrollTrigger and text reveals.",
    stack: ["React", "GSAP", "Tailwind"],
    image: "/assets/work/gsap3.jfif",
  },
];

// Hero text: children rise in one after another (after the stair transition)
const heroContainer = {
  hidden: {},
  show: { transition: { delayChildren: 2.2, staggerChildren: 0.12 } },
};
const rise = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const SectionLabel = ({ children }) => (
  <span className="inline-block mb-3 text-sm uppercase tracking-widest text-accent">
    {children}
  </span>
);

const Home = () => {
  return (
    <section className="overflow-x-clip">
      {/* ================= HERO ================= */}
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-16">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="text-center xl:text-left order-2 xl:order-none"
          >
            <motion.span
              variants={rise}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full text-sm text-accent border border-accent/30 bg-accent/10"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-accent animate-ping" />
                <span className="relative w-2 h-2 rounded-full bg-accent" />
              </span>
              Open to full-time Software Engineer roles
            </motion.span>

            <motion.div variants={rise}>
              <Typewriter />
            </motion.div>

            <motion.h1 variants={rise} className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Nimas</span>
            </motion.h1>

            <motion.p
              variants={rise}
              className="max-w-[500px] mb-9 text-white/80"
            >
              I'm a full-stack developer and Software Engineer Intern at Apptron
              Solutions. I build fast, scalable, user-friendly web applications
              with the MERN stack and Next.js, and I'm looking for an Associate
              / Junior Software Engineer role.
            </motion.p>

            <motion.div
              variants={rise}
              className="flex flex-col xl:flex-row items-center gap-6 xl:gap-8"
            >
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/project">
                  <Button
                    size="lg"
                    className="uppercase flex items-center gap-2"
                  >
                    <span>View my work</span>
                    <BsArrowUpRight className="text-xl" />
                  </Button>
                </Link>
                <a
                  href="/assets/cv/Nimas_Kafoor_CV.pdf"
                  download="Nimas_Kafoor_CV.pdf"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>
              </div>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </motion.div>
          </motion.div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <HeroSceneClient />
          </div>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <Stats />

      {/* ================= TECH MARQUEE ================= */}
      <motion.div {...reveal} className="mt-16 xl:mt-24">
        <div className="container mx-auto text-center xl:text-left mb-8">
          <SectionLabel>Tech stack</SectionLabel>
          <h2 className="text-3xl xl:text-4xl font-bold">Tools I build with</h2>
        </div>
        <div
          className="overflow-hidden py-4"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, ease: "linear", repeat: Infinity }}
          >
            {[...tech, ...tech].map((t, i) => (
              <div
                key={i}
                className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-white/10 bg-[#27272c]/70 hover:border-accent/50 transition-colors duration-300"
              >
                <span className="text-3xl text-white/70 group-hover:text-accent transition-colors duration-300">
                  {t.icon}
                </span>
                <span className="text-white/70 whitespace-nowrap">
                  {t.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ================= FEATURED WORK ================= */}
      <div className="container mx-auto mt-20 xl:mt-28">
        <motion.div
          {...reveal}
          className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-4 mb-10 text-center xl:text-left"
        >
          <div>
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="text-3xl xl:text-4xl font-bold">
              Featured projects
            </h2>
          </div>
          <Link
            href="/project"
            className="inline-flex items-center justify-center gap-2 text-accent hover:gap-3 transition-all duration-300"
          >
            See all projects <BsArrowUpRight />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <motion.div
              key={p.title}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.12 }}
            >
              <TiltCard max={6} className="h-full">
                <Link
                  href="/project"
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#27272c]/70 transition-colors duration-500 hover:border-accent/50"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-contain object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-500">
                      {p.title}
                    </h3>
                    <p className="text-white/60 text-sm">{p.text}</p>
                    <ul className="flex flex-wrap gap-2 mt-auto pt-2">
                      {p.stack.map((s) => (
                        <li
                          key={s}
                          className="px-3 py-1 rounded-full text-xs text-accent border border-accent/30 bg-accent/5"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="container mx-auto mt-20 xl:mt-28 pb-16">
        <motion.div
          {...reveal}
          className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-[#27272c]/70 to-[#27272c]/70 px-6 py-12 xl:px-16 xl:py-16 text-center"
        >
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/15 blur-[90px]" />
          <h2 className="relative text-3xl xl:text-5xl font-bold mb-4">
            Let's build something <span className="text-accent">great</span>
          </h2>
          <p className="relative max-w-[560px] mx-auto text-white/60 mb-8">
            I'm looking for an Associate / Junior Software Engineer role where I
            can contribute to real products. If you're hiring, I'd love to talk.
          </p>
          <Link href="/contact" className="relative inline-block">
            <Button size="lg" className="uppercase flex items-center gap-2">
              <span>Get in touch</span>
              <BsArrowUpRight className="text-xl" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
