import React from "react";
import { SocialLinks } from "./data";
import { motion } from "framer-motion";
export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-evenly w-full my-24"
    >
      <p className="text-2xl text-gray-400 capitalize my-10">Follow me on</p>
      <div className="flex items-center justify-evenly w-full my-4 flex-wrap gap-4">
        {SocialLinks &&
          SocialLinks.map((n) => {
            {
              n.id == 5 ? (
                <motion.div>
                  <Mailto
                    email="j@sonbellamy.com"
                    obfuscate={true}
                    whileTap={{ scale: 0.8 }}
                    href={n.link}
                    key={n.id}
                    className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                  >
                    Email me!
                  </Mailto>
                </motion.div>
              ) : (
                <>
                  <motion.a
                    target={"_blank"}
                    whileTap={{ scale: 0.8 }}
                    href={n.link}
                    key={n.id}
                    className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                  >
                    {n.iconSrc}
                    <p className="text-lg text-slate-200">{n.name}</p>
                  </motion.a>
                </>
              );
            }
          })}
      </div>
    </section>
  );
}
