import React ,{ Suspense} from "react";
import Spline from "@splinetool/react-spline";

export default function Canvas() {
  const splineURL = "https://prod.spline.design/j8y-1utnyYr-9UT5/scene.splinecode";
  return (
    <div className="relative w-screen h-screen" id="home">
      <Suspense >
      <Spline scene={splineURL} />
      </Suspense>
      <div className="absolute bottom-10 w-full justify-center items-center flex">
        <div
          className="shadow-md p-4 flex items-center justify-center
         bg-zinc-900 rounded-3xl"
        >
          <p className="text-zinc-300">Press and drag to orbit</p>
        </div>
      </div>
    </div>
  );
}
