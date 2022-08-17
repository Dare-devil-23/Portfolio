import Spline from "@splinetool/react-spline";
const App = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center flex-col bg-black relative pb-20">
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
          </div>
        </div>
      </nav>
      <div className="relative h-screen w-screen" id="home">
        <Spline scene="https://prod.spline.design/vzTWmFK1FCEHRAGz/scene.splinecode" />
      </div>
    </div>
  );
};

export default App;
