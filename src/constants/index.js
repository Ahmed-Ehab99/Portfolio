import {
  responsive,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  instant,
  criavz,
  nike,
  iphone,
  brainwave,
  camping,
  bootstrap,
  redux,
  typescript,
  threejs,
  nextGenShop,
  cryptoVerce,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Framwork",
    icon: reactjs,
  },
  {
    title: "Fully Responsive Apps",
    icon: responsive,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux ToolKit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap CSS",
    icon: bootstrap,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Instant Software Solutions",
    icon: instant,
    iconBg: "#383E56",
    date: "July 2023 - January 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "CRIAVZ",
    icon: criavz,
    iconBg: "#383E56",
    date: "November 2023 - November 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "NextGenShop",
    description:
      "A Modern E-Commerce Application with many features like dark-mode, logIn, signUp, LogOut, search input for search about product, filtring in shop page and cart sheet with optimistic updates",
    tags: [
      {
        name: "Next.js",
        color: "orange-text-gradient",
      },
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "React-Hook-Form",
        color: "purple-text-gradient",
      },
      {
        name: "Typescript",
        color: "red-text-gradient",
      },
      {
        name: "T3 ENV",
        color: "orange-text-gradient",
      },
      {
        name: "Tanstack Query",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
    ],
    image: nextGenShop,
    source_code_link: "https://next-gen-shop.vercel.app/",
  },
  {
    name: "Iphone Store",
    description:
      "Landing Page Showing IPhone, its Contents, and more Effects and Videos. You Can See the IPhone from All Sides Through a 3D Model.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: iphone,
    source_code_link: "https://iphone-store-teal.vercel.app/",
  },
  {
    name: "BrainWave",
    description: "A Modern AI Landing Page with an Amazing Design and Pricing.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: brainwave,
    source_code_link: "https://brainwave-omega-gray.vercel.app/",
  },
  {
    name: "Nike Store",
    description:
      "A Landing Page for Nike Company with alot of Shoes and Perfect Design.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nike,
    source_code_link: "https://nike-store-sigma-liart.vercel.app/",
  },
  {
    name: "Camping App",
    description:
      "A Fully Responsive, Modern Camping Application for Invite and Guide you to Best Vacation in the World",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: camping,
    source_code_link: "https://camping-app-xi.vercel.app/",
  },
  {
    name: "CryptoVerce",
    description:
      "A Fully Responsive website for crypto news and statistics with api from rapid api and managing state with redux toolkit",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "green-text-gradient",
      },
    ],
    image: cryptoVerce,
    source_code_link: "https://crypto-verce-two.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
