"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaPaperPlane,
} from "react-icons/fa";
import Socials from "@/components/Socials";

const ADDRESS = "129/5 Manikkampitiya, Kaduruwela, Polonnaruwa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+94) 778945679",
    href: "tel:+94778945679",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "nimaskafoor@gmail.com",
    href: "mailto:nimaskafoor@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: ADDRESS,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`,
    external: true,
  },
];

const EMPTY = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

// Cursor-following spotlight
const trackMouse = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
};

const container = {
  hidden: {},
  show: { transition: { delayChildren: 2.4, staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  const [formData, setFormData] = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    if (
      !formData.firstname.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setError("Please fill in your first name, email and message.");
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_n4erhh9",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_rxjd2vb",
        { ...formData },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "0ffJPw6KySQCYSvH2",
      );
      setSuccess(true);
      setFormData(EMPTY);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-6">
      <div className="container mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col xl:flex-row gap-8"
        >
          {/* ---------- form ---------- */}
          <motion.div variants={item} className="xl:w-[58%]">
            <form
              onSubmit={handleSubmit}
              onMouseMove={trackMouse}
              noValidate
              className="group relative overflow-hidden flex flex-col gap-6 p-8 xl:p-10 rounded-2xl border border-white/10 bg-[#27272c]/80"
            >
              {/* spotlight */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(380px circle at var(--x,50%) var(--y,50%), rgba(0,255,153,0.09), transparent 65%)",
                }}
              />
              {/* top accent line */}
              <span className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-accent via-accent/40 to-transparent" />

              <div className="relative flex flex-col gap-4">
                <span className="self-start inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm text-accent border border-accent/30 bg-accent/10">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inset-0 rounded-full bg-accent animate-ping" />
                    <span className="relative w-2 h-2 rounded-full bg-accent" />
                  </span>
                  Available for internships &amp; freelance
                </span>
                <h3 className="text-4xl xl:text-5xl font-bold text-white">
                  Let's work <span className="text-accent">together</span>
                </h3>
                <p className="text-white/60">
                  Whether you have a question, a project idea, or just want to
                  say hi, my inbox is always open!
                </p>
              </div>

              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname *"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address *"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <Select
                  value={formData.service}
                  onValueChange={(value) =>
                    setFormData({ ...formData, service: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="Fullstack Web Development">
                        Fullstack Web Development
                      </SelectItem>
                      <SelectItem value="Frontend Development">
                        Frontend Development
                      </SelectItem>
                      <SelectItem value="Backend & API Development">
                        Backend & API Development
                      </SelectItem>
                      <SelectItem value="Database Design & Management">
                        Database Design & Management
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <Textarea
                className="relative h-[180px]"
                name="message"
                placeholder="Type your message here. *"
                value={formData.message}
                onChange={handleChange}
              />

              <AnimatePresence mode="wait">
                {success && (
                  <motion.p
                    key="ok"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="relative flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 text-accent text-sm"
                  >
                    <FaCheckCircle /> Message sent successfully! I'll get back
                    to you soon.
                  </motion.p>
                )}
                {error && (
                  <motion.p
                    key="err"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="relative rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-red-400 text-sm"
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>

              <Button
                type="submit"
                size="md"
                className="relative max-w-48 flex items-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send message <FaPaperPlane className="text-sm" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* ---------- contact info ---------- */}
          <div className="flex-1 flex flex-col justify-center gap-5">
            <motion.h4
              variants={item}
              className="text-white/50 text-sm uppercase tracking-widest"
            >
              Contact details
            </motion.h4>

            {info.map((c) => (
              <motion.div key={c.title} variants={item}>
                <a
                  href={c.href}
                  {...(c.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-5 rounded-xl border border-white/10 bg-[#27272c]/80 p-4 xl:p-5 transition-all duration-500 hover:border-accent/50 hover:translate-x-1.5"
                >
                  <div className="shrink-0 w-[52px] h-[52px] xl:w-[64px] xl:h-[64px] rounded-lg bg-accent/10 text-accent flex items-center justify-center text-2xl group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                    {c.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-white/50 text-xs uppercase tracking-wider">
                      {c.title}
                    </p>
                    <h3 className="text-lg xl:text-xl break-words">
                      {c.description}
                    </h3>
                  </div>
                </a>
              </motion.div>
            ))}

            <motion.div variants={item} className="pt-2">
              <p className="text-white/50 text-sm mb-4">Find me online</p>
              <Socials
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
