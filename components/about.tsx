"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My name is Ashok Manjhu and I am a full-stack developer with expertise
        in the MERN stack{" "}
        <span className="font-medium">
          (MongoDB, Express.js, React.js, and Node.js)
        </span>
        . I am also well-versed in HTML, CSS, and JavaScript and have a strong
        passion for creating dynamic and engaging web applications. I have a
        consistent track record of delivering high-quality work and I am always
        eager to learn new technologies and skills. I have experience in
        developing web application using{" "}
        <span className="font-medium">MERN stack</span> and also have a good
        knowledge of front-end technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and play cricket. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am always
        looking for new opportunities to expand my skills and knowledge and I
        would love to hear from you if you have any openings or projects that
        you think would be a good fit for me.
      </p>
    </motion.section>
  );
}
