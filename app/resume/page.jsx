"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";

// About data

const about = {
  title: "About me",
  Description:
    "I'm passionate about web development and design, with a strong focus on creating user-friendly and visually appealing websites. I ",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Nimas",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+94) 778945679",
    },
    {
      fieldName: "Experience",
      fieldValue: "12+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "nimas.01",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Sri Lankan",
    },
    {
      fieldName: "Email",
      fieldValue: "nimaskafoor@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Tamil, Sinhala, English",
    },
  ],
};

// Experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have over 12 years of experience in web development, specializing in front-end technologies and design.",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2018 -2019",
    },
    {
      company: "Software Development Firm",
      position: "Junior Developer",
      duration: "2017 - 2018",
    },
  ],
};

// Education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi officiis corrupti quae.",
  items: [
    {
      institution: "Online Course Platform",
      position: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codecademy",
      position: "Front-end Track",
      duration: "2022",
    },
    {
      institution: "Online Course",
      position: "Programming Course",
      duration: "2020-2021",
    },
    {
      institution: "Tech Institute",
      position: "Certified Web Developer",
      duration: "2019",
    },
    {
      institution: "Design School",
      position: "Diploma in Graphic Design",
      duration: "2016 - 2018",
    },
    {
      institution: "Community Collage",
      position: "Associate Degree in Computer Science",
      duration: "2014 - 2016",
    },
  ],
};

// Skills data
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi officiis corrupti quae.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};



const Resume = () => {
  return <div>Resume</div>;
};

export default Resume;
