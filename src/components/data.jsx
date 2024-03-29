
import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoMailOutline,
} from "react-icons/io5";
import img1 from "../assets/DResults.png";
import img2 from "../assets/CyberInfo.png";
import img3 from "../assets/ExerciseTracker.png";
import img4 from "../assets/dizzyfit.png";

export const Education = [
  {
    id: 1,
    date: "2019 - 2023",
    iconsSrc: <IoCodeWorking />,
    title: "IIIT, RGUKTN",
    location: "Nuzvid, AP",
    gpa: 8.1,
    description: "BTech",
  },
  {
    id: 2,
    date: "2017 - 2019",
    iconsSrc: <IoCodeWorking />,
    title: "IIIT, RGUKTN",
    location: "Nuzvid, AP",
    gpa: 8.0,
    description: "Pre University Course",
  },
  {
    id: 3,
    date: "2017",
    iconsSrc: <IoCodeWorking />,
    title: "Municipal High School",
    location: "Repalle, AP",
    gpa: 10.0,
    description: "Matriculation",
  },
];

export const Projects = [
  {
    id: 1,
    name: "Decentralized Results",
    imageSrc: img1,
    techs: "React Js, IPFS, Ethers Js, Hardhat, Tailwind CSS",
    github: "https://github.com/Dare-devil-23/DResults",
    url: "https://noisy-cherry-4156.on.fleek.co/",
  },
  {
    id: 2,
    name: "CyberInfo",
    imageSrc: img2,
    techs: "React Js",
    github: "https://github.com/Dare-devil-23/cyber",
    url: "https://dare-devil-23.github.io/cyber/",
  },
  {
    id: 3,
    name: "MERN Stack Exercise Tracking Application",
    imageSrc: img3,
    techs: "MongoDB, Express Js, React Js, Node Js",
    github: "https://github.com/Dare-devil-23/Exercise-Tracker",
    url: "http://exercise-tracker-by-sahith.surge.sh/",
  },
  {
    id: 4,
    name: "DizzyFit",
    imageSrc: img4,
    techs: "NextJs, Tailwind, framer-motion",
    github: "https://github.com/Dare-devil-23/dizzyfit",
    url: "https://dizzyfit.vercel.app/"
  }
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/Dare-devil-23",
  },
  {
    id: 2,
    iconSrc: (
      <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
    ),
    name: "Twitter",
    link: "https://twitter.com/Sahith9866",
  },
  {
    id: 3,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sai-sahith-56a750244/",
  },
  {
    id: 4,
    iconSrc: (
      <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "Whatsapp",
    link: "https://wa.me/7989575626",
  },
  {
    id: 5,
    iconSrc: (
      <IoMailOutline className="text-red-500 text-3xl cursor-pointer" />
    ),
    name: "E-Mail",
    link: "",
  },
];

export const Experiance = [
  {
    id: 1,
    date: "2022 - 2023",
    iconsSrc: <IoCodeWorking />,
    title: "SE-React (intern)",
    company:'PromptCloud',
    location: "Banglore (remote)",
    skills: ['React JS', 'Ruby on Rails', 'Git', 'Github', 'Jenkins', 'RSpec', 'Axios'],
  },
  {
    id: 2,
    date: "2023 - Present",
    iconsSrc: <IoCodeWorking />,
    title: "Associate Software Engineer",
    company:'PromptCloud',
    location: "Banglore (remote)",
    skills: ['React JS', 'Ruby on Rails', 'Git', 'Github', 'Jenkins', 'RSpec', 'Axios'],
  }
]