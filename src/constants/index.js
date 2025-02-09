import {
  logo,
  frontend,
  backend,
  web,
  flutter,
  axio,
  inbursa,
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
  spring_boot,
  oracle,
  github_logo,
  figma,
  angularjs,
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
  {
    name: "Spring Boot",
    icon: spring_boot,
    mobile: spring_boot
  },
  /*
  {
    name: "Oracle",
    icon: oracle,
    mobile: oracle
  },
  /*
  {
    name: "Github",
    icon: github_logo,
    mobile: github_logo
  },
  /*
  {
    name: "AngularJS",
    icon: angularjs,
    mobile: angularjs
  },
  {
    name: "Figma",
    icon: figma,
    mobile: figma
  }¨*/
];
  
const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Grupo Financiero Inbursa",
    icon: inbursa,
    iconBg: "#fff",
    date: "January 2024 - Current",
    points: [
      'Modified microservices using Spring Boot, Oracle SQL, and Java in order to verify tax transactions.',
      'Designed and developed new graphical user interfaces and features for online banking applications, using AngularJS, SonarQube, Oracle Web Center, Express JS and Node JS.',
      'Refactored JavaScript code and reduced 95% of code errors detected by SonarQube to ensure code quality, performance and best practices.',
      "Contributed to migrating a website's modules from AngularJS to Angular 17/19 to improve its performance and availability.",
    ],
  },
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
      "Mobile application that allows Steam users to calculate the average game completion rate, in addition to helping estimate necessary percentage in a game for increasing the global one, providing a user-friendly and efficient solution for users.",
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
      'Designed and developed the database model, ensuring efficient data storage and retrieval.',
      'Created user-friendly interfaces using Figma, making them easy to understand and use.',
      'Implemented a code repository management system with GitHub, ensuring version control and collaboration.',
      'Developed comprehensive CRUD functions using Flutter and SQLite, enabling full functionality of the application.',
      'Conducted rigorous testing and user feedback analysis, identifying and eliminating bugs to enhance user experience.'
    ],
  },
  {
    name: "GreenWaste",
    description:
      "Project to foster waste sorting through a reward system and contribute to caring for the environment. The project consists of a web application for administrators to manage users, materials to recycle, and rewards, in addition to being a mobile application where users can request containers and redeem rewards.",
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
      'Collaborated with a team of 5 to design and understand user stories, ensuring clear and actionable requirements.',
      'Worked with the team to design the database model, optimizing data storage and retrieval.',
      'Developed a fully RESTful API to control user functions using Spark and MySQL as a persistence layer, while utilizing Vue.jsfor the web app and Flutter for the mobile app.',
      'Collaborated with team to design and develop a datamining algorithm, analyzing the most popular rewards.',
      'Participated in code reviews with the team, receiving feedback from the leader and gaining experience in writing high-quality code.'
    ],
  },
  {
    name: "QuickBreak",
    description:
      "A mobile application inspired by the Pomodoro Technique, but intended for videogame players. Its goal is to prevent eye strain by using an alarm that reminds users when to take a break.",
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
      'Designed the database model, ensuring efficient data organization and retrieval.',
      'Developed easy-to-understand user interfaces, enhancing usability and user experience.',
      'Understood and refined user stories, ensuring clear and actionable requirements.',
      'Developed a fully RESTful API to control user functions using Express.jsand MongoDB as a persistence layer, while utilizing Flutter for the frontend.',
      'Implemented fingerprint and face detection sensors, enhancing security and user authentication.',
      'Deployed the database on MongoDB Atlas and the backend on Heroku, ensuring reliable hosting and scalability.'
    ],
  },
  {
    name: "UnsafeZone",
    description:
      "Web application to provide information about insecurity level of a public place. The users can register their experience with comments, images and rating from 1 to 10 based on what is perceived to be unsafe.",
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
      'Understood and designed user stories, ensuring clear and actionable requirements.',
      'Designed data models using best practices, ensuring high data quality and reduced redundancy.',
      "Developed attractive and user-friendly interfaces using Figma, enabling customers to easily understand the app's operation.",
      'Developed UnsafeZone, a web application, using Express and MongoDB for the backend API and Angular for the front-end.'
    ],
  },
  {
    name: "TophyGalaxy",
    description:
      "Web application providing simple news, reviews and articles about entertainment media like movies or series. The web app allows users to write their reviews and leave comments, providing simply and user-friendly interface.",
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
      'Collaborated with a team to design and understand user stories, ensuring clear and actionable requirements.',
      'Worked with the team to design an efficient database model, optimizing data storage and retrieval.',
      'Developed attractive, useful, and user-friendly interfaces using draw.io, enabling users to easily find the desired information.',
      'Developed a fully RESTful API to control user functions using CodeIgniter and MySQL, ensuring efficient and reliable backend functionality.'
    ],
  },
];
  
export { services, technologies, experiences, projects };