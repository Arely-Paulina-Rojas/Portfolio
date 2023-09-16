import {
  logo,
  frontend,
  backend,
  web,
  flutter,
  axio,
  c,
  cplusplus,
  java,
  typescript,
  php,
  html,
  css,
  angular,
  bootstrap,
  node,
  expressjs,
  git,
  flutter_logo,
  mongo,
  mysql,
  greenwaste,
  greenwastetwo,
  calculator,
  calculatortwo,
  quickbreak,
  quickbreaktwo,
  unsafezone,
  unsafezone_2,
  tophy,
  tophy_2
} from '../assets';
 
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
    id: "contact",
    title: "Contact",
  },
];
  
const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: flutter,
  },
];
  
const technologies = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: node,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Flutter",
    icon: flutter_logo,
  },
  {
    name: "MongoDB",
    icon: mongo,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
];
  
const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Fundación Axio A.C.",
    icon: axio,
    iconBg: "#fff",
    date: "September 2022 - February 2023",
    points: [
      'Developing APIs Rest for "AllFix" web application using Nestjs and other related technologies.',
      'Implementing frontend with backend services of "AllFix" web application using Angular and other related technologies.',
      'Developing unit tests to APIs Rest of "AllFix" web application using Jest.',
      'Developing unit tests to frontend of "AllFix" web application using Jasmine.',
      'Collaborating with work team to create user manual of "AllFix" web application.'
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
    name: "Achievements Calculator",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Flutter",
      },
      {
        name: "SQLite",
      },
      {
        name: "Dart",
      },
    ],
    image: calculator,
    source_code_link: "https://github.com/Arely-Paulina-Rojas/Achievements-Calculator",
  },
  {
    name: "GreenWaste",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Flutter",
      },
      {
        name: "MySQL",
      },
      {
        name: "R",
      },
      {
        name: "Java",
      },
      {
        name: "Vue.js",
      },
    ],
    image: greenwaste,
    source_code_link: "https://github.com/Daligz/GreenWaste",
  },
  {
    name: "QuickBreak",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Flutter",
      },
      {
        name: "Express.js",
      },
      {
        name: "Node.js",
      },
      {
        name: "MongoDB",
      },
      
    ],
    image: quickbreak,
    source_code_link: "https://github.com/Arely-Paulina-Rojas/QuickBreak",
  },
  {
    name: "UnsafeZone",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Angular",
      },
      {
        name: "Express.js",
      },
      {
        name: "Node.js",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Bootstrap",
      },
    ],
    image: unsafezone,
    source_code_link: "https://github.com/Arely-Paulina-Rojas/UnsafeZone",
  },
  {
    name: "TophyGalaxy",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "PHP",
      },
      {
        name: "MySQL",
      },
      {
        name: "CodeIgniter",
      },
      {
        name: "Bootstrap",
      },
    ],
    image: tophy,
    source_code_link: "https://github.com/Arely-Paulina-Rojas/Tophy-Galaxy",
  },
];
  
export { services, technologies, experiences, testimonials, projects };