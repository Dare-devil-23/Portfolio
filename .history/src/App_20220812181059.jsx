
import Canvas from "./components/Canvas";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center flex-col bg-black relative pb-20">
      <Navbar />
      <Canvas />

      
    </div>
  );
};

export default App;
