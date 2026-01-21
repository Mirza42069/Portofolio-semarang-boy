import { Icons } from "@/components/icons";
import { Code, Github, Globe, HomeIcon, SquareTerminal } from "lucide-react";

export const DATA = {
  name: "Vitram",
  url: "https://vitram.dev/",
  descriptionPart1:
    "Professional debugger of my own bugs. I turn coffee into code and deadlines into all-nighters. Currently surviving my thesis while pretending I know what I'm doing. Based in ",
  location: "Semarang, Indonesia",
  openToWork: "Open to work (and free food).",
  summary:
    "Legend has it I'm a final semester Computer Engineering student at ITS, Surabaya. I spend 90% of my time asking ChatGPT and the other 10% copying the answers. My thesis supervisor thinks I'm working hard, but really I'm just switching between VS Code and manhwa websites. I've mastered the art of looking busy while doing absolutely nothing productive. Skills include: blaming the compiler, asking 'did you try restarting it?', and making bugs disappear by not looking at them.",
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
  projectssummary:
    "A collection of things I've built, broken, and occasionally fixed.",
  projects: [
    {
      title: "IoT Smart Home System",
      tagline: "Home automation with ESP32",
      href: "#",
      year: 2025,
      status: "active" as const,
      featured: true,
      iconLists: [],
      links: [
        {
          type: "Demo",
          href: "#",
          icon: <Globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "#",
          icon: <Github className="size-3" />,
        },
      ],
      image: "/pc.jpg",
      video: "",
    },
    {
      title: "Porto-vit",
      tagline: "Personal portfolio with Next.js",
      href: "#",
      year: 2024,
      status: "completed" as const,
      featured: false,
      iconLists: [],
      links: [
        {
          type: "Source",
          href: "#",
          icon: <Github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Campus Event Tracker",
      tagline: "Mobile app for ITS events",
      href: "#",
      year: 2024,
      status: "completed" as const,
      featured: false,
      iconLists: [],
      links: [
        {
          type: "View",
          href: "#",
          icon: <SquareTerminal className="size-3" />,
        },
      ],
      image: "/work.jpeg",
      video: "",
    },
    {
      title: "CLI Task Manager",
      tagline: "Terminal todo app in Go",
      href: "#",
      year: 2023,
      status: "completed" as const,
      featured: false,
      iconLists: [],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Weather Station",
      tagline: "Arduino sensor data logger",
      href: "#",
      year: 2023,
      status: "archived" as const,
      featured: false,
      iconLists: [],
      links: [
        {
          type: "Docs",
          href: "#",
          icon: <SquareTerminal className="size-3" />,
        },
      ],
      image: "/bike.png",
      video: "",
    },
    {
      title: "Student Portal Scraper",
      tagline: "Automates grade checking script",
      href: "#",
      year: 2022,
      status: "archived" as const,
      featured: false,
      iconLists: [],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
