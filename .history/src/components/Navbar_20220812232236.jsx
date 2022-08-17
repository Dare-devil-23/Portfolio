import React from "react";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="w-full px-6 z-50 fixed insert-x-0 top-2 flex justify-center items-center">
      <div className="w-full md:w-[800px] bg-neutral-800 p-4 rounded-2xl flex items-center">
        <p className="text-lg text-slate-200 font-medium">Sai Sahith</p>
        <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
          <a
            href="#home"
            className="text-base text-slate-500 font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-base text-slate-500 font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-base text-slate-500 font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-base text-slate-500 font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
          >
            Contact
          </a>
          <a
            href="#"
            className="ml-auto text-base text-slate-500 font-medium hover:text-slate-100 cursor-pointer border-slate-500 px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
          >
            Download
          </a>
        </div>
        <div
          className="block md:hidden ml-auto cursor-pointer"
          onClick={() => setIsActive(!isActive)}
        >
          <IoMenu className="text-2xl text-slate-500" />
        </div>
        {isActive && (
          <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ delay: "0.1s", type: "spring" }}
          className="p-4 w-[275px] rounded-lg bg-neutral-800 fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6">
            <a
              href="#home"
              className="text-base text-slate-500 font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              onClick={() => setIsActive(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-base text-slate-500 font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              onClick={() => setIsActive(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="text-base text-slate-500 font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              onClick={() => setIsActive(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-base text-slate-500 font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              onClick={() => setIsActive(false)}
            >
              Contact
            </a>
            <a
              href="#"
              className="text-base text-slate-500 font-medium hover:text-slate-100 cursor-pointer border-slate-500 px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
              onClick={() => setIsActive(false)}
            >
              Download
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
