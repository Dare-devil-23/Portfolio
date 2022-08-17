import Spline from "@splinetool/react-spline";

import Navbar from "./components/Navbar";
const App = () => {

  return (
    <div className="flex h-screen w-screen justify-center items-center flex-col bg-black relative pb-20">
      <Navbar />
      <div className="relative h-screen w-screen" id="home">
        <Spline scene="https://prod.spline.design/vzTWmFK1FCEHRAGz/scene.splinecode" />
        <div className="absolute bottom-10 w-full justify-center items-center flex">
         <div className="shadow-md p-4 flex items-center justify-center
         bg-zinc-900 rounded-3xl">
          <p className="text-zinc-300">Press and drag to orbit</p>
         </div>
          </div>
      </div>

      
    </div>
  );
};

export default App;
