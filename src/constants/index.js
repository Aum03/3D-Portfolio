import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
   air_bnb,
   easy_bank,
   messanger,
  threejs,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack",
    icon: web,
  },
  {
    title: "AWS",
    icon: mobile,
  },
  {
    title: "DevOps",
    icon: backend,
  },
  {
    title: "Anime",
    icon: creator,
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MERN Stack  Developer",
    company_name: "Advanced System Services And Software Consultant",
    iconBg: "#383E56",
    date: "17/5/2022 - 24/6/2022",
    points: [
      "During my internship , I built an Sugar Management Website , in which admin can manage records of several departments and user, items and information about various truck carriers",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
 
  {
    title: "Web Developer",
    company_name: "WEE Tech Solutions",
   
    iconBg: "#383E56",
    date: "15/5/2023 - 24/6/2023",
    points: [
      "During my internship , I built an table reservation Website , in which admin can manage records of several tables and user and can book tables for the customers for specified Date and Time",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "DevOps Engineer",
    company_name: "Crest Data Systems",
  
    iconBg: "#E6DEDD",
    date: "16/11/2023 - Present",
    points: [
      "Understand new technologies and programming languages that the Company works with",
      "Assist project team with Software Development, QA, Automation, CloudOps/SRE",
      "Implementing Devops Technologies like Terraform , Docker , kubernetes etc",
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
    name: "Airbnb-frontend",
    description:
      "Clone of Air-BNB using NEXT.JS and Tailwind CSS",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: air_bnb,
    source_code_link: "https://github.com/Aum03/airbnb-frontend",
  },
  {
    name: "Messaging-App",
    description:
      "Simple messaging web-app using React.js , Material UI , Firebase",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "materialUI",
        color: "pink-text-gradient",
      },
    ],
    image: messanger,
    source_code_link: "https://github.com/Aum03/facebook-messenger-clone",
  },
  {
    name: "Easy-Bank Frontend",
    description:
      "Frontend of an banking website using html,css and javascript",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: easy_bank,
    source_code_link: "https://github.com/Aum03/banking-website-frontend",
  },
  // {
  //   name: "Demo-Portfolio Website",
  //   description:
  //     "Portfolio website made using React.js , emailjs and css",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "email.js",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: portfolio,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
