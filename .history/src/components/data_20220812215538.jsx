import {
    IoCodeWorking,
    IoLogoGithub,
    IoLogoYoutube,
    IoLogoTwitter,
    IoLogoLinkedin,
    IoLogoWhatsapp,
  } from "react-icons/io5";
  import img1 from "../assets/pngwing.com.png";
  import img2 from "../assets/pngwing.com.png";
  import img3 from "../assets/pngwing.com.png";
  import img4 from "../assets/pngwing.com.png";
  import img5 from "../assets/pngwing.com.png";
  import img6 from "../assets/pngwing.com.png";
  
  export const Experience = [
    {
      id: 1,
      date: "2016 - present",
      iconsSrc: <IoCodeWorking />,
      title: "Creative Director",
      location: "Doha, Qatar",
      description:
        "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      id: 2,
      date: "2014 - 2016",
      iconsSrc: <IoCodeWorking />,
      title: "Creative Director",
      location: "Doha, Qatar",
      description:
        "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      id: 3,
      date: "2012 - 2014",
      iconsSrc: <IoCodeWorking />,
      title: "Creative Director",
      location: "Doha, Qatar",
      description:
        "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      id: 4,
      date: "2011 - 2012",
      iconsSrc: <IoCodeWorking />,
      title: "Creative Director",
      location: "Doha, Qatar",
      description:
        "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
    {
      id: 5,
      date: "2010 - 2011",
      iconsSrc: <IoCodeWorking />,
      title: "Creative Director",
      location: "Doha, Qatar",
      description:
        "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
    },
  ];
  
  export const Projects = [
    {
      id: 1,
      name: "Food Delivery UI Mockup",
      imageSrc: img1,
      techs: "React Js, Redux, Material UI",
      github: "#",
    },
    {
      id: 2,
      name: "Full Stack Social Media App ",
      imageSrc: img2,
      techs: "React Js, Sanity, Tailwind CSS",
      github: "#",
    },
    {
      id: 3,
      name: "Travel Advisor",
      imageSrc: img3,
      techs: "React Js, Chakra UI, Google API",
      github: "#",
    },
    {
      id: 4,
      name: "Pintrest UI Clone 2.0 ",
      imageSrc: img4,
      techs: "React Js,  Material UI",
      github: "#",
    },
    {
      id: 5,
      name: "Own Video Blog",
      imageSrc: img5,
      techs: "React Js, Chara UI, Firebase",
      github: "#",
    },
    {
      id: 6,
      name: "Whatsapp UI Clone",
      imageSrc: img6,
      techs: "NextJs, Firebase Auth",
      github: "#",
    },
  ];
  
  export const SocialLinks = [
    {
      id: 1,
      iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
      name: "GitHub",
      link: "https://github.com/Dare-devil-23",
    },
    {
      id: 1,
      iconSrc: (
        <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
      ),
      name: "Twitter",
      link: "https://twitter.com/Sahith9866",
    },
    {
      id: 1,
      iconSrc: (
        <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
      ),
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/sai-sahith-56a750244/",
    },
    {
      id: 1,
      iconSrc: (
        <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
      ),
      name: "Whatsapp",
      link: "https://wa.me/7989575626",
    },
  ];