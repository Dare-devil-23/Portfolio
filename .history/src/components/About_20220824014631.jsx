import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { Education, Projects } from "./data";
import Contact from "./Contact";
import { IoLogoGithub } from "react-icons/io5";
import sahith from "../assets/sahith.jpeg";
export default function About() {
  return (
    <main className="w-[80%] mt-4">
      <div className="flex justify-center h-[100px] items-center text-gray-400 my-4 text-3xl">
        About Me
      </div>
      <section
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-5"
        id="about"
      >
        <div className="w-full h-[420px] flex items-center justify-center">
          <div className="w-[275px] h-[340px] bg-emerald-200 rounded-md relative">
            <img
              className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-2xl"
              src={sahith}
              alt="Sahith"
            />
          </div>
        </div>

        <div className="w-full h-[400px] md:h-auto flex flex-col items-center justify-center">
          <p className="text-lg text-slate-500 text-center">
            Hi, I'm Sahith, and I'm graduating in Rajiv Gandhi University of
            Knoweldge and Technologies with a degree in Computer Science
            Engineering. My interests are in Front End Web Development and Web3,
            and I love to create beautiful and performant products with
            delightful user experiences.
          </p>
          <p className="text-center text-slate-300">
            I’ve included my resume for your reference.
          </p>
          <button className="w-full md:w-full relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
            <span className="w-full md:w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <a
                href="https://gateway.ipfs.io/ipfs/QmTLrGtd8GEMmWwSHALogNeMKVKgvfdPwmvqsyAQzHFZBQ"
                target={"_blank"}
                download
              >
                Download
              </a>
            </span>
          </button>
        </div>
      </section>
      <div className="flex justify-center h-[100px] items-center text-gray-400 my-4 text-3xl">
        Education
      </div>
      <section className="w-full flex items-center justify-center">
        <VerticalTimeline>
          {Education &&
            Education.map((n) => (
              <VerticalTimelineElement
                key={n.id}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(21, 24, 31)",
                  color: "#888",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(21, 24, 31)",
                }}
                date={n.date}
                iconStyle={{ background: "rgb(21, 24, 31)", color: "#888" }}
                icon={n.iconsSrc}
              >
                <h3 className="vertical-timeline-element-title">{n.title}</h3>
                <h4>GPA : {n.gpa}</h4>
                <h4 className="vertical-timeline-element-subtitle">
                  {n.location}
                </h4>
                <p>{n.description}</p>
              </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
      </section>
      <div className="flex justify-center h-[100px] items-center text-gray-400 my-4 text-3xl">
        Projects
      </div>
      <section
        className="flex flex-wrap items-center justify-evenly my-10 gap-4"
        id="projects"
      >
        {Projects &&
          Projects.map((n) => (
            <a href={n.url} target="_blanck">
              <motion.div
                key={n.id}
                className="border border-zinc-800 rounded-md p-2 min-h-[400px] min-w-[325px] md:max-w-[325px] hover:border-zinc-600 duration-100 ease-in-out"
              >
                <p className="text-lg text-slate-200 font-medium uppercase">
                  {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
                </p>

                <img
                  src={n.imageSrc}
                  className="w-full h-full object-cover rounded-md my-4"
                  alt={`${n.id}`}
                />

                <div className="flex flex-1 items-center justify-between">
                  <p className="text-lg text-gray-300">
                    Technologies
                    <span className="block text-sm text-gray-500">
                      {n.techs}
                    </span>
                  </p>
                  <a href={n.github} target="_blanck">
                    <motion.div whileTap={{ scale: 0.5 }}>
                      <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                    </motion.div>
                  </a>
                </div>
              </motion.div>
            </a>
          ))}
      </section>

      <Contact />
    </main>
  );
}
