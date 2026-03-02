"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
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
    num: "02",
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
    live: "https://github.com/Kafoor-Nimas/mern-estate",
    githubLink: "https://github.com/Kafoor-Nimas/mern-estate",
  },
  {
    num: "03",
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
    num: "04",
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
    num: "05",
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
    num: "06",
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
    num: "07",
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

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      {/* <div className="container mx-auto"> */}
      <div className="container mx-auto px-4 xl:px-16">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* To remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          alt=""
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
