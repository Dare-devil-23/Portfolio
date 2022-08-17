import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AnimatePresence, motion } from "framer-motion";
import { Experience, Projects ,SocialLinks } from "./data";
import {IoLogoGithub } from 'react-icons/io5';
import sahith from "../assets/sahith.jpeg";
export default function About() {
  return (
    <AnimatePresence initial={false}>
    <main className="w-[80%] mt-5">
      <section
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
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

        <div className="w-full h-[420px] flex flex-col item-center justify-center">
          <p className="text-lg text-slate-500 text-center">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
          <button className="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                <span className="w-full md:w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Download
                </span>
              </button>
        </div>
      </section>
      <section className="w-full flex items-center justify-center">
            <VerticalTimeline>
              {Experience &&
                Experience.map((n) => (
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
                    <h3 className="vertical-timeline-element-title">
                      {n.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {n.location}
                    </h4>
                    <p>{n.description}</p>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </section>

          <section
            className="flex flex-wrap items-center justify-evenly my-24 gap-4"
            id="projects"
          >
            {Projects &&
              Projects.map((n, i) => (
                <motion.div
                  key={n.id}
                  className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
                >
                  <p className="text-lg text-slate-200 font-medium uppercase">
                    {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
                  </p>

                  <img
                    src={n.imageSrc}
                    className="w-full h-full object-cover rounded-md my-4"
                    alt={`${i}`}
                  />

                  <div className="flex flex-1 items-center justify-between">
                    <p className="text-lg text-gray-300">
                      Technologies
                      <span className="block text-sm text-gray-500">
                        {n.techs}
                      </span>
                    </p>
                    <a href={n.github}>
                      <motion.div whileTap={{ scale: 0.5 }}>
                        <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                      </motion.div>
                    </a>
                  </div>
                </motion.div>
              ))}
          </section>
          <section
            id="contacts"
            className="flex flex-col items-center justify-evenly w-full my-24"
          >
            <p className="text-2xl text-gray-400 capitalize">Follow me on</p>
            <div className="flex items-center justify-evenly w-full my-4 flex-wrap gap-4">
              {SocialLinks &&
                SocialLinks.map((n) => (
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    href={n.link}
                    key={n.id}
                    className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                  >
                    {n.iconSrc}
                    <p className="text-lg text-textBase">{n.name}</p>
                  </motion.a>
                ))}
            </div>
          </section>
    </main>
    </AnimatePresence>
  );
}
