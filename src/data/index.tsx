import { Icons } from "@/components/icons";
import { Code, HomeIcon, SquareTerminal } from "lucide-react";
export const DATA = {
  name: "Vitram",
  url: "https://vitram.dev/",
  description:"I'm a Computer Engineering student, tech enthusiast, and love building things. I'm currently working on my",
  description2:" Thesis, focusing on",
  description3:"Which involves cutting-edge research and development with",
  summary: "I'm a final semester Computer Engineering student at [Institut Teknologi Sepuluh Nopember (ITS)](https://its.ac.id/), Surabaya. Currently, I'm dedicating my time to completing my thesis while continuously expanding my skills in software development. Throughout my academic journey, I've had the opportunity to work on various projects, explore emerging technologies, and collaborate with talented individuals. I'm passionate about creating innovative solutions and building impactful applications.",
  apperciation: "I'm grateful for the support and encouragement from my peers, mentors, and the tech community. Every project and collaboration has been a learning experience that continues to shape my growth as a developer.",
  footer:"",
  linkedin:[
    {
      title: "karthikmudunuri",
      href: "https://www.linkedin.com/in/karthikmudunuri/",
      icon: "/linkedin-logo.svg",
      profile: "/karthik.jpeg",
    },
  ],
  github: [
    {
      title: "karthikmudunuri",
      href: "https://github.com/karthikmudunuri",
      icon: "/github-logo.svg",
      profile: "/me.jpeg",
    }
  ],
  images: [
    {
      title: "aiexpo",
      href: "/aiexpo.jpeg",
    },
    {
      title: "Me",
      href: "/me.jpeg",
    },
    {
      title: "My first day at my office during internship",
      href: "/firstday.jpeg",
    },
    {
      title: "our sumit at woxsen for discussing ideas",
      href: "/ideasmeetup.jpeg",
    },
    {
      title: "while exploring",
      href: "/image6.jpeg",
    },
    {
      title: "My working stuff",
      href: "/work.jpeg",
    },
  ],
  Iconsvg: [
    {
      id: 1,
      title: "Eldora UI",
      href: "/eldoraui.svg",
      site: "https://eldoraui.site/",
    },
    {
      id: 2,
      title: "Next.js",
      href: "/next-logo.svg",
      site: "https://nextjs.org",
    },
    {
      id: 3,
      title: "React",
      href: "/react-logo.svg",
      site: "https://react.dev",
    },
    // Import your teck stack here from https://simpleicons.org/ 
  ],
  skillsdescription:"Here’s a section showcasing the skills I’ve learned and use frequently. These tools and technologies are at the core of my development process, enabling me to build efficient and high-quality solutions.",
  Skills: [
    
    {
      id: 1,
      title: "Next.js",
      href: "/next-logo.svg",
      site: "https://nextjs.org",
    },
    {
      id: 2,
      title: "React",
      href: "/react-logo.svg",
      site: "https://react.dev",
    },
    {
      id: 3,
      title: "Javascript",
      href: "/javascript.svg",
      site: "https://react.dev",
    },
    {
      id: 4,
      title: "Typescript",
      href: "/typescript.svg",
      site: "https://react.dev",
    },
    {
      id: 12,
      title: "Python",
      href: "/python.svg",
      site: "https://react.dev",
    },
    {
      id: 5,
      title: "Mdx",
      href: "/mdxl.svg",
      site: "https://react.dev",
    },
    {
      id: 6,
      title: "Tailwind CSS",
      href: "/tailwindcss.svg",
      site: "https://react.dev",
    },
    {
      id: 7,
      title: "Git",
      href: "/git.svg",
      site: "https://react.dev",
    },
    {
      id: 8,
      title: "AWS",
      href: "/aws.svg",
      site: "https://react.dev",
    },
    
    {
      id: 9,
      title: "Framer Motion",
      href: "/fm.svg",
      site: "https://react.dev",
    },
    {
      id: 10,
      title: "Php",
      href: "/php-color.svg",
      site: "https://react.dev",
    },
    {
      id: 11,
      title: "MySQL",
      href: "/mysql.svg",
      site: "https://react.dev",
    },
    
    // Import your teck stack here from https://simpleicons.org/ 
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: Code, label: "Projects" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/karthikmudunuri",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/karthikmudunuri/",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },
  worksummary: "As a final semester Computer Engineering student, I'm focused on completing my thesis while building practical skills through projects and learning experiences. Here's my journey so far.",
  work: [
    {
      id : 1,
      company: "Thesis Project",
      href: "#",
      title: "Final Year Thesis",
      logoUrl: "/its-logo.png",
      start: "2025",
      end: "Present",
      description:
        "Currently working on my thesis project as part of my final semester requirements at ITS. Focused on research and development in the field of Computer Engineering.",
    },
    
  ],
  educationsummary:"My education at ITS has provided me with a solid foundation in computer engineering, from understanding core concepts to working on advanced systems. Each step has shaped my ability to innovate and tackle real-world challenges in technology.",
  education: [
    {
      id: 1,
      school: "Institut Teknologi Sepuluh Nopember (ITS)",
      href: "https://its.ac.id/",
      degree: "S1 Computer Engineering (Teknik Komputer)",
      logoUrl: "/its-logo.png",
      start: "2021",
      end: "2026",
    },
    
    
  ],
  projectssummary:"Explore my projects where ideas meet execution. Each project showcases my dedication to learning and building impactful solutions as a Computer Engineering student.",
  projects: [
    {
      title: "Thesis Project",
      href: "#",
      dates: "2025 - Present",
      active: true,
      description:
        "My final year thesis project at ITS, focusing on research and development in Computer Engineering. Details coming soon.",
      iconLists: ["/next-logo.svg", "/tailwindcss.svg","/typescript.svg","/python.svg"],
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
