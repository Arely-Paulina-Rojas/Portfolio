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
  unsafezonetwo,
  tophy,
  tophytwo
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
  
const projects = [
  {
    name: "Achievements Calculator",
    description:
      "Mobile application that allows Steam users to calculate the average percentage of achievements earned per game, besides to help for estimate necessary percentage in a game for increase global, providing a user-friendly and efficient solution for users.",
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
    sec_image: calculatortwo,
    source_code_link: "https://github.com/Arely-Paulina-Rojas/Achievements-Calculator",
    title: "Full Stack Mobile Developer",
    date: "May 2023 - June 2023",
    points: [
      'Designed the database model.',
      'Designed an easy-to-understand-and-use interfaces using Figma.',
      'Implemented a code repository management system using GitHub. ',
      'Developed all CRUD functions using Flutter with SQLite. ',
      'Conducted testing and user feedback analysis, eliminating bugs.'
    ],
  },
  {
    name: "GreenWaste",
    description:
      "Project to foster waste sorting though rewards system and so to contribute caring for the environment. The project make ups itself that a web application for administrators to manage users, materials to recycle and rewards, and mobile application for users can request containers and redeem rewards.",
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
      {
        name: "Spark"
      }
    ],
    image: greenwaste,
    sec_image: greenwastetwo,
    source_code_link: "https://github.com/Daligz/GreenWaste",
    title: "Full Stack Mobile Developer",
    date: "July 2022 - August 2022",
    points: [
      'Collaborated with a team of 5 to design and understand user stories.',
      'Collaborated with work team to design database model.',
      'Collaborated with work team to develop 100% Restful API to control user functions using Spark with MySQL as a persistence layer while utilizing Vue.js on the web app and Flutter on the mobile app.',
      'Collaborated with a team of 5 to design and develop datamining algorithm to analyze rewards the most popular.',
      'Participated in code reviews with work team, and gained feedback from leader and experience in writing code.'
    ],
  },
  {
    name: "QuickBreak",
    description:
      "A mobile application inspired in the Pomodoro Technique but focus for videogames players. Its goal is to prevent eye strain by using an alarm that remembers users when to take a break.",
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
    sec_image: quickbreaktwo,
    source_code_link: "https://github.com/Arely-Paulina-Rojas/QuickBreak",
    title: "Full Stack Mobile Developer",
    date: "June 2022 - August 2022",
    points: [
      'Designed database model.',
      'Designed an easy-to-understand-and-use interfaces.',
      'Designed and understood user stories.',
      'Developed 100% Restful API to control user functions using Express.Js With MongoDB as a persistence layer while utilizing Flutter on the frontend.',
      'Implemeted fingerprint and face detetion sensors.',
      'Deployed database on MongoDB Atlas and backend on Heroku.'
    ],
  },
  {
    name: "UnsafeZone",
    description:
      "Web application to provide information about insecurity level of a public place. The users can register their experience with comments, images and rating a place from 1 to 10 in agreement that perceived unsafe.",
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
    sec_image: unsafezonetwo,
    source_code_link: "https://github.com/Arely-Paulina-Rojas/UnsafeZone",
    title: "Full Stack Web Developer",
    date: "October 2021 - December 2021",
    points: [
      'Designed and understood user stories.',
      'Designed data models using best practices to ensure high data quality and reduced redundancy.',
      "Designed an atractive and friendly user interfaces using Figma, enabling customers to understand app's operation.",
      'Developed UnsafeZone with technology like Express and MongoDB to manage and pass requests from Angular front-end.'
    ],
  },
  {
    name: "TophyGalaxy",
    description:
      "Web application to provide news, reviews and articles about entertainment medio like movies or series. The web app allows users to write their reviews and leave comments, providing simply and user-friendly interface.",
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
    sec_image: tophytwo,
    source_code_link: "https://github.com/Arely-Paulina-Rojas/Tophy-Galaxy",
    title: "Full Stack Web Developer",
    date: "November 2020 - December 2020",
    points: [
      'Collaborated with a pair team to design and understood user stories.',
      'Collaborated with pair team to concisely design database model.',
      'Designed an atractive, useful and  friendly interfaces using draw.io, enabling users to easily find wishful information.',
      'Developed 100% Restful API to control user functions using CodeIgniter with MySQL.'
    ],
  },
];
  
export { services, technologies, experiences, projects };