import {
  awwwards,
  blackstone,
  brainwave,
  camping,
  criavz,
  cryptoVerce,
  css,
  git,
  hemex,
  hemexLogo,
  html,
  imaginify,
  instant,
  iphone,
  javascript,
  movie_app,
  nextGenShop,
  nextjs,
  nike,
  reactjs,
  redux,
  responsive,
  shoper,
  tailwind,
  typescript,
  web,
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
    title: "Performance Optimization",
    icon: web,
  },
  {
    title: "React Library",
    icon: reactjs,
  },
  {
    title: "Next Framwork",
    icon: nextjs,
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
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux ToolKit",
    icon: redux,
  },
  {
    name: "GIT",
    icon: git,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
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
  {
    title: "Frontend Developer",
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
    title: "Frontend Developer",
    company_name: "BlackStone.eit",
    icon: blackstone,
    iconBg: "#383E56",
    date: "September 2024 - December 2024",
    points: [
      "Developing and maintaining a portfolio for the company using Angular.js, SASS, TypeScript and other related technologies.",
      "Collaborating with cross-functional teams including designers, backend developers, testing team and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "HEMEX.AI",
    icon: hemexLogo,
    iconBg: "#383E56",
    date: "March 2025 - Sept 2025",
    points: [
      "Designed, developed, and maintained multiple portals and dashboards, including Parent, Student, Instructor, and Admin, using React.js, Next.js, TypeScript, Tailwind CSS, TanStack Query, Zustand, and other modern technologies.",
      "Implemented a real-time messaging system similar to WhatsApp, enabling sales team to send and receive messages seamlessly, with support for bulk messaging through custom phone number lists.",
      "Collaborated closely with backend developers and the product owner to deliver high-quality, scalable, and user-friendly solutions.",
      "Built reusable components, optimized state management, and ensured responsive design with cross-browser compatibility.",
      "Contributed to enhancing user experience and performance across all platforms by applying best practices in frontend development.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ahmed proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ahmed does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ahmed optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "HEMEX Landing Page",
    description:
      "Built a modern, responsive landing page for company using React.js, Shadcn, React Hook Form, Tanstack Query, ZOD, Zustand, TypeScript and some help from react bits. Implemented features like videos carousel, login and sign up logic, whatsapp contact, alot of animations. Utilized Tailwind CSS, ShadCN, and Framer Motion for a polished UI/UX. Integrated React Hook Form and Zod for robust form validation, and TanStack Query for efficient data fetching and caching.",
    tags: [
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
        name: "Zod",
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
      {
        name: "Framer Motion",
        color: "blue-text-gradient",
      },
    ],
    image: hemex,
    source_code_link: "https://hemex.ai/",
  },
  {
    name: "Imaginify SAAS App",
    description:
      "An AI image SaaS platform that excels in image processing capabilities, integrates a secure payment infrastructure, offers advanced image search functionalities, and supports multiple AI features, including image restoration, recoloring, object removal, generative filling, and background removal.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "red-text-gradient",
      },
      {
        name: "MongoDb",
        color: "purple-text-gradient",
      },
      {
        name: "Mongoose",
        color: "orange-text-gradient",
      },
      {
        name: "Stripe",
        color: "pink-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "blue-text-gradient",
      },
    ],
    image: imaginify,
    source_code_link: "https://imaginify-six-gray.vercel.app/",
  },
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
    name: "Shoper",
    description:
      "A complete e-commerce application. including smoth UI, authentication using clerk, search input for search about products, selecting category, basket page, orders page and many more features. some technologies used: zustand state management to hande basket operations, sanity CMS backend and stripe for payment.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity CMS",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "purple-text-gradient",
      },
      {
        name: "Clerk",
        color: "orange-text-gradient",
      },
      {
        name: "Zustand",
        color: "red-text-gradient",
      },
      {
        name: "Stripe",
        color: "purple-text-gradient",
      },
    ],
    image: shoper,
    source_code_link: "https://shoper-ecommerce.vercel.app/",
  },
  {
    name: "Movie App",
    description:
      "A simple movie application allow user to show top 5 movies that other users search about them, and also user can search for movies and show details about them. with some help from react-use library to delay fetching movies until user stop typing (useDebounce). finally i use appwrite as backend to store count of searching of movies to display top movies section.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "AppWrite",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
    ],
    image: movie_app,
    source_code_link: "https://movie-app-533o.vercel.app/",
  },
  {
    name: "Awwwards",
    description:
      "Amazing Gaming Landing with an amazing animation and modern user interface including some videos, audios and clip paths with some helps from react-icons and uiverse and react-use.",
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
    image: awwwards,
    source_code_link: "https://awwwards-silk.vercel.app/",
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

export { experiences, projects, services, technologies, testimonials };
