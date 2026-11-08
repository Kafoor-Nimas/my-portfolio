"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import Image from "next/image";
import TiltCard from "@/components/Tiltcard";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Online Food Ordering System",
    description:
      "A MERN-stack e-commerce platform for online food ordering, featuring real-time menu search, JWT-secured authentication, order tracking, and a full admin dashboard for product/order management.",
    stack: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/foodOrder.png",
    live: "https://online-food-ordering-wheat-mu.vercel.app",
    githubLink:
      "https://github.com/Kafoor-Nimas/Online-Food-Ordering-System.git",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Instacart — Grocery Delivery App (PERN)",
    description:
      "A full-stack grocery delivery platform built with the PERN stack (PostgreSQL, Express, React, Node.js) featuring customer ordering, an admin panel, and a delivery partner dashboard.",
    stack: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "PostgreSQL" },
    ],
    image: "/assets/work/instacart.png",
    live: "https://instacart-client.vercel.app",
    githubLink: "https://github.com/Kafoor-Nimas/Instacart",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Servd — AI Recipe Platform",
    description:
      "An AI-powered recipe platform with pantry scanning using Google Gemini AI, recipe generation, PDF export, pro tier subscription, Clerk authentication, Arcjet rate limiting, and a Strapi CMS backend.",
    stack: [
      { name: "Next.js" },
      { name: "Strapi" },
      { name: "PostgreSQL" },
      { name: "Gemini AI" },
    ],
    image: "/assets/work/servd.png",
    live: "https://ai-recipe-servd.vercel.app",
    githubLink: "https://github.com/Kafoor-Nimas/AI-Recipe",
  },
  {
    num: "04",
    category: "fullstack",
    title: "E-Commerce — Full-Stack Shopping Platform",
    description:
      "A production-ready full-stack e-commerce platform with JWT auth, product management, cart, Stripe & COD payments, order tracking, and a dedicated admin panel for managing products and orders.",
    stack: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Stripe" },
    ],
    image: "/assets/work/ecommerce.png",
    live: "https://ecommerce-frontend-topaz-kappa.vercel.app",
    githubLink: "https://github.com/Kafoor-Nimas/ecommerce-app",
  },
  {
    num: "05",
    category: "fullstack",
    title: "SnapCut — Barbershop Booking Platform",
    description:
      "A full-stack barbershop appointment booking platform for Sri Lanka. Customers can browse barbers, book appointments, and manage bookings. Admins can manage barbers and appointments through a dedicated dashboard.",
    stack: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Cloudinary" },
    ],
    image: "/assets/work/snapcut.png",
    live: "https://snap-cut-frontend.vercel.app",
    githubLink: "https://github.com/Kafoor-Nimas/SnapCut",
  },
  {
    num: "06",
    category: "fullstack",
    title: "Grocery Delivery App",
    description:
      "A full-stack grocery delivery app with JWT auth, real-time cart, Stripe payments, Cloudinary image uploads, order management, and an admin panel — built with the MERN stack.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/greencart2.png",
    live: "https://grocerydelivery-zeta.vercel.app",
    githubLink: "https://github.com/Kafoor-Nimas/Grocery-Delivery",
  },
  {
    num: "07",
    category: "fullstack",
    title: "Nimas Estate — Real Estate Marketplace",
    description:
      "A full-stack real estate marketplace where users can list, browse, and manage properties for sale or rent. Features JWT auth, Google OAuth via Firebase, Redux Toolkit state management, Cloudinary image uploads, and advanced search & filter.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/nimas-estate2.png",
    live: "https://github.com/Kafoor-Nimas/mern-estate", // TODO: replace with the deployed URL
    githubLink: "https://github.com/Kafoor-Nimas/mern-estate",
  },
  {
    num: "08",
    category: "fullstack",
    title: "Car Rental — Vehicle Booking Platform",
    description:
      "A full-stack car rental platform where users can browse, search, and book vehicles. Features JWT auth, bcrypt security, Cloudinary image management, real-time availability, and smooth animations with Framer Motion.",
    stack: [
      { name: "React" },
      { name: "Tailwind" },
      { name: "Framer-Motion" },
      { name: "Express" },
    ],
    image: "/assets/work/car-rent.png",
    live: "https://car-rental-psi-one.vercel.app/cars",
    githubLink: "https://github.com/Kafoor-Nimas/CarRental",
  },
  {
    num: "09",
    category: "fullstack",
    title: "BookStore — Full-Stack Bookstore App",
    description:
      "A full-stack MERN bookstore with JWT auth, Firebase authentication, Redux Toolkit state management, full CRUD book management, protected admin routes, and a responsive UI built with Tailwind CSS.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind" },
      { name: "Express.js" },
      { name: "Firebase" },
    ],
    image: "/assets/work/book-store.png",
    live: "https://book-store-frontend-inky-iota.vercel.app",
    githubLink: "https://github.com/Kafoor-Nimas/book-store-mern-project",
  },
  {
    num: "10",
    category: "frontend",
    title: "Awwwards — GSAP Animated Website",
    description:
      "An Awwwards Site of the Day inspired website built with React and GSAP. Features advanced scroll animations, clip-path effects, ScrollTrigger, pinned elements, text reveal animations, and fully responsive design.",
    stack: [{ name: "React.js" }, { name: "GSAP" }, { name: "Tailwind CSS" }],
    image: "/assets/work/gsap3.png",
    live: "https://gsap-awwwards-website-alpha.vercel.app",
    githubLink: "https://github.com/Kafoor-Nimas/gsap-awwwards-website",
  },
  {
    num: "11",
    category: "fullstack",
    title: "Dev Events",
    description:
      "A full-stack event management platform built with Next.js and TypeScript. Features dynamic event discovery, full CRUD operations, Cloudinary image management, server-side rendering, and integrated PostHog analytics.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/dev-events.png",
    live: "https://dev-events-navy-omega.vercel.app/",
    githubLink: "https://github.com/Kafoor-Nimas/Dev_Events",
  },
  {
    num: "12",
    category: "frontend",
    title: "Edusity — College & University Website",
    description:
      "A modern, fully responsive College & University website built with React.js and CSS. Features Home, Program, About, Campus, Testimonials, and Contact pages.",
    stack: [{ name: "React.js" }, { name: "CSS" }],
    image: "/assets/work/edusity3.png",
    live: "https://edusity-seven-phi.vercel.app/",
    githubLink: "https://github.com/Kafoor-Nimas/edusity",
  },
];

const filters = ["all", "fullstack", "frontend"];

const hostOf = (url) => {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return url;
  }
};

const Work = () => {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(0);

  const list = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );

  const changeFilter = (f) => {
    setFilter(f);
    setActive(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goTo = (num) =>
    document
      .getElementById(`project-${num}`)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-12 overflow-clip"
    >
      {/* side dots: jump to a project and show where you are */}
      <nav
        aria-label="Project navigation"
        className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-30 flex-col gap-3"
      >
        {list.map((p, i) => (
          <button
            key={p.num}
            onClick={() => goTo(p.num)}
            aria-label={`Go to ${p.title}`}
            className="group relative flex items-center justify-end"
          >
            <span className="absolute right-6 whitespace-nowrap rounded-md bg-[#27272c] px-3 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {p.title}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === active
                  ? "w-3 h-3 bg-accent shadow-[0_0_12px_rgba(0,255,153,0.8)]"
                  : "w-2 h-2 bg-white/30 group-hover:bg-accent/70"
              }`}
            />
          </button>
        ))}
      </nav>

      <div className="container mx-auto px-4 xl:px-16">
        {/* filter pills */}
        <div className="flex flex-wrap justify-center xl:justify-start gap-3 mb-4">
          {filters.map((f) => {
            const count =
              f === "all"
                ? projects.length
                : projects.filter((p) => p.category === f).length;
            const on = filter === f;
            return (
              <button
                key={f}
                onClick={() => changeFilter(f)}
                className={`px-5 py-2 rounded-full text-sm capitalize transition-all duration-300 border ${
                  on
                    ? "bg-accent text-primary border-accent"
                    : "border-white/20 text-white/70 hover:border-accent hover:text-accent"
                }`}
              >
                {f} <span className="opacity-60">({count})</span>
              </button>
            );
          })}
        </div>

        {/* projects: scroll down to see the next one */}
        <div key={filter} className="flex flex-col">
          {list.map((p, index) => {
            const live = p.live && p.live !== p.githubLink;
            const flip = index % 2 === 1;
            const first = index === 0;

            return (
              <motion.article
                key={p.num}
                id={`project-${p.num}`}
                // marks the project crossing the middle of the screen as "current"
                onViewportEnter={() => setActive(index)}
                viewport={{ margin: "-50% 0px -50% 0px" }}
                className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16 items-center py-12 xl:py-20 border-b border-white/10 last:border-b-0 scroll-mt-28"
              >
                {/* ---------- info ---------- */}
                <motion.div
                  initial={{ opacity: 0, x: flip ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: first ? 2.4 : 0.1,
                  }}
                  className={`flex flex-col gap-6 order-2 ${
                    flip ? "xl:order-2" : "xl:order-1"
                  }`}
                >
                  <div className="flex items-end justify-between">
                    <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                      {p.num}
                    </div>
                    <span className="text-white/50 text-sm pb-2">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(list.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className="self-start px-3 py-1 rounded-full text-xs uppercase tracking-wider text-accent border border-accent/30 bg-accent/10">
                      {p.category}
                    </span>
                    <h2 className="text-3xl xl:text-[38px] font-bold leading-tight text-white">
                      {p.title}
                    </h2>
                  </div>

                  <p className="text-white/60">{p.description}</p>

                  <ul className="flex flex-wrap gap-2">
                    {p.stack.map((item) => (
                      <li
                        key={item.name}
                        className="px-3 py-1 rounded-full text-sm text-accent border border-accent/30 bg-accent/5"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-4">
                    {live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-primary font-medium transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_24px_rgba(0,255,153,0.35)]"
                      >
                        Live demo
                        <BsArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    <a
                      href={p.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white transition-all duration-300 hover:border-accent hover:text-accent"
                    >
                      <BsGithub className="text-lg" />
                      GitHub
                    </a>
                  </div>
                </motion.div>

                {/* ---------- preview ---------- */}
                <motion.div
                  initial={{ opacity: 0, y: 70, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: first ? 2.5 : 0.15,
                  }}
                  className={`order-1 ${flip ? "xl:order-1" : "xl:order-2"}`}
                >
                  <TiltCard max={5}>
                    <div
                      onClick={() => live && window.open(p.live, "_blank")}
                      className={`group relative overflow-hidden rounded-xl border border-white/10 bg-[#1c1c22] shadow-2xl shadow-black/40 ${
                        live ? "cursor-pointer" : ""
                      }`}
                    >
                      <div className="h-10 flex items-center gap-2 px-4 bg-[#27272c] border-b border-white/10">
                        <span className="w-3 h-3 rounded-full bg-red-400/80" />
                        <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                        <span className="w-3 h-3 rounded-full bg-green-400/80" />
                        <span className="ml-4 flex-1 truncate rounded-md bg-black/30 px-3 py-1 text-xs text-white/50">
                          {hostOf(live ? p.live : p.githubLink)}
                        </span>
                      </div>

                      <div className="relative h-[240px] sm:h-[340px] xl:h-[400px]">
                        <Image
                          src={p.image}
                          fill
                          alt={p.title}
                          priority={index === 0}
                          sizes="(min-width: 1280px) 50vw, 100vw"
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {live && (
                          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-primary text-sm font-medium">
                            Visit live site <BsArrowUpRight />
                          </span>
                        )}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
