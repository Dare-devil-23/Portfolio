import Spline from '@splinetool/react-spline';
const App = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center flex-col bg-black relative pb-20">
      <div className="h-screen" id="home">
        <Spline scene="https://prod.spline.design/vzTWmFK1FCEHRAGz/scene.splinecode" />
      </div>
    </div>
  );
};

export default App;
