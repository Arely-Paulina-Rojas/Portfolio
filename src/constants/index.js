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
  tophytwo,
  c_mobile,
  cplusplus_mobile,
  java_mobile,
  typescript_mobile,
  php_mobile,
  html_mobile,
  css_mobile,
  angular_mobile,
  bootstrap_mobile,
  node_mobile,
  expressjs_mobile,
  git_mobile,
  flutter_logo_mobile,
  mongo_mobile,
  mysql_mobile
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
    mobile: c_mobile
  },
  {
    name: "C++",
    icon: cplusplus,
    mobile: cplusplus_mobile
  },
  {
    name: "Java",
    icon: java,
    mobile: java_mobile
  },
  {
    name: "TypeScript",
    icon: typescript,
    mobile: typescript_mobile
  },
  {
    name: "PHP",
    icon: php,
    mobile: php_mobile
  },
  {
    name: "HTML",
    icon: html,
    mobile: html_mobile
  },
  {
    name: "CSS",
    icon: css,
    mobile: css_mobile
  },
  {
    name: "Angular",
    icon: angular,
    mobile: angular_mobile
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
    mobile: bootstrap_mobile
  },
  {
    name: "Node JS",
    icon: node,
    mobile: node_mobile
  },
  {
    name: "Express JS",
    icon: expressjs,
    mobile: expressjs_mobile
  },
  {
    name: "git",
    icon: git,
    mobile: git_mobile
  },
  {
    name: "Flutter",
    icon: flutter_logo,
    mobile: flutter_logo_mobile
  },
  {
    name: "MongoDB",
    icon: mongo,
    mobile: mongo_mobile
  },
  {
    name: "MySQL",
    icon: mysql,
    mobile: mysql_mobile
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
      'Developed REST APIs for "AllFix" web application using Nestjs and other related technologies.',
      'Implemented frontend with backend services of "AllFix" web application using Angular and other related technologies.',
      'Developed unit tests to "AllFix" backend web application using Jest.',
      'Developed unit tests to "AllFix" frontend web application using Jasmine.',
      'Collaborated with work team to create "AllFix" web application user manual.'
    ],
  },
];
  
const projects = [
  {
    name: "Achievements Calculator",
    description:
      "Mobile application that allows Steam users to calculate the average percentage of achievements earned per game, besides to help for estimating necessary percentage in a game for increasing the global one, providing a user-friendly and efficient solution for users.",
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
      'Developed an easy-to-understand-use interfaces using Figma.',
      'Implemented a code repository management system using GitHub. ',
      'Developed all CRUD functions using Flutter with SQLite. ',
      'Conducted testing and user feedback analysis eliminating bugs.'
    ],
  },
  {
    name: "GreenWaste",
    description:
      "Project to foster waste sorting through a reward system and so to contribute caring for the environment. The project makes up itself that a web application for administrators to manage users, materials to recycle and rewards, in addition to mobile application for users can request containers and redeem rewards.",
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
      "A mobile application inspired in the Pomodoro Technique but focused for videogame players. Its goal is to prevent eye strain by using an alarm that remembers users when to take a break.",
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
      'Developed an easy-to-understand-use interfaces.',
      'Designed and understood user stories.',
      'Developed 100% Restful API to control user functions using Express.Js With MongoDB as a persistence layer while utilizing Flutter on the frontend.',
      'Implemeted fingerprint and face detetion sensors.',
      'Deployed database on MongoDB Atlas and backend on Heroku.'
    ],
  },
  {
    name: "UnsafeZone",
    description:
      "Web application to provide information about insecurity level of a public place. The users can register their experience with comments, images and rating a place from 1 to 10 in agreement that perceived unsafe based on what they perceived unsafe.",
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
      "Developed atractive and friendly user interfaces using Figma, enabling customers to understand app's operation.",
      'Developed UnsafeZone with technology like Express and MongoDB to manage and pass requests from Angular front-end.'
    ],
  },
  {
    name: "TophyGalaxy",
    description:
      "Web application to provide news, reviews and articles about entertainment media like movies or series. The web app allows users to write their reviews and leave comments, providing simply and user-friendly interface.",
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
      'Developed atractive, useful and  friendly interfaces using draw.io, enabling users to easily find wishful information.',
      'Developed a 100% Restful API to control user functions using CodeIgniter with MySQL.'
    ],
  },
];
  
export { services, technologies, experiences, projects };