import React ,{ Suspense} from "react";
import Spline from "@splinetool/react-spline";

export default function Canvas() {
  const splineURL = "https://my.spline.design/roomrelaxingcopy-56ffab3f2b7e291019db5f6d5eb3a251/";
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
