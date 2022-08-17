import Canvas from "./components/Canvas";
import Navbar from "./components/Navbar";
import About from "./components/About";
const App = () => {
  return (
    <div className="flex w-screen justify-center items-center flex-col bg-zinc-900 relative pb-20">
      <Navbar />
      <Canvas />
      <About />
    </div>
  );
};

export default App;
