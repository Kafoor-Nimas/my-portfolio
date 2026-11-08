"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiGithub,
  SiMongoose,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";

import TimelineList from "@/components/Timelinelist";
import AboutSection from "@/components/Aboutsection";

// About data
const about = {
  title: "About me",
  description:
    "I'm a passionate Fullstack Developer and a BICT undergraduate at the University of Kelaniya. I specialize in the MERN stack and I'm currently expanding my skills in Next.js and TypeScript. I'm actively looking for an internship opportunity to grow and contribute.",
  info: [
    { fieldName: "Name", fieldValue: "Nimas" },
    { fieldName: "Phone", fieldValue: "(+94) 778945679" },
    { fieldName: "Nationality", fieldValue: "Sri Lankan" },
    { fieldName: "Email", fieldValue: "nimaskafoor@gmail.com" },
    { fieldName: "University", fieldValue: "University of Kelaniya" },
    { fieldName: "Degree", fieldValue: "BICT (Undergraduate)" },
    
    { fieldName: "Languages", fieldValue: "Tamil,Sinhala,English" },
  ],
};

// Experience data
const experience = {
  title: "My Experience",
  description:
    "I'm a fresher actively seeking my first internship. While I don't have formal work experience yet, I have built several personal projects using the MERN stack, Next.js, and TypeScript.",
  items: [
    {
      subtitle: "Personal Projects",
      title: "Fullstack Developer",
      duration: "2023 - Present",
    },
    {
      subtitle: "Great Stack",
      title: "Self-taught — MERN Stack",
      duration: "2025",
    },
    {
      subtitle: "JS Mastery",
      title: "Self-taught — React & Next.js",
      duration: "2024",
    },
    {
      subtitle: "freeCodeCamp",
      title: "Self-taught — Web Development",
      duration: "2022 - 2024",
    },
  ],
};

// Education data
const education = {
  title: "My education",
  description:
    "Currently pursuing a Bachelor of Information Communication Technology at the University of Kelaniya, while continuously learning through reputable online platforms.",
  items: [
    {
      subtitle: "University of Kelaniya",
      title: "BICT (Undergraduate)",
      duration: "2023 - Present",
    },
    {
      subtitle: "Great Stack (YouTube)",
      title: "MERN Stack Development",
      duration: "2025",
    },
    {
      subtitle: "JS Mastery (YouTube)",
      title: "React & Next.js Development",
      duration: "2024",
    },
    {
      subtitle: "freeCodeCamp",
      title: "Responsive Web Design & JavaScript",
      duration: "2022 - 2024",
    },
    {
      subtitle: "Polonnaruwa Muslim National College",
      title: "G.C.E. Advanced Level (A/L)",
      duration: "2019 - 2021",
    },
    {
      subtitle: "Polonnaruwa Almina Muslim Kanista Vidyalaya",
      title: "G.C.E. Ordinary Level (O/L) — Grade 1 to 11",
      duration: "2008 - 2019",
    },
  ],
};

// Skills data
const skills = {
  title: "My skills",
  description:
    "Technologies and tools I use to build full-stack web applications and modern user interfaces.",
  skillList: [
    { icon: <FaHtml5 />, name: "html 5" },
    { icon: <FaCss3 />, name: "css 3" },
    { icon: <FaJs />, name: "javascript" },
    { icon: <FaReact />, name: "react" },
    { icon: <SiNextdotjs />, name: "next.js" },
    { icon: <SiTailwindcss />, name: "tailwind css" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaNodeJs />, name: "node.js" },
    { icon: <SiExpress />, name: "express.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMongoose />, name: "Mongoose" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiGithub />, name: "GitHub" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.6, duration: 0.5 },
            }}
            className="w-full max-w-[380px] mx-auto xl:mx-0"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>
          </motion.div>

          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <motion.div {...fadeUp} className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                </motion.div>
                <ScrollArea className="h-[400px]">
                  <TimelineList items={experience.items} type="experience" />
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <motion.div {...fadeUp} className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                </motion.div>
                <ScrollArea className="h-[400px]">
                  <TimelineList items={education.items} type="education" />
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <motion.div
                  {...fadeUp}
                  className="flex flex-col gap-[30px] text-center xl:text-left"
                >
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </motion.div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.1 + index * 0.05,
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                      whileHover={{ scale: 1.08, rotate: -3 }}
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group border border-transparent hover:border-accent/40 transition-colors">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* about me */}
            <TabsContent value="about" className="w-full">
              <AboutSection about={about} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
