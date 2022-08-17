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
        <button
        class="bg-transparent hover:bg-blue-400 text-blue-500 hover:text-blue-100 border-2 border-blue-400 py-2 px-4 rounded-full focus:outline-none transition duration-200 hover:shadow-xl"
      >
        Click Me
      </button>
      </section>
    </main>
  );
}
