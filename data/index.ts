import {
  Code,
  Database,
  Globe,
  Server,
  Palette,
} from "lucide-react";

export const skills = [
  { name: "C++", icon: Code, level: 90 },
  { name: "JavaScript", icon: Code, level: 60 },
  { name: "TypeScript", icon: Code, level: 55 },
  { name: "React", icon: Code, level: 60 },
  { name: "Next.js", icon: Globe, level: 55 },
  { name: "Node.js", icon: Server, level: 50 },
  { name: "Python", icon: Code, level: 55 },
  { name: "PostgreSQL", icon: Database, level: 50 },
  { name: "MongoDB", icon: Database, level: 50 },
  { name: "UI/UX Design", icon: Palette, level: 55 },
];

export const projects = [
  {
    title: "University Research Paper Management System",
    description:
      "A full-stack web application for managing and sharing academic research papers within a university. Features role-based authentication, multi-level dashboards, and hierarchical access control for Faculty, HOD, Dean, Vice Chancellor, and Admin roles.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Supabase", "Tailwind CSS"],
    github: "https://github.com/sagargulia001",
    live: "https://example.com",
    image: "/placeholder.svg",           // mobile landscape (light)
    image_dark: "/placeholder.dark.svg", // mobile landscape (dark)
    image_portrait: "/placeholder.svg",           // desktop portrait (light)
    image_portrait_dark: "/placeholder.dark.svg", // desktop portrait (dark)
  },
  {
    title: "NeighborShare",
    description:
      "A community-first platform to buy, sell, lend, borrow, and donate items locally. Built with a focus on interactive UI and real-time item list updates for a seamless browsing experience.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/sagargulia001/Neighbor-Share",
    live: "https://neighbor-share-ten.vercel.app/",
    image: "/neighbor-share.png",
    image_dark: "/neighbor-share.png",
    image_portrait: "/neighbor-share-portrait.png",
    image_portrait_dark: "/neighbor-share-portrait.png",
  },
  {
    title: "Personal Portfolio",
    description:
      "My personal portfolio showcasing my projects, skills, and experience. Features dark/light mode, interactive tech icon cloud, and a working contact form.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Nodemailer"],
    github: "https://github.com/sagargulia001",
    live: "https://example.com",
    image: "/portfolio-light-portrait.png",
    image_dark: "/portfolio-dark-portrait.png",
    image_portrait: "/portfolio-light.png",
    image_portrait_dark: "/portfolio-dark.png",
  },
];

// Experience data — to be updated as professional journey grows
export const experience = [
  // {
  //   title: "Senior Full Stack Developer",
  //   company: "TechCorp Inc.",
  //   period: "2022 - Present",
  //   location: "San Francisco, CA",
  //   description:
  //     "Led development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.",
  //   achievements: [
  //     "Improved application performance by 40%",
  //     "Led team of 5 developers",
  //     "Implemented CI/CD pipeline reducing deployment time by 60%",
  //   ],
  // },
];