"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaUser,
} from "react-icons/fa";

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
import { FiDownload } from "react-icons/fi";

import TimelineList from "@/components/Timelinelist";
import AboutSection from "@/components/Aboutsection";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// About data
const about = {
  title: "About me",
  // Put your photo in public/assets/ and set the path here.
  // If the file is missing, a green ring with your initial is shown instead.
  photo: "/assets/photo2.jpeg",
  description:
    "I'm a Fullstack Developer and a final-year BICT undergraduate at the University of Kelaniya, currently working as a Software Engineer Intern at Apptron Solutions. I specialize in the MERN stack and Next.js, and I'm looking for an Associate / Junior Software Engineer role where I can keep growing and contribute to real products.",

  focus: ["MERN Stack", "Next.js", "TypeScript", "REST APIs", "PostgreSQL"],
  currently: {
    role: "Software Engineer Intern",
    place: "Apptron Solutions · Remote",
  },
  lookingFor: "Associate / Junior Software Engineer",
  facts: [
    "Final-year BICT student",
    "Software Engineer Intern",
    "MERN & Next.js",
  ],
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
    "Hands-on experience building and shipping full-stack web applications with the MERN stack and Next.js.",
  items: [
    {
      subtitle: "Apptron Solutions",
      title: "Software Engineer Intern",
      duration: "Sep 2026 - Present",
      location: "Remote · Jaffna, Sri Lanka",
      description:
        "Developing full-stack features with React, Next.js, Node.js and MongoDB.",
      // Add 2-3 real achievements here and they appear as bullets, e.g.:
      // points: ["Built a REST API for ...", "Developed responsive pages for ..."],
      tags: ["React", "Next.js", "Node.js", "MongoDB"],
    },
    {
      subtitle: "Personal Projects",
      title: "Full-Stack Developer",
      duration: "2023 - Present",
      description:
        "Built and deployed full-stack applications, including e-commerce, booking and AI-powered platforms, with authentication, payments and admin dashboards.",
      tags: ["MERN", "Next.js", "PostgreSQL", "Stripe"],
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

// Skills data, grouped
const skills = {
  title: "My skills",
  description:
    "Technologies and tools I use to build full-stack web applications and modern user interfaces.",
  groups: [
    {
      label: "Frontend",
      list: [
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3 />, name: "CSS3" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      ],
    },
    {
      label: "Backend",
      list: [
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express.js" },
      ],
    },
    {
      label: "Database",
      list: [
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiMongoose />, name: "Mongoose" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
      ],
    },
    {
      label: "Tools",
      list: [{ icon: <SiGithub />, name: "GitHub" }],
    },
  ],
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const tabs = [
  { value: "experience", label: "Experience", icon: <FaBriefcase /> },
  { value: "education", label: "Education", icon: <FaGraduationCap /> },
  { value: "skills", label: "Skills", icon: <FaCode /> },
  { value: "about", label: "About me", icon: <FaUser /> },
];

const Resume = () => {
  let skillIndex = 0; // keeps the pop-in animation staggered across groups

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-16"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* left column: tabs + CV button */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.6, duration: 0.5 },
            }}
            className="w-full max-w-[380px] mx-auto xl:mx-0 flex flex-col gap-8"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              {tabs.map((t) => (
                <TabsTrigger key={t.value} value={t.value}>
                  <span className="flex items-center justify-center xl:justify-start gap-3">
                    {t.icon}
                    {t.label}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            <a
              href="/assets/cv/Nimas_Kafoor_CV.pdf"
              download="Nimas_Kafoor_CV.pdf"
              className="w-full"
            >
              <Button
                size="lg"
                className="w-full uppercase flex items-center justify-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
            </a>
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

                <div className="flex flex-col gap-8">
                  {skills.groups.map((group) => (
                    <div key={group.label} className="flex flex-col gap-4">
                      {/* group heading */}
                      <div className="flex items-center gap-4">
                        <h4 className="text-sm uppercase tracking-widest text-accent">
                          {group.label}
                        </h4>
                        <span className="h-px flex-1 bg-white/10" />
                      </div>

                      <ul className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                        {group.list.map((skill) => {
                          const i = skillIndex++;
                          return (
                            <motion.li
                              key={skill.name}
                              initial={{ opacity: 0, scale: 0.7 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: 0.1 + i * 0.05,
                                type: "spring",
                                stiffness: 200,
                                damping: 15,
                              }}
                              whileHover={{ y: -6, scale: 1.05 }}
                              className="group flex h-[110px] flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-[#232329] hover:border-accent/50 transition-colors"
                            >
                              <div className="text-4xl group-hover:text-accent transition-colors duration-300">
                                {skill.icon}
                              </div>
                              <span className="text-xs text-white/60 group-hover:text-white transition-colors">
                                {skill.name}
                              </span>
                            </motion.li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
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
