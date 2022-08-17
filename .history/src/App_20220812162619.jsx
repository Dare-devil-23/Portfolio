import Spline from '@splinetool/react-spline';
const App = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center flex-col bg-black relative pb-20">
      <nav className='w-full px-6 z-50 fixed insert-x-0 top-2 flex justify-center items-center'>
        <div className='w-full md:w-800'></div>
      </nav>
      <div className="relative h-screen w-screen" id="home">
        <Spline scene="https://prod.spline.design/vzTWmFK1FCEHRAGz/scene.splinecode" />
      </div>
    </div>
  );
};

export default App;
