import React from "react";
import sahith from "../assets/sahith.jpeg";
export default function About() {
  return (
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

        <div className="w-full h-[420px] flex flex-col justify-center">
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
        </div>
        <button class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Download
                </span>
              </button>
      </section>
    </main>
  );
}
