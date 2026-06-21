const projects = [
  {
    num: "01",
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
    num: "02",
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
    num: "03",
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
    num: "04",
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
    num: "05",
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
    num: "06",
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
    num: "07",
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
    num: "08",
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
    num: "09",
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
    num: "10",
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
    num: "11",
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