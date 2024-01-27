import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    company: "Fargowiz Pvt. Ltd.",
    location: "Jaipur, Rajasthan",
    description:
      "I'm working as a full-stack developer. My stack includes React, Ionic, React Native, Node.js, Express.js, SQL, Next.js, TypeScript, and MongoDB.",
    icon: React.createElement(FaReact),
    date: "March 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Meetup App",
    description:
      "With this app, users can add new meetup places, view existing meetup places, and RSVP to events. The app features a clean and user-friendly interface, making it easy for users to navigate and find the information they need.",
    liveLink: "https://meetup-react-project.vercel.app/",
    codeLink: "https://github.com/dev-ashokmanjhu/meetup-app-frontend",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "https://res.cloudinary.com/dv3797jyv/image/upload/v1706349873/portfolioWebsite/projects/meetup.3fcdba2f_rygbj9.png",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Ionic",
  "Node.js",
  "Express",
  "SQL",
  "MongoDB",
  "AWS & GCP",
  "Next.js",
  "Tailwind",
  "Redux",
  "Git",
  "PostgreSQL",
] as const;
