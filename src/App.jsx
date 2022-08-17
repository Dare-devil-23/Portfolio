import Canvas from "./components/Canvas";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { AnimatePresence } from "framer-motion";
const App = () => {
  return (
    <AnimatePresence initial={false}>x

    <div className="flex w-screen min-h-screen justify-center items-center flex-col bg-zinc-900 relative pb-20">
      <Navbar />
      <Canvas />
      <About />
    </div>
    </AnimatePresence>
  );
};

export default App;
