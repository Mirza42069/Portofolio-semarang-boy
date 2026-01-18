import { Icons } from "@/components/icons";
import { Code, HomeIcon, SquareTerminal } from "lucide-react";

export const DATA = {
  name: "Vitram",
  url: "https://vitram.dev/",
  description: "I'm a Computer Engineering student, tech enthusiast, and love building things. I'm currently working on my Thesis. Located in Semarang, Indonesia.",
  summary: "I'm a final semester Computer Engineering student at Institut Teknologi Sepuluh Nopember (ITS), Surabaya. Currently, I'm dedicating my time to completing my thesis while continuously expanding my skills in software development. Throughout my academic journey, I've had the opportunity to work on various projects, explore emerging technologies, and collaborate with talented individuals. I'm passionate about creating innovative solutions and building impactful applications.",
  images: [
    { title: "Profile", href: "/orang.png" },
    { title: "Guitar", href: "/gitar.png" },
    { title: "PC Setup", href: "/pc.jpg" },
    { title: "Work", href: "/work.jpeg" },
    { title: "Explore", href: "/image6.jpeg" },
    { title: "Bike", href: "/bike.png" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: Code, label: "Projects" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Mirza42069",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vitram/",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },
  projectssummary: "Explore my projects where ideas meet execution. Each project showcases my dedication to learning and building impactful solutions as a Computer Engineering student.",
  projects: [
    {
      title: "Thesis Project",
      href: "#",
      dates: "2025 - Present",
      active: true,
      description: "My final year thesis project at ITS, focusing on research and development in Computer Engineering. Details coming soon.",
      iconLists: [],
      links: [
        {
          type: "View Project",
          href: "#",
          icon: <SquareTerminal className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
