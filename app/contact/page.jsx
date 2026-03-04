"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
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
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+94) 778945679" },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "nimaskafoor@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "129/5 Manikkampitiya, Kaduruwela, Polonnaruwa",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      await emailjs.send(
        "service_n4erhh9", // replace with your Service ID
        "template_rxjd2vb", // replace with your Template ID
        {
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        "0ffJPw6KySQCYSvH2", // replace with your Public Key
      );
      setSuccess(true);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I'm currently open to internship opportunities and freelance
                projects. Whether you have a question, a project idea, or just
                want to say hi — my inbox is always open!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
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
                  placeholder="Email address"
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
              <Select
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
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
              />

              {/* Success / Error messages */}
              {success && (
                <p className="text-green-400 text-sm">
                  Message sent successfully!
                </p>
              )}
              {error && (
                <p className="text-red-400 text-sm">
                  Something went wrong. Please try again.
                </p>
              )}

              <Button
                size="md"
                className="max-w-40"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
