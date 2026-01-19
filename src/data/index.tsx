import { Icons } from "@/components/icons";
import { Code, HomeIcon, SquareTerminal } from "lucide-react";

export const DATA = {
  name: "Vitram",
  url: "https://vitram.dev/",
  descriptionPart1: "Professional debugger of my own bugs. I turn coffee into code and deadlines into all-nighters. Currently surviving my thesis while pretending I know what I'm doing. Based in ",
  location: "Semarang, Indonesia",
  openToWork: "Open to work (and free food).",
  description: "Computer Engineering student at ITS. Open to work. Based in Semarang, Indonesia.",
  summary: "Legend has it I'm a final semester Computer Engineering student at ITS, Surabaya. I spend 90% of my time asking ChatGPT and the other 10% copying the answers. My thesis supervisor thinks I'm working hard, but really I'm just switching between VS Code and manhwa websites. I've mastered the art of looking busy while doing absolutely nothing productive. Skills include: blaming the compiler, asking 'did you try restarting it?', and making bugs disappear by not looking at them.",
  images: [
    { title: "Profile", href: "/orang.png" },
    { title: "Guitar", href: "/gitar.png" },
    { title: "PC Setup", href: "/pc.jpg" },
    { title: "Work", href: "/work.jpeg" },
    { title: "Explore", href: "/image6.png" },
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
        url: "https://github.com/torvalds",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jenhsunhuang",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },
  projectssummary: "wes lagi nganggur",
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
